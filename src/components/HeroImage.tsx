import Image from "next/image";
import React from "react";
import { FormMain } from "./FormMain/FormMain";
import { Slider } from "./Slider/Slider";

export const HeroImage = () => {
	return (
		<div className="container relative w-full inside-mb">
			{/* Основное изображение */}

			{/* Заблюренный фон для текста */}
			<div className=" inset-0 flex items-center justify-center px-4 sm:px-8 component-mb ">
				<div className="backdrop-blur-lg bg-black/50 rounded-2xl p-6 md:p-8 max-w-3xl text-center">
					{/* Заголовок */}
					<span className="text-xl sm:text-2xl md:text-4xl font-bold text-white block mb-4">
						Winter Season – The Best Time to Remodel!
					</span>
					{/* Текст */}
					<span className="text-sm sm:text-base md:text-lg font-medium text-white block mb-6">
						Start your renovation now and save up to{" "}
						<strong>30%</strong> compared to summer prices. Upgrade
						your kitchen, bathroom, or basement at an unbeatable
						cost during the low season!
					</span>
					{/* Форма */}
					<div className="w-full">
						<FormMain />
					</div>
				</div>
			</div>
		</div>
	);
};
