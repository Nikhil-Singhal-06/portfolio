export interface Project {
	slug: string;
	heading: string;
	title: string;
	image: string;
	description: string;
	technologies: string[];
	url: string;
	longDescription: string;
	features: string[];
	challenges: string;
}
// Your resume data
export const DATA = {
	name: 'Nikhil Singhal',
	location: 'Karlsruhe, Germany',
	title: 'Robotics Software Engineer',

	tagline:
		'I build intelligent robotic systems that merge automation, perception, and real-world adaptability.',
	description:
		"I'm a Robotics Software Engineer passionate about creating robust and scalable systems that drive intelligent automation. With hands-on experience across research labs and industry—from developing CI/CD pipelines for robotics at Intel Labs to enhancing navigation and control systems using ROS2—I specialize in bridging the gap between simulation and real-world deployment. My work spans C++, Python, Docker, and Kubernetes, and I thrive at the intersection of robotics, distributed systems, and open-source innovation.\n\nCurrently, I'm completing my Master's in Computational Sciences while contributing to open-source robotics tools and working on failure mitigation strategies for robotic manipulation systems. When I'm not coding or testing with robot arms, I enjoy diving into system design, reading about edge AI, or tweaking Docker containers to squeeze out extra performance.",
	// avatarUrl: Nikhil,
	skills: [
		'ROS2',
		'Moveit2',
		'Nav2',
		'C++',
		'OpenCV',
		'Svelte',
		'Docker',
		'Kubernetes',
		'AWS',
		'Sveltekit',
		'Typescript',
		'Node.js',
		'Python',
		'Postgres'
	],
	contact: {
		email: 'nikhil2121s@gmail.com',
		tel: '+49 17671259281',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Nikhil-Singhal-06',
				// // icon: Icons.github,
				// icon: GithubSvg,
				navbar: true
				// dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nikhil-singhal-0612/',
				// // icon: Icons.linkedin,
				// icon: LinkedinSvg,
				navbar: true
				// dark_icon: LinkedinDarkSvg
			}
		}
	},
	experience: [
		{
			company: 'Intel Labs',
			companyUrl: 'https://www.intel.com',
			badges: [],
			location: 'Karlsruhe, Germany',
			title: 'Robotics Software Developer and Researcher - Internship and Master Thesis',
			// logoUrl: IntelLabs,
			period: 'Jan 2024 — Jan 2025',
			start: 'Jan 2024',
			end: 'Jan 2025',
			technologies: ['ROS2', 'Kubernetes', 'Docker', 'CI/CD', 'Python', 'C++', 'GitHub Actions'],
			description:
				'Contributed to the development of an open-source library for scenario execution, improving test automation efficiency by 30%. Developed CI/CD pipelines for robotics software, leading to a 60% increase in deployment efficiency and reducing release time by 40%. Optimized ROS2 application deployments using Kubernetes, reducing on-board resource consumption by 80%.'
		},
		{
			company: 'Institute of Mobile Machines and Commercial Vehicles',
			companyUrl: 'https://www.tu-braunschweig.de/imn',
			badges: [],
			location: 'Braunschweig, Germany',
			title: 'Robotics Software Developer and Researcher – Student Research Assistant',
			// logoUrl: TUBraunschweig,
			period: 'Mar 2023 — Dec 2023',
			start: 'Mar 2023',
			end: 'Dec 2023',
			technologies: ['ROS2', 'C++', 'Python', 'GPS', 'Sensor Integration'],
			description:
				'Integrated ROS2 for seamless communication across devices, boosting operational efficiency by 70%. Developed ROS nodes for real-time GPS data acquisition, enhancing localization and navigation accuracy by 40%. Applied advanced C++ and Python skills to improve robotic software solutions.'
		},
		{
			company: 'Lower Saxony State Office for Monument Preservation',
			companyUrl: 'https://denkmalpflege.niedersachsen.de/startseite/',
			badges: [],
			location: 'Hannover, Germany',
			title: 'Full Stack Developer - Working Student',
			// logoUrl: NLD,
			period: 'Feb 2022 — Feb 2023',
			start: 'Feb 2022',
			end: 'Feb 2023',
			technologies: [
				'Node.js',
				'PostgreSQL',
				'Docker',
				'JavaScript',
				'Point Cloud Processing',
				'3D Visualization'
			],
			description:
				'Developed a web-based database application using Node.js, significantly improving data management processes. Optimized query response times by 30% through advanced PostgreSQL techniques. Enhanced a Point Cloud application, improving data visualization and processing capabilities.'
		}
	],
	education: [
		{
			school: 'Technical University of Braunschweig',
			href: 'https://www.tu-braunschweig.de',
			degree: "Master's Degree in Computational Sciences in Engineering",
			// logoUrl: TUBraunschweig,
			period: 'Oct 2021 - Present',
			start: '2021',
			end: 'Present'
		},
		{
			school: 'Guru Gobind Singh Indraprastha University',
			href: 'http://www.ipu.ac.in/',
			degree: "Bachelor's Degree in Mechanical Engineering",
			// logoUrl: GGSIPU,
			period: 'Oct 2017 - Oct 2021',
			start: '2017',
			end: '2021'
		}
	],
	projects: <Project[]>[
		{
			slug: 'one',
			heading: "Master's Thesis",
			title:
				'Mitigating Application and Communication Failures in Distributed Robotic Manipulation Systems',
			url: '',
			dates: 'Aug 2024 - Jan 2025',
			active: true,
			description:
				'Developed a failure mitigation system for distributed robotic manipulation systems, leveraging a Kubernetes cluster to enhance fault tolerance and minimize downtime in edge computing environments. Conducted simulations using Gazebo and validated strategies with physical robot arms to analyze the impact of failure mitigation on task performance.',
			technologies: ['Kubernetes', 'ROS2', 'Gazebo', 'Docker', 'Python', 'C++'],
			image: 'thesis.webp',
			video: '',
			longDescription: '',
			features: [],
			challenges: ''
		},
		{
			slug: 'two',
			heading: 'Student Project',
			title:
				'Development of Realistic Failure Scenarios for Navigation Sensors in an Underwater Simulation Environment',
			url: '',
			dates: 'July 2023 - Dec 2023',
			active: false,
			description:
				'Simulated realistic failure scenarios for IMUs using ROS and Gazebo, improving simulation accuracy and system robustness. Created a Docker-based solution to bridge communication between ROS1 and ROS2, enabling seamless platform transitions and interoperability.',
			technologies: ['ROS1', 'ROS2', 'Gazebo', 'Docker', 'Python', 'C++'],
			image: 'student_project.webp',
			longDescription: '',
			features: [],
			challenges: ''
		},
		{
			slug: 'three',
			heading: 'Scenario Execution',
			title: 'Scenario Execution',
			url: '',
			description:
				'Scenario Execution is a modular framework designed to facilitate structured task execution in robotic systems by leveraging high-level scenario description.',
			technologies: ['ROS2', 'Gazebo', 'Behavior Trees', 'Python', 'C++', 'OpenSCENARIO DSL'],
			links: [
				{
					type: 'GitHub Repository',
					href: 'https://github.com/IntelLabs/scenario_execution'
				}
			],
			image: 'scenario_execution.webp',
			longDescription: '',
			features: [],
			challenges: ''
		},
		{
			slug: 'four',
			heading: 'HistoDot',
			title: 'HistoDot',
			url: '',
			description:
				'Histodot revolutionizes interaction with historic buildings by transforming complex point cloud data into intuitive insights and seamlessly integrating with databases.',
			technologies: ['ROS2', 'Gazebo', 'Behavior Trees', 'Python', 'C++', 'OpenSCENARIO DSL'],
			image: 'histodot.webp',
			longDescription: '',
			features: [],
			challenges: ''
		}
	]
};
