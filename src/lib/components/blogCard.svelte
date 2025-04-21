<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { formatDate } from '$lib/utils.js';
	import { title, description, url } from '$lib/config';
	import { base } from '$app/paths';
	export let post;
</script>

<svelte:head>
	<title>{title}</title>

	<meta name="description" content={description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}/${base}/blog`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={`${url}/${base}/${post.image}`} />

	<meta name="twitter:site" content="@McBride1105" />
	<meta name="twitter:creator" content="@McBride1105" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={`${url}/${base}/${post.image}`} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

{#key post.slug}
	<a
		href={`${base}/blog/${post.slug}`}
		class="group relative block overflow-hidden rounded-lg border {$theme === 'dark'
			? 'border-slate-800 hover:border-slate-700'
			: 'border-slate-200 hover:border-slate-300'} transition-colors"
	>
		<div class="aspect-video w-full overflow-hidden">
			{#if post.image}
				<img
					src={`${base}/${post.image}`}
					alt={post.title}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			{/if}
		</div>

		<div class="p-4">
			<p class="text-xs {$theme === 'dark' ? 'text-slate-500' : 'text-slate-500'} mb-1">
				{formatDate(post.date)}
			</p>
			<h2
				class="text-lg font-semibold {$theme === 'dark'
					? 'text-slate-200 group-hover:text-teal-300'
					: 'text-slate-900 group-hover:text-sky-500'} transition-colors"
			>
				{post.title}
			</h2>
			<!-- <p class="mt-2 line-clamp-2 text-sm">
				{post.excerpt}
			</p> -->

			<div class="mt-4 flex flex-wrap gap-2">
				{#each post.tags as tag}
					<span
						class="inline-block rounded-full px-2 py-1 text-xs font-medium {$theme === 'dark'
							? 'bg-teal-400/10 text-teal-300'
							: 'bg-sky-600/10 text-sky-700'}"
					>
						{tag}
					</span>
				{/each}
			</div>
		</div>
	</a>
{/key}
