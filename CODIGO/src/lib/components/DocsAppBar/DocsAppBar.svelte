<script lang="ts">
    import { base } from '$app/paths';
    import {browser} from '$app/environment';

    import { PUBLIC_PATH_APP } from '$env/static/public';
    import { PUBLIC_DEV_STATUS } from '$env/static/public';

    import {enhance} from '$app/forms';

    // Types
    import type {ModalSettings, DrawerSettings} from '@skeletonlabs/skeleton';
    import type {SubmitFunction} from '@sveltejs/kit';

    // Docs
    import DocsLogoFull from '$lib/components/DocsLogos/DocsLogoFull.svelte';
    import DocsIcon from '$lib/components/DocsIcon/DocsIcon.svelte';

    // Components & Utilities
    import {AppBar, LightSwitch, popup, getModalStore} from '@skeletonlabs/skeleton';
    import { modeOsPrefers, modeUserPrefers, modeCurrent } from '@skeletonlabs/skeleton';


    // Stores
    import {getDrawerStore} from '@skeletonlabs/skeleton';
    import {preferences} from '$lib/stores/stores';

    import { secureStore } from '$lib/stores/stores';

    const drawerStore = getDrawerStore();

    import Icon from '@iconify/svelte';


    // Local
    let isOsMac = false;

    let securedata;
    let views;


    const modalStore = getModalStore();

    // Set Search Keyboard Shortcut
    if (browser) {
        let os = navigator.userAgent;
        isOsMac = os.search('Mac') !== -1;
    }

    // Drawer Handler
    function drawerOpen(): void {
        const s: DrawerSettings = {id: 'doc-sidenav'};
        drawerStore.open(s);
    }

    // Search
    function triggerSearch(): void {
        console.log("::triggerSearch::");
        const modal: ModalSettings = {
            type: 'component',
            component: 'modalSearch',
            position: 'item-start'
        };
        modalStore.trigger(modal);
    }

    // Keyboard Shortcut (CTRL/⌘+K) to Focus Search
    function onWindowKeydown(e: KeyboardEvent): void {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            // Prevent default browser behavior of focusing URL bar
            e.preventDefault();
            // If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
            $modalStore.length ? modalStore.close() : triggerSearch();
        }
    }

    // Function to handle the change event of the <select>
    function handleSelectView(event) {
        //debugger; // Add this to pause execution
        const selectedView = event.target.value; // Get the selected value
        //console.log(selectedView);
        secureStore.update(currentValue => {
            return { ...currentValue, view: selectedView }; // Update the 'foo' property with the new value
        });
    }


    const themes = [
        {type: 'Gob Sat', name: 'Gob Sat', icon: '🇲🇽'},
        {type: 'skeleton', name: 'Skeleton', icon: '🩻'},
        {type: 'wintry', name: 'Wintry', icon: '🌨️'},
        {type: 'modern', name: 'Modern', icon: '🤖'},
        {type: 'rocket', name: 'Rocket', icon: '🚀'},
        {type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️'},
        {type: 'vintage', name: 'Vintage', icon: '📺'},
        {type: 'sahara', name: 'Sahara', icon: '🏜️'},
        {type: 'hamlindigo', name: 'Hamlindigo', icon: '👔'},
        {type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫'},
        {type: 'crimson', name: 'Crimson', icon: '⭕'}
        // { type: 'seasonal', name: 'Seasonal', icon: '🎆' }
        // { type: 'test', name: 'Test', icon: '🚧' },
    ];

    const setTheme: SubmitFunction = ({formData}) => {
        const theme = formData.get('theme')?.toString();

        if (theme) {
            document.body.setAttribute('data-theme', theme);
            // Update a single preference
            preferences.update(prefs => ({...prefs, theme: theme}));
        }
    };

$: securedata = $secureStore;
$: preferencesdata = $preferences;



</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown}/>

<AppBar  shadow="shadow-2xl" slotTrail="!space-x-2" background="bg-surface-800">
    <svelte:fragment slot="lead">
        <div class="flex items-center space-x-4">
            <!-- Hamburger Menu -->
            <button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
                <Icon icon="flowbite:bars-outline" class="text-xl"/>
            </button>
            <!-- Logo -->
            <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="{base + '/' + PUBLIC_PATH_APP + '/'}" title="Go to Homepage">
                <DocsLogoFull/>
            </a>
        </div>
    </svelte:fragment>

    <svelte:fragment slot="default">
				<div class="flex">
					<!-- space -->
					<div class="w-2/12"></div>
					<div class="flex justify-start items-center">
						<a href={base + '/' + PUBLIC_PATH_APP + '/'}>
							<strong
								class="text-xl uppercase bg-gradient-to-br from-white to-white bg-clip-text text-transparent box-decoration-clone drop-shadow-[0_1.2px_1.2px_rgba(155,34,66,0.4)]"
								>Sistema plcb</strong
							>
						</a>
					</div>
				</div>
	</svelte:fragment>

    <svelte:fragment slot="trail">
        <!-- Explore -->
		<div class="relative hidden lg:block">
			<!-- trigger -->
			<button class="btn hover:variant-soft-primary" use:popup={{ event: 'click', target: 'features' }}>
				<span class="text-white">Navegar</span>
				<i class="fa-solid fa-caret-down opacity-50"></i>
			</button>
			<!-- popup -->
			<div class="card p-4 w-60 shadow-xl" data-popup="features">
				<nav class="list-nav">
					<ul>

						<li>
							<a href={base + '/' + PUBLIC_PATH_APP + '/'}>
								<span class="w-6 text-center"><Icon icon="fa6-solid:house" class="text-xl "/></span>
								<span>Página de inicio</span>
							</a>
						</li>
                        {#if securedata.view === preferencesdata.views[0]}

                        {:else}
                            <li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'introduccion'}">
    								<span class="w-6 text-center"><Icon icon="fa6-solid:book" class="text-xl "/></span>
    								<span>Documentación</span>
    							</a>
    						</li>
                        {/if}

                        {#if securedata.view === preferencesdata.views[0]}


                        {:else}
    	       				<li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'calendario' + '/' +  'mes'}">
    								<span class="w-6 text-center"><Icon icon="fa6-solid:calendar-days" class="text-xl "/></span>
    								<span>Calendario</span>
    							</a>
    						</li>
                        {/if}
						<hr class="!my-4" />

                        {#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}


                        {:else}
                            <li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'consulta'}">
    								<span class="w-6 text-center"><Icon icon="streamline:checkup-medical-report-clipboard-solid" class="text-xl "/></span>
    								<span>Consulta</span>
    							</a>
    						</li>
                        {/if}

                        {#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[3]}


                        {:else}
                            <li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'expedientes'}">
    								<span class="w-6 text-center"><Icon icon="fa6-solid:folder-tree" class="text-xl "/></span>
    								<span>Expedientes</span>
    							</a>
    						</li>
                        {/if}

                        {#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2] || securedata.view === preferencesdata.views[3]}


                        {:else}
    						<li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'catalogo-plcb'}">
    								<span class="w-6 text-center"><Icon icon="fa6-solid:book-open" class="text-xl "/></span>
    								<span>Catalogos</span>
    							</a>
    						</li>
                        {/if}

                        {#if securedata.view === preferencesdata.views[0] || securedata.view === preferencesdata.views[1] || securedata.view === preferencesdata.views[2]}


                        {:else}
    						<li>
    							<a href="{base + '/' + PUBLIC_PATH_APP + '/' +  'registros'}">
    								<span class="w-6 text-center"><Icon icon="fa6-solid:rectangle-list" class="text-xl "/></span>
    								<span>Registros</span>
    							</a>
    						</li>
                        {/if}


					</ul>
				</nav>
				<!-- <div class="arrow bg-surface-100-800-token" /> -->
			</div>
		</div>


        <!-- Menu -->
        <section class="relative hidden lg:block ">
            <!-- trigger -->
            <button class="btn hover:variant-soft-primary hover:text-blue-200"
                    use:popup={{ event: 'click', target: 'menu' }}>
                <Icon icon="mdi:user-circle" class="text-xl text-white"/>
                <span><strong class="text-white">Usuario</strong></span>
            </button>
            <!-- popup -->
            <div class="card p-4 w-60 shadow-xl" data-popup="menu">
                <nav class="list-nav space-y-4">

                {#if securedata.view === preferencesdata.views[0]}

                {:else}
                    <ul>
                        <li>
                            <a href="{base + '/'+ PUBLIC_PATH_APP + '/datos-generales'}">
                                <span class="w-6 text-center"><Icon icon="material-symbols:lab-profile"
                                                                        class="text-xl"/></span>
                                <span>Perfil</span>

                            </a>
                        </li>
                    </ul>

                    <hr/>

                {/if}

                    <section class="flex justify-between items-center">
                        <h6 class="h6">Modo</h6>
                        <LightSwitch/>
                    </section>


                <section class="flex justify-between items-center ">
                    <h6 class="h6">Vista</h6>
                    <span class="badge variant-filled">
                        {#if securedata.view === preferencesdata.views[0]}
                            <p>Oculto</p>
                        {:else if securedata.view === preferencesdata.views[1]}
                            <p>Paciente</p>
                        {:else if securedata.view === preferencesdata.views[2]}
                            <p>Pro. Salud</p>
                        {:else if securedata.view === preferencesdata.views[3]}
                            <p>Auditor</p>
                        {:else if securedata.view === preferencesdata.views[4]}
                            <p>Administrador</p>
                        {:else}
                            <p>Unknown view</p>
                        {/if}
                    </span>


                </section>

                {#if PUBLIC_DEV_STATUS == "DEV"}
                    <section class="flex justify-between items-center">
                        <select class="select" size="5" on:change={handleSelectView} value="{securedata.view}">
                            <option value="{preferencesdata.views[0]}">Oculto</option>
                        	<option value="{preferencesdata.views[1]}">Paciente</option>
                        	<option value="{preferencesdata.views[2]}">Pro. Salud</option>
                        	<option value="{preferencesdata.views[3]}">Auditor</option>
                        	<option value="{preferencesdata.views[4]}">Administrador</option>

                        </select>
                    </section>
                {:else}
                    <!--
                    <span class="badge-icon variant-filled"> <Icon icon="tabler:point" class="text-xl"/> </span>
                    -->
                {/if}





                    <hr/>
                    <ul>
                        <li>
                            <a href="https://v1.skeleton.dev/" target="_blank">
                                <span>Cerrar Sesión</span>
                                <span class="w-6 text-center"><Icon icon="material-symbols:logout"
                                                                    class="text-xl"/></span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- <div class="arrow bg-surface-100-800-token" /> -->
            </div>
        </section>
        <!-- End Menu -->


    </svelte:fragment>



</AppBar>