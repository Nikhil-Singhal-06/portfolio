import { CodeIcon, HomeIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';
import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';
import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';
import IntelLabs from '$lib/imgs/intel_labs_logo.jpeg';
import TUBraunschweig from '$lib/imgs/TU-braunschweig.jpeg';
import NLD from '$lib/imgs/nld.avif';
import GGSIPU from '$lib/imgs/GGSIU.png';
import Nikhil from '$lib/imgs/me.jpeg';

// Your resume data
export const DATA = {
	name: 'Nikhil Singhal',
	initials: 'NS',
	url: 'https://github.com/Nikhil-Singhal-06',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Karlsruhe, Germany',
	locationLink: '',
	description:
		'Robotics Engineer with a passion for automation and computer vision technologies. I love tackling complex challenges and building efficient solutions. Always exploring new technologies.',
	summary:
		"I’m currently pursuing my Master's in Computational Sciences while working on advanced robotics projects. I've interned at Intel Labs and contributed to several robotics software solutions that improve automation and operational efficiency. With a background in C++, Python, and ROS, I’m driven by a love for creating innovative systems that enhance performance and solve real-world problems.",
	avatarUrl: Nikhil,
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
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		// { href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'nikhil2121s@gmail.com',
		tel: '+49 17671259281',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/Nikhil-Singhal-06',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nikhil-singhal-0612/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			// X: {
			// 	name: 'X',
			// 	url: 'https://twitter.com/Sikandar_Bhide',
			// 	// // icon: Icons.x,
			// 	icon: TwitterSvg,
			// 	navbar: true,
			// 	dark_icon: TwitterDarkSvg
			// },
			// PeerList: {
			// 	name: 'PeerList',
			// 	url: 'https://peerlist.io/bhide',
			// 	// // icon: Icons.x,
			// 	icon: PeerListSvg,
			// 	navbar: true,
			// 	dark_icon: PeerListDarkSvg
			// },
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Intel Labs',
			href: 'https://www.intel.com',
			badges: [],
			location: 'Karlsruhe, Germany',
			title: 'Robotics Software Development Intern | Master’s Thesis Candidate',
			logoUrl: IntelLabs,
			start: 'Jan 2024',
			end: 'Jan 2025',
			description:
				'Contributed to the development of an open-source library for scenario execution, improving test automation efficiency by 30%. Developed CI/CD pipelines for robotics software, leading to a 60% increase in deployment efficiency and reducing release time by 40%. Optimized ROS2 application deployments using Kubernetes, reducing on-board resource consumption by 80%.'
		},
		{
			company: 'Institute of Mobile Machines and Commercial Vehicles',
			href: 'https://www.tu-braunschweig.de/imm',
			badges: [],
			location: 'Braunschweig, Germany',
			title: 'Student Research Assistant',
			logoUrl: TUBraunschweig,
			start: 'Mar 2023',
			end: 'Dec 2023',
			description:
				'Integrated ROS2 for seamless communication across devices, boosting operational efficiency by 70%. Developed ROS nodes for real-time GPS data acquisition, enhancing localization and navigation accuracy by 40%. Applied advanced C++ and Python skills to improve robotic software solutions.'
		},
		{
			company: 'Lower Saxony State Office for Monument Preservation',
			href: 'https://denkmalpflege.niedersachsen.de/startseite/',
			badges: [],
			location: 'Hannover, Germany',
			title: 'Working Student',
			logoUrl: NLD,
			start: 'Feb 2022',
			end: 'Feb 2023',
			description:
				'Developed a web-based database application using Node.js, significantly improving data management processes. Optimized query response times by 30% through advanced PostgreSQL techniques. Enhanced a Point Cloud application, improving data visualization and processing capabilities.'
		}
	],
	education: [
		{
			school: 'Technical University of Braunschweig',
			href: 'https://www.tu-braunschweig.de',
			degree: "Master's Degree in Computational Sciences in Engineering",
			logoUrl: TUBraunschweig,
			start: '2021',
			end: 'Present'
		},
		{
			school: 'Guru Gobind Singh Indraprastha University',
			href: 'http://www.ipu.ac.in/',
			degree: "Bachelor's Degree in Mechanical Engineering",
			logoUrl: GGSIPU,
			start: '2017',
			end: '2021'
		}
	],
	projects: [
		{
			heading: "Master's Thesis",
			title:
				'Mitigating Application and Communication Failures in Distributed Robotic Manipulation Systems',
			// href: 'https://example.com',
			dates: 'Aug 2024 - Jan 2025',
			active: true,
			description:
				'Developed a failure mitigation system for distributed robotic manipulation systems, leveraging a Kubernetes cluster to enhance fault tolerance and minimize downtime in edge computing environments. Conducted simulations using Gazebo and validated strategies with physical robot arms to analyze the impact of failure mitigation on task performance.',
			technologies: ['Kubernetes', 'ROS2', 'Gazebo', 'Docker', 'Python', 'C++'],
			// links: [
			// 	{
			// 		type: 'Research Paper',
			// 		href: 'https://example.com',
			// 		icon: ''
			// 	}
			// ],
			image: 'MasterArbeit',
			video: ''
		},
		{
			heading: 'Student Project',
			title:
				'Development of Realistic Failure Scenarios for Navigation Sensors in an Underwater Simulation Environment',
			// href: 'https://example.com',
			dates: 'July 2023 - Dec 2023',
			active: false,
			description:
				'Simulated realistic failure scenarios for IMUs using ROS and Gazebo, improving simulation accuracy and system robustness. Created a Docker-based solution to bridge communication between ROS1 and ROS2, enabling seamless platform transitions and interoperability.',
			technologies: ['ROS1', 'ROS2', 'Gazebo', 'Docker', 'Python', 'C++'],
			// links: [
			// 	{
			// 		type: 'GitHub Repository',
			// 		href: 'https://github.com/open-source-repo-link',
			// 		icon: ''
			// 	}
			// ],
			image: 'StudienArbeit'
			// video: ''
		}
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		}
	]
};
