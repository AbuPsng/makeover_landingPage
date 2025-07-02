import type { servicesDetailsTypes } from "@/types/types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Button } from "./ui/button";
import ServiceHolder from "./ServiceHolder";

const QAndAContainer = ({
	question,
	answer1,
	answer2,
	buttonText,
	link,
	servicesDetails,
	developer,
}: {
	question: string;
	answer1: string;
	answer2?: string;
	buttonText?: string;
	link?: string;
	servicesDetails?: Array<servicesDetailsTypes>;
	developer?: Record<string, string>;
}) => {
	return (
		<div className="w-full py-10 px-5 md:px-12 flex flex-col gap-y-5 bg-container max-w-2xl mx-auto rounded-3xl border-1 border-gray-400/10">
			<Heading variant="h2" children={question} customClass="max-w-[460px] " />

			{developer && (
				<div className="flex items-center justify-start gap-4">
					<div className=" w-13 aspect-square flex justify-center items-center rounded-full bg-white">
						<img
							src={developer.imageUrl}
							alt={`${developer.name}-image`}
							className=" rounded-full"
						/>
					</div>
					<Paragraph variant="main" customClass="hover:text-black">
						{developer.name}
					</Paragraph>
				</div>
			)}

			<Paragraph variant="main" children={answer1} />
			{answer2 && <Paragraph variant="main" children={answer2} />}

			{buttonText && (
				<Button className="bg-[#277aff] py-7 my-4 rounded-full shadow-[10px] cursor-pointer hover:bg-bg-[#277aff]  shadow-[#277aff]">
					<Heading variant="h2" children={buttonText} customClass="text-white" />
				</Button>
			)}

			{link && (
				<Paragraph
					variant="link"
					children={link}
					customClass="text-blue text-center"
				/>
			)}

			{servicesDetails && (
				<div className="flex flex-col gap-y-11 mt-5 ">
					{servicesDetails.map((service) => (
						<ServiceHolder
							key={service.title}
							number={service.number}
							iconUrl={service.iconUrl}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default QAndAContainer;
