export type headingClassTypes = {
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
};

export type paragraphClassTypes = {
	main: string;
	dev: string;
	reviewer: string;
	review: string;
	link: string;
};

export type servicesDetailsTypes = {
	iconUrl?: string;
	title: string;
	description: string;
	number?: number;
};

// COMPONENTS PROPS TYPES
export type HeadingPropsTypes = {
	variant: "h1" | "h2" | "h3" | "h4" | "h5";
	children: string | number;
	customClass?: string;
};

export type ParagraphPropsTypes = {
	variant: "main" | "dev" | "reviewer" | "review" | "link";
	children: string;
	customClass?: string;
};

export type InfoHolderPropsTypes = {
	highlightPara: string;
	para: string;
	svgUrl: string;
	higHlightColor: string;
};

export type ImageContainerPropsTypes = {
	heading: string;
	description: string;
	beforeImageUrl: string;
	afterImageUrl: string;
};

export type ReviewHolderPropsTypes = {
	imageUrl: string;
	name: string;
	review: Array<string>;
};
