<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<section
	id="about"
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label="About me"
>
	<div class="max-w-prose text-justify leading-relaxed">
		<p class="mb-4">
			I’m a <span class="font-bold">robotics software engineer</span> passionate about building
			intelligent systems that blend <span class="font-semibold">computer&nbsp;vision</span>,
			control, and scalable automation. My work lives at the intersection of embedded systems,
			distributed architectures, and real‑world robotics.
		</p>

		<p class="mb-4">
			I recently completed an M.Sc. in Computational Sciences in Engineering at&nbsp;
			<a
				class="font-medium {$theme === 'dark'
					? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
					: 'text-slate-900 hover:text-sky-600 focus-visible:text-sky-600'}"
				href="https://www.tu-braunschweig.de"
				target="_blank"
				rel="noreferrer noopener"
			>
				Technical University of Braunschweig,
			</a>
			specialising in robotics, computer vision, and artificial intelligence. Core courses included
			<span class="italic">Robot Control & Optimisation</span>,
			<span class="italic">Pattern Recognition</span>, and a hands‑on
			<span class="italic">Robotics Laboratory</span>.
		</p>

		<p class="mb-4">
			Professionally, I have developed perception software, behaviour‑tree testing tools, and
			large‑scale 3‑D visualisation platforms for both research groups and industry partners. My
			goal is to build reliable, well‑engineered systems that enable robots to understand their
			surroundings and act with confidence.
		</p>

		<p>Away from the keyboard I’m usually travelling, reading, or listening to music.</p>
	</div>
</section>
