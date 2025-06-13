<script lang="ts">

	import { base } from '$app/paths';

	import { PUBLIC_PATH_APP } from '$env/static/public'

	import { page } from '$app/stores';

	import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte';
	import { menuNavLinks } from '$lib/links';
	import { AppRail, AppRailAnchor, AppRailTile, getDrawerStore } from '@skeletonlabs/skeleton';

    import {preferences} from '$lib/stores/stores';
    import { secureStore } from '$lib/stores/stores';

	import Icon from '@iconify/svelte';

	// Local
	 let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;
	const drawerStore = getDrawerStore();

	function onClickAnchor(): void {
		currentRailCategory = undefined;
		drawerStore.close();
	}

	let securedata;
    let views;

	let isDocActive = false;


	// Lifecycle
	page.subscribe((page) => {
		console.log("::page.url.pathname::",page.url.pathname);

		// ex: /basePath/...
		let basePath: string = page.url.pathname.split('/')[3]; //route ex. app/documentacion

		console.log("::basePath::",basePath);
		console.log("::includes::",(['introduccion','docs-perfil'].includes(basePath)));

		if (!basePath) return;
		// Translate base path to link section
		if (['introduccion','docs-perfil','docs-calendario','docs-secciones'].includes(basePath)) currentRailCategory = '/documentacion';
		if (['datos-generales'].includes(basePath)) currentRailCategory = '/perfil';
		if (['tokens', 'base', 'calendario', 'blocks'].includes(basePath)) currentRailCategory = '/calendario';
		if (['consulta'].includes(basePath)) currentRailCategory = '/consulta';
		if (['expedientes'].includes(basePath)) currentRailCategory = '/expedientes';
		if (['catalogo-plcb'].includes(basePath)) currentRailCategory = '/catalogo-plcb';
		if (['components', 'actions'].includes(basePath)) currentRailCategory = '/registros';

		console.log("::currentRailCategory::",currentRailCategory);
	});

	// Reactive
	$: submenu = menuNavLinks[currentRailCategory ?? '/documentacion'];

	$: listboxItemActive = (href: string) => ($page.url.pathname?.includes(href) ? 'bg-primary-active-token' : '');


	$: securedata = $secureStore;
	$: preferencesdata = $preferences;


</script>


<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30  {$$props.class ?? ''}">
	<!-- App Rail -->
	<AppRail background="bg-transparent" border="border-r border-surface-500/30">
		<!-- Mobile Only -->
		<!-- prettier-ignore -->
		<AppRailAnchor href="{base + '/'}" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead">
				<Icon icon="mdi:home" class="text-2xl"/>
			</svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
		<!-- prettier-ignore -->
		<AppRailAnchor href="{base + '/'+ PUBLIC_PATH_APP + '/' + 'test'}" class="lg:hidden" on:click={() => { onClickAnchor() }}>
			<svelte:fragment slot="lead">
				<Icon icon="mdi:home" class="text-2xl"/>
			</svelte:fragment>
			<span>Blogs</span>
		</AppRailAnchor>
		<!-- --- / --- -->
		{#if securedata.view === preferencesdata.views[0]}

        {:else}
		<AppRailTile bind:group={currentRailCategory} name="documentacion" value={'/documentacion'}>
			<svelte:fragment slot="lead">
				<Icon icon="fa6-solid:book" class="text-xl justify-self-center"/>
			</svelte:fragment>
			<span>Docs.</span>
		</AppRailTile>
		{/if}
		<hr class="opacity-30" />

		{#if securedata.view === preferencesdata.views[0]}


        {:else}
		<AppRailTile bind:group={currentRailCategory} name="perfil" value={'/perfil'}>
			<svelte:fragment slot="lead"><Icon icon="material-symbols:lab-profile" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Perfil</span>
		</AppRailTile>
		{/if}

		{#if securedata.view === preferencesdata.views[0]}


        {:else}
		<AppRailTile bind:group={currentRailCategory} name="calendario" value={'/calendario'}>
			<svelte:fragment slot="lead"><Icon icon="fa6-solid:calendar-days" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Calendario</span>
		</AppRailTile>
		{/if}

		{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}

        {:else}
		<AppRailTile bind:group={currentRailCategory} name="expedientes" value={'/consulta'}>
			<svelte:fragment slot="lead"><Icon icon="streamline:checkup-medical-report-clipboard-solid" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Consulta</span>
		</AppRailTile>
		{/if}

		{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}

        {:else}
		<AppRailTile bind:group={currentRailCategory} name="expedientes" value={'/expedientes'}>
			<svelte:fragment slot="lead"><Icon icon="fa6-solid:folder-tree" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Expedientes</span>
		</AppRailTile>
		{/if}

		{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2] || securedata.view === preferencesdata.views[3]}

        {:else}
		<AppRailTile bind:group={currentRailCategory} name="catalogo-plcb" value={'/catalogo-plcb'}>
			<svelte:fragment slot="lead"><Icon icon="grommet-icons:catalog" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Catalogos</span>
		</AppRailTile>
		{/if}

		{#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2]}

        {:else}
		<AppRailTile bind:group={currentRailCategory} name="svelte" value={'/registros'}>
			<svelte:fragment slot="lead"><Icon icon="fa6-solid:rectangle-list" class="text-xl justify-self-center"/></svelte:fragment>
			<span>Registros</span>
		</AppRailTile>
		{/if}

	</AppRail>


	<!-- Nav Links -->
	<section class="border p-4 pb-20 space-y-4 overflow-y-auto">

		{#each submenu as segment, i}
			{#if true}
				<p class="font-bold pl-4 text-2xl">{segment.title}</p>
				<!-- Nav List -->
				<nav class="list-nav">
					<ul>
						{#each segment.list as { href, label, badge }}
							<li>
								<a {href} class={listboxItemActive(href)} data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
									<span class="flex-auto">{@html label}</span>
									{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < submenu.length}<hr class="!my-6 opacity-50" />{/if}
			{:else}

			{/if}

		{/each}
	</section>

</div>
