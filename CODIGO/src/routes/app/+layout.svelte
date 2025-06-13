<script lang="ts">
    import '../../app.postcss';

    // Highlight JS
    import hljs from 'highlight.js/lib/core';
    import 'highlight.js/styles/github-dark.css';
    import { storeHighlightJs } from '@skeletonlabs/skeleton';
    import xml from 'highlight.js/lib/languages/xml'; // for HTML
    import css from 'highlight.js/lib/languages/css';
    import javascript from 'highlight.js/lib/languages/javascript';
    import typescript from 'highlight.js/lib/languages/typescript';

    import { base } from '$app/paths';


    hljs.registerLanguage('xml', xml); // for HTML
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    storeHighlightJs.set(hljs);

    // Floating UI for Popups
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

    // Types
	import type { ModalComponent } from '@skeletonlabs/skeleton';

	// Components & Utilities
	import { Modal, Toast, initializeStores, prefersReducedMotionStore } from '@skeletonlabs/skeleton';
	initializeStores();

    import { onMount } from 'svelte';

    import { autoModeWatcher } from '@skeletonlabs/skeleton';
    import { setInitialClassState } from '@skeletonlabs/skeleton';
    import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';

    // Docs Components
    import DocsAppBar from '$lib/components/DocsAppBar/DocsAppBar.svelte';
    import DocsSidebar from '$lib/components/DocsSidebar/DocsSidebar.svelte';
    import DocsDrawer from '$lib/components/DocsDrawer/DocsDrawer.svelte';
    import DocsFooter from '$lib/components/DocsFooter/DocsFooter.svelte';
    // Modal Components
	import DocsSearch from '$lib/modals/DocsSearch/DocsSearch.svelte';
    import ModalExampleList from '$lib/modals/examples/ModalExampleList.svelte';
	import ModalExampleEmbed from '$lib/modals/examples/ModalExampleEmbed.svelte';
	import ModalExampleImage from '$lib/modals/examples/ModalExampleImage.svelte';
	import ModalExampleFullscreen from '$lib/modals/examples/ModalExampleFullscreen.svelte';





    // Registered list of Components for Modals
	const modalComponentRegistry: Record<string, ModalComponent> = {
        modalSearch: { ref: DocsSearch },
		exampleList: { ref: ModalExampleList },
		exampleEmbed: { ref: ModalExampleEmbed },
		exampleImage: { ref: ModalExampleImage },
		fullScreen: { ref: ModalExampleFullscreen }
	};


    function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === base + '/' + 'app' + '/') return true;

        // If any health route
		return pageUrlPath.includes(base + '/' + 'health' + '/');


	}

    // Reactive
	// Disable left sidebar `on homepage
    // matchPathWhitelist($page.url.pathname)
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-[360px] animate-fade-right'; //'w-0' : 'bg-surface-50-900-token lg:w-auto'
    $: console.log("::matchPathWhitelist($page.url.pathname))::",$page.url.pathname) ;
    onMount(() => {

        //
    })

</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<!-- <svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head> -->

<!-- Overlays -->
<Modal components={modalComponentRegistry} />
<Toast />
<DocsDrawer />

<!-- App Layout -->
<div class="page ">
    <!-- Header -->
    <div class="header header-footer ">
        <DocsAppBar />
    </div>

    <!-- Main -->
    <div class="flex">
        <!-- Sidebar (Left) -->
        <div class="{slotSidebarLeft} "> <!-- "hidden overflow-hidden" -->
            <DocsSidebar class="hidden lg:grid overflow-hidden" />
        </div>

        <div class="w-full flex flex-col ">
            <!-- Page Content -->
            <div class="content ">
                <slot />
            </div>
            <!-- Page Footer -->
            <div class="header-footer ">
                <DocsFooter />
            </div>
        </div>

    </div>
</div>

<style>
    .page {
        @apply h-screen flex flex-col;
    }

    .header-footer {
        @apply sticky;
    }

    .header {
        @apply flex flex-col top-0 z-40;
    }

    .footer {
        @apply bottom-0;
    }

    .content {
        @apply grow;
    }
</style>

