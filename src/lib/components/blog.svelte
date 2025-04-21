<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { ExternalLink } from 'lucide-svelte';
	import { base } from '$app/paths';

	let latestPost: Post;

	onMount(async () => {
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
	});
</script>

<section
	id="blog"
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label="Latest blog post"
>
	<div
		class="sticky top-0 z-20 -mx-6 mb-4 w-screen {$theme === 'dark'
			? 'bg-slate-900/75'
			: 'bg-white/75'} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2
			class="text-sm font-bold uppercase tracking-widest {$theme === 'dark'
				? 'text-slate-200'
				: 'text-slate-900'} lg:sr-only"
		>
			Latest Blog
		</h2>
	</div>

	{#if latestPost}
		<!-- <div class="mb-8">
			<a
				href={`${base}/blog/${latestPost.slug}`}
				class="group block rounded-lg p-6 transition hover:shadow-lg {$theme === 'dark'
					? 'bg-slate-800 hover:bg-slate-700'
					: 'bg-white hover:bg-slate-100'}"
			>
				<h3
					class="mb-2 text-lg font-semibold {$theme === 'dark'
						? 'text-slate-200'
						: 'text-slate-900'}"
				>
					{latestPost.title}
				</h3>
				<div class="mt-3 text-sm font-medium text-teal-500 group-hover:underline">Read more →</div>
			</a>
		</div> -->

		<div>
			<ul class="group/list">
				<li class="mb-12">
					<div
						class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
					>
						<div
							class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:{$theme ===
							'dark'
								? 'bg-slate-800/50'
								: 'bg-slate-100/50'} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
						></div>
						<div class="z-10 sm:order-2 sm:col-span-7">
							<h3>
								<a
									class="inline-flex items-baseline font-medium leading-tight {$theme === 'dark'
										? 'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
										: 'text-slate-900 hover:text-sky-600 focus-visible:text-sky-600'} group/link text-base"
									href={`${base}/blog/${latestPost.slug}`}
									rel="noreferrer noopener"
									aria-label="{latestPost.title} (opens in a new tab)"
								>
									<span
										class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
									></span>
									<span>
										{latestPost.title}
										<span class="inline-block">
											<ExternalLink
												class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
											/>
										</span>
									</span>
								</a>
							</h3>
							<p class="mt-2 text-justify text-sm leading-normal">
								{latestPost.description}
							</p>
						</div>
						<img
							alt="{latestPost.title} screenshot"
							src={`${base}/blogs/${latestPost.image}`}
							width="200"
							height="48"
							class="aspect-video rounded border-2 object-cover {$theme === 'dark'
								? 'border-slate-200/10'
								: 'border-slate-200/50'} transition {$theme === 'dark'
								? 'group-hover:border-slate-200/30'
								: 'group-hover:border-slate-300'} sm:order-1 sm:col-span-3 sm:translate-y-1"
						/>
					</div>
				</li>
			</ul>
		</div>
	{/if}

	<div>
		<a
			class="inline-flex items-baseline font-medium leading-tight {$theme === 'dark'
				? 'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
				: 'text-slate-900 hover:text-teal-500 focus-visible:text-teal-500'} group/link text-base"
			href={`${base}/blog/`}
			aria-label="View all blog posts"
		>
			<span>
				View All
				<span class="inline-block">
					Blogs
					<ExternalLink
						class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
					/>
				</span>
			</span>
		</a>
	</div>
</section>
