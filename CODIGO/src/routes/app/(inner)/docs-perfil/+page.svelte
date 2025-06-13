

<script lang="ts">
    import { base } from '$app/paths';
    import {browser} from '$app/environment';

    import { PUBLIC_PATH_APP } from '$env/static/public';

    import Icon from '@iconify/svelte';

    import Perfil from '$lib/documentation/perfil.md';
</script>

<div class="flex ml-4 mt-1.5">
    <ol class="breadcrumb">
    	<li class="crumb"><a class="anchor" href={base + '/' + PUBLIC_PATH_APP + '/'}><Icon icon="fa6-solid:house" class="text-xl" /></a></li>
    	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
    	<li>Documentación</li>
    </ol>
</div>

<div class="ml-20 mt-8 animate-fade-up">
    <div class="prose dark:bg-red-100">
        <Perfil/>
    </div>
</div>


