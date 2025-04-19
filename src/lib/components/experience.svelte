<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { ExternalLink } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
</script>

<section
	id="experience"
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label="Work experience"
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
			Experience
		</h2>
	</div>

	<div>
		<ol class="group/list">
			{#each DATA.experience as experience, index}
				<li class="mb-12">
					<div
						class="group relative grid pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
					>
						<div
							class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:{$theme ===
							'dark'
								? 'bg-slate-800/50'
								: 'bg-slate-100/50'} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
						></div>
						<header
							class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide {$theme === 'dark'
								? 'text-slate-500'
								: 'text-slate-500'} sm:col-span-3"
						>
							{experience.period}
						</header>
						<div class="z-10 sm:col-span-7">
							<h3
								class="font-medium leading-snug {$theme === 'dark'
									? 'text-slate-200'
									: 'text-slate-900'}"
							>
								<div>
									<span
										class="inline-flex items-baseline font-medium leading-tight {$theme === 'dark'
											? 'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
											: 'text-slate-900 hover:text-teal-500 focus-visible:text-teal-500'} group/link text-base"
										aria-label="{experience.title} at {experience.company} (opens in a new tab)"
									>
										<span
											class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
										></span>

										<div>
											<div
												class="text-base font-semibold {$theme === 'dark'
													? 'text-slate-200'
													: 'text-slate-900'}"
											>
												{experience.title}
											</div>

											<p
												class="mt-1 inline-flex items-center text-sm font-medium underline {$theme ===
												'dark'
													? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
													: 'text-slate-600 hover:text-teal-500 focus-visible:text-teal-500'}"
												aria-label="Visit {experience.company} (opens in a new tab)"
											>
												{experience.company}
											</p>
										</div>
									</span>
								</div>
							</h3>
							{#if experience.badges?.length}
								<ul class="mt-2 flex flex-wrap" aria-label="Badges">
									{#each experience.badges as badge}
										<li class="mr-1.5 mt-2">
											<div
												class="flex items-center rounded-full bg-indigo-400/10 px-3 py-1
                 text-xs font-medium leading-5
                 {$theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'}"
											>
												{badge}
											</div>
										</li>
									{/each}
								</ul>
							{/if}
							<p class="mt-2 text-justify text-sm leading-normal">
								{experience.description}
							</p>
							<ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
								{#each experience.technologies as tech}
									<li class="mr-1.5 mt-2">
										<div
											class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5
	{$theme === 'dark' ? 'text-teal-300' : 'text-teal-700'}"
										>
											{tech}
										</div>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</li>
			{/each}
		</ol>

		<div class="mt-12">
			<a
				class="inline-flex items-baseline font-medium leading-tight {$theme === 'dark'
					? 'text-slate-200 hover:text-teal-300 focus-visible:text-teal-300'
					: 'text-slate-900 hover:text-teal-500 focus-visible:text-teal-500'} font-semibold {$theme ===
				'dark'
					? 'text-slate-200'
					: 'text-slate-900'} group/link text-base"
				href="/resume.pdf"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="View Full Résumé (opens in a new tab)"
			>
				<span>
					View Full
					<span class="inline-block">
						Resume
						<ExternalLink
							class="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
						/>
					</span>
				</span>
			</a>
		</div>
	</div>
</section>
