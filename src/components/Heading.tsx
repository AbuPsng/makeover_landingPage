import { headingClasses } from "@/assets/contants";
import type { HeadingPropsTypes } from "@/types/types";
import { twMerge } from "tailwind-merge";

const Heading = ({ variant, children, customClass }: HeadingPropsTypes) => {
	const headingClass = headingClasses[variant];

	return <h1 className={twMerge(headingClass, customClass)}>{children}</h1>;
};

export default Heading;
