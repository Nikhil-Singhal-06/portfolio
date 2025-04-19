<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { updateActiveSection } from '$lib/stores/scroll';
	import { getMousePosition } from '$lib/utils';
	import Header from '$lib/components/header.svelte';
	import About from '$lib/components/about.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Projects from '$lib/components/projects.svelte';
	import Footer from '$lib/components/footer.svelte';

	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = getMousePosition(e);
	}

	function handleScroll() {
		updateActiveSection(['about', 'experience', 'projects']);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div
	class="leading-relax antialiased transition-colors duration-300 selection:bg-teal-300 selection:text-teal-900"
	on:mousemove={handleMouseMove}
	role="presentation"
	aria-hidden="true"
>
	<div class="group/spotlight relative">
		<div
			class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute {$theme ===
			'dark'
				? 'opacity-100'
				: 'opacity-30'}"
			style="background: radial-gradient(600px at {mousePosition.x}px {mousePosition.y}px, {$theme ===
			'dark'
				? 'rgba(100, 116, 139, 0.2)'
				: 'rgba(56, 189, 248, 0.15)'}, transparent 80%);"
		/>
		<div
			class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
		>
			<a
				href="#content"
				class="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
			>
				Skip to Content
			</a>

			<div class="lg:flex lg:justify-between lg:gap-4">
				<Header />
				<main id="content" class="pt-24 lg:w-1/2 lg:py-24">
					<About />
					<Experience />
					<Projects />
					<Footer />
				</main>
			</div>
		</div>
	</div>
</div>
