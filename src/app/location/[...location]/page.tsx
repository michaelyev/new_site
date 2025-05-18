/* import { BackgroundPictures } from "@/components/BackgroundPictures/BackgroundPictures"; */
/* import { MainAbout } from "@/components/MainAbout/MainAbout"; */
import { MainWhySection } from "@/components/MainWhySection/MainWhySection";
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
import { Slider } from "@/components/Slider/Slider";
/* import { TopProducts } from "@/components/TopProducts/TopProducts"; */
/* import { backgroundPicturesMain } from "@/constants/background/backgroundPictures"; */
/* import HowWeWork from "@/components/HowWeWork/HowWeWork"; */
/* import { ServiceAreas } from "@/components/BottomButtons/BottomButtons";*/
/* import { OurPartners } from "@/components/OurPartners/OurPartners"; */
import { LocationsList } from "@/components/LocationsList/LocationsList";
import ServicesAbout from "@/components/About/ServicesAbout";
import { CatalogBanner } from "@/app/catalog/[[...slug]]/components/CatalogBanner";

import useIsMobile from "@/lib/hooks/useIsMobile";
import { OurServices } from "@/components/OurServices/OurServices";
import { FormMain } from "@/components/FormMain/FormMain";
import { CostTables } from "@/components/CostTables/CostTables";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { GenerateEstimate } from "@/components/Chatbot/GenerateEstimate";
import { PageNav } from "@/components/PageNav/PageNav";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import Licensing from "@/components/Licensing/Licensing";

type LocationParams = {
	location: string[];
};

export async function generateStaticParams(): Promise<any> {
	const url = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/location/`,
	).then((res) => res.json());

	return url.map((post: { city: string }) => ({
		location: [post.city],
	}));
}

export async function generateMetadata(
	{ params }: { params: LocationParams },
	parent: any,
): Promise<any> {
	const city = params.location;
	const product = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/location/${city}`,
	).then((res) => res.json());
	/* 	const previousImages = (await parent).openGraph?.images || [];
	 */

	return {
		title: product[0].title,
		description: product[0].description,
		/* openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		}, */
	};
}

async function getLocationData(params: LocationParams): Promise<any> {
	const city = params.location;
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/location/${city}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Page({
	params,
}: {
	params: LocationParams;
}): Promise<any> {
	const data = await getLocationData(params);

	const props = { ...data[0] };

	const isMobile = useIsMobile();

	return (
		<main>
			{/* <BackgroundPictures pageType={backgroundPicturesMain} /> */}
			<Slider id="hero" />
			<FormMain>
				<CatalogBanner isMobile={isMobile} />
			</FormMain>
			<PageNav />
			<OurServices {...props.ourServices} location={props.city} />
			<GenerateEstimate />
			<ServicesAbout {...props.about} isMobile={isMobile} />
			{/* <OurServices {...props.ourServices} /> */}
			{/* <TopProducts /> */}
			{/* <HowWeWork {...props.howWeWork} /> */}
			<CostTables category="" city={props.city} />
			<Licensing />
			<section>
				<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
					{serviceHeadings.all} Photos
				</h2>

				<div className="container inside-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
					<ThumbsSwiper category="kitchen" />
					<ThumbsSwiper category="basement" />
				</div>
				<div className="container component-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
					<ThumbsSwiper category="bathroom" />
					<ThumbsSwiper category="countertops" />
				</div>
			</section>

			{/* <MainAbout {...props.aboutSection} /> */}
			<Manufacturers {...props.manufacturers} />

			<MainWhySection {...props.whySection} isMobile={isMobile} />
			{/* <OurPartners /> */}
			{/* <ServiceAreas /> */}
			<LocationsList />
		</main>
	);
}
