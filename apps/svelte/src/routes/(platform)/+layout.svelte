<script>
    let { children } = $props();
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
</div>