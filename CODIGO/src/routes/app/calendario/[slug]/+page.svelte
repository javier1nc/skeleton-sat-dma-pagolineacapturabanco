<script>
    import { base } from '$app/paths';
    import {browser} from '$app/environment';

    import Clandario from '$lib/components/DocsCalendar/DocsCalendar.svelte';
    import { PUBLIC_PATH_APP } from '$env/static/public';

    import Icon from '@iconify/svelte';
    export let data;
</script>

<div class="flex ml-4 mt-1.5">
    <ol class="breadcrumb">
    	<li class="crumb"><a class="anchor" href={base + '/' + PUBLIC_PATH_APP + '/'}><Icon icon="fa6-solid:house" class="text-xl" /></a></li>
    	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
    	<li>Perfil</li>
    </ol>
</div>

<div class="mx-8 mt-8 animate-fade-up">
    <Clandario view={data.slug} />
</div>