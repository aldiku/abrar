<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import {
        router
    } from '@spaceavocado/svelte-router';

    const daftar = () => {
        $router.push('/login');
    }
    const koneksikan = () => {
        $router.push('/koneksi');
    }

    let cats = [{
            slug: 'teknik-sipil',
            name: 'Teknik Sipil'
        },
        {
            slug: 'teknik-informatika',
            name: 'Teknik Informatikan'
        },
        {
            slug: 'teknik-mesin',
            name: 'Teknik Mesin'
        }
    ];

</script>
<nav class="navbar navbar-expand-md header shadow-sm sticky-top">
    <div class="container">
        <RouterLink cls="navbar-brand" to="/" ><img src="/assets/Logo.png" alt="logo"></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navhead"
            aria-controls="navhead" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-teal" id="navhead">
            <div class="d-flex w-100 row m-0">
                <div class="col-12 col-sm w-100 mb-2 mb-sm-0">
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="search-icon"><img src="/assets/search-normal.png"
                                alt=""></span>
                        <input type="text" class="form-search" placeholder="Cari materi disini"></div>
                </div>
                <div class="col-12 col-sm-auto">
                    <div class="w-100 d-flex justify-content-between">
                        <button class="btn btn-border text-white" on:click={daftar}>Daftar</button>
                        <button class="btn btn-white" on:click={koneksikan}>Koneksikan</button>
                    </div>
                </div>
            </div>
            <ul class="navbar-nav d-block d-sm-none mx-3">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href='/' id="navbarDropdownMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Kategori
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        {#each cats as { slug, name }}
                            <li>
                                <RouterLink  cls="dropdown-item" to="/category/{slug}">{name}</RouterLink>
                            </li>
                        {/each}
                    </ul>
                  </li>
            </ul>
            
        </div>
    </div>
</nav>
<div class="d-none d-md-block nav shadow-sm">
    <div class="container d-flex justify-content-between py-1">
        <div class="menu">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Kategori
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    {#each cats as { slug, name }}
                        <li>
                            <RouterLink  cls="dropdown-item" to="/category/{slug}">{name}</RouterLink>
                        </li>
                    {/each}
                </ul>
            </li>
        </div>
        <div class="py-2">
            <RouterLink cls="ml-3" to='/'>Home</RouterLink>
            <RouterLink cls="ml-3" to='/jelajah'>Jelajah</RouterLink>
        </div>
    </div>
</div>
