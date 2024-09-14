import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const dev = process.argv.includes('dev');

const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['vesper'],
				langs: ['javascript', 'typescript', 'svelte', 'py', 'python']
			});
			await highlighter.loadLanguage('javascript', 'typescript', 'svelte', 'py', 'python');
			await highlighter.loadTheme('vesper');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'vesper' }));
			return `{@html \`${html}\` }`;
		}
	}
};
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		paths: { base: dev ? '' : process.env.BASE_PATh },
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path === '/not-found' && referrer === '/blog/how-we-built-out-404-page') {
					return;
				}
				throw new Error(message);
			},
			crawl: true,
			entries: ['*']
		}
	}
};

export default config;
