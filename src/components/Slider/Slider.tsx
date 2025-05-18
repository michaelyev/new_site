"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { type FC } from "react";
import { swiperConfig } from "@/constants/swiperConfig/swiperConfig";
import type { SwiperContent } from "@/types/swiper/swiper";

import "./swiper.css";
import Image from "next/image";
import { FormMain } from "../FormMain/FormMain";

interface SwiperProps {
	id: string;
}

export const Slider: FC<SwiperProps> = ({ id }) => {
	// @ts-ignore
	const { settings, content, buttons, swiperSlide, width } = swiperConfig[id];

	const SelectedSlide = swiperSlide;

	return (
		<div className="container inside-mb">
			<Swiper pagination={true} {...settings}>
				{content.map((slide: SwiperContent) => (
					<SwiperSlide
						className="pb-[40px] first-component"
						key={slide.id}
					>
						<div className="relative w-full">
							<Image
								src="/contentImages/mainHero/main/contact-banner-mob.jpeg"
								height={380}
								width={1440}
								className="rounded-3xl object-cover"
								alt="Contact Banner"
							/>
							<div className="max-sm:hidden absolute left-8 top-1/2 transform -translate-y-1/2 text-white px-10">
								<span className="text-2xl md:text-4xl font-bold backdrop-blur-lg bg-black/50">
									Winter Season – The Best Time to Remodel!
								</span>
								<br></br>
								<span className="mt-2 text-lg md:text-xl font-medium backdrop-blur-lg bg-black/50">
									Start your renovation now and save up to{" "}
									<strong>30%</strong> compared to summer
									prices. Upgrade your kitchen, bathroom, or
									basement at an unbeatable cost during the
									low season!
								</span>
								<FormMain />
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
