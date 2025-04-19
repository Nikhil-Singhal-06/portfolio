export const blogPosts = [
	{
		title: 'Getting Started with SvelteKit: A Comprehensive Guide',
		slug: 'getting-started-with-sveltekit',
		date: '2023-04-15',
		coverImage: '/placeholder.svg?height=400&width=800',
		excerpt:
			'Learn how to set up your first SvelteKit project and understand the core concepts that make it a powerful framework for building web applications.',
		tags: ['Svelte', 'SvelteKit', 'Web Development'],
		content: `
      <h2>Introduction to SvelteKit</h2>
      <p>SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. It's built on Svelte, a UI framework that compiles your components to highly efficient JavaScript that surgically updates the DOM.</p>
      
      <h2>Setting Up Your First Project</h2>
      <p>To create a new SvelteKit project, you can use the following command:</p>
      <pre><code>npm create svelte@latest my-app</code></pre>
      <p>This will guide you through the setup process, allowing you to choose TypeScript, ESLint, and other options.</p>
      
      <h2>Understanding the Project Structure</h2>
      <p>A typical SvelteKit project has the following structure:</p>
      <ul>
        <li><strong>src/routes</strong>: Contains your application's pages and API routes</li>
        <li><strong>src/lib</strong>: A place for your components, utilities, and other code</li>
        <li><strong>static</strong>: Files that should be served as-is, like images and fonts</li>
      </ul>
      
      <h2>Creating Your First Page</h2>
      <p>Pages in SvelteKit are Svelte components placed in the <code>src/routes</code> directory. For example, to create a home page, you would create <code>src/routes/+page.svelte</code>:</p>
      <pre><code>&lt;script&gt;
  let greeting = 'Hello, world!';
&lt;/script&gt;

&lt;h1&gt;{greeting}&lt;/h1&gt;
&lt;p&gt;Welcome to my SvelteKit site!&lt;/p&gt;</code></pre>
      
      <h2>Conclusion</h2>
      <p>SvelteKit provides a powerful yet simple framework for building modern web applications. Its file-based routing, server-side rendering capabilities, and efficient client-side navigation make it an excellent choice for projects of any size.</p>
      
      <p>In future posts, we'll explore more advanced topics like data loading, form handling, and deployment strategies.</p>
    `
	}
];
