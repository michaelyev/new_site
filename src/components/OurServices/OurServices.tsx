import ReactMarkdown from "react-markdown";
import { useState } from "react";
import {
	ourServices,
	serviceHeadings,
} from "@/constants/ourServices/ourServices";
import { ourServicesCardsData } from "@/constants/ourServices/ourServicesCardsData";
import { ServicesCard } from "../ServicesCard/ServicesCard";
import { ourServicesLocalLinks } from "@/constants/ourServices/ourServicesLoccalLinks";
import { locationNames } from "@/constants/costKeywords/costKeywords";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface OurServicesProps {
	h2: string;
	paragraph: string;
	ourServicesMarkdown: string;
	category?: string;
	location?: string;
}

export const OurServices: React.FC<OurServicesProps> = ({
	h2,
	paragraph,
	ourServicesMarkdown,
	category = "all",
	location = "victoria",
}) => {
	const clickedService = category;
	let urlLink = ourServicesLocalLinks[location] || {};
	let link = urlLink[clickedService] || "";

	return (
		<section className="border-white rounded-3xl container w-full component-mb text-white relative z-20">
			<h2 className="container custom-heading sm:text-center first-letter:text-main-yellow">
				{serviceHeadings[clickedService]}{" "}
				{location
					? `${" in " + locationNames[location]} by RENOVA`
					: ""}
			</h2>
			{/* {location === "victoria" && (
				<p className="max-sm:hidden text-center text-main-gray inside-mb w-2/3 mx-auto">
					{paragraph}
				</p>
			)} */}
			<div className="inside-mb max-sm:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 container mx-auto mt-6">
				{ourServicesCardsData.all?.map(
					(
						{ heading, paragraph, price, defaultLink, image },
						index,
					) => (
						<ServicesCard
							key={index}
							heading={heading}
							paragraph={paragraph}
							price={price}
							url={defaultLink}
							image={image}
						/>
					),
				)}
			</div>

			{/* Services Cards */}
			<div className="sm:hidden container slider-gap mx-auto flex overflow-x-auto">
				{ourServicesCardsData[clickedService]?.map(
					(
						{
							heading,
							paragraph,
							price,
							defaultLink,
							image,
							category,
						},
						index,
					) => (
						<ServicesCard
							heading={heading}
							paragraph={paragraph}
							price={price}
							url={defaultLink}
							image={image}
						/>
					),
				)}
			</div>
			{/* {location === "victoria" && (
				<ReactMarkdown className="markdown sm:w-2/3 sm:text-center sm:mx-auto max-sm:hidden relative z-10">
					{ourServicesMarkdown}
				</ReactMarkdown>
			)} */}
		</section>
	);
};
