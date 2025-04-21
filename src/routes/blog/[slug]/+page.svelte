<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { url, title } from '$lib/config';
	import { base } from '$app/paths';
	import { ArrowLeft } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
	import { page } from '$app/state';

	export let data;

	const fullUrl = `${url}/${base}/blog/${page.params.slug}`;
	const shareText = encodeURIComponent(data.meta.title);

	function shareLinkedIn() {
		const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${shareText}&summary=${encodeURIComponent(data.meta.description)}&source=${encodeURIComponent(title)}`;

		window.open(linkedInUrl, '_blank');
	}

	function shareTwitter() {
		const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${shareText}`;
		window.open(twitterUrl, '_blank');
	}

	function nativeShare() {
		if (navigator.share) {
			navigator.share({
				title: data.meta.title,
				text: data.meta.description,
				url: fullUrl
			});
		} else {
			alert('Sharing not supported on this browser.');
		}
	}

	function copyLink() {
		navigator.clipboard.writeText(fullUrl).then(() => {
			alert('Link copied to clipboard!');
		});
	}
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>

	<link rel="canonical" href={`${fullUrl}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${url}/${base}/blogs/${data.meta.image}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={`${url}/${base}`} />

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={`${url}/${base}/blogs/${data.meta.image}`} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="mx-auto max-w-screen-xl px-4 py-8">
	<div class="mb-8">
		<a
			href={`${base}/`}
			class="group mb-10 inline-flex items-center text-sm font-medium {$theme === 'dark'
				? 'text-slate-400 hover:text-teal-300'
				: 'text-slate-600 hover:text-sky-500'} transition-colors"
		>
			<ArrowLeft size={16} class="mr-2 transition-transform group-hover:-translate-x-1" />
			Profile
		</a>

		<h1 class="mb-4 text-3xl font-bold {$theme === 'dark' ? 'text-slate-200' : 'text-black'}">
			{data.meta.title}
		</h1>

		<div class="relative mb-8">
			<img
				src={`${base}/blogs/${data.meta.image}`}
				alt={data.meta.title}
				class="h-auto max-h-[600px] w-full rounded-xl object-cover shadow-md"
			/>

			<a href={`${url}${base}`} target="_blank">
				<div
					class="mt-4 flex items-center gap-3 rounded-lg p-3 text-sm lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:shadow-md
						{$theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-white/90 text-gray-600'}"
				>
					<img
						src={`${base}/images/nikhil.webp`}
						alt="Nikhil Singhal"
						class="h-10 w-10 rounded-full border-2 border-white shadow-sm"
					/>
					<div class="flex flex-col">
						<span class="font-medium">Nikhil Singhal</span>
						<div class="flex items-center gap-2 text-xs">
							<span>{data.meta.minutesRead} min read</span>
							<span>•</span>
							<span>{formatDate(data.meta.date)}</span>
						</div>
					</div>
				</div>
			</a>
		</div>
	</div>

	<div class="flex flex-col gap-8 lg:flex-row">
		<article
			class="prose prose-lg max-w-none lg:w-2/3
				{$theme === 'dark' ? 'prose-invert' : ''}"
		>
			<svelte:component this={data.content} />
		</article>

		<aside class="lg:w-1/3">
			<div class="sticky top-20">
				{#if data.meta.toc?.length}
					<div
						class="rounded-xl border p-5 shadow-md transition-all hover:shadow-lg
							{$theme === 'dark'
							? 'border-slate-700 bg-slate-800 text-slate-200'
							: 'border-gray-200 bg-white text-gray-800'}"
					>
						<h2 class="mb-4 text-base font-semibold">On this page</h2>
						<ul class="space-y-3 text-sm">
							{#each data.meta.toc as item}
								<li>
									<a
										href={`#${item.id}`}
										class="block border-l-2 border-transparent pl-3 transition-all
											{$theme === 'dark'
											? 'text-slate-400 hover:border-teal-500 hover:text-teal-300'
											: 'text-gray-700 hover:border-sky-500 hover:text-sky-700'}"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div
					class="mt-6 rounded-xl border p-5 shadow-md transition-all hover:shadow-lg
						{$theme === 'dark'
						? 'border-slate-700 bg-slate-800 text-slate-200'
						: 'border-gray-200 bg-white text-gray-800'}"
				>
					<h3 class="mb-3 text-base font-semibold">Share this article</h3>
					<div class="flex gap-3">
						<button
							class="rounded-full p-2 transition-colors
								{$theme === 'dark'
								? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-teal-300'
								: 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-700'}"
							on:click={shareLinkedIn}
							aria-label="Share on LinkedIn"
						>
							<!-- LinkedIn Icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								/>
								<rect width="4" height="12" x="2" y="9" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</button>

						<button
							class="rounded-full p-2 transition-colors
								{$theme === 'dark'
								? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-teal-300'
								: 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-700'}"
							on:click={copyLink}
							aria-label="Copy article link"
						>
							<!-- Copy Link Icon -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
								<polyline points="16 6 12 2 8 6"></polyline>
								<line x1="12" y1="2" x2="12" y2="15"></line>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</aside>
	</div>
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
	:global(:target) {
		scroll-margin-top: 100px;
	}
</style>
