"use client";

import React, { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";

import { thumbsTextImages } from "@/constants/thumbsSwiper/thumbsSwiperTextImages";
import { thumbsData } from "@/constants/thumbsSwiper/thumbsSwiper";
import calendar from "/public/icons/work/calendar.svg";
import Image from "next/image";

interface Props {
	category?: string;
}

export const ThumbsSwiper: FC<Props> = ({ category }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [loadedMainImages, setLoadedMainImages] = useState(0); // Количество загруженных изображений
	const [allImagesLoaded, setAllImagesLoaded] = useState(false); // Все изображения загружены
	const slides = thumbsData[category];
	const data = thumbsTextImages[category];

	// Обработчик загрузки основного изображения
	const handleMainImageLoad = () => {
		setLoadedMainImages((prev) => prev + 1);
	};

	// Используем useEffect для отслеживания загрузки всех изображений
	useEffect(() => {
		if (slides.length) {
			setAllImagesLoaded(true); // Все изображения загружены
		}
	}, [slides.length]);

	return (
		<section className="w-full lg:w-[40%] mx-auto">
			{/* Всегда отображаем заголовок и параграф */}
			<h3 className="mb-5 max-sm:mb-2 text-bright-green font-bold">
				{data.heading.toUpperCase()}
			</h3>

			{/* Условный рендеринг скелетона до загрузки всех изображений */}
			{!allImagesLoaded && (
				<div className="animate-pulse">
					{/* Скелетон для основного изображения */}
					<div className="h-[380px] bg-gray-300 rounded-lg mb-4"></div>

					{/* Скелетон для миниатюр */}
					<div className="flex gap-4 mb-4">
						<div className="h-[110px] w-[160px] bg-gray-300 rounded-lg"></div>
						<div className="h-[110px] w-[160px] bg-gray-300 rounded-lg"></div>
						<div className="h-[110px] w-[160px] bg-gray-300 rounded-lg"></div>
					</div>
				</div>
			)}

			{/* Рендерим Swiper только если все изображения загружены */}
			{allImagesLoaded && (
				<>
					{/* Основной Swiper */}
					<Swiper
						style={{
							maxHeight: 380,
							borderRadius: 10,
							marginBottom: 10,
						}}
						spaceBetween={10}
						navigation={true}
						loop={true}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[Navigation, Thumbs]}
					>
						{slides.map((slide, index) => (
							<SwiperSlide
								className="min-h-[380px] max-sm:min-h-[250px]"
								key={index}
							>
								<Image
									quality={80}
									objectFit="cover"
									fill
									src={slide.src}
									alt={slide.alt}
									onLoad={handleMainImageLoad} // Увеличиваем счетчик загруженных изображений
								/>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Swiper для миниатюр */}
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						loop={true}
						watchSlidesProgress={true}
						modules={[Navigation, Thumbs]}
						style={{ borderRadius: 10 }}
					>
						{slides.map((slide, index) => (
							<SwiperSlide
								className="min-h-[110px] min-w-[160px] max-sm:min-w-[95px]"
								key={index}
							>
								<Image
									className="rounded-xl"
									objectFit="cover"
									quality={40}
									fill
									src={slide.src}
									alt={slide.alt}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</>
			)}

			<p className="relative max-w-1/3 text-main-yellow mt-5 max-sm:mt-2 font-light">
				{data.paragraph}
			</p>

			<div className="flex items-start mt-5">
				<div className="flex gap-4">
					<Image
						height={50}
						width={50}
						src={data.icon}
						alt={data.heading + "icon"}
					/>
					<div className="">
						<p className="text-white font-bold">Area:</p>
						<p className="text-main-yellow font-light">
							{category ? category : "general"}
						</p>
					</div>
				</div>

				<div className="flex gap-4 ml-10">
					<Image
						height={50}
						width={50}
						src={calendar}
						alt={calendar.src + "icon"}
					/>
					<div className="">
						<p className="font-bold text-white">Timeline:</p>
						<p className="font-light text-main-yellow ">
							{data.timeline}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
