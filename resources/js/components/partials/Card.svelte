<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';

    export let title;
    export let imageUrl;
    export let participant;
    export let description;
    export let link;
    export let cls;

</script>
<div class="card rounded-md {cls}">
    <img src={imageUrl} alt="{title}"  style="height:180px; object-fit: fill;width: 100%;"/>
    <div class="card-body">
        <div class="d-flex justify-content-between mb-3">
            <div class="sertifikat badge bg-soft-teal color-teal d-flex align-items-center">
                <img src="./assets/verify.png" alt="verify" class="icon-verify"> <span class="px-1 fs-9">Bersertifikat</span> 
            </div>
            <div class="participant d-flex align-items-center">
                <img src="./assets/people.png" alt="people"> <span class="px-1 fs-9">{participant}</span> 
            </div>
        </div>
        <h6 class="fw-bold text-truncate-2">{title}</h6>
        <p class="text-truncate-2 op-4">{description}</p>
        <slot></slot>
        <RouterLink to="/materi/{link}" cls="btn btn-teal w-100">Ikut Materi</RouterLink>
    </div>
</div>