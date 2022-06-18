<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link'
    let menu = [
        {
            slug:"/dashboard",
            icon: "beranda.png",
            name: "Dashboard"
        },
        {
            slug:"/dashboard/materi",
            icon: "edit.png",
            name: "Materi"
        },
        {
            slug:"/dashboard/obrolan",
            icon: "messages.png",
            name: "Obrolan"
        },
        {
            slug:"/jelajah",
            icon: "jelajah.png",
            name: "Jelajah"
        }
    ];
    let materiCoin = '2400';
</script>
<nav class="navbar navbar-expand-md header shadow-sm sticky-top">
    <div class="container">
        <RouterLink cls="navbar-brand" to="/" ><img src="/assets/Logo.png" alt="logo"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navhead"
            aria-controls="navhead" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-teal" id="navhead">
            <div class="w-100 d-flex justify-content-end flex-column flex-md-row">
                {#each menu as m}
                <RouterLink cls="p-3 text-white" to="{m.slug}"><img src="/assets/{m.icon}" alt=""> {m.name}</RouterLink>
                {/each}
                <RouterLink cls="px-3 text-white align-items-center d-flex" to="dashboard/coin">
                    <div class="s-40px d-flex align-items-center">
                        <img src="/assets/coin-white.png" alt="" style="height:28px">
                    </div>
                    <div class="d-flex flex-column px-2  lh-normal">
                        <span class="fw-bold">{materiCoin} Coin</span>
                        <span class="op-06 fs-09">Total Coin</span>
                    </div>
                </RouterLink>
                <img src="/assets/divider-v.png" alt="" class="h-30px my-auto d-none d-md-block">
                <div class="pl-3 position-relative d-flex">
                    <div class="text-white align-items-center d-flex dropdown-toggle" id="userLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false"  style="cursor:pointer">
                        <img src="/assets/univ/brawijaya.png" alt="" class="img-thumbnail rounded rounded-circle s-40px">
                        <div class="d-flex flex-column px-2 lh-normal">
                            <span class="fw-bold">Universitas Brawijaya</span>
                            <span class="op-06 fs-09">Admin</span>
                        </div>
                    </div>
                    <ul class="dropdown-menu" aria-labelledby="userLink">
                        <li>
                            <RouterLink  cls="dropdown-item" to="/">Kembali Ke Beranda</RouterLink>
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
    </div>
</nav>
<slot></slot>