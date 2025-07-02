import { cn } from "@/lib/utils";
import { useWidthStore } from "@/store/useWidthStore";

const Slide = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
	const { width } = useWidthStore();

	return (
		<div className="w-[99%]  rounded-2xl shadow-xl border-1 border-gray-900/20">
			<img
				src={imgUrl}
				alt={`${name}-image`}
				className={cn(
					"h-[260px]  w-full rounded-2xl object-contain",
					width > 600 && "h-[400px]"
				)}
			/>
		</div>
	);
};

export default Slide;
