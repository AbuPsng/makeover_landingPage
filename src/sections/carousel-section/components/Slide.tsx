const Slide = ({ name, imgUrl }: { name: string; imgUrl: string }) => {
	return (
		<div className="w-[99%]  rounded-2xl shadow-xl border-1 border-gray-900/20">
			<img
				src={imgUrl}
				alt={`${name}-image`}
				className="h-[260px] w-full rounded-2xl object-cover"
			/>
		</div>
	);
};

export default Slide;
