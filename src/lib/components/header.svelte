<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { activeSection } from '$lib/stores/scroll';
	import { Github, Linkedin, Instagram, Sun, Moon } from 'lucide-svelte';
	import { DATA } from '$lib/data/resume';
</script>

<header
	class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
>
	<div>
		<!-- Profile section with image -->
		<div class="mb-4 flex flex-col gap-4">
			<div
				class="h-32 w-32 overflow-hidden rounded-full border-2 {$theme === 'dark'
					? 'border-teal-300/20'
					: 'border-teal-500/20'}"
			>
				<img src="/images/nikhil.webp" alt="Your Name" class="h-full w-full object-cover" />
			</div>
			<div>
				<h1
					class="text-4xl font-bold tracking-tight {$theme === 'dark'
						? 'text-slate-200'
						: 'text-slate-900'} sm:text-5xl"
				>
					<a href="/">{DATA.name}</a>
				</h1>
				<h2
					class="mt-3 text-lg font-medium tracking-tight {$theme === 'dark'
						? 'text-slate-200'
						: 'text-slate-900'} sm:text-xl"
				>
					{DATA.title}
				</h2>
			</div>
		</div>

		<p class="mt-4 max-w-xs leading-normal">
			{DATA.tagline}
		</p>

		<div class="mt-8">
			<button
				on:click={toggleTheme}
				class="rounded-md p-2 {$theme === 'dark'
					? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
					: 'bg-slate-200 text-slate-800 hover:bg-slate-300'} flex items-center gap-2 transition-colors"
				aria-label={`Switch to ${$theme === 'dark' ? 'light' : 'dark'} mode`}
			>
				{#if $theme === 'dark'}
					<Sun size={16} />
					<span>Light Mode</span>
				{:else}
					<Moon size={16} />
					<span>Dark Mode</span>
				{/if}
			</button>
		</div>

		<nav class="nav hidden lg:block" aria-label="In-page jump links">
			<ul class="mt-16 w-max">
				<li>
					<a
						class="group flex items-center py-3 {$activeSection === 'about' ? 'active' : ''}"
						href="#about"
					>
						<span
							class="nav-indicator mr-4 h-px transition-all group-hover:w-16
		group-focus-visible:w-16 motion-reduce:transition-none"
							class:w-8={$activeSection !== 'about'}
							class:w-16={$activeSection === 'about'}
							class:bg-slate-600={$theme === 'dark' && $activeSection !== 'about'}
							class:bg-slate-300={!($theme === 'dark') && $activeSection !== 'about'}
							class:bg-slate-200={$theme === 'dark' && $activeSection === 'about'}
							class:bg-slate-900={!($theme === 'dark') && $activeSection === 'about'}
						/>
						<span
							class="nav-text text-xs font-bold uppercase tracking-widest"
							class:group-hover:text-slate-200={$theme === 'dark'}
							class:group-hover:text-slate-900={$theme !== 'dark'}
							class:group-focus-visible:text-slate-200={$theme === 'dark'}
							class:group-focus-visible:text-slate-900={$theme !== 'dark'}
							class:text-slate-200={$theme === 'dark' && $activeSection === 'about'}
							class:text-slate-900={$theme !== 'dark' && $activeSection === 'about'}
						>
							About
						</span>
					</a>
				</li>
				<li>
					<a
						class="group flex items-center py-3 {$activeSection === 'experience' ? 'active' : ''}"
						href="#experience"
					>
						<span
							class="nav-indicator mr-4 h-px transition-all group-hover:w-16
		group-focus-visible:w-16 motion-reduce:transition-none"
							class:w-8={$activeSection !== 'experience'}
							class:w-16={$activeSection === 'experience'}
							class:bg-slate-600={$theme === 'dark' && $activeSection !== 'experience'}
							class:bg-slate-300={!($theme === 'dark') && $activeSection !== 'experience'}
							class:bg-slate-200={$theme === 'dark' && $activeSection === 'experience'}
							class:bg-slate-900={!($theme === 'dark') && $activeSection === 'experience'}
						/>
						<span
							class="nav-text text-xs font-bold uppercase tracking-widest"
							class:group-hover:text-slate-200={$theme === 'dark'}
							class:group-hover:text-slate-900={$theme !== 'dark'}
							class:group-focus-visible:text-slate-200={$theme === 'dark'}
							class:group-focus-visible:text-slate-900={$theme !== 'dark'}
							class:text-slate-200={$theme === 'dark' && $activeSection === 'experience'}
							class:text-slate-900={$theme !== 'dark' && $activeSection === 'experience'}
						>
							Experience
						</span>
					</a>
				</li>
				<li>
					<a
						class="group flex items-center py-3 {$activeSection === 'projects' ? 'active' : ''}"
						href="#projects"
					>
						<span
							class="nav-indicator mr-4 h-px transition-all group-hover:w-16
		group-focus-visible:w-16 motion-reduce:transition-none"
							class:w-8={$activeSection !== 'projects'}
							class:w-16={$activeSection === 'projects'}
							class:bg-slate-600={$theme === 'dark' && $activeSection !== 'projects'}
							class:bg-slate-300={!($theme === 'dark') && $activeSection !== 'projects'}
							class:bg-slate-200={$theme === 'dark' && $activeSection === 'projects'}
							class:bg-slate-900={!($theme === 'dark') && $activeSection === 'projects'}
						/>
						<span
							class="nav-text text-xs font-bold uppercase tracking-widest"
							class:group-hover:text-slate-200={$theme === 'dark'}
							class:group-hover:text-slate-900={$theme !== 'dark'}
							class:group-focus-visible:text-slate-200={$theme === 'dark'}
							class:group-focus-visible:text-slate-900={$theme !== 'dark'}
							class:text-slate-200={$theme === 'dark' && $activeSection === 'projects'}
							class:text-slate-900={$theme !== 'dark' && $activeSection === 'projects'}
						>
							Projects
						</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
		<li class="mr-5 text-xs">
			<a
				class="block {$theme === 'dark' ? 'hover:text-slate-200' : 'hover:text-slate-900'}"
				href={DATA.contact.social.GitHub.url}
				target="_blank"
				rel="noreferrer noopener"
				aria-label="GitHub (opens in a new tab)"
			>
				<span class="sr-only">GitHub</span>
				<Github size={24} />
			</a>
		</li>
		<li class="mr-5 text-xs">
			<a
				class="block {$theme === 'dark' ? 'hover:text-slate-200' : 'hover:text-slate-900'}"
				href={DATA.contact.social.LinkedIn.url}
				target="_blank"
				rel="noreferrer noopener"
				aria-label="LinkedIn (opens in a new tab)"
			>
				<span class="sr-only">LinkedIn</span>
				<Linkedin size={24} />
			</a>
		</li>
		<li class="mr-5 text-xs">
			<a
				class="block {$theme === 'dark' ? 'hover:text-slate-200' : 'hover:text-slate-900'}"
				href={DATA.contact.social.LinkedIn.url}
				target="_blank"
				rel="noreferrer noopener"
				aria-label="Instagram (opens in a new tab)"
			>
				<span class="sr-only">Instagram</span>
				<Instagram size={24} />
			</a>
		</li>
	</ul>
</header>
