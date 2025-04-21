export function getMousePosition(e: MouseEvent): { x: number; y: number } {
	return { x: e.clientX, y: e.clientY };
}

export function mdInline(str: string): string {
	// change **text** ➜ <strong>text</strong>
	return str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function isArray(v: unknown): v is unknown[] {
	return Array.isArray(v);
}

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}
