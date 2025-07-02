import Paragraph from "@/components/Paragraph";

const Footer = () => {
	return (
		<footer className="w-full flex justify-center py-3 gap-x-2 items-center mb-10">
			<Paragraph
				variant="main"
				children="© 2025 makeover"
				customClass="text-xs text-black"
			/>
			<Paragraph variant="reviewer" children="." customClass="text-xs" />
			<Paragraph variant="reviewer" children="Privacy" customClass="text-xs" />
			<Paragraph variant="reviewer" children="." customClass="text-xs" />
			<Paragraph variant="dev" children="Terms" customClass="text-xs " />
		</footer>
	);
};

export default Footer;
