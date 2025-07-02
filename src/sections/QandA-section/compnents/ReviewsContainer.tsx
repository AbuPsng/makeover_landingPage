import { reviews } from "@/assets/contants";
import ReviewHolder from "./ReviewHolder";

const ReviewsContainer = () => {
	return (
		<div className="w-full py-10 px-5 flex flex-col gap-y-3 bg-container max-w-2xl mx-auto rounded-3xl border-1 border-gray-400/10">
			{reviews.map((review) => {
				return <ReviewHolder key={review.name} {...review} />;
			})}
		</div>
	);
};

export default ReviewsContainer;
