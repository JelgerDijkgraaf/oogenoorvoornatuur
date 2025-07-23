<script>
    import ExcursionCard from "./ExcursionCard.svelte";

    let {data} = $props();
    const excursions = data.excursions.docs;

    let processedExcursions = $derived(excursions.flatMap(excursion =>
            excursion.dates.map(date => ({
                    ...excursion,
                    date, // include only the single date for this entry
                })
            )
        )
    )

</script>

<main class="min-h-screen pt-20">
    <div class="container min-h-screen flex gap-x-5">
        <div class="bg-secondary w-1/3 rounded-[var(--radius-radius)] shadow-[var(--shadow-shadow)]"></div>
        <div class="flex gap-10 w-2/3">
            <div class="space-y-4">
                {#each processedExcursions as e}
                   <ExcursionCard {e} />
                {/each}
            </div>
        </div>
    </div>
</main>