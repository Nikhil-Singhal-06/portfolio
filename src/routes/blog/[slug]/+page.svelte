<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { ArrowLeft } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { blogPosts } from '$lib/data/blog';
	import { formatDate } from '$lib/utils';
	// import type { BlogPost } from '$lib/types';
	import { goto } from '$app/navigation';

	// let post: BlogPost | undefined;
	let post: any;

	$: {
		post = blogPosts.find((p) => p.slug === $page.params.slug);
	}

	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}

	onMount(() => {
		// If post not found, redirect to blog index
		if (!post) {
			goto('/blog');
		}
	});
</script>

<svelte:head>
	<title>{post?.title || 'Blog Post'} | Your Name</title>
</svelte:head>

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
			<div class="mx-auto max-w-3xl lg:py-24">
				<a
					href="/blog"
					class="mb-6 inline-flex items-center text-sm font-medium {$theme === 'dark'
						? 'text-slate-400 hover:text-teal-300'
						: 'text-slate-600 hover:text-teal-500'} transition-colors"
				>
					<ArrowLeft size={16} class="mr-2" />
					Back to Blog
				</a>

				{#if post}
					<article class="prose {$theme === 'dark' ? 'prose-invert' : ''} max-w-none">
						<h1
							class="text-3xl font-bold {$theme === 'dark'
								? 'text-slate-200'
								: 'text-slate-900'} mb-2"
						>
							{post.title}
						</h1>

						<p class="text-sm {$theme === 'dark' ? 'text-slate-500' : 'text-slate-500'} mb-6">
							{formatDate(post.date)}
						</p>

						<div class="mb-8">
							<img
								src={post.coverImage || '/placeholder.svg'}
								alt={post.title}
								class="w-full rounded-lg border-2 {$theme === 'dark'
									? 'border-slate-200/10'
									: 'border-slate-200/50'} aspect-video object-cover"
							/>
						</div>

						<div class="mb-8 flex gap-2">
							{#each post.tags as tag}
								<span
									class="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
								>
									{tag}
								</span>
							{/each}
						</div>

						<div class="space-y-4">
							{@html post.content}
						</div>
					</article>
				{:else}
					<div class="flex h-64 items-center justify-center">
						<p>Loading blog post...</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
