<script lang="ts">
	import { marked } from 'marked';
	import Badge from '../ui/badge/badge.svelte';
	import StudienArbeit from '$lib/imgs/studienarbeit.jpg';
	import MasterArbeit from '$lib/imgs/masterarbeit.png';
	import Scenario from '$lib/imgs/scenario.png';
	import HistoDot from '$lib/imgs/histodot.png';
	let _class = '';
	export { _class as class };
	export let heading: string;
	export let title: string;
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let tags: readonly string[];
	export let link: string = '';
	export let image: string = '';
	export let video: string = '';
	export let links: { icon: any; type: string; href: string }[] = [];
</script>

<!-- Card -->
<div
	class="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-out hover:shadow-lg"
>
	<a href={href || '#'} class="block cursor-pointer">
		{#if video}
			<video
				class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
				src={video}
				autoplay
				loop
				muted
			></video>
		{:else if image}
			{#if image == 'StudienArbeit'}
				<img
					class="h-40 w-full overflow-hidden object-cover object-top"
					src={StudienArbeit}
					alt={title}
				/>
			{:else if image == 'MasterArbeit'}
				<img
					class="h-40 w-full overflow-hidden object-cover object-top"
					src={MasterArbeit}
					alt={title}
				/>
			{:else if image == 'scenario'}
				<img
					class="h-80 w-full overflow-hidden object-cover object-top"
					src={Scenario}
					alt={title}
				/>
			{:else if image == 'histodot'}
				<img
					class="h-80 w-full overflow-hidden object-cover object-top"
					src={HistoDot}
					alt={title}
				/>
			{:else}
				<img
					class="h-40 w-full overflow-hidden object-cover object-top"
					src={StudienArbeit}
					alt={title}
				/>
			{/if}
		{:else}
			<p
				class="h-40 w-full justify-center overflow-hidden object-cover object-top p-5 text-center text-xl font-bold"
			>
				{heading}
			</p>
		{/if}
	</a>

	<!-- Card Header -->
	<div class="flex flex-col px-2">
		<div class="space-y-1">
			<!-- Card Title -->
			<div class="mt-1 text-base">{title}</div>
			{#if dates}
				<time class="font-sans text-xs">{dates}</time>
			{/if}
			<div class="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
			>
				{@html marked(description)}
			</div>
		</div>
	</div>
	<!-- Card Content -->
	<div class="mt-auto flex flex-col text-pretty px-2 font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
	<!-- Card Footer -->
	<div class="flex items-center px-2 pb-2 pt-2">
		{#if links && links.length > 0}
			<div class="flex flex-row flex-wrap items-start gap-1">
				{#each links as link}
					<a href={link?.href} target="_blank">
						<Badge class="flex items-center justify-center gap-1 px-2 py-1 text-[10px]">
							<!-- {link.icon} -->
							<svelte:component this={link.icon} class="mb-px size-3" strokeWidth={1.6} />
							{link.type}
						</Badge>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</div>
