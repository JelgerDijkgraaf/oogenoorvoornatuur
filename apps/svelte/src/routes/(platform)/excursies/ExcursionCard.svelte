<script>
    import {PUBLIC_CMS_URL} from "$env/static/public";

    let { e } = $props()

    function formatDutchDateTime(startDateStr, endDateStr) {
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);
        const dateStr = start.toLocaleDateString('nl-NL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        });

        const timeStr = `${start.toLocaleTimeString('nl-NL', {
            hour: '2-digit',
            minute: '2-digit'
        })} - ${end.toLocaleTimeString('nl-NL', {hour: '2-digit', minute: '2-digit'})}`;

        return `${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)} | ${timeStr}`;
    }
</script>

<a
        href={`/excursies/${e.id}`}
        class="flex rounded-[var(--radius-radius)] shadow-[var(--shadow-shadow)] overflow-hidden bg-[var(--color-background)] hover:bg-[var(--color-secondary-2)] transition-colors duration-200"
>
    <img
            src={PUBLIC_CMS_URL + e.image?.url}
            alt={e.image?.alt || e.title}
            class="w-1/3 object-cover aspect-square"
    />

    <div class="p-4 flex flex-col justify-between w-2/3">
        <div>
            <h2 class="text-lg font-semibold text-[var(--color-primary)] mb-1">
                {e.title}
            </h2>

            <p class="text-sm text-[var(--color-muted-text-light)] mb-2">
                {formatDutchDateTime(e.date.startDate, e.date.endDate) }
            </p>

            <p class="text-sm text-[var(--color-text)] mb-1 flex gap-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     fill="var(--color-primary)" class="size-4">
                    <path fill-rule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clip-rule="evenodd"/>
                </svg>
                {e.location.name}
            </p>

            <p class="text-sm text-[var(--color-text)] mb-1 flex gap-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     fill="var(--color-primary)" class="size-4">
                    <path fill-rule="evenodd"
                          d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                          clip-rule="evenodd"/>
                </svg>
                {e.category.name}
            </p>
        </div>

        <div class="flex justify-between items-end mt-4">
            <p class="text-[var(--color-primary-2)] font-semibold">
                €{e.price.toFixed(2)}
            </p>
            <p class="text-sm text-[var(--color-muted-text-light)] flex gap-x-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     fill="var(--color-primary)" class="size-4">
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"/>
                </svg>

                {e.minGuests}–{e.maxGuests}
            </p>
        </div>
    </div>
</a>