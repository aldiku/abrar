<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import ModalShare from '../partials/ModalShare.svelte';
    export let slug;
    let body =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab praesentium similique atque ut ullam impedit nisi molestias voluptatibus quia asperiores repellat odit ipsa, consequuntur quidem sint quasi. Nisi, incidunt?";
    let univThumb = 'brawijaya.png';
    let univ = 'Universitas Brawijaya';
    let univLink = 'brawijaya';
    let univDesc =
        'Universitas Brawijaya berkedudukan di Kota Malang, Jawa Timur, didirikan pada tanggal 5 Januari 1963 dengan Surat Keputusan Menteri Perguruan Tinggi dan Ilmu Pengetahuan (PTIP) Nomor 1 Tahun 1963, dan kemudian dikukuhkan dengan Keputusan Presiden Republik Indonesia Nomor 196 Tahun 1963 tertanggal 23 September 1963.';
    let videoUniv = '1 Video';
    let docUniv = '2 Dokument';
    let materiCoin = '2400 Coin';
    let linkShare = 'https://abrar.com/materi/' + slug;

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
                    <button class="mt-3 btn btn-white rounded-md">Ikut Materi</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="card p-3 rounded-md my-3">
        <div class="h5 fw-bold mb-3">{title}</div>
        <div class="content op-4">{body}</div>
    </div>
    <div class="card p-3 rounded-md my-3">
        <div class="h5 fw-bold mb-3">Tentang {univ}</div>
        <div class="row">

            <div class="col-auto">
                <img src="/assets/univ/{univThumb}" alt="" class="icon-univ">
            </div>
            <div class="col">
                <div class="univ-desc op-4 text-truncate-3">{univDesc}</div>
                <RouterLink to="/univ/{univLink}" cls="btn btn-teal rounded-md mt-2">Selengkapnya</RouterLink>
            </div>
        </div>
    </div>
    <div class="card p-3 rounded-md my-3">
        <div class="h5 fw-bold mb-3">Konten Materi</div>
        <div class="d-flex">
            <div class="text-center col col-md-1">
                <img src="/assets/video-vertical.png" alt="" class="my-3">
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
            <button class="btn"><img src="/assets/coin.png" alt="" class=""><span class="mx-2">{materiCoin}</span> <span
                    class="btn btn-teal">Ikuti</span></button>
        </div>
    </div>
</div>
<ModalShare id="modalShare" title="{title}" linkShare="{linkShare}" tag="{slug}"></ModalShare>

