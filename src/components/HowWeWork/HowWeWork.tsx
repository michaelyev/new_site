"use client";

import ReactMarkdown from "react-markdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface DescriptionObject {
	p1: string;
	p2: string;
	p3: string;
}

interface HowWeWorkObj {
	id: number;
	title: string;
	description?: DescriptionObject;
	imagePath?: string | undefined;
}

type Props = {
	array: HowWeWorkObj[];
	howWeWorkMarkdown: string;
};

export const HowWeWork: React.FC<Props> = ({ array, howWeWorkMarkdown }) => (
	<section className="container component-mb relative z-10">
		<h2 className="inside-mb w-max mx-auto custom-heading first-letter:text-main-yellow">
			How we work
		</h2>

		{/* Grid for Desktop and Tablet */}
		<div className="hidden md:grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
			{array.map((step: HowWeWorkObj) => (
				<div
					key={step.id}
					className="py-5 px-4 rounded-2xl border-solid border-[0.5px] border-white min-h-[150px]"
				>
					<div>
						<div className="mb-5 flex items-center">
							<h4 className="text-white font-light text-title">
								{step.title}
							</h4>
						</div>

						<ul>
							<li className="relative white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								{step.description.p1}
							</li>
							{/* <li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								{step.description.p2}
							</li>
							<li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
								{step.description.p3}
							</li> */}
						</ul>
					</div>
				</div>
			))}
		</div>

		{/* Swiper for Mobile */}
		<div className="md:hidden w-full flex overflow-x-auto slider-gap">
			{array.map((step: HowWeWorkObj) => (
				<div className="py-5 px-4 rounded-2xl border-solid border-[0.5px] border-white min-w-[350px] max-w-[350px] lg:min-w-[450px] lg:max-w-[450px] min-h-[180px]">
					<div className="mb-5 flex items-center">
						<h4 className="text-white font-light text-title">
							{step.title}
						</h4>
					</div>

					<ul>
						<li className="relative white-paragraph text-base flex items-start gap-2 min-h-[50px]">
							{step.description.p1}
						</li>
						{/* <li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[50px]">
									{step.description.p2}
								</li>
								<li className="relative left-4 white-paragraph text-base flex items-start gap-2 min-h-[0px]">
									{step.description.p3}
								</li> */}
					</ul>
				</div>
			))}
		</div>

		{/* Optional Markdown content */}
		{/* <ReactMarkdown className="markdown sm:w-2/3 sm:text-center mx-auto">
			{howWeWorkMarkdown}
		</ReactMarkdown> */}
	</section>
);
