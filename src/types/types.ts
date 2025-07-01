export type headingClassTypes = {
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
};

// COMPONENTS PROPS TYPES
export type HeadingPropsTypes = {
	variant: "h1" | "h2" | "h3" | "h4" | "h5";
	children: string;
	customClass?: string;
};

export type InfoHolderPropsTypes = {
	highlightPara: string;
	para: string;
	svgUrl: string;
	higHlightColor: string;
};
