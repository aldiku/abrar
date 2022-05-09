<script>
    import RouterLink from '@spaceavocado/svelte-router/component/link';

    export let title;
    export let imageUrl;
    export let link;

</script>
<RouterLink cls="card rounded-md card-category" to="{link}">
    <div class="card-body text-center">
        <img src="/assets/{imageUrl}" alt="{title}" class="my-2">
        <h5 class="card-title">{title}</h5>
        <slot></slot>
    </div>
</RouterLink>