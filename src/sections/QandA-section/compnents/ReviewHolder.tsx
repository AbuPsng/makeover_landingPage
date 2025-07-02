import Paragraph from "@/components/Paragraph";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { ReviewHolderPropsTypes } from "@/types/types";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const clsName = "text-gray-400 h-6 ";

const ReviewHolder = ({ name, imageUrl, review }: ReviewHolderPropsTypes) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleAccordion = () => {
		setIsOpen((currentState: boolean) => !currentState);
	};
	return (
		<div
			className={cn(
				"w-[90%] pb-3 mx-auto relative",
				name !== "Alexander Boethius" && "border-b-1 "
			)}
		>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="hover:no-underline pr-0 [&>svg]:hidden">
						<div onClick={toggleAccordion} className="absolute top-3 right-0">
							{isOpen ? <X className={clsName} /> : <Plus className={clsName} />}
						</div>
						<div className="flex flex-col gap-y-3">
							<div className="flex items-center justify-start gap-4">
								<div className=" w-13 aspect-square flex justify-center items-center rounded-full bg-white">
									<img src={imageUrl} alt={`${name}-image`} className=" rounded-full" />
								</div>
								<Paragraph variant="reviewer" customClass="hover:text-black">
									{name}
								</Paragraph>
							</div>
							<Paragraph variant="review" children={review[0]} />
						</div>
					</AccordionTrigger>
					{review.slice(1).map((rev) => (
						<AccordionContent key={rev}>
							<Paragraph variant="review" children={rev} />
						</AccordionContent>
					))}
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default ReviewHolder;
