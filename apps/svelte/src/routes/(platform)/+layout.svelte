<script>
    let {children, data} = $props();

    const texts = data.texts;
    const year = new Date().getFullYear()
</script>
<div>
    <div class="h-[50px] w-full absolute top-0 left-0 z-999 bg-primary">
        <div class="container w-full h-full flex justify-between">
            <div>logo</div>
            <div class="flex items-center gap-x-5">
                <a href="/excursies" class="nav-link">Excursies</a>
                <a href="/regels" class="nav-link">Regels</a>
                <a href="/over-mij" class="nav-link">Over mij</a>
            </div>
        </div>
    </div>
    {@render children()}
    <div class="h-auto w-full bg-primary text-[var(--color-text-light)] text-sm relative">
        <div class="md:container mx-auto flex gap-y-5 justify-evenly p-5 pb-12 md:pb-16 flex-col md:flex-row">
            <div class="w-full md:w-fit flex flex-col">
                <h3 class="text-xl md:text-2xl font-bold mb-1">Links</h3>
                <a href="/">Homepagina</a>
                <a href="/excursies">Excursies</a>
                <a href="/regels">Regels</a>
                <a href="/over-mij">Over Mij</a>
            </div>
            <div class="w-full md:w-fit flex flex-col">
                <h3 class="text-xl md:text-2xl font-bold mb-1">Contact & Gegevens</h3>
                <p>E-mail: {texts.footer.email}</p>
                <p>KVK: {texts.footer.coc}</p>
                <p>BTW nr: {texts.footer.vat} </p>
            </div>
            <div class="w-full md:w-fit flex flex-col">
                <h3 class="text-xl md:text-2xl font-bold mb-1">Social Media</h3>
                <a href="https://www.instagram.com/oogenoorvoornatuur/" target="_blank"
                   class="flex items-center gap-x-2">
                    <img src="/assets/icons/insta.svg" alt="instagram icon" class="h-6">
                    <p>@oogenoorvoornatuur</p>
                </a>
                <a href="https://www.facebook.com/oogenoorvoornatuur/" target="_blank"
                   class="flex items-center gap-x-2">
                    <img src="/assets/icons/facebook.svg" alt="facebook icon" class="h-6">
                    <p>@oogenoorvoornatuur</p>
                </a>
            </div>
        </div>
        <div class="bottom-0 h-10 px-5 w-full absolute">
            <p class="mx-auto w-fit">
                © {year} Oogenoorvoornatuur | Ontwikkeld door Jelger Dijkgraaf
            </p>
        </div>
    </div>
</div>