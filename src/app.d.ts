// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface toc {
		id: string;
		lable: string;
	}
	interface Post {
		title: string;
		slug: string;
		description: string;
		image?: string;
		date: string;
		tags: string[];
		published: boolean;
		toc: toc[];
		minutesRead: int;
	}
}

export {};
