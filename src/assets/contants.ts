import type {
	headingClassTypes,
	ImageContainerPropsTypes,
	InfoHolderPropsTypes,
	paragraphClassTypes,
	ReviewHolderPropsTypes,
	servicesDetailsTypes,
} from "../types/types.ts";

export const headingClasses: headingClassTypes = {
	h1: "text-[#132130] font-medium text-[2em] tracking-normal leading-[1.07em] text-center",
	h2: "text-[#132130] font-semibold text-[1.45em] md:text-[2em] tracking-[-0.015em] leading-[1.20em] text-start",
	h3: "text-[#132130] font-normal text-xl tracking-norma; leading-[1.3em] text-start",
	h4: "text-[#132130] font-normal text-lg tracking-normal leading-[1.3em] text-start text-name hover:text-black",
	h5: "text-[#132130] font-normal text-xs tracking-tight leading-[1.3em] text-start text-name ",
};

export const paragraphClasses: paragraphClassTypes = {
	main: "text-xl font-normal  text-start text-[#677687]",
	dev: "text-md font-normal tracking-wide leading-[1.2rem] text-start text-[#677687]",
	reviewer:
		"text-md text-normal tracking-tight font-medium leading-[1.2rem] text-start text-[#677687]",
	review: "text-xl tracking-tight font-medium text-start text-black/80",
	link: "text-blue font-semibold",
};

export const heroSectionDetails: Array<InfoHolderPropsTypes> = [
	{
		highlightPara: "Delivered in 24 hours",
		para: "(maybe a little more). Never days, weeks, or months",
		svgUrl: "/svgs/hero-sections/one.svg",
		higHlightColor: "text-blue",
	},
	{
		highlightPara: "Flexibility",
		para: "to design from scratch or build on existing designs.",
		svgUrl: "/svgs/hero-sections/two.svg",
		higHlightColor: "text-pink",
	},
	{
		highlightPara: "Skip the full-time salary ",
		para: "and get better results for a quarter of the cost.",
		svgUrl: "/svgs/hero-sections/three.svg",
		higHlightColor: "text-green",
	},
];

export const carouselSlides = [
	{ name: "one", imgUrl: "/images/carousel/one.avif" },
	{ name: "two", imgUrl: "/images/carousel/two.avif" },
	{ name: "three", imgUrl: "/images/carousel/three.avif" },
	{ name: "four", imgUrl: "/images/carousel/four.avif" },
	{ name: "five", imgUrl: "/images/carousel/five.avif" },
	{ name: "six", imgUrl: "/images/carousel/six.avif" },
	{ name: "seven", imgUrl: "/images/carousel/seven.avif" },
	{ name: "eight", imgUrl: "/images/carousel/eight.avif" },
	{ name: "nine", imgUrl: "/images/carousel/nine.avif" },
	{ name: "ten", imgUrl: "/images/carousel/ten.avif" },
	{ name: "eleven", imgUrl: "/images/carousel/eleven.avif" },
	{ name: "twelve", imgUrl: "/images/carousel/twelve.avif" },
	{ name: "thirteen", imgUrl: "/images/carousel/thirteen.avif" },
	{ name: "fourteen", imgUrl: "/images/carousel/fourteen.avif" },
	{ name: "fifteen", imgUrl: "/images/carousel/fifteen.avif" },
	{ name: "sixteen", imgUrl: "/images/carousel/sixteen.png" },
	{ name: "seventeen", imgUrl: "/images/carousel/seventeen.avif" },
	{ name: "eighteen", imgUrl: "/images/carousel/eighteen.avif" },
	{ name: "nineteen", imgUrl: "/images/carousel/nineteen.avif" },
	{ name: "twenty", imgUrl: "/images/carousel/twenty.avif" },
	{ name: "twenty-one", imgUrl: "/images/carousel/twenty-one.avif" },
	{ name: "twenty-two", imgUrl: "/images/carousel/twenty-two.avif" },
	{ name: "twenty-three", imgUrl: "/images/carousel/twenty-three.avif" },
	{ name: "twenty-four", imgUrl: "/images/carousel/twenty-four.avif" },
	{ name: "twenty-five", imgUrl: "/images/carousel/twenty-five.avif" },
	{ name: "twenty-six", imgUrl: "/images/carousel/twenty-six.jpg" },
	{ name: "twenty-seven", imgUrl: "/images/carousel/twenty-seven.avif" },
	{ name: "twenty-eight", imgUrl: "/images/carousel/twenty-eight.avif" },
	{ name: "twenty-nine", imgUrl: "/images/carousel/twenty-nine.avif" },
	{ name: "thirty", imgUrl: "/images/carousel/thirty.avif" },
	{ name: "thirty-one", imgUrl: "/images/carousel/thirty-one.avif" },
	{ name: "thirty-two", imgUrl: "/images/carousel/thirty-two.avif" },
	{ name: "thirty-three", imgUrl: "/images/carousel/thirty-three.avif" },
	{ name: "thirty-four", imgUrl: "/images/carousel/thirty-four.jpg" },
	{ name: "thirty-five", imgUrl: "/images/carousel/thirty-five.avif" },
	{ name: "thirty-six", imgUrl: "/images/carousel/thirty-six.avif" },
	{ name: "thirty-seven", imgUrl: "/images/carousel/thirty-seven.avif" },
	{ name: "thirty-eight", imgUrl: "/images/carousel/thirty-eight.avif" },
];

