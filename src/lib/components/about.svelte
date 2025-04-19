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
			I’m a
			<span class="font-bold">robotics software engineer</span> passionate about building intelligent
			systems that blend computer vision, control, and scalable automation. My work sits at the intersection
			of embedded firmware, distributed edge architectures and real‑world robots.
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
			large‑scale visualisation platforms for both research groups and industry partners. My goal is
			to build reliable, well‑engineered systems that enable robots to understand their surroundings
			and act with confidence.
		</p>

		<p>Away from the keyboard you’ll find me travelling, reading or discovering new music.</p>
	</div>
</section>
