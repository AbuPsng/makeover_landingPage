import type { servicesDetailsTypes } from "@/types/types";
import Paragraph from "./Paragraph";
import Heading from "./Heading";

const ServiceHolder = ({
	iconUrl,
	title,
	description,
	number,
}: servicesDetailsTypes) => {
	return (
		<div className="flex flex-col gap-4 justify-start">
			{/* icons and title part */}
			<div className="flex items-center justify-start gap-4">
				<div className="p-2 w-13 aspect-square flex justify-center items-center rounded-full bg-white">
					{iconUrl ? (
						<img
							src={iconUrl}
							alt={`${title}-image`}
							className="w-8 aspect-square rounded-full"
						/>
					) : (
						number && <Heading variant="h3" children={number} />
					)}
				</div>
				<Heading variant="h3">{title}</Heading>
			</div>

			{/* description part */}
			<Paragraph variant="dev" children={description} />
		</div>
	);
};

export default ServiceHolder;
