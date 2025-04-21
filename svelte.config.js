import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { bundledLanguages, getSingletonHighlighter } from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

const dev = process.argv.includes('dev');

const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getSingletonHighlighter({
				themes: ['one-dark-pro'],
				langs: Object.keys(bundledLanguages)
			});
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-dark-pro' }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		paths: { base: dev ? '' : process.env.BASE_PATH },
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
