<script lang="ts">
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';
	import { ExternalLink, ArrowLeft, Github } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { DATA } from '$lib/data/resume';
	import { mdInline } from '$lib/utils';

	// locate the project by slug from the route
	let project = DATA.projects.find((p) => p.slug === $page.params.slug);
	let mousePosition = { x: 0, y: 0 };

	function handleMouseMove(e: MouseEvent) {
		mousePosition = { x: e.clientX, y: e.clientY };
	}

	// type‑guard helper for the new `details[].body` which can be string or string[]
	function isArray(v: unknown): v is unknown[] {
		return Array.isArray(v);
	}

	onMount(() => {
		// If project not found, redirect to projects list
		if (!project) {
			window.location.href = '/#projects';
		}
	});
</script>

<svelte:head>
	<title>{project?.title || 'Project'} | Your Name</title>
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
					href="/#projects"
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
											class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 {$theme ===
											'dark'
												? 'text-teal-300'
												: 'text-teal-700'} transition-colors hover:bg-teal-400/20"
										>
											{tech}
										</span>
									{/each}
								</div>
							{/if}

							<!-- Project Links -->
							<div class="flex flex-wrap gap-4">
								{#if project.liveUrl}
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 rounded-md {$theme === 'dark'
											? 'bg-slate-800 text-teal-300 hover:bg-slate-700'
											: 'bg-slate-100 text-teal-700 hover:bg-slate-200'} px-3 py-1.5 text-sm font-medium transition-colors"
									>
										<ExternalLink size={14} />
										Live Demo
									</a>
								{/if}
								{#if project.githubUrl}
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 rounded-md {$theme === 'dark'
											? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
											: 'bg-slate-100 text-slate-700 hover:bg-slate-200'} px-3 py-1.5 text-sm font-medium transition-colors"
									>
										<Github size={14} />
										Source Code
									</a>
								{/if}
							</div>
						</header>

						<!-- Hero Image with animation -->
						{#if project.image}
							<div
								class="mb-12 overflow-hidden rounded-xl border-2 {$theme === 'dark'
									? 'border-slate-800'
									: 'border-slate-200'} shadow-lg transition-all hover:shadow-xl"
							>
								<img
									src={`/images/${project.image}`}
									alt={`${project.title} screenshot`}
									class="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
								/>
							</div>
						{/if}

						<!-- Project Overview Section -->
						<section class="mb-12">
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span class="mr-2 inline-block h-1 w-6 bg-teal-400"></span>
								Project Overview
							</h2>

							<p class="mt-4 text-lg">{@html mdInline(project.shortDescription)}</p>

							<!-- Overview bullet points from details -->
							{#if project.details && project.details.length}
								{#each project.details.filter((d) => d.heading
										.toLowerCase()
										.includes('overview')) as section}
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
								<span class="mr-2 inline-block h-1 w-6 bg-teal-400"></span>
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

							<!-- If no problem/motivation found in details, show a placeholder -->
							{#if !project.details || !project.details.some((d) => d.heading
											.toLowerCase()
											.includes('problem') || d.heading
											.toLowerCase()
											.includes('motivation') || d.heading.toLowerCase().includes('background'))}
								<p class="italic {$theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}">
									Describe the problem this project solves and what motivated you to build it.
								</p>
							{/if}
						</section>

						<!-- Challenges Section -->
						<section
							class="mb-12 {$theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'} rounded-lg p-6"
						>
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span class="mr-2 inline-block h-1 w-6 bg-teal-400"></span>
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
						<section class="{$theme === 'dark' ? 'bg-teal-900/20' : 'bg-teal-50'} rounded-lg p-6">
							<h2
								class="text-2xl font-bold {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'} mb-4 flex items-center"
							>
								<span class="mr-2 inline-block h-1 w-6 bg-teal-400"></span>
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

							<!-- If no takeaways found in details, show a placeholder -->
							{#if !project.details || !project.details.some((d) => d.heading
											.toLowerCase()
											.includes('takeaway') || d.heading
											.toLowerCase()
											.includes('learning') || d.heading.toLowerCase().includes('conclusion'))}
								<p class="italic {$theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}">
									Add your key learnings and takeaways from this project here.
								</p>
							{/if}
						</section>
					</article>
				{:else}
					<div class="flex h-64 items-center justify-center">
						<div class="animate-pulse text-center">
							<div
								class="h-8 w-48 rounded-md {$theme === 'dark'
									? 'bg-slate-700'
									: 'bg-slate-200'} mx-auto mb-4"
							></div>
							<p>Loading project details...</p>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
