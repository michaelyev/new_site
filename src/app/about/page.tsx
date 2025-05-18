/* import { ServicesHero } from "../[services]/components/ServicesHero";
 */ import ServicesAbout from "../../components/About/ServicesAbout";
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { ContactUs } from "@/components/ContactUs/ContactUs";
/* import { FullWidthHorizontalSlider } from "@/components/FullWidthHorizontalSlider";
 */ import { aboutPageContent } from "@/constants/aboutPage/aboutPage";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import { FormComponent } from "@/components/FormMain/FormComponent";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: "Some important information about us",
};

const About: React.FC = () => {
	const headersList = headers();
	const userAgent = headersList.get("user-agent") || "";
	const isMobile = /Mobile|Android|BlackBerry|IEMobile|Opera Mini/i.test(
		userAgent,
	);

	return (
		<main>
			{/* <ServicesHero {...aboutPageContent.hero} /> */}
			<div className="first-component">
				<ServicesAbout
					{...aboutPageContent.about}
					isMobile={isMobile}
				/>
			</div>

			<MainWhySection
				{...aboutPageContent.whySection}
				isMobile={isMobile}
			/>
			{/* <FullWidthHorizontalSlider /> */}
			<FormComponent />

			<ContactUs />
			<LocationsList />
		</main>
	);
};

export default About;
