<script>
    import RouterView from "@spaceavocado/svelte-router/component/view.svelte";
    let serverUrl = process.env.MIX_serverUrl
</script>
<RouterView/>
{serverUrl}