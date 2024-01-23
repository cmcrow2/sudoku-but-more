<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<div
	class="grid w-full h-full bg-watermelon overflow-hidden"
	transition:slide={{ delay: 0, duration: 400, easing: quintOut, axis: 'y' }}
>
	Hello!
</div>
