<script lang="ts">
    import { base } from '$app/paths';
    import {browser} from '$app/environment';

    import { PUBLIC_PATH_APP } from '$env/static/public';

    import Icon from '@iconify/svelte';


</script>

<div class="flex ml-4 mt-1.5">
    <ol class="breadcrumb">
    	<li class="crumb"><a class="anchor" href={base + '/' + PUBLIC_PATH_APP + '/'}><Icon icon="fa6-solid:house" class="text-xl" /></a></li>
    	<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
    	<li>Perfil</li>
    </ol>
</div>

::Aqui formulario de la Direccion::