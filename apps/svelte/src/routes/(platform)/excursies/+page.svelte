<script>
    import ExcursionCard from "./ExcursionCard.svelte";
    import {page} from '$app/stores';
    import {goto} from '$app/navigation';
    import {derived} from 'svelte/store';

    let {data} = $props();
    const excursions = data.excursions.docs;
    const categories = data.categories.docs;

    // Get selected categories from URL
    let selectedCategories = $state([]);

    $effect(() => {
        const urlParams = new URLSearchParams($page.url.search);
        const fromUrl = urlParams.getAll('categories');
        selectedCategories = fromUrl;
    })

    function toggleCategory(catName) {
        const isSelected = selectedCategories.includes(catName);
        const newSelected = isSelected
            ? selectedCategories.filter(c => c !== catName)
            : [...selectedCategories, catName];

        const params = new URLSearchParams();
        newSelected.forEach(c => params.append('categories', c));

        goto(`?${params.toString()}`, {replaceState: true});
    }

    let processedExcursions = $derived(
        excursions
            .flatMap(excursion =>
                excursion.dates.map(date => ({...excursion, date}))
            )
            .filter(e =>
                selectedCategories.length === 0 ||
                (Array.isArray(e.categories) && e.categories.some(c => selectedCategories.includes(c.name)))
            )
    )
</script>

<main class="min-h-screen pt-20">
    <div class="container min-h-screen flex gap-x-5">
        <div class="bg-secondary w-1/3 p-5 rounded-[var(--radius-radius)] shadow-[var(--shadow-shadow)]">
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

        <div class="flex gap-10 w-2/3">
            <div class="space-y-4">
                {#each processedExcursions as e}
                    <ExcursionCard {e}/>
                {/each}
            </div>
        </div>
    </div>
</main>