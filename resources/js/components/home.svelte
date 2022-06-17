<script>
    import Slider from './partials/Slider.svelte';
    import UnivPilihan from './partials/UnivPilihan.svelte';
    import Card from './partials/Card.svelte';
    import CardCategory from './partials/CardCategory.svelte';
    import TopCategory from './partials/TopCategory.svelte';
    import RouterLink from '@spaceavocado/svelte-router/component/link';

</script>
<svelte:head>
    <title>Abrar Edu</title>
</svelte:head>
<Slider />
<div class="container py-4">
    <UnivPilihan />
    <div class="container">
        <h4 class="fw-bold"><img src="./assets/fire.png" alt="populer" class="mr-2"> Kursus Terpopuler</h4>
        <div class="row my-3">
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='12 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='672 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='33 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='35 Orang'>
                </Card>
            </div>
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
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='12 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='672 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='33 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='35 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='12 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='672 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='33 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='35 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='12 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='672 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='33 Orang'>
                </Card>
            </div>
            <div class="col-md-3 mb-3">
                <Card imageUrl='/assets/materi/article-1.png'
                    title="Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar"
                    link="belajar-budidaya-ikan"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du..."
                    participant='35 Orang'>
                </Card>
            </div>
        </div>
    </div>
</div>
