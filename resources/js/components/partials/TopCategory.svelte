<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import Card from './Card.svelte';

    let topcat = [
        {
            icon: 'finance.png',
            title: "Kelas Sales & Finance Terbaik",
            link: 'category/finance',
            list: [
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
            ]
        },
        {
            icon: 'sales.png',
            title: "Kelas Sales & Marketing Terbaik",
            link: 'category/sales',
            list: [
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
            ]
        },
        {
            icon: 'tecnology.png',
            title: "Kelas Teknologi & Software Terbaik",
            link: 'category/teknologi',
            list: [
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
                {
                    thumb: '/assets/materi/article-1.png',
                    title: 'Belajar Budidaya dan Pemasan Ikan untuk Pengusaha Ikan Air Tawar',
                    slug: 'belajar-budidaya-ikan',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
                    participant: '20 Orang',
                },
            ]
        }
    ];

</script>
<div class="container">
    {#each topcat as tc}
    <div class="card bg-soften-teal shadow rounded-md mb-3">
        <div class="row">
            <div class="col-12 col-md-4 d-flex align-items-center">
                <div class="p-4">
                    <div class="icon">
                        <div class="icontop  rounded rounded-circle card">
                            <img src="/assets/{tc.icon}" alt="icon {tc.title}" class="iconimage">
                        </div>
                    </div>
                    <div class="h1 fw-bold">
                        {tc.title}
                    </div>
                    <RouterLink to="{tc.link}">Lihat Semua <img src="/assets/right-teal.png" alt=">" class="px-2"></RouterLink>
                </div>
                
            </div>
            <div class="col-12 col-md-8 mb-3">
                <div class="overflow-x x-scroll pt-2 pt-md-4 pb-1">
                    {#each tc.list as tl}
                    <Card imageUrl='{tl.thumb}'
                        title="{tl.title}"
                        link="{tl.slug}"
                        description="{tl.description}"
                        participant='{tl.participant}'
                        cls="card-materi">
                    </Card>
                    {/each}
                </div>

            </div>
        </div>
    </div>
    {/each}
</div>