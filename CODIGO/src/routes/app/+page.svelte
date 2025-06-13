<script lang="ts">
	import { base } from '$app/paths';
    import {browser} from '$app/environment';

    import { PUBLIC_PATH_APP } from '$env/static/public';

	// Components

	// Page Partials
	import HomeHero from './home-partials/HomeHero.svelte';
	import Icon from '@iconify/svelte';
	

</script>
<div class="flex ml-4 mt-1.5">
    <ol class="breadcrumb">
    	<li class="crumb"><a class="anchor" href={base + '/' + PUBLIC_PATH_APP + '/'}><Icon icon="fa6-solid:house" class="text-xl" /></a></li>
		<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
    </ol>
</div>
<div class="z-0 container mx-auto flex flex-col justify-center items-center mb-72">

	<!-- hero -->
	<header id="hero" class="bg-transparent hero-gradient ">
		<div class="section-container p-4 ">
            <HomeHero />
        </div>
	</header>

</div>