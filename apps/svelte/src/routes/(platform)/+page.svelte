<script>
    import Button from "$lib/components/button.svelte"

    let {data} = $props()
    const texts = data.texts
</script>
<main class="flex flex-col gap-y-20 pb-10">
    <section
            class="flex items-center justify-between min-h-screen bg-linear-to-b from-[var(--color-secondary)] to-[var(--color-background)]">
        <div class="w-auto p-16 min-h-full">
            <h1 class="text-5xl title mb-6"> {texts.hero.title}</h1>
            <p class="text-lg text-[var(--color-text] mb-6">
                {texts.hero.subtitle}
            </p>
            <Button text="{texts.hero.button}"/>
        </div>

        <div class="w-1/2 relative min-h-screen overflow-hidden">
            <img src="/assets/images/Roodborst2.jpg" alt="Vogel"
                 class="w-full h-screen object-cover object-right fade-mask"/>
        </div>
    </section>

    <section class="flex items-center justify-evenly px-10">
        <div class="w-3/10 flex flex-col gap-y-5">
            <h2 class="title text-4xl">{texts.intro.title}</h2>
            <p class="text-[var(--color-text)]">{texts.intro.body}</p>
            <Button text={texts.intro.button}/>
        </div>
        <div class="w-6/10 flex items-center justify-center gap-x-5">
            <div   class="rounded-[50px] border-[var(--color-border)] border-8 h-79 w-52 shadow-[var(--shadow-shadow)] overflow-hidden">
                <img title="Baardman door Jelger Dijkgraaf" src="/assets/images/Baardman.jpg" alt="Baardman door Jelger Dijkgraaf" class="object-cover h-full">
            </div>
            <div class="rounded-[50px] border-[var(--color-border)] border-8 h-112 w-75 shadow-[var(--shadow-shadow)] overflow-hidden">
                <img title="Roodborst door Jelger Dijkgraaf" src="/assets/images/Roodborst.jpg" alt="Roodborst door Jelger Dijkgraaf" class="object-cover object-[60%] h-full">
            </div>
            <div class="rounded-[50px] border-[var(--color-border)] border-8 h-79 w-52 shadow-[var(--shadow-shadow)] overflow-hidden">
                <img title="Rietgors door Jelger Dijkgraaf" src="/assets/images/Rietgors.jpg" alt="Rietgors door Jelger Dijkgraaf" class="object-cover object-[23%] h-full">
            </div>
        </div>
    </section>

</main>
