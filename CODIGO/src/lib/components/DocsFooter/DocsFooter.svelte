<script lang="ts">
    import { base } from '$app/paths';
    import { PUBLIC_PATH_APP } from '$env/static/public'
	import { PUBLIC_APP_VERSION } from '$env/static/public';

	import { PUBLIC_DEV_STATUS } from '$env/static/public';

    import {preferences} from '$lib/stores/stores';
    import { secureStore } from '$lib/stores/stores';


    // Logo
    import DocsLogoIcon from '$lib/components/DocsLogos/DocsLogoIcon.svelte';
	import DocsLogoGobMxIcon from '$lib/components/DocsLogos/DocsLogoGobMxIcon.svelte';

    import pleca from "$lib/assets/pleca.svg";
	import trama from "$lib/assets/trama.jpg";

	// Base Classes
	const cBase = 'bg-surface-50 dark:bg-surface-700 border-t border-surface-500/10 text-xs md:text-base';
	const cRowOne = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
	const cRowTwo = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0';

    // Social Icons
	const socialLinks = [
		{ title: 'X (Twitter)', href: 'https://x.com/SATMX', icon: 'bi:twitter-x' },
		{ title: 'Facebook', href: 'https://www.facebook.com/satmexico/', icon: 'bi:facebook' },
		{ title: 'YouTube', href: 'https://www.youtube.com/user/satmx', icon: 'bi:youtube' },
		{ title: 'Instagram', href: 'https://www.instagram.com/satmx/', icon: 'bi:instagram' },
	];

	let securedata;
	let preferencesdata;

	$: securedata = $secureStore;
	$: preferencesdata = $preferences;

</script>



<nav class="page-footer {cBase} bg-surface-800 mt-32 text-white">
	<div class="w-full max-w-7xl mx-auto p-4 py-16 md:py-24 space-y-10">
		<!-- Row 1 -->
		<section class={cRowOne}>
			<div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">
				<DocsLogoGobMxIcon />
				<div class="mt-6">
					<DocsLogoIcon />
					<p class="!text-sm opacity-80 ">plcb.</p>
					<!-- Current Version -->

					<a href="{base + '/' + 'health'}" target="">
						<span class="badge variant-soft text-white">v{PUBLIC_APP_VERSION}</span>
					</a>
				</div>
			</div>
			
			<div class="hidden md:grid grid-cols-3 gap-8">
				<div class="space-y-6">
					<h6 class="h6 dark:text-white">Navegar</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/'}">Página de inicio</a></li>
						{#if securedata.view === preferencesdata.views[0]}

						{:else}
							<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/' +  'documentacion'}">Documentación</a></li>
						{/if}

						{#if securedata.view === preferencesdata.views[0]}

						{:else}
							<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/' +  'calendario'}">Calendario</a></li>
						{/if}

						{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}

						{:else}
							<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/' +  'expedientes'}">Expedientes</a></li>
						{/if}

						{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2] || securedata.view === preferencesdata.views[3]}

						{:else}
						<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/' +  'catalogo-plcb'}">Catalogos</a></li>
						{/if}

						{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2]}

						{:else}
							<li><a class="anchor" href="{base + '/' + PUBLIC_PATH_APP + '/' +  'registros'}">Registros</a></li>
						{/if}


					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6 dark:text-white">Sistema</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="{base + '/' + 'health'}">Health</a></li>

					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6 dark:text-white">Usuario</h6>
					<ul class="space-y-3">
						{#if securedata.view === preferencesdata.views[0]}


						{:else}
							<li>
								<a class="anchor" href="{base + '/'+ PUBLIC_PATH_APP + '/' +  'perfil'}">Perfil</a>
							</li>

						{/if}


					</ul>
				</div>
			</div>
		</section>

		<hr class="opacity-20" />
		<!-- Row 2 -->
		<section class={cRowTwo}>
			<p>
				<a class="anchor" href="https://www.gob.mx/privacidadsimplificado" target="_blank" rel="noreferrer">
					Aviso de Privacidad Simplificado
				</a>
				<span class="opacity-10 mx-2">|</span>
				<a class="anchor" href="https://www.gob.mx/terminos" target="_blank" rel="noreferrer">Términos y condiciones</a>
			</p>
			<!--
			<div class="flex gap-6">
				{#each socialLinks as sl}
					<a class="opacity-75 hover:opacity-100" href={sl.href} target="_blank" rel="noreferrer" title={sl.title}>
						<Icon icon="{sl.icon}"/>
					</a>
				{/each}
			</div>

		-->

		</section>
	</div>
</nav>

<img src = {trama} alt="Trama"/>


<style>
.anchor {
	@apply text-orange-600 hover:text-yellow-800 visited:text-gray-600;
}
</style>