import React from "react";
import Image from "next/image";

import styles from "./Styles.module.css";

//images
import contract from "/public/perks-grid/contract-document-svgrepo-com.svg";
import reporting from "/public/perks-grid/smart-phone-screen-with-message-bubbles-sms-design-template-for-messenger-chat-free-vector.jpg";
import licensing from "/public/perks-grid/id-card-svgrepo-com.svg";
import fullService from "/public/perks-grid/technical-support-service-2-svgrepo-com.svg";
import prices from "/public/perks-grid/pngtree-best-price-discount-sale-label-vector-and-png-png-image_4460371.webp";
import material from "/public/perks-grid/medal-quality-svgrepo-com.svg";
import all_day from "/public/perks-grid/24_7.png";
import budget from "/public/perks-grid/budget-cost-svgrepo-com.svg";

const PerksComponentGrid = () => {
	return (
		<section className="container">
			<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
				Why remodel with us?
			</h2>
			<div className="text-white container grid grid-cols-6 max-sm:flex max-sm:flex-wrap slider-gap w-full component-mb">
				<div
					className={`${styles.mobile}  flex max-sm:flex-row-reverse col-span-3 h-[250px] rounded-3xl py-10 px-10 custom-mobile-class items-start`}
				>
					<Image
						quality={30}
						height={120}
						src={contract}
						alt="Icon showcasing guaranteed pricing and timelines"
						width={120}
					/>
					<div className="sm:ml-5 py-5">
						<h4 className="text-title text-white">
							Transparent Costs, On-Time Delivery
						</h4>
						<p className="mt-5 max-sm:mt-2 text-white">
							No unexpected charges—just reliable agreements that
							keep your project stress-free and on schedule.
						</p>
					</div>
				</div>

				<div
					className={`${styles.mobile} flex col-span-3 h-[250px] max-sm:h-[150px] max-sm:text-sm max-sm:py-3 max-sm:px-2 max-sm:rounded-xl rounded-3xl py-10 px-10 items-start`}
				>
					<div className="mr-5 py-5">
						<h4 className="text-title">Daily Communication</h4>
						<p className="mt-5 max-sm:mt-2">
							Stay informed every step of the way with daily
							updates. We're always just a text or call away!
						</p>
					</div>
					<Image
						quality={30}
						height={150}
						src={reporting}
						alt="Phone displaying project updates"
					/>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">Certified Experts</h4>
						<p className="mt-2 max-sm:mt-2">
							Our team is fully licensed, vetted, and trained to
							deliver premium results.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={licensing}
							alt="Licensed contractor badge"
						/>
					</div>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">End-to-End Service</h4>
						<p className="mt-2 max-sm:mt-2">
							We manage your entire renovation from start to
							finish, saving you time and hassle.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={fullService}
							alt="Icon for complete contractor services"
						/>
					</div>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">Premium Materials</h4>
						<p className="mt-2 max-sm:mt-2">
							We use superior materials to ensure lasting quality
							and style for years to come.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={material}
							alt="Quality construction materials"
						/>
					</div>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-main-dark`}
				>
					<div>
						<h4 className="text-title text-white">
							Affordable Pricing
						</h4>
						<p className="mt-2 max-sm:mt-2 text-white">
							Our prices remain competitive, ensuring excellent
							value without compromising quality.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={prices}
							alt="Affordable pricing badge"
						/>
					</div>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">Round-the-Clock Support</h4>
						<p className="mt-2 max-sm:mt-2">
							We're here 24/7 to answer your questions and keep
							your project moving forward smoothly.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={all_day}
							alt="Icon for 24/7 customer service"
						/>
					</div>
				</div>

				<div
					className={`${styles.mobile} col-span-2 slider-gap h-[200px] rounded-3xl py-6 px-10 flex text-white`}
				>
					<div>
						<h4 className="text-title">Budget-Friendly Options</h4>
						<p className="mt-2 max-sm:mt-2">
							We make your dream renovation a reality while
							sticking to your budget.
						</p>
					</div>
					<div className="max-w-[120px] max-h-[120px]">
						<Image
							quality={30}
							src={budget}
							alt="Budget-conscious renovation icon"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PerksComponentGrid;
