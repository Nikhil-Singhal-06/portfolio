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
	import Blog from '$lib/components/blog.svelte';
	import { base } from '$app/paths';

	let mousePosition = { x: 0, y: 0 };

	let latestPost: Post;

	function handleMouseMove(e: MouseEvent) {
		mousePosition = getMousePosition(e);
	}

	function handleScroll() {
		updateActiveSection(['about', 'experience', 'projects', 'blog']);
	}

	onMount(() => {
		const fetchLatestPost = async () => {
			try {
				const res = await fetch(`${base}/api/posts`);
				const posts = await res.json();
				if (posts && posts.length > 0) {
					posts.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
					latestPost = posts[0];
					console.log(latestPost);
				}
			} catch (err) {
				console.error('Failed to fetch latest blog post:', err);
			}
		};

		fetchLatestPost();

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
			class="pointer-events-none fixed inset-0 z-30 transition duration-300
		{$theme === 'dark' ? 'opacity-100' : 'opacity-30'}"
			style="background: radial-gradient(600px at {mousePosition.x}px {mousePosition.y}px,
		{$theme === 'dark' ? 'rgba(136, 146, 176, 0.15)' : 'rgba(56, 189, 248, 0.15)'}, transparent 80%);"
		/>
		<div
			class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
		>
			<div class="lg:flex lg:justify-between lg:gap-4">
				<Header />
				<main id="content" class="pt-24 lg:w-1/2 lg:py-24">
					<About />
					<Experience />
					<Projects />
					<Blog {latestPost} />
					<Footer />
				</main>
			</div>
		</div>
	</div>
</div>
