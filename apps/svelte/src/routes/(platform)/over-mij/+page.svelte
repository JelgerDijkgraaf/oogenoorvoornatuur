<script>
let { data } = $props()
const texts = data.texts.about
</script>


<main class="flex md:h-screen max-w-screen mt-20 md:mt-0 gap-10 items-center flex-col md:flex-row justify-between px-8">
    <div class="flex flex-col md:max-w-[50%]">
        <h1 class="text-5xl title mb-6">{texts.title}</h1>
        <p class="text-lg text-[var(--color-text)] leading-relaxed whitespace-pre-line">
            {texts.body}
        </p>
    </div>

    <div class="relative">
        <img src="/assets/images/Jarin.jpg" alt="Example Image"
             class="h-[90vh] object-cover mr-[30px]">
    </div>

</main>