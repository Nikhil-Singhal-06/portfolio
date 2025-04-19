export function getMousePosition(e: MouseEvent): { x: number; y: number } {
	return { x: e.clientX, y: e.clientY };
}

export function formatDateNew(dateString: string): string {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}

export function mdInline(str: string): string {
	// change **text** ➜ <strong>text</strong>
	return str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function isArray(v: unknown): v is unknown[] {
	return Array.isArray(v);
}
