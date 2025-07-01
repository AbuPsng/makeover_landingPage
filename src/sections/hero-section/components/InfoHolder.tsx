import type { InfoHolderPropsTypes } from "@/types/types";

const InfoHolder = ({
	highlightPara,
	para,
	svgUrl,
	higHlightColor,
}: InfoHolderPropsTypes) => {
	return (
		<div className="flex flex-col w-full p-4 items-center gap-y-3 ">
			<img src={svgUrl} alt="icon" />

			<p className="text-base text-gray-600 text-center">
				<span className={higHlightColor}>{highlightPara}</span> {para}
			</p>
		</div>
	);
};

export default InfoHolder;
