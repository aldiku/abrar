<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import ModalShare from '../partials/ModalShare.svelte';
    import Frontend from '../partials/Frontend.svelte'
    import Spinner from '../partials/Spinner.svelte'
    export let slug;
    let promise = get(slug);
    async function get(slug){
        const res = await fetch('/api/materi/detail/'+slug);
		const data = await res.json();
        return data;
    }
    let docUniv = 0, videoUniv = 0;

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
<Frontend>
    {#await promise}
        <Spinner/>
    {:then data} 
    <div class="page-title">
        <div class="container py-4">
            <div class="row">
                <div class="col-auto mx-auto order-md-last">
                    <img src="/assets/materi-thumb.png" alt="" class="materi-thumb float-end img-fluid">
                </div>
                <div class="col-md-6 d-flex align-items-center">
                    <div class="head">
                        <h1 class="h3 fw-bold text-white">{toTitleCase(data.data.materi_name)}</h1>
                        <button class="mt-3 btn btn-white rounded-md">Ikut Materi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="card p-3 rounded-md my-3">
            <div class="h5 fw-bold mb-3">{data.data.materi_name}</div>
            <div class="content op-4">{data.data.body}</div>
        </div>
        <div class="card p-3 rounded-md my-3">
            <div class="h5 fw-bold mb-3">Tentang {data.data.universitas.university_name}</div>
            <div class="row">
    
                <div class="col-auto">
                    <img src="/assets/univ/{data.data.universitas.logo}" alt="" class="icon-univ">
                </div>
                <div class="col">
                    <div class="univ-desc op-4 text-truncate-3">{data.data.universitas.description}</div>
                    <RouterLink to="/univ/{data.data.universitas.slug_university}" cls="btn btn-teal rounded-md mt-2">Selengkapnya</RouterLink>
                </div>
            </div>
        </div>
        <div class="card p-3 rounded-md my-3">
            <div class="h5 fw-bold mb-3">Konten Materi</div>
            <div class="d-flex">
                <div class="text-center col col-md-1">
                    <img src="/assets/video.png" alt="" class="my-3">
                    <div class="count">{videoUniv}</div>
                </div>
                <div class="text-center col col-md-2">
                    <img src="/assets/document.png" alt="" class="my-3">
                    <div class="count">{docUniv}</div>
                </div>
                <div class="text-center col col-md-2">
                    <img src="/assets/verify.png" alt="" class="my-3">
                    <div class="count">Sertifikat</div>
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="share">
                <button class="btn" data-bs-toggle="modal" data-bs-target="#modalShare"><img src="/assets/share.png"
                        alt="">Bagikan</button>
            </div>
            <div class="ikut">
                <button class="btn"><img src="/assets/coin.png" alt="" class=""><span class="mx-2">{data.data.cost} Coin</span> <span
                        class="btn btn-teal">Ikuti</span></button>
            </div>
        </div>
    </div>
    <ModalShare id="modalShare" title="{toTitleCase(data.data.materi_name)}" linkShare="{data.data.seo_url}" tag="{data.data.seo_url}"></ModalShare>
    {/await}

</Frontend>

