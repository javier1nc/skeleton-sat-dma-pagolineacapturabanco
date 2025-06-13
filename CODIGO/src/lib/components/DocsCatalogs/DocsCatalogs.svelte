<script lang="ts">
import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
import Icon from '@iconify/svelte';
// Components
import { Paginator, Table, CodeBlock, type PaginationSettings } from '@skeletonlabs/skeleton';
import { TreeView, TreeViewItem, RecursiveTreeView, type TreeViewNode } from '@skeletonlabs/skeleton';


let currentTile: number = 0;

// Local
const sourceHeaders: string[] = ['id_enf_cardiovascular', 'nombre', 'descripcion', 'fecha_registro', 'fecha_inicio','estado','fecha_actualizacion'];
const sourceBody = [
    [
        5,
        "Hipertensión arterial",
        "Cardiovasculares",
        "2024-07-02",
        "2019-12-01",
        true,
        "2024-07-02"
    ],
    [
        6,"Cardiopatía isquémica (infartos)","Cardiovasculares","2024-07-02","2024-07-02",true,"2024-07-02"
    ],
    [
        7,"Hipertensión arterial","Cardiovasculares","2024-07-02","2019-12-01",true,"2024-07-02"
    ],
    [
        8,"Cardiopatía isquémica (infartos)","Cardiovasculares","2024-07-02","2024-07-02",true,"2024-07-02"
    ],
];

// Reactive
let paginationSettings = {
    page: 0,
    limit: 3,
    size: sourceBody.length,
    amounts: [ 5, 10, sourceBody.length]
} satisfies PaginationSettings;


let Enfermedades = 'Clean Code';


let files = ['Enfermedades', '...', '...'];
let items = ['tc_enfermedad_cardiovascular', 'tc_enfermedad_cronica', 'tc_enfermedad_endocrino', 'tc_enfermedad_infecciosa', 'tc_enfermedad_neoplastico', 'tc_enfermedad_neurologica'];


	// Event Handlers

	// Demo options
	let state = {
		firstLast: false,
		previousNext: true
	};

	function onPageChange(e: CustomEvent): void {
		console.log('Paginator - event:page', e.detail);
	}
	function onAmountChange(e: CustomEvent): void {
		console.log('Paginator - event:amount', e.detail);
	}

// Reactive
$: sourceBodySliced = sourceBody.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
);
</script>

<div class="flex ">



    <div class="">
    	<TreeView>

            <ul>
                {#each files as file}
            		<TreeViewItem >
            			<svelte:fragment slot="lead"><Icon icon="fa6-solid:layer-group" class="text-xl "/></svelte:fragment>
                        {file}
            			<svelte:fragment slot="children">
                            {#each items as item}
                                <li>
                                    <TreeViewItem>
                                		<svelte:fragment slot="lead"><Icon icon="carbon:data-view-alt" class="text-xl "/></svelte:fragment>
                                        {item}
                                	</TreeViewItem>
                                </li>
                            {/each}
            			</svelte:fragment>
            		</TreeViewItem>
                {/each}
            </ul>

    	</TreeView>
    </div>


    <div class="w-full space-y-4 text-token">

        <Table source={{ head: sourceHeaders, body: sourceBodySliced }} />
    					<Paginator
    						bind:settings={paginationSettings}
    						on:page={onPageChange}
    						on:amount={onAmountChange}
    						showFirstLastButtons={state.firstLast}
    						showPreviousNextButtons={state.previousNext}
    					/>

    </div>

</div>

