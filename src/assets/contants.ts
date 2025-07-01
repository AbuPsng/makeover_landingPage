import type {
	headingClassTypes,
	InfoHolderPropsTypes,
} from "../types/types.ts";

export const headingClasses: headingClassTypes = {
	h1: "font-medium text-[2em] tracking-[medium] leading-[1.02em] text-center",
	h2: "font-medium text-2xl tracking-tight leading-[1.05em] text-start",
	h3: "font-medium text-xl tracking-tight leading-[1.3em] text-start",
	h4: "font-normal text-lg tracking-normal leading-[1.3em] text-start text-name hover:text-black",
	h5: "font-normal text-xs tracking-tight leading-[1.3em] text-start text-name ",
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
