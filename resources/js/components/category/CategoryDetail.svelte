<script>
    import Card from '../partials/Card.svelte';
    import ModalShare from '../partials/ModalShare.svelte';
    export let slug;
    let linkShare = 'https://abrar.com/category/' + slug;

    function toTitleCase(str) {
        return str.replace(/\p{L}+('\p{L}+)?/gu, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.slice(1)
        })
    }

    var title = toTitleCase(slug.replace(/[\W_]/g, " "));

</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>
<div class="page-title">

    <div class="container py-4">
        <div class="row">
            <div class="col-auto mx-auto order-md-last">
                <img src="/assets/materi-thumb.png" alt="" class="materi-thumb float-end img-fluid">
            </div>
            <div class="col-md-6 d-flex align-items-center">
                <div class="head">
                    <h1 class="h3 fw-bold text-white">{title}</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="text-center col-md-6 mx-auto my-3 my-md-5">
            <h1 class="h3 fw-bold">Jelajah Materi {title}</h1>
            <input type="text" name="materi" class="form-control rounded-md shadow form-control-lg" placeholder="Cari materi ...">
    </div>
    <div class="h3 my-3">Semua Kelas</div>
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
<div class="card">
    <div class="container d-flex justify-content-between align-items-center">
        <div class="share">
            <button class="btn" data-bs-toggle="modal" data-bs-target="#modalShare"><img src="/assets/share.png"
                    alt="">Bagikan</button>
        </div>
    </div>
</div>
<ModalShare id="modalShare" title="{title}" linkShare="{linkShare}" tag="{slug}"></ModalShare>
