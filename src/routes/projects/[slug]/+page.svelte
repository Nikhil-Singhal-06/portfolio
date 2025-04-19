<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
	import { isArray, mdInline } from '$lib/utils';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let project = DATA.projects.find((p) => p.slug === $page.params.slug);
	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}
	onMount(() => {
		// If project not found, redirect to projects list
		if (!project) {
			window.location.href = `${base}/#projects`;
		}

		if (project) {
			allImages = [project.image, ...(project.additionalImages || [])];
		}
	});

	let currentImageIndex = 0;
	let allImages: string[] = [];

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % allImages.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
	}
</script>

<svelte:head>
	<title>{project?.title} | Your Name</title>
	<meta name="description" content={project?.shortDescription || 'Project details'} />
</svelte:head>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="{$theme === 'dark' ? 'bg-slate-900' : 'bg-white'} leading-relaxed {$theme === 'dark'
		? 'text-slate-400'
		: 'text-slate-600'} min-h-screen antialiased transition-colors duration-300 selection:bg-teal-300 selection:text-teal-900"
	on:mousemove={handleMouseMove}
	aria-label="Selected projects"
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

				{#if project}
					<article class="prose {$theme === 'dark' ? 'prose-invert' : ''} max-w-none">
						<!-- Header Section with Title and Links -->
						<header class="mb-12">
							<h1
								class="text-4xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-6"
							>
								{project.title}
							</h1>

							<!-- Tech Chips -->
							{#if project.technologies && project.technologies.length}
								<div class="mb-6 flex flex-wrap gap-2">
									{#each project.technologies as tech}
										<span
											class="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 {$theme ===
											'dark'
												? 'bg-teal-400/10 text-teal-300'
												: 'bg-sky-600/10 text-sky-700'} transition-colors hover:bg-teal-400/20"
										>
											{tech}
										</span>
									{/each}
								</div>
							{/if}
						</header>
						{#if allImages && allImages.length}
							<div
								class="relative mb-12 overflow-hidden rounded-xl border-2 {$theme === 'dark'
									? 'border-slate-800'
									: 'border-slate-200'} shadow-lg"
							>
								<img
									src={`${base}/images/${allImages[currentImageIndex]}`}
									alt={`${project.title} image ${currentImageIndex + 1}`}
									class="h-auto w-full object-scale-down transition-transform duration-500"
								/>

								<!-- Navigation arrows -->
								{#if allImages.length > 1}
									<button
										class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
										on:click={prevImage}
										aria-label="Previous image"
									>
										<ChevronLeft size={20} />
									</button>
									<button
										class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-colors hover:bg-black/50"
										on:click={nextImage}
										aria-label="Next image"
									>
										<ChevronRight size={20} />
									</button>

									<!-- Dots indicator -->
									<div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
										{#each allImages as _, i}
											<button
												class="h-2 w-2 rounded-full {i === currentImageIndex
													? 'bg-white'
													: 'bg-white/50'} transition-colors"
												on:click={() => (currentImageIndex = i)}
												aria-label={`Go to image ${i + 1}`}
											/>
										{/each}
									</div>
								{/if}
							</div>
						{/if}
						{#if project.externalLink}
							<a
								href={project.externalLink}
								target="_blank"
								rel="noopener noreferrer"
								class="mb-8 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium {$theme ===
								'dark'
									? 'bg-teal-400/10 text-teal-300 hover:bg-teal-400/20'
									: 'bg-sky-600/10 text-sky-700 hover:bg-sky-600/20'} transition-colors"
							>
								Visit Project
								<ExternalLink size={16} class="ml-2" />
							</a>
						{/if}

						<section class="mb-12">
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span
									class="mr-2 inline-block h-1 w-6 {$theme === 'dark'
										? 'bg-teal-400/10 text-teal-300'
										: 'bg-sky-600 text-sky-700'}"
								></span>
								Project Overview
							</h2>

							<!-- Overview bullet points from details -->
							{#if project.details && project.details.length}
								{#each project.details.filter((d) => d.heading
										.toLowerCase()
										.includes('overview')) as section}
									{#if section.description}
										<p class="text-md mt-4">{@html mdInline(section.description)}</p>
									{:else}
										<p class="text-md mt-4">{@html mdInline(project.shortDescription)}</p>
									{/if}
									{#if isArray(section.body)}
										<ul class="mt-4 list-disc space-y-2 pl-5">
											{#each section.body as line}
												<li class="pl-2">{@html mdInline(line)}</li>
											{/each}
										</ul>
									{:else}
										<p class="mt-4">{@html mdInline(section.body)}</p>
									{/if}
								{/each}
							{/if}
						</section>
						<!-- Problem & Motivation Section -->
						<section
							class="mb-12 {$theme === 'dark' ? 'bg-slate-800/30' : 'bg-slate-100'} rounded-lg p-6"
						>
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span
									class="mr-2 inline-block h-1 w-6 {$theme === 'dark'
										? 'bg-teal-400/10 text-teal-300'
										: 'bg-sky-600 text-sky-700'}"
								></span>
								Problem & Motivation
							</h2>

							<!-- Problem & Motivation from details -->
							{#if project.details && project.details.length}
								{#each project.details.filter((d) => d.heading
											.toLowerCase()
											.includes('problem') || d.heading
											.toLowerCase()
											.includes('motivation') || d.heading
											.toLowerCase()
											.includes('background')) as section}
									{#if isArray(section.body)}
										<ul class="mt-4 list-disc space-y-2 pl-5">
											{#each section.body as line}
												<li class="pl-2">{line}</li>
											{/each}
										</ul>
									{:else}
										<p class="mt-4">{@html mdInline(section.body)}</p>
									{/if}
								{/each}
							{/if}
						</section>
						<!-- Challenges and Sollution Section -->
						<section
							class="mb-12 {$theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'} rounded-lg p-6"
						>
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span
									class="mr-2 inline-block h-1 w-6 {$theme === 'dark'
										? 'bg-teal-400/10 text-teal-300'
										: 'bg-sky-600 text-sky-700'}"
								></span>
								Challenges & Solutions
							</h2>

							<!-- Challenges from details -->
							{#if project.details && project.details.length}
								{#each project.details.filter((d) => d.heading
										.toLowerCase()
										.includes('challenge')) as section}
									{#if isArray(section.body)}
										<ul class="mt-4 list-disc space-y-2 pl-5">
											{#each section.body as line}
												<li class="pl-2">{@html mdInline(line)}</li>
											{/each}
										</ul>
									{:else}
										<p class="mt-4">{section.body}</p>
									{/if}
								{/each}
							{/if}
						</section>

						<!-- Key Takeaways Section -->
						<section class="{$theme === 'dark' ? 'bg-teal-900/20' : 'bg-sky-100'} rounded-lg p-6">
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span
									class="mr-2 inline-block h-1 w-6 {$theme === 'dark'
										? 'bg-teal-400/10 text-teal-300'
										: 'bg-sky-600 text-sky-700'}"
								></span>
								Key Takeaways
							</h2>

							<!-- Takeaways from details -->
							{#if project.details && project.details.length}
								{#each project.details.filter((d) => d.heading
											.toLowerCase()
											.includes('takeaway') || d.heading
											.toLowerCase()
											.includes('learning') || d.heading
											.toLowerCase()
											.includes('conclusion')) as section}
									{#if isArray(section.body)}
										<ul class="mt-4 list-disc space-y-2 pl-5">
											{#each section.body as line}
												<li class="pl-2">{@html mdInline(line)}</li>
											{/each}
										</ul>
									{:else}
										<p class="mt-4">{section.body}</p>
									{/if}
								{/each}
							{/if}
						</section>
					</article>
				{/if}
			</div>
		</div>
	</div>
</div>
