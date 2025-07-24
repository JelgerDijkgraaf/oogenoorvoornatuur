<script>
    import ExcursionCard from "./ExcursionCard.svelte";
    import {page} from '$app/stores';
    import {goto} from '$app/navigation';

    let {data} = $props();
    const excursions = data.excursions.docs;
    const categories = data.categories.docs;

    let selectedCategories = $state([]);
    let selectedDate = $state(new Date().toISOString());


    $effect(() => {
        const urlParams = new URLSearchParams($page.url.search);
        selectedCategories = urlParams.getAll('categories');
        const urlDate = urlParams.get('date');
        if (urlDate) selectedDate = urlDate;
    });


    function toggleCategory(catName) {
        const isSelected = selectedCategories.includes(catName);
        const newSelected = isSelected
            ? selectedCategories.filter(c => c !== catName)
            : [...selectedCategories, catName];

        const params = new URLSearchParams();
        newSelected.forEach(c => params.append('categories', c));
        if (selectedDate) params.set('date', selectedDate);

        goto(`?${params.toString()}`, {replaceState: true});
    }

    // Flattened and filtered excursions
    let processedExcursions = $derived(
        excursions
            .flatMap(excursion =>
                excursion.dates.map(date => ({...excursion, date}))
            )
            .filter(e =>
                (selectedCategories.length === 0 ||
                    (Array.isArray(e.categories) &&
                        e.categories.some(c => selectedCategories.includes(c.name))))
                &&
                (!selectedDate || new Date(e.date.startDate) >= new Date(selectedDate))
            )
    );


    // Infinite loading
    let visibleCount = $state(4);
    let paginatedExcursions = $derived(processedExcursions.slice(0, visibleCount));

    let sentinel;

    $effect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && visibleCount < processedExcursions.length) {
                visibleCount += 8;
            }
        });

        if (sentinel) observer.observe(sentinel);

        return () => observer.disconnect();
    });


</script>

<main class="min-h-screen pt-20 pb-10">
    <div class="container min-h-screen flex gap-x-5">
        <!-- Sidebar -->
        <div class="bg-secondary w-1/3 h-fit p-5 rounded-[var(--radius-radius)] shadow-[var(--shadow-shadow)] flex flex-col gap-y-4">
            <div>
                <h4 class="title text-3xl mb-1">Categorie</h4>
                <div class="flex flex-col text-[var(--color-text)] text-base space-y-2">
                    {#each categories as c}
                        <label for={c.name} class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="checkbox"
                                    id={c.name}
                                    name={c.name}
                                    checked={selectedCategories.includes(c.name)}
                                    onchange={() => toggleCategory(c.name)}
                                    class="accent-[var(--color-primary)] h-4 w-4 rounded border border-[var(--color-border)] shadow-sm"
                            />
                            <span>{c.name}</span>
                        </label>
                    {/each}
                </div>
            </div>
            <div>
                <h4 class="title text-3xl mb-1">Vanaf datum</h4>
                <input
                        id="date"
                        type="date"
                        bind:value={selectedDate}
                        onchange={() => {
        const params = new URLSearchParams();
        selectedCategories.forEach(c => params.append('categories', c));
        if (selectedDate) params.set('date', selectedDate);
        goto(`?${params.toString()}`, { replaceState: true });
    }}
                        class="bg-background border border-[var(--color-border)] text-[var(--color-text)] px-3 py-1.5 rounded shadow-sm w-full"
                />

            </div>

        </div>

        <!-- Excursion list -->
        <div class="flex flex-col w-2/3">
            <div class="space-y-4">
                {#each paginatedExcursions as e}
                    <ExcursionCard {e}/>
                {/each}
                <div bind:this={sentinel} class="h-10"></div>
            </div>
        </div>
    </div>
</main>
