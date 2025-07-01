import { heroSectionDetails } from "@/assets/contants";
import Heading from "@/components/Heading";
import InfoHolder from "./components/InfoHolder";

const HeroSection = () => {
	return (
		<section className="w-full  flex flex-col items-center justify-between gap-y-20 py-8">
			{/* logo part */}
			<img src="/svgs/logo.svg" alt="" className="h-8 " />

			{/* Heading and about part */}

			<div className="flex flex-col items-center justify-center w-full px-4 gap-y-18 ">
				{/* Heading Part */}
				<Heading
					variant="h1"
					children="Your design partner for apps, websites, brands and products."
					customClass="px-6 "
				/>
				{/* About us part */}
				<div className="flex flex-col gap-y-5">
					{heroSectionDetails.map((detail, i) => {
						return <InfoHolder key={i} {...detail} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
