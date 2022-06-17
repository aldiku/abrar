<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';
    import { onMount } from 'svelte'
	let univ = [];
    onMount(async () => {
        const response = await fetch(API_URL+'/promo/univ');
        const data = await response.json();
        univ = data.data;
	})
     
</script>
<div class="container" style="max-height: 400px">
    <div class="text-center">
        <h4 class="fw-bold">Universitas Pilihan</h4>
    </div>
    <div class="slide-univ rounded-md position-relative d-flex align-items-end justify-content-center" style="height:196px; top: 141px">
        <RouterLink to="/univ" cls="btn btn-white border-bottom mb-2">Explore Lainnya</RouterLink>
    </div>
    <div class="text-center overflow-x x-scroll pt-5 pb-1  position-relative" style="top: -200px">
        {#each univ as u}
        <div class="card card-univ rounded-md">
            <div class="text-center">
                <img src="/assets/univ/{u.logo}" alt="{u.university_name}" class="logo-univ img-thumbnail rounded rounded-circle">
            </div>
            <div class="card-body">
                <div class="univ-title text-truncate-1">{u.university_name}</div>
                <div class="univ-description text-truncate-3">{u.description}</div>
                <RouterLink to="/univ/{u.slug_university}" cls="btn btn-teal w-100">Lihat Profil</RouterLink>
            </div>
        </div>
        {/each}
        
    </div>
</div>