<script>
    import Backend from '../partials/BackendUniv.svelte'
    import FullCalendar from 'svelte-fullcalendar'
    import { onMount } from 'svelte';
    
    let options = { dateClick: (event) => alert('date click! ' + event.dateStr),
		events: [
			{ title: '1 event', date: '2022-06-19' },
			{ title: '2 event', date: '2022-06-22' },
		],
        headerToolbar: 
            {
            start: 'prev', 
            center: 'title',
            end: 'next' 
        },
        height: 500,
        contentHeight: 500,
		initialView: 'dayGridMonth',
		plugins: [] };
    onMount(async () => {
        options = {
            ...options,
            plugins: [(await import('@fullcalendar/daygrid')).default], // for server-side rendering
        };
    });
    let stat =[
        {
            icon: "people-c.png",
            name: "Jumlah Mahasiswa",
            count: 1200000
        },
        {
            icon: "upload-c.png",
            name: "Jumlah Upload",
            count: 460
        },
        {
            icon: "view-c.png",
            name: "Jumlah Dikunjungi",
            count: 4600
        },
        {
            icon: "love-c.png",
            name: "Mahasiswa Berminat",
            count: 1200
        }
    ];
    let timeline = '2';
    let list = [
        {
            title: "Operasi Matematika",
            created_at: "Selasa, 05 Juni 2022 11:04 AM",
            participant: "20 Partisipan",
            description: "Sistem bilangan adalah cara untuk mewaikili besaran dari suatu item fisik. Sistem bilangan yang banyak dipergunakan oleh manusia adalah sistem bilangan desimal, di mana manusia mengenal bilangan angka dari 0, 1, 2 hingga 9 (10 digit).",
            likes: "25",
            files: [
                {
                    type: "video",
                    title: "operasi-Aritmatika.mp4",
                    desc: "23 mb",
                    token: "kajsdhkjasd8"
                },
                {
                    type: "video",
                    title: "operasi-perkalian.mp4",
                    desc: "20 mb",
                    token: "kajsdhkjasd8"
                }
            ]
        },
        {
            title: "Pengantar Teknologi Informasi",
            created_at: "Selasa, 05 Juni 2022 11:04 AM",
            participant: "200 Partisipan",
            description: "Sistem bilangan adalah cara untuk mewaikili besaran dari suatu item fisik. Sistem bilangan yang banyak dipergunakan oleh manusia adalah sistem bilangan desimal, di mana manusia mengenal bilangan angka dari 0, 1, 2 hingga 9 (10 digit).",
            likes: "50",
            files: [
                {
                    type: "video",
                    title: "fullpengantar-Teknologi-Informasi.mp4",
                    desc: "23 mb",
                    token: "kajsdhkjasd8"
                }
            ]
        }
    ];

    let suggestion = [
        {
            title: "Pendidikan Agama Islam",
            thumb: "noimg.png",
            teacher: "Rizky Hafizan, S.Ag.,M.Si.",
            slug: "87ikgjhf"
        },
        {
            title: "Matematika 1",
            thumb: "noimg.png",
            teacher: "Dian Savitri, S.Si., M.Si.",
            slug: "87ikgjhf"
        },
        {
            title: "Sistem Digital",
            thumb: "noimg.png",
            teacher: "Aditya Prapanca, S.T., M.Kom.",
            slug: "87ikgjhf"
        },
        {
            title: "Struktur Data",
            thumb: "noimg.png",
            teacher: "Anita Qoiriah, S.Kom., M.Kom.",
            slug: "87ikgjhf"
        }
    ];

</script>
<Backend>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-9 mb-3">
                <div class="row mb-3">
                    {#each stat as s }
                    <div class="col-md-3 mb-3">
                        <div class="card rounded-md p-3">
                            <img src="/assets/{s.icon}" alt="" class="s-40px">
                            <h6 class="my-2 text-muted">{s.name}</h6>
                            <h5 class="fw-bold mb-0">{s.count}</h5>
                        </div>
                    </div>
                    {/each}
                </div>
                <div class="card rounded-md p-3">
                    <div class="d-flex">
                        <h5 class="fw-bold">Timeline </h5>
                        <span class="card rounded-circle bg-teal mx-2 text-center text-white" style="width: 26px; height: 26px">{timeline}</span>
                    </div>
                    <div class="mb-3">
                        <div class="input-group flex-nowrap">
                            <input type="text" class="form-search px-5" placeholder="Cari materi disini" style="background: #F3F4F8"></div>
                            <span class="position-absolute mx-2" style="transform: translateY(-130%) !important;"><img src="/assets/search-normal.png"
                                    alt=""></span>
                    </div>
                    {#each list as l}
                    <div class="card p-3 rounded-md mb-3">
                        <div class="d-flex mb-2">
                            <img src="/assets/book.png" alt="" class="s-40px mr-2">
                            <div class="">
                                <div class="fw-bold">{l.title}</div>
                                <div class="text-muted fs-08">{l.created_at} <img src="/assets/people.png" alt="">{l.participant}</div>
                            </div>
                        </div>
                        <p class="text-muted fs-09">
                           {@html l.description} 
                        </p>
                        <div class="row px-2">
                            {#each l.files as f}
                            <a class="col-12 col-md-auto card rounded-md p-2 mr-2 mb-2" href="/download/{f.token}">
                                <div class="d-flex">
                                    <img src="/assets/{f.type}.png" alt="" class="s-40px mr-2">
                                    <div class="">
                                        <div class="fw-bold">{f.title}</div>
                                        <div class="text-muted fs-08">{f.desc}</div>
                                    </div>
                                </div>
                            </a>
                            {/each}
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
            <div class="col-md-3">
                <div class="card p-3 rounded-md mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="fw-bold">Calendar</div>
                        <button class="btn btn-teal btn-sm">+ Tambah Jadwal</button>
                    </div> 
                    <FullCalendar {options} />
                </div>
                <div class="card p-3 rounded-md mb-3">
                    <div class="fw-bold">Kelas Akademik</div>
                    {#each suggestion as s}
                    <a class="border-bottom p-2 d-flex align-items-center" href="/materi/{s.slug}">
                        <img src="/assets/{s.thumb}" alt="" class="s-40px">
                        <div class="px-2">
                            <div class="fw-bold">{s.title}</div>
                            <div class="text-muted fs-08">{s.title}</div>
                        </div>
                    </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</Backend>