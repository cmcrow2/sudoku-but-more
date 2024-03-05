<script>
	import { quintOut } from 'svelte/easing'
	import { draw, fly } from 'svelte/transition'
	import { onMount } from 'svelte'

	let isLoaded = false

	onMount(() => {
		isLoaded = true
	})

	let src = 'src/static/images/about.png'

	/**
	 * @type {any}
	 */
	let y = 0

	/**
	 * @type {any[]}
	 */
	let newY = []
	$: oldY = newY[1]

	const updateY = () => {
		newY.push(y)
		if (newY.length > 5) {
			newY.shift()
		}
		newY = newY
	}
</script>

<svelte:window on:scroll={updateY} bind:scrollY={y} />

<div>
	<div class="h-[calc(100vh-5rem)] flex flex-col">
		{#if y < 100}
			<div in:fly={{ y: -300, duration: 500 }} out:fly={{ y: -300, duration: 500 }}>
				<div class="w-full bg-watermelon">
					<h1
						class="flex font-hepta text-[2rem] text-paper content-center justify-center underline underline-offset-4 decoration-paper decoration-2 w-fit h-fit m-auto pt-20 pb-20"
					>
						About
					</h1>
				</div>
				<div class="flex flex-row">
					<img
						{src}
						alt="A person playing Sudoku"
						class="lg:flex w-[50%] h-[calc(100vh-19rem)] object-cover overflow-hidden hidden"
					/>
					<div class="flex md:w-fit flex-col w-[65%] m-auto my-[8rem]">
						<svg
							viewBox="0 0 5 5"
							xmlns="http://www.w3.org/2000/svg"
							class="h-[20vh] flex justify-center content-center align-middle items-end"
						>
							{#if isLoaded}
								<path
									transition:draw={{ duration: 3250, delay: 200, easing: quintOut }}
									d="M 2.5 4 L 1 1 L 1.5 1 L 2.5 4 L 3.5 1 L 4 1 L 2.5 4"
									fill="none"
									stroke="black"
									stroke-width="0.07500px"
									stroke-linejoin="round"
								/>
							{/if}
						</svg>
						<p
							class="flex justify-center align-top text-center text-2xl md:text-[2rem] w-fit m-auto my-10 font-hepta"
						>
							Welcome, fellow Sudoku lovers!
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-[85%] m-auto md:w-[45%] min-h-[calc(100vh-22rem)]">
		<h1
			class="flex justify-center content-center text-md mb-4 bg-sky-300 w-fit m-auto pl-2 pr-2 pt-1 pb-1 bg-opacity-25 rounded-sm"
		>
			What is Variance?
		</h1>
		<hr class="border-1 border-carbon-200" />
		<p class="flex justify-center content-center text-lg mt-4">
			Variance is a web application designed to provide Sudoku lovers access to as many puzzles as
			they can get their hands on. Anyone, from beginner to advanced, can use our Puzzle Archive to
			find new puzzles to solve, or use our Puzzle Editor to create puzzles of their own!
		</p>
		<h1
			class="flex justify-center content-center text-md mb-4 mt-14 bg-sky-300 w-fit m-auto pl-2 pr-2 pt-1 pb-1 bg-opacity-25 rounded-sm"
		>
			Our Goal
		</h1>
		<hr class="border-1 border-carbon-200" />
		<p class="flex justify-center content-center text-lg mt-4">
			We want make all aspects of playing and creating Sudoku Puzzles as accessible as possible. To
			do so, we want the majority of our Puzzle Archive to be created by you! Whether you have
			created zero Sudoku puzzles or a thousand, we encourage you to use our Editor and send your
			puzzles to your friends to try!
		</p>
		<h1
			class="flex justify-center content-center text-md mb-4 mt-14 bg-sky-300 w-fit m-auto pl-2 pr-2 pt-1 pb-1 bg-opacity-25 rounded-sm"
		>
			What Can You Do?
		</h1>
		<hr class="border-1 border-carbon-200" />
		<p class="flex justify-center content-center text-lg mt-4 pb-10">
			Create an account with us to solve any of the puzzles we've collected for you, or create your
			own puzzle with a custom ruleset of your choosing! Add your friends and share the puzzles you
			love with them, and compare your solve times to see who is objectively smarter!
		</p>
	</div>
</div>
