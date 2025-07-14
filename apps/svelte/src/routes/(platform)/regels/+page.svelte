<script>
    let {data} = $props()
    const texts = data.texts.rules;
</script>

<main class="flex min-h-screen max-w-screen pt-20 flex-col px-4 md:px-8">
    <h1 class="title text-3xl md:text-5xl mb-1">{texts.title}</h1>
    <p class="mb-5 text-base md:text-lg">{texts.body}</p>
    <ul class="flex flex-col gap-y-1 text-base md:text-lg mb-5">
        {#each texts.rules as rule, i}
            <li class="flex gap-x-2">
                <b>{i + 1}.</b>
                <p>{rule.rule}</p>
            </li>
        {/each}
    </ul>
</main>