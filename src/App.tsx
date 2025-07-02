import CarouselSection from "./sections/carousel-section";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero-section";
import QAndASection from "./sections/QandA-section";

function App() {
	return (
		<>
			<div className="min-h-screen w-screen font-inter">
				<HeroSection />
				<CarouselSection />
				<QAndASection />
				<Footer />
			</div>
		</>
	);
}

export default App;
