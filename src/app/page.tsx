/* import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures"; */
/* import { FAQ } from "@/components/FAQ/FAQ";
 */ import { MainAbout } from "@/components/MainAbout/MainAbout";
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { OurServices } from "@/components/OurServices/OurServices";
import { Slider } from "@/components/Slider/Slider";
/* import { TopProducts } from "@/components/TopProducts/TopProducts"; */
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";
import { CatalogBanner } from "./catalog/[[...slug]]/components/CatalogBanner";
/* import { ServiceAreas } from "@/components/BottomButtons/BottomButtons"; */
import { mainPageContent } from "@/constants/mainPage/mainPageContent";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { FormMain } from "@/components/FormMain/FormMain";
import type { Metadata } from "next";
import ServicesAbout from "../components/About/ServicesAbout";
import { WarrantySection } from "@/components/WarrantySection/WarrantySection";
import { GenerateEstimate } from "@/components/Chatbot/GenerateEstimate";
import { CostTables } from "@/components/CostTables/CostTables";
/* import { PageNav } from "@/components/PageNav/PageNav"; */
import useIsMobile from "@/lib/hooks/useIsMobile";
import InstagramEmbed from "@/components/Instagram/Instagram";
import { FormComponent } from "@/components/FormMain/FormComponent";
import PerksComponentGrid from "@/components/PerksComponentGrid/PerksComponentGrid";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { PageNav } from "@/components/PageNav/PageNav";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import {
	WithContext,
	WebSite,
	Organization,
	WebPage,
	ContactPage,
} from "schema-dts";
import { FAQ } from "@/components/FAQ/FAQ";
import Licensing from "@/components/Licensing/Licensing";
import Image from "next/image";
import { HeroImage } from "@/components/HeroImage";

export const metadata: Metadata = {
	title: "Seattle Remodeling Contractor | Renova Contractors LLC",
	description:
		"Renova delivers top-quality renovation services across Victoria. From kitchens and bathrooms to basements and full remodels—schedule a free consultation with flexible financing options.",
};

export default function Home(): JSX.Element {
	const isMobile = useIsMobile();


	return (

			<main>
				{/*  <BackgroundPictures pageType={backgroundPicturesMain} /> */}
				<Slider id="hero" />
				{/* <PageNav /> */}
				<ServicesAbout {...mainPageContent.about} isMobile={isMobile} />
				<OurServices {...mainPageContent.ourServices} />
				{/* <CostTables category="" /> */}
				{/* <Licensing /> */}
				{/* <PageNav /> */}
				{/* <PerksComponentGrid /> */}
				{/* <TopProducts /> */}
				{/* <GenerateEstimate /> */}
				{/* <section>
					<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
						{serviceHeadings.all} Photos
					</h2>

					<div className="container inside-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
						<ThumbsSwiper category="kitchen" />
						<ThumbsSwiper category="bathroom" />
					</div>
				</section> */}
				{/* 				<MainAbout {...mainPageContent.aboutSection} />
				 */}{" "}
				{/* <HowWeWork {...mainPageContent.howWeWork} /> */}
				{/* <FormComponent /> */}
				<ContactUs />
				{/* <MainWhySection
					{...mainPageContent.whySection}
					isMobile={isMobile}
				/> */}
				{/* <div
					id="socials"
					className="scroll-anchor container w-2/3 items-start flex max-sm:flex-col sm:justify-around my-auto component-mb max-sm:items-center mx-auto"
				>
					<div className="h-max">
						<InstagramEmbed url="https://www.instagram.com/renova.contractors/?utm_source=ig_embed&amp;utm_campaign=loading" />
					</div>

					<div className="map-container">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172153.33373691145!2d-122.2695375!3d47.608715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xace89cdae412ae93%3A0x40ae051c2253149b!2sRenova%20Contractors%20LLC!5e0!3m2!1sen!2sus!4v1729059408347!5m2!1sen!2sus"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="responsive-iframe"
						></iframe>
					</div>
				</div> */}
				{/* 				<Manufacturers {...mainPageContent.manufacturers} />
				 */}
				{/* <FAQ {...mainPageContent} /> */}
				{/* <WarrantySection
					{...mainPageContent.warrantySection}
					isMobile={isMobile}
				/> */}
				{/* <ServiceAreas /> */}
				{/* <LocationsList /> */}
				<div className="flex max-sm:flex-col justify-center items-center gap-2.5 pb-[60px]">
					<p className="text-title text-white">ANY QUESTIONS?</p>
					<FormMain />
				</div>
			</main>

	);
}
