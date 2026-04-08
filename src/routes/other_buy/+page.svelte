<script lang="ts">
    import { page } from '$app/state';

    const platform: string = $derived(page.url.searchParams.get('at') ?? '');
</script>

<h1>This is a G&T project.</h1>
<p>Did you actually expect a {platform} page?</p>