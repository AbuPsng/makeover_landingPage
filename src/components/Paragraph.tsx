import { paragraphClasses } from "@/assets/contants";
import { cn } from "@/lib/utils";
import type { ParagraphPropsTypes } from "@/types/types";

const Paragraph = ({
	variant,
	children,
	customClass = "",
}: ParagraphPropsTypes) => {
	const cls = paragraphClasses[variant];

	return <p className={cn(cls, customClass)}>{children} </p>;
};

export default Paragraph;
