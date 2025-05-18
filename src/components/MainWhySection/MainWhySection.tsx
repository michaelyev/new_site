import Image from "next/image";
import circle from "/public/logo/why_section.svg";
import contact from "/public/logo/contact.svg";
import ReactMarkdown from "react-markdown";
/* import TrustanalyticaBadge from "../Widgets/ReviewsBadge";
 */ import { WhyDropdowns } from "./WhyDropdowns";

type PropsObj = {
	id: number;
	title: string;
	description: string;
};

type Props = {
	whyArray: PropsObj[];
	whyGrid: string[];
	whyMarkdown: string;
	isMobile: boolean;
};

export const MainWhySection: React.FC<Props> = ({
	whyArray,
	whyGrid,
	whyMarkdown,
	isMobile,
}) => {
	return (
		<section className="container component-mb  mx-auto relative z-10">
			<h2 className="custom-heading md:text-center first-letter:text-main-yellow">
				Why our clients choose us ?
			</h2>
			{isMobile ? (
				<ul className="flex overflow-x-auto overflow-y-hidden slider-gap inside-mb no-scrollbar ">
					{whyArray.map((step) => (
						<li
							key={step.id}
							className="min-w-[300px] max-w-[300px]
				lg:min-w-[350px] lg:max-w-[350px] min-h-[200px]  border-solid border-[0.5px] border-white p-5 text-left rounded-3xl"
						>
							<div className="mb-5 flex items-center">
								{/* <Image src={contact} alt="" /> */}
								<div className="flex relative   justify-between ">
									<h3 className="text-white font-light text-title ">
										{step.title}
									</h3>
								</div>
							</div>
							<p className="white-paragraph text-base">
								{step.description}
							</p>
						</li>
					))}
				</ul>
			) : (
				<WhyDropdowns whyArray={whyArray} />
			)}

			<ul className="w-max md:mx-auto justify-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 text-title text-left gap-[30px] md:gap-10 inside-mb text-white">
				{whyGrid.map((item, index) => (
					<li key={index} className="flex items-center gap-[10px]">
						<Image src={circle} alt="" />
						{item}
					</li>
				))}
			</ul>

			<div className="sm:w-2/3 sm:text-center sm:mx-auto max-sm:hidden">
				<ReactMarkdown className="markdown-b markdown ">
					{whyMarkdown}
				</ReactMarkdown>
			</div>

			{/* <TrustanalyticaBadge /> */}
			{/* <Reviews /> */}
			{/* <FAQ faqItems={faqItems} /> */}
		</section>
	);
};
