export const DATA = {
	name: 'Nikhil Singhal',
	location: 'Karlsruhe, Germany',
	title: 'Robotics Software Engineer',
	tagline: 'Building intelligent robots that see, learn, and adapt.',
	description: '',
	contact: {
		email: 'nikhil2121s@gmail.com',
		tel: '+49 176-7125-9281',
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
			badges: ['Internship', 'Master-Thesis'],
			location: 'Karlsruhe, Germany',
			period: 'Jan 2024 – Jan 2025',
			start: '2024-01',
			end: '2025-01',
			technologies: [
				'ROS2',
				'OpenSCENARIO',
				'Behavior Trees',
				'Container Orchestration',
				'GitHub Actions',
				'MoveIt2',
				'Nav2',
				'Python',
				'C++'
			],
			description:
				'Contributed to <a href="https://github.com/IntelLabs/scenario_execution" target="_blank" rel="noopener noreferrer" class="underline text-sky-600 hover:text-sky-700 dark:text-teal-600 dark:hover:text-teal-800">Scenario Execution</a>, an open-source library that couples OpenSCENARIO 2 with Behavior Trees for reproducible robotics experiments. Added automated tests and GitHub Actions CI, and built container workflows that offloaded computation to cloud nodes, reducing onboard CPU load.'
		},
		{
			title: 'Robotics Research Assistant',
			company: 'Institute of Mobile Machines & Commercial Vehicles, TU Braunschweig',
			companyUrl: 'https://www.tu-braunschweig.de/iam',
			badges: ['Research'],
			location: 'Braunschweig, Germany',
			period: 'Mar 2023 - Dec 2023',
			start: '2023-03',
			end: '2023-12',
			technologies: ['ROS2', 'Python', 'C++', '5G', 'GPS RTK'],
			description:
				'Developed ROS 2 nodes for sensor processing and control. Implemented high-bandwidth data transfer over 5G network between robots and edge servers, and integrated real-time GPS streams for precise positioning information during field trials.'
		},
		{
			title: 'Full-Stack Developer',
			company: 'Lower Saxony State Office for Monument Preservation',
			companyUrl: 'https://denkmalpflege.niedersachsen.de',
			badges: ['Working Student'],
			location: 'Hannover, Germany',
			period: 'Feb 2022 - Feb 2023',
			start: '2022-02',
			end: '2023-02',
			technologies: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Potree'],
			description:
				'Engineered a React, Node.js platform that manages and visualises giga-scale LiDAR point clouds of historic buildings. Integrated Potree for in-browser 3D rendering and tuned Postgres with indexing & partitioning to accelerate spatial queries.'
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
			title: 'Fault-Tolerant Edge Robotics: Stateful Failure-Mitigation Framework',

			shortDescription:
				'Reactive, Behavior-Tree-driven framework that detects application and communication failures in distributed ROS2 manipulation and navigation stacks, then restores operation on a Kubernetes edge cluster.',

			technologies: [
				'ROS 2',
				'Kubernetes',
				'Behavior Trees',
				'OpenSCENARIO 2',
				'Gazebo',
				'MoveIt 2',
				'Nav2',
				'Prometheus',
				'Docker'
			],

			details: [
				{
					heading: 'Problem & Motivation',
					body: 'Modern robots increasingly offload heavy computation, such as perception, SLAM, and planning, to edge servers, allowing them to run advanced algorithms without the weight and power draw of onboard GPUs. However, this shift introduces new risks: a single container crash or 5G network dropout can leave a robot stranded mid-task. Cloud-native fail-over tools such as Kubernetes restarts are fine for stateless web apps, they are too slow and lose context for ROS 2 nodes that hold a live map or trajectory. I set out to give edge-deployed robots a state-preserving, real-time recovery path.'
				},

				{
					heading: 'Project Overview',
					description:
						'Work carried out during my master’s thesis (Aug 2024 - Jan 2025) at TU Braunschweig and Intel Labs.',
					body: [
						'**Reactive framework** that detects application and communication failures and chooses one of four fallback strategies—Restart, Warm Stand-by, Running Stand-by or Hot-Standby—depending on real-time needs.',
						'Designed and implemented a Behavior-Tree-based monitoring system from OpenSCENARIO 2 task definitions, enabling real-time evaluation of ROS 2 topics, pod health, and latency thresholds, with intelligent recovery triggered only when active tasks were impacted.',
						'Validated on a mobile manipulator (arm + base) in Gazebo and on real hardware; workloads include Nav2 navigation and MoveIt 2 manipulation.'
					]
				},

				{
					heading: 'Challenges & Solutions',
					body: [
						'**State lost on pod restart →** implemented a Task Proxy that re-publishes the last goal pose after recovery.',
						'**False alarms from generic health probes →** added task-aware checks in the BT monitor before declaring failure.',
						'**Flexible standby strategies →** designed a YAML policy layer so operators can switch between Restart, Warm Stand-by, Running Stand-by and Hot-Standby at runtime with no code changes.',
						'**Measuring real-time impact →** combined ROS 2 bag recordings with cAdvisor metrics to trace detection, spin-up and hand-over events for each strategy.'
					]
				},

				{
					heading: 'Key Takeaways',
					body: [
						'**Warm Stand-by is the sweet spot:** a pre-initialised pod gives fast recovery without a noticeable CPU hit.',
						'**Hot-Standby is seamless but costly:** parallel replicas guarantee instant takeover, yet double the compute budget, best reserved for safety-critical robots.',
						'**Task-aware monitoring cuts noise:** checking whether a task is active before triggering recovery eliminates unnecessary restarts and log spam.',
						'**Behavior Trees centralise recovery logic:** the mission, monitoring rules and fail-over actions live in one declarative file, making the system easy to audit and extend.'
					]
				}
			],

			image: 'failure-mitigation-gazebo.webp',
			additionalImages: ['failure-mitigation-rviz.webp', 'failure-mitigation-real.webp']
		},
		{
			slug: 'underwater-imu-failure-simulation',
			title: 'Realistic Failure Scenarios for Underwater IMU Navigation',
			image: 'imu-underwater.webp',
			dates: 'July 2023 - Dec 2023',
			active: false,

			shortDescription:
				'Time-based fault-injection framework that simulates realistic IMU and magnetometer failures inside an underwater ROS/Gazebo environment to stress-test AUV navigation algorithms.',

			technologies: [
				'ROS1',
				'ROS2',
				'ROS1 Bridge',
				'Gazebo',
				'C++',
				'Docker',
				'IMU (9-DOF)',
				'AUV simulation'
			],

			details: [
				{
					heading: 'Problem & Motivation',
					body: 'AUVs often rely on a single MEMS IMU + tri-axial magnetometer to save mass and power. Without redundancy, any drift, bias or outright sensor failure can doom a mission especially under ice where GPS is unavailable. The goal was to inject **realistic failures** into an existing project simulation so researchers can quantify risk before field trials.'
				},

				{
					heading: 'Project Overview',
					description: '',
					body: [
						'Integrated a ROS1-based underwater world with **ROS2** via Docker + ROS1-bridge, enabling modern ROS2 nodes to drive the legacy simulation without rewriting existing code.',
						'Implemented a **time-based fault engine** that injects bias, scale-factor drift, stuck values, zero-output, saturation, temperature bias and mis-alignment on demand.',
						'Generated clean baseline bags, then replayed faults to compare normal vs. faulty IMU data on a AUV model.'
					]
				},

				{
					heading: 'Challenges & Solutions',
					body: [
						'**Bridging old ROS1 world →** containerised the entire stack and used ROS1-bridge for bidirectional topic mirroring without touching original code.',
						'**Too many possible faults →** focussed on eight with highest impact (bias, scale, misalignment, temp, stuck, zero, saturation, g-dependency).',
						'**Need repeatability →** fault parameters (type time duration axis value) loaded from YAML so researchers can toggle scenarios between runs.',
						'**Capturing ground truth →** recorded ROS 2 bags to correlate sensor error with vehicle drift.'
					]
				},

				{
					heading: 'Key Takeaways',
					body: [
						'Time-based injection mirrors real AUV transients better than single-frame spikes.',
						'Docker + bridge let legacy ROS1 sims live on while new ROS2 tooling grows around them—zero refactor.',
						'Early desktop testing caught orientation blow-ups long before pool trials, saving hardware time and risk.'
					]
				}
			],
			additionalImages: ['imu-underwater-rviz.webp']
		},
		{
			slug: 'histodot-platform',
			title: 'HistoDot — Web Platform for Architectural Heritage Data',
			image: 'histodot.webp',
			dates: 'Oct 2023 - Present',
			active: false,

			shortDescription:
				'Web platform that centralises architectural-heritage datasets, offering search, metadata editing and in-browser 3D point-cloud visualisation. Designed for researchers and conservators to easily explore, annotate, and share large scans.',

			technologies: [
				'Svelte',
				'TypeScript',
				'Node.js',
				'Tailwind CSS',
				'PostgreSQL',
				'Potree (point-cloud)',
				'Docker'
			],

			details: [
				{
					heading: 'Problem & Motivation',
					body: 'Architects and preservation experts often manage gigabytes of scans, photographs, and CAD files, typically scattered across laptops and external drives. I built HistoDot to provide a single, browser-based hub where they can search, filter, and view 3D point clouds without relying on heavy desktop software.'
				},

				{
					heading: 'Project Overview',
					body: [
						'Built with Svelte + TypeScript, REST + WebSocket backend in Node.js.',
						'Integrated **Potree** so users can load multi-million-point LAS files directly in WebGL, measure distances and add annotations.',
						'Role-based access control layer for historians vs. public visitors.'
					]
				},

				{
					heading: 'Challenges & Solutions',
					body: [
						'**Large‑dataset performance →** redesigned data storage and indexing to support smooth multi-field search, even at massive scale.',
						'**Real‑time annotation sync →** added a WebSocket layer with optimistic locking so teams can annotate simultaneousl without merge conflicts.',
						'**Huge point‑cloud files →** pre‑processed uploads into small view‑dependent tiles and loaded them on demand, keeping navigation fluid in the browser.'
					]
				},

				{
					heading: 'Key Takeaways',
					body: [
						'Tiling and on‑demand loading keep massive 3D scans interactive on ordinary laptops.',
						'Web-based access removes the need for specialized desktop tools, making the project more inclusive and easier to adopt.',
						'Role‑based workflows let institutions protect master data while still crowd‑sourcing annotations.'
					]
				}
			],
			additionalImages: ['histodot-project-view.webp', 'histodot-project-view-features.webp']
		}
	]
};
