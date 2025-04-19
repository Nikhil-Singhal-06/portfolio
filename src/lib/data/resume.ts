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
				'Contributed to Scenario Execution, an open‑source library that couples OpenSCENARIO 2 with Behavior Trees for reproducible robotics experiments. Added automated tests and GitHub Actions CI, and built container workflows that offloaded computation to cloud nodes—reducing onboard CPU load.'
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
				'Master‑thesis project that designs a reactive, Behavior‑Tree‑driven framework to detect application or communication failures in distributed ROS 2 manipulation / navigation stacks and restore operation in seconds on a Kubernetes edge cluster.',
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
					heading: 'Background & Motivation',
					body: 'Modern robots off‑load heavy perception, SLAM and planning to edge servers so they can run richer algorithms without lugging a GPU around. But a single container crash or 5 G dropout can strand a manipulator mid‑task. Cloud‑native fail‑over tools (Kubernetes restarts, rolling updates) are great for stateless web apps; they are too slow and lose context for ROS 2 nodes that hold live map or trajectory state. I set out to give edge‑deployed robots a state‑preserving, real‑time recovery path.'
				},
				{
					heading: 'Project Overview',
					body: [
						'Reactive framework that detects application **or** communication failures and chooses one of four fallback strategies: Restart, Pre‑initialised Pod, Running Stand‑by, Parallel Hot‑Standby.',
						'Behavior‑Tree monitor generated from OpenSCENARIO 2; triggers recovery only when the active task is affected.',
						'Validated on a UR‑arm mobile base in Gazebo + real hardware (Nav2 navigation & MoveIt2 manipulation).'
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
			image: 'thesis.webp'
		}
	]
};
