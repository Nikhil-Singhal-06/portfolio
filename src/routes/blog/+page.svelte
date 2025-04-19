<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { blogPosts } from '$lib/data/blog';
	import { formatDate } from '$lib/utils';

	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}
</script>

<svelte:head>
	<title>Blog | Your Name</title>
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
			<div class="lg:py-24">
				<h1
					class="text-3xl font-bold {$theme === 'dark' ? 'text-slate-200' : 'text-slate-900'} mb-8"
				>
					Blog
				</h1>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{#each blogPosts as post}
						<a
							href={`/blog/${post.slug}`}
							class="group relative block overflow-hidden rounded-lg border {$theme === 'dark'
								? 'border-slate-800 hover:border-slate-700'
								: 'border-slate-200 hover:border-slate-300'} transition-colors"
						>
							<div class="aspect-video w-full overflow-hidden">
								<img
									src={post.coverImage || '/placeholder.svg'}
									alt={post.title}
									class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>

							<div class="p-4">
								<p class="text-xs {$theme === 'dark' ? 'text-slate-500' : 'text-slate-500'} mb-1">
									{formatDate(post.date)}
								</p>
								<h2
									class="text-lg font-semibold {$theme === 'dark'
										? 'text-slate-200 group-hover:text-teal-300'
										: 'text-slate-900 group-hover:text-teal-500'} transition-colors"
								>
									{post.title}
								</h2>
								<p class="mt-2 line-clamp-2 text-sm">
									{post.excerpt}
								</p>

								<div class="mt-4 flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span
											class="inline-block rounded-full bg-teal-400/10 px-2 py-1 text-xs font-medium text-teal-300"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