export const servicesDetails: Array<servicesDetailsTypes> = [
	{
		iconUrl: "/svgs/services/one.svg",
		title: "Interface",
		description:
			"UX/UI design, user experience and user interface design, mobile and web app design (iOS, less Android, and web), high-converting websites, SaaS interfaces, responsive design, accessibility best practices if needed, design systems, and more…",
	},
	{
		iconUrl: "/svgs/services/two.svg",
		title: "Interaction",
		description:
			"Microinteractions, motion design and animation, gesture guidelines, state changes, screen transitions, feedback and affordances, and animation prototypes using Figma, Jitter, and Rive.",
	},
	{
		iconUrl: "/svgs/services/three.svg",
		title: "Branding",
		description:
			"Logo design, brand identity design, color palette, typography, visual language, tone of voice, brand guidelines, social media ads, and branded assets.",
	},
];

export const processDetails: Array<servicesDetailsTypes> = [
	{
		number: 1,
		title: "Send us a list of your problems.",
		description:
			"Basically anything that’s blocking growth or needs a fresh coat of a paint. Manage your priority queue with a Trello board and Slack communication.",
	},
	{
		number: 2,
		title: "We start solving them one by one.",
		description:
			"In 24 hours, you'll get design solutions to one or more problems. Delivered clearly, and ready for your feedback so we can iterate fast and keep things moving.",
	},
	{
		number: 3,
		title: "Happy and ongoing collaboration.",
		description:
			"We refine until it’s right and keep solving the next thing. This isn’t a one-off fix, it’s a design partnership that grows with your business.",
	},
];

export const imageContainerDetails: Record<string, ImageContainerPropsTypes> = {
	first: {
		heading: "First makeover quality",
		description: "Complete makeover from branding to website.",
		beforeImageUrl: "/images/before_after/before/before_1.avif",
		afterImageUrl: "/images/before_after/after/after_1.avif",
	},
	second: {
		heading: "Second makeover quality",
		description: "Experience the difference with our design solutions",
		beforeImageUrl: "/images/before_after/before/before_2.avif",
		afterImageUrl: "/images/before_after/after/after_2.avif",
	},
};

export const reviews: Array<ReviewHolderPropsTypes> = [
	{
		name: "Chris Maddern",
		imageUrl: "/images/profiles/one.avif",
		review: [
			"Damian joined one of our most tenured and senior teams in Button as the design lead on highly open-ended and creative projects",
			"Ahe was able to both seamlessly integrate with the team that existed, and push forward the concepts and creativity of the projects culminating in the creation of two apps: Instalink, and LATR.",
			"Damian brings an extraordinary level of enthusiasm and dedication to his design work, qualities that made him an exceptional asset to the team, and that would make him a great addition to any team he may wish to join.",
		],
	},
	{
		name: "Liam Sarsfield",
		imageUrl: "/images/profiles/two.avif",
		review: [
			"An extremely competent and professional designer who works quickly, diligently and is a pleasure to work with. I plan to work with Damian for as long as he's capable of resisting the inevitable job offers.",
			"That's all, thank you for your curiosity ;)",
		],
	},
	{
		name: "Tim 'Hilton' Yzeramns",
		imageUrl: "/images/profiles/three.avif",
		review: [
			"Damian is an extremely ambitious, hard working and super talented designer. His work ethic, process and the care he puts into his projects really shine through in the final product which has been consistently outstanding.Couldn't recommend him more .",
			"That's all, thank you for your curiosity ;)",
		],
	},
	{
		name: "Alexander Boethius",
		imageUrl: "/images/profiles/four.avif",
		review: [
			"AWorking with Damian isn’t just working with a highly talented professional. It’s collaborating with someone who truly joins your project, sees it with fresh eyes, and makes you feel seen and heard in what you’re trying to bring to life.",
			"His communication skills are better than any UI/UX designer I’ve worked with, and he’s incredibly punctual and reliable when it comes to delivering assets. But beyond that, Damian brings something rare: he thinks creatively while staying grounded in development feasibility. He doesn’t overcomplicate. He pushes the boundaries of simplicity and logic, catching edge cases that most QA testers would spot much later.",
			"What really stands out is his holistic approach. When Damian designs a feature, he considers the full experience from the user’s perspective. It’s not just about visual polish or delightful interactions, but about creating clear, intuitive user journeys that truly close the loop.",
		],
	},
];
