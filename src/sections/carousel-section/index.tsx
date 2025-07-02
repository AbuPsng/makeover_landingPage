import { carouselSlides } from "@/assets/contants";
import Slider from "react-slick";
import Slide from "./components/Slide";
import { useEffect, useState } from "react";
import { useWidthStore } from "@/store/useWidthStore";

const CarouselSection = () => {
	const { width, setWidth } = useWidthStore();

	const [settings, setSettings] = useState({
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
	});

	console.log(width, "widh");
	console.log(settings, "widh");

	useEffect(() => {
		const updateWidth = () => {
			setWidth(window.innerWidth);
		};

		// ✅ Set initial width
		updateWidth();

		// ✅ Listen to resize
		window.addEventListener("resize", updateWidth);

		// ✅ Clean up on unmount
		return () => window.removeEventListener("resize", updateWidth);
	}, [setWidth]); // only needs to run once on mount

	useEffect(() => {
		setSettings((prev) => ({
			...prev,
			centerPadding: width < 600 ? "2%" : "25%",
		}));
	}, [width]);

	return (
		<section className="w-full  overflow-x-hidden  mb-10">
			<Slider {...settings} className="w-full bg-transparent flex ">
				{carouselSlides.map((slide) => (
					<Slide key={slide.name} {...slide} />
				))}
			</Slider>
		</section>
	);
};

export default CarouselSection;
