import { writable } from 'svelte/store';

export const activeSection = writable<string>('about');

export function updateActiveSection(sections: string[]): void {
	if (typeof window === 'undefined') return;

	// Find the section that is currently most visible in the viewport
	let currentSection = '';
	let maxVisibility = 0;

	sections.forEach((sectionId) => {
		const element = document.getElementById(sectionId);
		if (!element) return;

		const rect = element.getBoundingClientRect();
		const viewportHeight = window.innerHeight;

		// Calculate how much of the section is visible in the viewport
		const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
		const visibilityRatio = visibleHeight > 0 ? visibleHeight / element.offsetHeight : 0;

		if (visibilityRatio > maxVisibility) {
			maxVisibility = visibilityRatio;
			currentSection = sectionId;
		}
	});

	if (currentSection) {
		activeSection.set(currentSection);
	}
}
