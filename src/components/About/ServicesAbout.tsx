import Image from "next/image";
import React from "react";
import { PerksSlider } from "../PerksSwiper/PerksSwiper";
import ReactMarkdown from "react-markdown";

type Perk = {
	heading: string;
	paragraph: string;
};

type Props = {
	phrase1: string;
	phrase2: string;
	image1: string;
	image1alt: string;
	priceLine1: string;
	priceLine2: string;
	sectionH1: string;
	sectionP1: string;
	sectionP2: string;
	image2: string;
	image2alt: string;
	section2H2: string;
	section2P1: string;
	section2P2: string;
	perks: Perk[];
	isMobile: boolean;
};

const colorMap = {
	"dark-purple": "#5c4959",
	"dark-red": "#9f6372",
	"dark-orange": "#dc8573",
	"light-orange": "#feb869",
	"light-purple": "#8685ef",
	"bright-green": "#00ebb6",
};

const MobileServicesAbout: React.FC<Props> = ({
	phrase1,
	phrase2,
	priceLine1,
	priceLine2,
	image1,
	image1alt,
	sectionH1,
	sectionP1,
	sectionP2,
	image2,
	image2alt,
	section2H2,
	section2P1,
	section2P2,
	perks,
}) => {
	return (
		<div className="container component-mb relative z-10">
			<div className="inside-mb max-sm:block w-full mx-auto max-w-[1440px] relative z-10 flex flex-col items-center">
				<div className="flex-col">
					<div className="max-w-full">
						<h1 className="custom-heading first-letter:text-main-yellow">
							{sectionH1}
						</h1>
					</div>
					<div className="relative h-[250px] w-full mb-5">
						<Image
							className="rounded-xl"
							src={image1}
							alt={image1alt}
							fill
						/>
					</div>
				</div>
				<div className="flex">
					<div className="lg:mt-[44px]">
						<ReactMarkdown className="markdown-b markdown ml-auto mb-10 max-md:mb-2">
							{sectionP1}
						</ReactMarkdown>
					</div>
				</div>
			</div>
			{/* {<ul className="flex inside-mb slider-gap w-full overflow-x-auto overflow-y-hidden no-scrollbar">
				{perks.map((item, index) => {
					// Select a color based on the index, cycling through the colors if needed
					const colorKeys = Object.keys(colorMap);
					const backgroundColor =
						colorMap[colorKeys[index % colorKeys.length]];

					return (
						<li
							key={item.heading}
							style={{ backgroundColor }}
							className="h-max min-w-[350px] min-h-[170px] text-white font-light  py-2 px-4 rounded-2xl cursor-pointer"
						>
							<div className="mb-5 flex items-center">
								<h3 className="text-white font-semibold text-title relative ">
									{item.heading}
								</h3>
							</div>
							<p className="white-paragraph text-base min-h-[67px]">
								{item.paragraph}
							</p>
						</li>
					);
				})}
			</ul>} */}
			{/* <div className="max-sm:hidden relative z-10 flex flex-col">
				<div className="flex-col">
					<div className="max-w-full">
						<h3 className="text-white font-light text-title mb-5">
							{phrase2}
						</h3>
						<h2 className="custom-heading">{section2H2}</h2>
					</div>
					<div className="relative h-[250px] w-full  mb-5">
						<Image
							className="rounded-xl"
							src={image2}
							alt={image2alt}
							fill
						/>
					</div>
				</div>
				<div className="flex">
					<div className="lg:mt-[44px]">
						<p className="mb-8 text-main-yellow items-center">
							{priceLine2}
						</p>
						<p className="text-main-gray ml-auto mb-10 max-md:mb-2">
							{section2P1}
						</p>
						<p className="text-main-gray ml-auto">{section2P2}</p>
					</div>
				</div>
			</div> */}
		</div>
	);
};

const DesktopServicesAbout: React.FC<Props> = ({
	phrase1,
	phrase2,
	priceLine1,
	priceLine2,
	image1,
	image1alt,
	sectionH1,
	sectionP1,
	sectionP2,
	image2,
	image2alt,
	section2H2,
	section2P1,
	section2P2,
	perks,
}) => {
	return (
		<section className="container component-mb relative z-10">
			<div className="text-left lg:block w-full mx-auto max-w-[1440px] relative z-10 mb-20 flex flex-col item-center lg:justify-end">
				<div className="flex">
					<div className="max-w-full">
						<h1 className="custom-heading w-1/2 float-left max-lg:text-[40px] leading-tight first-letter:text-main-yellow mb-10">
							{sectionH1}
						</h1>
					</div>
				</div>
				<div className="flex gap-20">
					<div className="lg:max-w-1/2 lg:items-start">
						<ReactMarkdown className=" markdown  max-md:mb-2">
							{sectionP1}
						</ReactMarkdown>
						<ReactMarkdown className=" markdown  max-md:mb-2">
							{sectionP2}
						</ReactMarkdown>
					</div>
					<Image
						src={image2}
						alt={image2alt}
						className="rounded-3xl"
						style={{
							minWidth: "40%",
							height: "350px",
							objectFit: "cover",
						}}
						width={600}
						height={350}
					/>
				</div>
			</div>

			{/* <PerksSlider colorMap={colorMap} items={perks} /> */}

			{/* <div className="w-full mx-auto max-w-[1440px] relative z-10 mb-20 flex flex-col item-center lg:justify-start max-sm:hidden">
				<div className="flex w-full justify-end">
					<div className="text-right w-1/2">
						<p className="text-white font-light text-title mb-10">
							{phrase2}
						</p>
						<h2 className="main-title-normal w-full max-lg:text-[40px] leading-tight first-letter:text-main-yellow mb-10">
							{section2H2}
						</h2>
					</div>
				</div>
				<div className="flex gap-20 text-left">
					<Image
						src={image1}
						alt={image1alt}
						className="rounded-3xl"
						style={{
							minWidth: "40%",
							height: "350px",
							objectFit: "cover",
						}}
						width={600}
						height={350}
					/>
					<div className="lg:max-w-1/2 lg:items-end">
						<p className="mb-8 text-main-yellow font-bold">{priceLine2}</p>
						<p className="text-main-gray mb-10">{section2P1}</p>
						<p className="text-main-gray">{section2P2}</p>
					</div>
				</div>
			</div> */}
		</section>
	);
};

const ServicesAbout: React.FC<Props> = (props) => {
	return props.isMobile ? (
		<MobileServicesAbout {...props} />
	) : (
		<DesktopServicesAbout {...props} />
	);
};

export default ServicesAbout;
