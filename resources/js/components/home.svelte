<script>
    import Slider from './partials/Slider.svelte';
    import UnivPilihan from './partials/UnivPilihan.svelte';
    import Card from './partials/Card.svelte';
    import CardCategory from './partials/CardCategory.svelte';
    import TopCategory from './partials/TopCategory.svelte';
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import Frontend from './partials/Frontend.svelte'
    import {APP_URL} from './store/global'
    import Spinner from './partials/Spinner.svelte'

    let popular = get_popular()
    async function get_popular(){
        const res = await fetch('/api/materi?limit=4&type=popular');
		const data = await res.json();
        return data;
    }
    let promise = get_materi()
    async function get_materi(){
        const res = await fetch('/api/materi');
		const data = await res.json();
        return data;
    }

</script>
<svelte:head>
    <title>Abrar Edu</title>
</svelte:head>
<Frontend>
    <Slider />
    <div class="container py-4">
        <UnivPilihan />
        <div class="container">
            <h4 class="fw-bold"><img src="./assets/fire.png" alt="populer" class="mr-2"> Kursus Terpopuler</h4>
            <div class="row my-3">
                {#await popular}
                    <Spinner/>
                {:then data} 
                    {#each data.data.rows as r}
                    <div class="col-md-3 mb-3">
                        <Card imageUrl='/assets/materi/{r.thumbnail}'
                            title="{r.materi_name}"
                            link="{r.seo_url}"
                            description="{r.description}"
                            participant='{r.participant} Orang'>
                        </Card>
                    </div>
                    {/each}
                {/await}
            </div>
        </div>
        <div class="container">
            <h4 class="fw-bold">Kategori Pilihan</h4>
            <div class="row my-3 d-flex justify-content-center">
                <div class="col-6 col-md mb-3">
                    <CardCategory title="Teknik electro" imageUrl="teknik-electro.png" link="category/teknik-electro">
                    </CardCategory>
                </div>
                <div class="col-6 col-md mb-3">
                    <CardCategory title="Teknik Mesin" imageUrl="teknik-mesin.png" link="category/teknik-mesin">
                    </CardCategory>
                </div>
                <div class="col-6 col-md mb-3">
                    <CardCategory title="Teknik Informatika" imageUrl="teknik-informatika.png" link="category/teknik-informatika">
                    </CardCategory>
                </div>
                <div class="col-6 col-md mb-3">
                    <CardCategory title="Sistem Informasi" imageUrl="sistem-informasi.png" link="category/sistem-informasi">
                    </CardCategory>
                </div>
                <div class="col-12 col-md mb-3">
                    <RouterLink cls="card bg-teal d-flex align-items-center h-100 text-white py-3" to="/category"><span
                            class="m-auto">14+ Kategory Lainnya</span> </RouterLink>
                </div>
            </div>
        </div>
        <TopCategory/>
        <div class="container">
            <div class="h3 mb-3">Semua Kelas</div>
            <div class="row my-3">
                {#await promise}
                <Spinner/>
                {:then data} 
                    {#each data.data.rows as r}
                    <div class="col-md-3 mb-3">
                        <Card imageUrl='/assets/materi/{r.thumbnail}'
                            title="{r.materi_name}"
                            link="{r.seo_url}"
                            description="{r.description}"
                            participant='{r.participant} Orang'>
                        </Card>
                    </div>
                    {/each}
                {/await}
            </div>
        </div>
    </div>
</Frontend>
