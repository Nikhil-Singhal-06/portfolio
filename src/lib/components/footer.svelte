<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<footer class="text-sm text-slate-500">
	<div class="flex flex-col items-center sm:flex-row sm:justify-between">
		<div class="text-center text-xs text-slate-400">
			Built with <a
				href="https://svelte.dev/"
				class="font-medium {$theme === 'dark'
					? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
					: 'text-slate-600 hover:text-teal-500 focus-visible:text-teal-500'}"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="Svelte (opens in a new tab)"
			>
				SvelteKit
			</a>{' and '}
			<a
				href="https://tailwindcss.com/"
				class="font-medium {$theme === 'dark'
					? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
					: 'text-slate-600 hover:text-teal-500 focus-visible:text-teal-500'}"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="Tailwind CSS (opens in a new tab)"
			>
				Tailwind CSS
			</a>
		</div>
		<div class="flex items-center text-xs">
			<span
				>© {new Date().getFullYear()}
				{' '} Nikhil Singhal. All rights reserved.</span
			>
		</div>
	</div>
</footer>
