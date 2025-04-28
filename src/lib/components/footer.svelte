<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<footer class="text-sm text-slate-500">
	<div class="flex flex-col items-center sm:flex-row sm:justify-between">
		<div class="text-center text-xs">
			Built with <a
				href="https://svelte.dev/"
				class="font-medium"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="Svelte (opens in a new tab)"
			>
				SvelteKit
			</a>{' and '}
			<a
				href="https://tailwindcss.com/"
				class="font-medium"
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
