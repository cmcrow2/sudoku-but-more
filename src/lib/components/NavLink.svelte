<script>
	import { page } from '$app/stores';
	/**
	 * @type {any}
	 */
	export let href;
	/**
	 * @type {any}
	 */
	export let text;
</script>

<a
	{href}
	class="font-normal text-[0.9em] hover:text-watermelon hover:bg-carbon-200 hover:underline decoration-watermelon hover:underline-offset-8 pt-2 pb-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-5 transition hidden md:flex {$page.url.pathname.includes(
		href
	)
		? 'underline underline-offset-8 decoration-carbon-200 decoration-2 hover:decoration-watermelon'
		: ''}"
>
	{text}
</a>