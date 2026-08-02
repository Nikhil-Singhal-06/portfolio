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
			<span class="font-bold">computer vision &amp; robotics software engineer</span> who builds perception
			systems that let robots see and act in the real world. My work centres on 6‑DOF pose estimation,
			deep‑learning and classical vision pipelines, and the distributed, scalable software that runs
			them in production.
		</p>

		<p class="mb-4">
			I hold an M.Sc. in Computational Sciences in Engineering from&nbsp;
			<a
				class="font-medium {$theme === 'dark'
					? 'text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
					: 'text-slate-900 hover:text-sky-600 focus-visible:text-sky-600'}"
				href="https://www.tu-braunschweig.de"
				target="_blank"
				rel="noreferrer noopener"
			>
				Technical University of Braunschweig,
			</a>
			specialising in robotics, computer vision, and artificial intelligence. Core courses included
			<span class="italic">Robot Control &amp; Optimisation</span>,
			<span class="italic">Pattern Recognition</span>, and a hands‑on
			<span class="italic">Robotics Laboratory</span>. Alongside my studies I researched
			fault‑tolerant edge robotics at Intel Labs, co‑authoring a preprint on stateful failure
			recovery for distributed ROS 2 systems.
		</p>

		<p class="mb-4">
			Across research groups and industry, I’ve built perception software, behaviour‑tree testing
			tools, and large‑scale 3D visualisation platforms. My goal is to engineer reliable systems
			that let robots understand their surroundings and act with confidence.
		</p>

		<p>Away from the keyboard you’ll find me travelling, reading or discovering new music.</p>
	</div>
</section>
