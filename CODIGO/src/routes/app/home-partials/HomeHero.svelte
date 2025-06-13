<script lang="ts">
	import { base } from '$app/paths';
	import { PUBLIC_PATH_APP } from '$env/static/public';
	import Icon from '@iconify/svelte';
import pago from "$lib/assets/pago.png";





    import {preferences} from '$lib/stores/stores';
    import { secureStore } from '$lib/stores/stores';

	import DocsLogoHero from '$lib/components/DocsLogos/DocsLogoHero.svelte';
	import HomeHeroComponents from './HomeHeroComponents.svelte';
	import { Canvas } from '@threlte/core'
	import ScenesTitle from "$lib/components/ScenesTitle/ScenesTitle.svelte";

	let securedata;
	let preferencesdata;

	$: securedata = $secureStore;
	$: preferencesdata = $preferences;
</script>


<div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">


		<div class="animate-fade-up">
			<div class="flex items-start mb-4">
				<img src={pago} />
			</div>

			<h1 class="h1 !text-5xl md:!text-3xl max-w-[600px]">Pago de Trámites por Línea de Captura</h1>

			<label class="label mt-4">
        <span>Línea de Captura:</span>
        <input class="input" type="text" placeholder="INGRESA UNA LÍNEA DE CAPTURA"/>
      </label>
			<div class="flex justify-center items-center gap-4 mt-4">
        <button type="button" class="btn variant-filled">Guardar</button>
      </div>
		</div>


		






	</div>


</div>