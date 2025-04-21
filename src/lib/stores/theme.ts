import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

// Initialize from localStorage if available
const userTheme = browser && localStorage.getItem('theme');
const initialTheme = userTheme ? (userTheme as Theme) : 'light';

export const theme = writable<Theme>(initialTheme);

// Update localStorage and document classes when theme changes
theme.subscribe((value) => {
	if (browser) {
		localStorage.setItem('theme', value);
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(value);
	}
});

export function toggleTheme(): void {
	theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
}
