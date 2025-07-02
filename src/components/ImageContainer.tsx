import type { ImageContainerPropsTypes } from "@/types/types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { useState } from "react";
import { cn } from "@/lib/utils";

const toggleBtnClass = " border-1 border-gray-500/20 text-blue ";
const baseBtnClass = " cursor-pointer px-3 py-1 rounded-4xl";

const ImageContainer = ({
	heading,
	description,
	beforeImageUrl,
	afterImageUrl,
}: ImageContainerPropsTypes) => {
	const [currentImage, setCurrentImage] = useState(afterImageUrl);

	const handleImageBefore = () => {
		setCurrentImage(beforeImageUrl);
	};

	const handleImageAfter = () => {
		setCurrentImage(afterImageUrl);
	};

	const isCurrentImageBefore = currentImage === beforeImageUrl;

	return (
		<div className="w-full py-10 px-9 flex flex-col gap-y-10 bg-container max-w-2xl mx-auto rounded-3xl border-1 border-gray-400/10">
			<div className="flex flex-col gap-y-4  items-center  mx-auto">
				<Heading variant="h2" children={heading} />

				<Paragraph
					variant="main"
					children={description}
					customClass="text-center"
				/>
			</div>

			<div className="rounded-3xl overflow-hidden">
				<img src={currentImage} alt="images" />
			</div>

			<div className="flex gap-x-3 hover:text-black w-full justify-center">
				<button
					className={cn(baseBtnClass, isCurrentImageBefore && toggleBtnClass)}
					onClick={handleImageBefore}
				>
					<Paragraph
						variant="dev"
						children="Before"
						customClass={isCurrentImageBefore ? "text-blue" : ""}
					/>
				</button>
				<button
					className={cn(baseBtnClass, !isCurrentImageBefore && toggleBtnClass)}
					onClick={handleImageAfter}
				>
					<Paragraph
						variant="dev"
						children="After"
						customClass={!isCurrentImageBefore ? "text-blue" : ""}
					/>
				</button>
			</div>
		</div>
	);
};

export default ImageContainer;
