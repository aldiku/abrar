<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
     let univ =[
            {
                id: 1,
                name: "Universitas Brawijaya",
                logo: 'brawijaya.png',
                slug: 'brawijaya',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime iste in possimus commodi vel consequatur suscipit velit vitae quos debitis fuga aperiam dolor minima, similique veritatis accusantium, voluptatum esse?"
            },
            {
                id: 1,
                name: "Universitas Indonesia",
                logo: 'ui.png',
                slug: 'brawijaya',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime iste in possimus commodi vel consequatur suscipit velit vitae quos debitis fuga aperiam dolor minima, similique veritatis accusantium, voluptatum esse?"
            },
            {
                id: 1,
                name: "Universitas Surakarta",
                logo: 'uns.png',
                slug: 'brawijaya',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime iste in possimus commodi vel consequatur suscipit velit vitae quos debitis fuga aperiam dolor minima, similique veritatis accusantium, voluptatum esse?"
            },
            {
                id: 1,
                name: "Universitas Jakarta",
                logo: 'brawijaya.png',
                slug: 'brawijaya',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime iste in possimus commodi vel consequatur suscipit velit vitae quos debitis fuga aperiam dolor minima, similique veritatis accusantium, voluptatum esse?"
            },
            {
                id: 1,
                name: "Universitas Jakarta",
                logo: 'brawijaya.png',
                slug: 'brawijaya',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maxime iste in possimus commodi vel consequatur suscipit velit vitae quos debitis fuga aperiam dolor minima, similique veritatis accusantium, voluptatum esse?"
            }
        ];
</script>
<div class="container card bg-teal my-4 rounded-md">
    <div class="d-flex justify-content-between pt-3 px-3">
        <h4 class="fw-bold text-white">Universitas Pilihan</h4>
        <a href="/universitas" class="text-white text-underline">Lihat semua</a>
    </div>
    <div class="container">
        <div class="overflow-x x-scroll pt-5 pb-1">
            {#each univ as u}
            <div class="card card-univ rounded-md">
                <div class="text-center">
                    <img src="/assets/univ/{u.logo}" alt="{u.name}" class="logo-univ img-thumbnail rounded rounded-circle">
                </div>
                <div class="card-body">
                    <div class="univ-title">{u.name}</div>
                    <div class="univ-description text-truncate-3">{u.description}</div>
                    <RouterLink to="/univ/{u.slug}" cls="btn btn-teal w-100">Lihat Profil</RouterLink>
                </div>
            </div>
            {/each}
        </div>
    </div>
    
</div>