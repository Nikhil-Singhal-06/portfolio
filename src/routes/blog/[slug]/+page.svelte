<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { url, title } from '$lib/config';
	import { base } from '$app/paths';
	import { ArrowLeft } from 'lucide-svelte';
	import { theme } from '$lib/stores/theme';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

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

	onMount(() => {
		theme.set('light');
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>

	<link rel="canonical" href={`${fullUrl}`} />
	<meta name="description" content={data.meta.description} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={`${fullUrl}`} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:site_name" content={title} />
	<meta property="og:image" content={data.meta.image} />

	<meta name="twitter:site" content="@YouTwitterHandle" />
	<meta name="twitter:creator" content="@YouTwitterHandle" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:src" content={data.meta.image} />
	<meta name="twitter:widgets:new-embed-design" content="on" />

	<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
	<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="mx-auto max-w-screen-xl px-4 py-8">
	<div class="mb-8">
		<a
			href={`${base}/blog/`}
			class="group mb-10 inline-flex items-center text-sm font-medium {$theme === 'dark'
				? 'text-slate-400 hover:text-teal-300'
				: 'text-slate-600 hover:text-sky-500'} transition-colors"
		>
			<ArrowLeft size={16} class="mr-2 transition-transform group-hover:-translate-x-1" />
			Back to Blogs
		</a>
		<h1 class="t mb-4 text-3xl font-bold {$theme === 'dark' ? 'text-slate-200 ' : 'text-black '}">
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
					class="mt-4 flex items-center gap-3 rounded-lg bg-white/90 p-3 text-sm text-gray-600 lg:absolute lg:bottom-4 lg:right-4 lg:mt-0 lg:shadow-md"
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
				</div></a
			>
		</div>
	</div>

	<div class="flex flex-col gap-8 lg:flex-row">
		<article class="prose prose-lg max-w-none lg:w-2/3">
			<svelte:component this={data.content} />
		</article>

		<aside class="lg:w-1/3">
			<div class="sticky top-20">
				{#if data.meta.toc?.length}
					<div
						class="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all hover:shadow-lg"
					>
						<h2 class="mb-4 text-base font-semibold text-gray-800">On this page</h2>
						<ul class="space-y-3 text-sm">
							{#each data.meta.toc as item}
								<li>
									<a
										href={`#${item.id}`}
										class="block border-l-2 border-transparent pl-3 text-gray-700 transition-all hover:border-sky-500 hover:text-sky-700"
									>
										{item.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div class="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-md">
					<h3 class="mb-3 text-base font-semibold text-gray-800">Share this article</h3>
					<div class="flex gap-3">
						<!-- <button
							class="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
						>
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
								><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
								></path></svg
							>
						</button>
						<button
							class="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-100 hover:text-teal-700"
						>
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
								><path
									d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
								></path></svg
							>
						</button> -->
						<button
							class="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-sky-100 hover:text-sky-700"
							on:click={shareLinkedIn}
						>
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
								><path
									d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
								></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"
								></circle></svg
							>
						</button>
						<button
							class="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-sky-100 hover:text-sky-700"
							on:click={copyLink}
						>
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
								><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline
									points="16 6 12 2 8 6"
								></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg
							>
						</button>
					</div>
				</div>
			</div>
		</aside>
	</div>
</div>

<style>
	/* Add smooth scrolling for anchor links */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Enhance the active state of TOC items */
	:global(:target) {
		scroll-margin-top: 100px;
	}
</style>
