<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { ExternalLink } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
	import { base } from '$app/paths';
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
									href={`${base}/projects/${project.slug}`}
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
							src={`${base}/images/${project.image}`}
							width="200"
							height="48"
							class={`aspect-video rounded border-2 object-cover ${
								$theme === 'dark' ? 'border-slate-200/10' : 'border-slate-200/50'
							} transition ${
								$theme === 'dark'
									? 'group-hover:border-slate-200/30'
									: 'group-hover:border-slate-300'
							} sm:order-1 sm:col-span-3 sm:translate-y-1`}
							srcSet={`${base}/images/${project.image.replace('.webp', '-588.webp')} 588w, 
           ${base}/images/${project.image.replace('.webp', '-1024.webp')} 1024w, 
           ${base}/images/${project.image.replace('.webp', '-160.webp')} 160w`}
							sizes="(min-width: 1360px) 146px, (min-width: 1040px) calc(12vw - 15px), (min-width: 860px) 196px, (min-width: 640px) 22.5vw, 196px"
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
