export const DATA = {
	name: 'Nikhil Singhal',
	location: 'Karlsruhe, Germany',
	title: 'Robotics Software Engineer',
	tagline: 'Building intelligent robots that see, learn, and adapt.',
	description:
		'I am driven by the challenge of turning intelligent algorithms into dependable machines. I recently completed an M.Sc. in Computational Sciences in Engineering at the Technical University of Braunschweig, specialising in robotics, computer vision and artificial intelligence through courses such as Robot Control and Optimisation, Pattern Recognition and a hands‑on Robotics Laboratory. In my professional work I have developed perception software, behaviour‑tree testing tools and large‑scale 3‑D visualisation platforms for both research groups and industry partners. My goal is to build reliable, well‑engineered systems that enable robots to understand their surroundings and act with confidence. Away from work I enjoy travelling, reading and listening to classical and jazz music.',
	contact: {
		email: 'nikhil2121s@gmail.com',
		tel: '+49 176‑7125‑9281',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/nikhil-singhal-06'
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nikhil-singhal-0612'
			},
			Instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/nikhil_singhal_06?igsh=bXJpZnBpZ3p4bHNy&utm_source=qr'
			}
		}
	},
	experience: [
		{
			title: 'Robotics Software Engineer',
			company: 'Intel Labs',
			companyUrl: 'https://www.intel.com/research',
			badges: ['Internship', 'Master‑Thesis'],
			location: 'Karlsruhe, Germany',
			period: 'Jan 2024 – Jan 2025',
			start: '2024-01',
			end: '2025-01',
			technologies: [
				'ROS2',
				'OpenSCENARIO',
				'Behavior Trees',
				'Container Orchestration',
				'GitHub Actions',
				'MoveIt2',
				'Nav2',
				'Python',
				'C++'
			],
			description:
				'Contributed to <a href="https://github.com/IntelLabs/scenario_execution" target="_blank" rel="noopener noreferrer" class="underline text-sky-600 hover:text-sky-700 dark:text-teal-600 dark:hover:text-teal-800">Scenario Execution</a>, an open‑source library that couples OpenSCENARIO 2 with Behavior Trees for reproducible robotics experiments. Added automated tests and GitHub Actions CI, and built container workflows that offloaded computation to cloud nodes—reducing onboard CPU load.'
		},
		{
			title: 'Robotics Research Assistant',
			company: 'Institute of Mobile Machines & Commercial Vehicles, TU Braunschweig',
			companyUrl: 'https://www.tu-braunschweig.de/iam',
			badges: ['Research'],
			location: 'Braunschweig, Germany',
			period: 'Mar 2023 – Dec 2023',
			start: '2023-03',
			end: '2023-12',
			technologies: ['ROS2', 'Python', 'C++', '5G', 'GPS RTK'],
			description:
				'Developed ROS 2 nodes for sensor processing and control. Implemented high‑bandwidth data transfer over 5 G between robots and edge servers, and integrated real‑time GPS streams for centimeter‑level positioning during field trials.'
		},
		{
			title: 'Full‑Stack Developer',
			company: 'Lower Saxony State Office for Monument Preservation',
			companyUrl: 'https://denkmalpflege.niedersachsen.de',
			badges: ['Working Student'],
			location: 'Hannover, Germany',
			period: 'Feb 2022 – Feb 2023',
			start: '2022-02',
			end: '2023-02',
			technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Potree'],
			description:
				'Engineered a React/Node.js platform that manages and visualises giga‑scale LiDAR point clouds of historic buildings. Integrated Potree for in‑browser 3‑D rendering and tuned Postgres with indexing & partitioning to accelerate spatial queries.'
		}
	],
	education: [
		{
			school: 'Technical University of Braunschweig',
			href: 'https://www.tu-braunschweig.de',
			degree: 'M.Sc. Computational Sciences in Engineering',
			period: '2025',
			start: '2022-04',
			end: '2025-03'
		}
	],
	projects: [
		{
			slug: 'edge-failure-mitigation',
			title: 'Fault‑Tolerant Edge Robotics: Stateful Failure‑Mitigation Framework',
			shortDescription:
				'Reactive, Behavior‑Tree‑driven framework that detects application or communication failures in distributed ROS 2 manipulation / navigation stacks and restores operation on a Kubernetes edge cluster.',
			technologies: [
				'ROS 2',
				'Kubernetes',
				'Behavior Trees',
				'OpenSCENARIO 2',
				'Gazebo',
				'MoveIt 2',
				'Nav2',
				'Prometheus',
				'Docker'
			],
			details: [
				{
					heading: 'Problem & Motivation',
					body: 'Modern robots off‑load heavy perception, SLAM and planning to edge servers so they can run richer algorithms without lugging a GPU around. But a single container crash or 5 G dropout can strand a manipulator mid‑task. Cloud‑native fail‑over tools (Kubernetes restarts, rolling updates) are great for stateless web apps; they are too slow and lose context for ROS 2 nodes that hold live map or trajectory state. I set out to give edge‑deployed robots a state‑preserving, real‑time recovery path.'
				},
				{
					heading: 'Project Overview',
					description:
						'Designed during my master’s thesis (August 2024 – Jan 2025) at TU Braunschweig & Intel Labs.',
					body: [
						'**Reactive framework** that detects application or communication failures and chooses one of four fallback strategies—Restart, Pre‑initialised Pod, Running Stand‑by, or Parallel Hot‑Standby—depending on the task’s real‑time needs.',
						'Built around a **Behavior‑Tree monitor** generated from OpenSCENARIO 2 task files; it watches ROS 2 topics, pod health and latency thresholds, then triggers recovery only if the current task is affected.',
						'Validated on a mobile manipulator (arm + base) in Gazebo and on real hardware; workloads include Nav2 navigation and MoveIt 2 manipulation. ​'
					]
				},
				{
					heading: 'Challenges & Solutions',
					body: [
						'**State loss on pod restart →** built a Task‑Proxy that re‑publishes the last goal pose after recovery.',
						'**False alarms from generic health probes →** wrote a BT monitor that checks task context before declaring failure.',
						'**Flexible standby strategies →** designed a YAML policy layer so operators can switch between Restart, Warm Stand‑by, Running Stand‑by, and Hot‑Standby at runtime without code changes.',
						'**Evaluating real‑time impact →** used ROS 2 bag recordings together with cAdvisor metrics to trace detection, spin‑up, and hand‑over events for each strategy.'
					]
				},
				{
					heading: 'Key Takeaways',
					body: [
						'**Warm standby strikes the best balance —** keeping a pre‑initialised pod ready means recovery is quick without a noticeable hit to normal CPU usage.',
						'**Hot‑standby is instantaneous but expensive —** running a parallel replica ensures seamless takeover, yet the extra compute load makes sense only for safety‑critical robots.',
						'**Task‑aware monitoring prevents false alarms —** checking whether a task is actually active before triggering recovery avoids unnecessary restarts and log noise.',
						'**Behavior Trees put recovery logic where it belongs —** they let you describe the mission, the monitoring rules, and the fail‑over actions in the same declarative file, keeping everything easy to audit and extend.'
					]
				}
			],
			image: 'failure-mitigation-gazebo.webp',
			additionalImages: ['failure-mitigation-rviz.webp', 'failure-mitigation-real.webp']
		},
		{
			slug: 'underwater-imu-failure-simulation',
			title: 'Realistic Failure Scenarios for Underwater IMU Navigation',
			image: 'imu-underwater.webp',
			dates: 'July 2023 - Dec 2023',
			active: false,

			shortDescription:
				'Time‑based fault‑injection framework that simulates realistic IMU and magnetometer failures inside an underwater ROS/Gazebo environment to stress‑test AUV navigation algorithms.',

			technologies: [
				'ROS1',
				'ROS2',
				'ROS1 Bridge',
				'Gazebo',
				'C++',
				'Docker',
				'IMU (9‑DOF)',
				'AUV simulation'
			],

			details: [
				{
					heading: 'Problem & Motivation',
					body: 'AUVs often rely on a single MEMS IMU + tri‑axial magnetometer to save mass and power. Without redundancy, any drift, bias or outright sensor failure can doom a mission especially under ice where GPS is unavailable. The goal was to inject **realistic failures** into an existing project simulation so researchers can quantify risk before field trials.'
				},

				{
					heading: 'Project Overview',
					description: '',
					body: [
						'Integrated a ROS1‑based underwater world with **ROS2** via Docker + `ros1_bridge`, enabling modern ROS2 nodes to drive the legacy simulation without rewriting existing code.',
						'Implemented a **time‑based fault engine** that injects bias, scale‑factor drift, stuck values, zero‑output, saturation, temperature bias and mis‑alignment on demand.',
						'Generated clean baseline bags, then replayed faults to compare normal vs. faulty IMU data on a AUV model.'
					]
				},

				{
					heading: 'Challenges & Solutions',
					body: [
						'**Bridging old ROS1 world →** containerised the entire stack and used `ros1_bridge` for bidirectional topic mirroring without touching original code.',
						'**Too many possible faults →** focussed on eight with highest impact (bias, scale, misalignment, temp, stuck, zero, saturation, g‑dependency).',
						'**Need repeatability →** fault parameters (`type time duration axis value`) loaded from YAML so researchers can toggle scenarios between runs.',
						'**Capturing ground truth →** recorded ROS 2 bags to correlate sensor error with vehicle drift.'
					]
				},

				{
					heading: 'Key Takeaways',
					body: [
						'Time‑based injection mirrors real AUV transients better than single‑frame spikes.',
						'Docker + bridge let legacy ROS1 sims live on while new ROS2 tooling grows around them—zero refactor.',
						'Early desktop testing caught orientation blow‑ups long before pool trials, saving hardware time and risk.'
					]
				}
			],
			additionalImages: ['imu-underwater-rviz.webp']
		},
		{
			slug: 'histodot-platform',
			title: 'HistoDot — Web Platform for Architectural Heritage Data',
			image: 'histodot.webp',
			dates: 'Oct 2023 - Present',
			active: false,

			shortDescription:
				'Web platform that centralises architectural‑heritage datasets, offering search, metadata editing and in‑browser 3‑D point‑cloud visualisation. Built so researchers and conservators can explore, annotate and share large scans without specialised desktop software.',

			technologies: [
				'Svelte',
				'TypeScript',
				'Node.js',
				'Tailwind CSS',
				'PostgreSQL',
				'Potree (point‑cloud)',
				'Docker'
			],

			details: [
				{
					heading: 'Problem & Motivation',
					body: 'Architects and preservation experts juggle gigabytes of scans, photos and CAD files—usually spread across laptops and external drives. I built HistoDot to give them **one browser‑based hub** where they can search, filter and view 3‑D point clouds without hefty desktop software.'
				},

				{
					heading: 'Project Overview',
					body: [
						'Built with Svelte + TypeScript; REST + WebSocket backend in Node.js.',
						'Integrated **Potree** so users can load multi‑million‑point LAS files directly in WebGL, measure distances and add annotations.',
						'Role‑based access control layer for historians vs. public visitors.'
					]
				},

				{
					heading: 'Challenges & Solutions',
					body: [
						'**Large dataset performance →** used Postgres partitioning + GIN indexes; complex search queries drop from seconds to <200 ms.',
						'**Heavy point‑cloud renders →** pregenerated EPT tiles + lazy loading to keep FPS smooth on consumer GPUs.',
						'**Non‑tech user base →** added inline tool‑tips, keyboard shortcuts and a “tour” modal so first‑time visitors don’t get lost.'
					]
				},

				{
					heading: 'Key Takeaways',
					body: [
						'Full‑stack work sharpened my API design and database tuning skills—useful when robotics data starts to scale.',
						'3‑D web visualisation taught me performance budgeting: every MB and draw call counts.',
						'Side projects outside robotics keep my front‑end skills fresh and make me a better generalist.'
					]
				}
			],
			additionalImages: ['histodot-project-view.webp', 'histodot-project-view-features.webp']
		}
	]
};
