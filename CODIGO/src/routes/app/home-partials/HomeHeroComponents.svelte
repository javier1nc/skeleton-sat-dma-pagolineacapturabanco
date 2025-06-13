<script lang="ts">
	import { getImageLink } from '$lib/images';
	import { Avatar, ProgressRadial, RadioGroup, RadioItem, SlideToggle, LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import WidgetsDaysYearCounter from "$lib/components/WidgetsDaysYearCounter/WidgetsDaysYearCounter.svelte";
	import WidgetsWeeksYearCounter from "$lib/components/WidgetsWeeksYearCounter/WidgetsWeeksYearCounter.svelte";
	import WidgetsDateCounter from "$lib/components/WidgetsDateCounter/WidgetsDateCounter.svelte";
	import WidgetsClock from "$lib/components/WidgetsClock/WidgetsClock.svelte";
	import WidgetsMiniCalendar from "$lib/components/WidgetsMiniCalendar/WidgetsMiniCalendar.svelte";



	// Local
	let value = 0;
	let demoSlideToggle = true;
</script>

<!-- variant-ringed-error -->
<div class="aspect-video relative animate-fade-up animate-once">










</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	.anim-float-toggle {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 5s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
