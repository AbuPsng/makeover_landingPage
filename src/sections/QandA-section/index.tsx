import {
	imageContainerDetails,
	processDetails,
	servicesDetails,
} from "@/assets/contants";
import ImageContainer from "@/components/ImageContainer";
import QAndAContainer from "@/components/QAndAContainer";
import ReviewsContainer from "./compnents/ReviewsContainer";

const QAndASection = () => {
	return (
		<section className="flex flex-col gap-y-7 py-10 px-3">
			<QAndAContainer
				question="More than makeovers. Design that meets your needs."
				answer1="Some clients come to us with something half-built. Others bring a blank page. And some already have a strong foundation and they just need help evolving it."
				answer2="We meet you where you are. Whether it’s starting fresh, refreshing, or building on what works, the goal is the same: thoughtful design that supports your strategy, serves your users, and moves your business forward."
			/>
			<QAndAContainer
				question="What's the cost?"
				answer1="$6,000 per month on a retainer basis. Just a quarter of what you'd pay for a full-time employee."
				buttonText="Let's design together"
				link="hey@makeover.studio"
			/>
			<QAndAContainer
				question="Who's it for?
"
				answer1="Startups, founders, and tech teams building groundbreaking products from 0 to 1. Businesses who found PMF but need a fresh coat of paint."
			/>
			<QAndAContainer
				question="End-to-End service"
				answer1="Full coverage from branding to interface and interaction design."
				servicesDetails={servicesDetails}
			/>
			<QAndAContainer
				question="Expect updates in 24 hours."
				answer1="Depending on the complexity of the task it might take a bit longer than 24 hours."
				answer2="Working in the ET timezone."
			/>
			<ImageContainer {...imageContainerDetails["first"]} />
			<QAndAContainer
				question="How many problems can you solve?"
				answer1="As many as you need, as long as we’re working together. You can submit unlimited requests. I’ll tackle them one at a time, but if they’re simple or related, I might handle several at once. I’m here to help you get the best outcomes."
			/>
			<QAndAContainer
				question="Simple, fast, efficient workflow"
				answer1="Yes, speed can match quality when backed by 15+ years of experience. You get great design, with minimal time required on your end."
				servicesDetails={processDetails}
			/>
			<QAndAContainer
				question="How many design requests?."
				answer1="Unlimited. One request at a time, but may work on multiple if they're simple or related."
			/>
			<QAndAContainer
				question="How many meetings?"
				answer1="Let’s start with a kickoff call to align on everything. After that, I’ll focus fully on the work. If anything needs clarification along the way, I’ll reach out and we can quickly hop on a call."
			/>
			<ImageContainer {...imageContainerDetails["second"]} />
			<QAndAContainer
				question="What about development?"
				answer1="We work with trusted engineers who can build your ideas for an additional cost. This can be arranged on a per-project basis."
			/>
			<QAndAContainer
				question="Would you like to keep your project private?"
				answer1="If so, you can opt for our Stealth Mode package at $1,000 per month to ensure it remains confidential and unpublished on our website or social media."
			/>
			<QAndAContainer
				question="Who's behind Makeover?"
				developer={{
					name: "Damian Chmiel",
					imageUrl: "/images/developer.avif",
				}}
				answer1="All design work is handled by me, personally. I'm also your main point of contact so nothing gets lost in translation."
				answer2="I worked with companies like Google, Samsung, BVLGARI, Nissan, Volvo, Emilio Pucci, Raiffeisen Bank, UNIT9, OpenPurpose® (fka 3drops), Fluorescent, Netguru, Button, Catalog, and more…"
			/>

			<ReviewsContainer />

			<QAndAContainer
				question="What's the cost?"
				answer1="$6,000 per month on a retainer basis. Just a quarter of what you'd pay for a full-time employee."
				buttonText="Let's design together"
				link="hey@makeover.studio"
			/>
		</section>
	);
};

export default QAndASection;
