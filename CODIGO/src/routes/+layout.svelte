<script>
	console.log('::plcb::');
	import { onMount } from 'svelte';
	import { setModeCurrent } from '@skeletonlabs/skeleton';



    

	onMount(() => {
		setModeCurrent(true); // true for light mode, false for dark mode
	});

</script>

<slot />
