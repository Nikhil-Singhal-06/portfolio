<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import BlogCard from '$lib/components/blogCard.svelte';
	import { base } from '$app/paths';
	import { ArrowLeft } from 'lucide-svelte';

	export let data;

	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}

	console.log(data);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="{$theme === 'dark' ? 'bg-slate-900' : 'bg-white'} leading-relaxed {$theme === 'dark'
		? 'text-slate-400'
		: 'text-slate-600'} min-h-screen antialiased transition-colors duration-300 selection:bg-teal-300 selection:text-teal-900"
	on:mousemove={handleMouseMove}
>
	<div class="group/spotlight relative">
		<div
			class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute {$theme ===
			'dark'
				? 'opacity-100'
				: 'opacity-30'}"
			style="background: radial-gradient(600px at {mousePosition.x}px {mousePosition.y}px, {$theme ===
			'dark'
				? 'rgba(29, 78, 216, 0.15)'
				: 'rgba(56, 189, 248, 0.15)'}, transparent 80%);"
		/>

		<div class="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
			<div class="lg:py-24">
				<a
					href={`${base}/#projects`}
					class="group mb-10 inline-flex items-center text-sm font-medium {$theme === 'dark'
						? 'text-slate-400 hover:text-teal-300'
						: 'text-slate-600 hover:text-teal-500'} transition-colors"
				>
					<ArrowLeft size={16} class="mr-2 transition-transform group-hover:-translate-x-1" />
					Back to Projects
				</a>
				<h1
					class="text-3xl font-bold {$theme === 'dark' ? 'text-slate-200' : 'text-slate-900'} mb-8"
				>
					Blogs
				</h1>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each data.posts as post}
						<BlogCard {post} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
