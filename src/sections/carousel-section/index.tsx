import { carouselSlides } from "@/assets/contants";
import Slider from "react-slick";
import Slide from "./components/Slide";

const settings = {
	infinite: true,
	centerMode: true,
	centerPadding: "2%",
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 100,
	arrows: false, // No arrows
	pauseOnHover: true,
};

const CarouselSection = () => {
	return (
		<section className="w-full  overflow-x-hidden  mb-10">
			<Slider {...settings} className="w-full bg-transparent flex py-10">
				{carouselSlides.map((slide) => (
					<Slide key={slide.name} {...slide} />
				))}
			</Slider>
		</section>
	);
};

export default CarouselSection;
