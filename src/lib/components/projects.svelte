<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { ExternalLink } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
</script>

<section
	id="projects"
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label="Selected projects"
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
			Projects
		</h2>
	</div>

	<div>
		<ul class="group/list">
			{#each DATA.projects as project, index}
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
									href={`/projects/${project.slug}`}
									rel="noreferrer noopener"
									aria-label="{project.title} (opens in a new tab)"
								>
									<span
										class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
									></span>
									<span>
										{project.title}
										<span class="inline-block">
											<ExternalLink
												class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
											/>
										</span>
									</span>
								</a>
							</h3>
							<p class="mt-2 text-justify text-sm leading-normal">
								{project.shortDescription}
							</p>
							<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
								{#each project.technologies as tech}
									<li class="mr-1.5 mt-2">
										<div
											class="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5
	{$theme === 'dark' ? 'bg-teal-400/10 text-teal-300' : 'bg-sky-600/10 text-sky-700'}"
										>
											{tech}
										</div>
									</li>
								{/each}
							</ul>
						</div>
						<img
							alt="{project.title} screenshot"
							src={`/images/${project.image}`}
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
			{/each}
		</ul>

		<!-- <div class="mt-12">
			<a
				class="inline-flex items-center font-medium leading-tight {$theme === 'dark'
					? 'text-slate-200'
					: 'text-slate-900'} font-semibold {$theme === 'dark'
					? 'text-slate-200'
					: 'text-slate-900'} group"
				aria-label="View Full Project Archive"
				href="/archive"
			>
				<span>
					<span
						class="border-b border-transparent pb-px transition group-hover:{$theme === 'dark'
							? 'border-teal-300'
							: 'border-teal-500'} motion-reduce:transition-none"
					>
						View Full Project
					</span>
					<span class="whitespace-nowrap">
						<span
							class="border-b border-transparent pb-px transition group-hover:{$theme === 'dark'
								? 'border-teal-300'
								: 'border-teal-500'} motion-reduce:transition-none"
						>
							Archive
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
							aria-hidden="true"
						>
							<path
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
							/>
						</svg>
					</span>
				</span>
			</a>
		</div> -->
	</div>
</section>
