import heroBottom from "/public/contentImages/mainHero/services/4.jpg";
import React from "react";
import { ServicesHero } from "./components/ServicesHero";
import { FAQ } from "@/components/FAQ/FAQ";
import { ContactUs } from "@/components/ContactUs/ContactUs";
import { getServicesData } from "@/lib/getServiceData/getServiceData";
/* import { TopProducts } from "@/components/TopProducts/TopProducts";*/
import type { Metadata, ResolvingMetadata } from "next";
/* import ServicesSlider from "./components/ServicesSlider"; */
import { Manufacturers } from "@/components/MainManufacturers/Manufacturers";
/* import ServicesButtons from "./components/ServicesButtons"; */
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";
import { CatalogBanner } from "../catalog/[[...slug]]/components/CatalogBanner";
import { LocationsList } from "@/components/LocationsList/LocationsList";
import useIsMobile from "@/lib/hooks/useIsMobile";
import { OurServices } from "@/components/OurServices/OurServices";
import { cabinets } from "@/constants/unfinishedData/cabinets";
import { electrical } from "@/constants/unfinishedData/electrical";
import { flooring } from "@/constants/unfinishedData/flooring";
import { countertops } from "@/constants/unfinishedData/countertops";
/* import { ServicesBlogCards } from "./components/ServiceBlogCards"; */
import { windows } from "@/constants/unfinishedData/windows";
import { deck } from "@/constants/unfinishedData/deck";
import { hvac } from "@/constants/unfinishedData/hvac";
import { architecture } from "@/constants/unfinishedData/architecture";
import { doors } from "@/constants/unfinishedData/doors";
import { plumbing } from "@/constants/unfinishedData/plumbing";
import { kitchen } from "@/constants/unfinishedData/kitchen";
import { FormComponent } from "@/components/FormMain/FormComponent";
import { bathroom } from "@/constants/unfinishedData/bathroom";
import ServicePageAbout from "./components/ServicePageAbout";
import { roofing } from "@/constants/unfinishedData/roofing";
import { siding } from "@/constants/unfinishedData/siding";
import { excavation } from "@/constants/unfinishedData/excavation";
import { basement } from "@/constants/unfinishedData/basement";
import { painting } from "@/constants/unfinishedData/painting";
import { masonry } from "@/constants/unfinishedData/masonry";
import { attic } from "@/constants/unfinishedData/attic";
import { tile } from "@/constants/unfinishedData/tile";
import { landscaping } from "@/constants/unfinishedData/landscaping";
import { FormMain } from "@/components/FormMain/FormMain";
import PerksComponentGrid from "@/components/PerksComponentGrid/PerksComponentGrid";
import { ThumbsSwiper } from "@/components/ThumbsSwiper/ThumbsSwiper";
import { CostTables } from "@/components/CostTables/CostTables";
import { PageNav } from "@/components/PageNav/PageNav";
import { serviceHeadings } from "@/constants/ourServices/ourServices";
import Licensing from "@/components/Licensing/Licensing";

type Props = {
	params: { services: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const id = params.services;

	const service = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/servicesNew/${id}`,
	).then((res) => res.json());

	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: service[0].title,
		description: service[0].description,
		openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		},
	};
}

export async function generateStaticParams(): Promise<{ services: string }[]> {
  try {
    const url = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/servicesNew/`,
    ).then((res) => res.json());

    // Если данные не являются массивом, оборачиваем в массив
    const dataArray = Array.isArray(url) ? url : [url];

    return dataArray.map((post: { service: string }) => ({
      services: post.service,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}


const Services: React.FC<{ params: { services: string } }> = async ({
	params,
}) => {
	const servicesData = await getServicesData(params);
	const servicesPageData = servicesData;

	const isMobile = useIsMobile();

	/* const unfinished = {
		cabinets,
		electrical,
		flooring,
		countertops,
		windows,
		deck,
		hvac,
		architecture,
		doors,
		plumbing,
		kitchen,
		bathroom,
		roofing,
		siding,
		excavation,
		basement,
		painting,
		masonry,
		attic,
		tile,
		landscaping,
	};
	const categoryData = unfinished[servicesPageData.category] || {}; */

	return (
		<main>
			<ServicesHero
				{...servicesPageData.hero}
				imageBottom={heroBottom}
				category='kitchen'/* {servicesPageData.category} */
			/>
			{/* <PageNav /> */}

			{/* <ServicesSlider {...servicesPageData.ourServices} /> */}

			{/* <OurServices
				{...categoryData.ourServices}
				category={servicesPageData.category}
				location={servicesPageData.location}
			/> */}

			{/* <CostTables
				category={servicesPageData.category}
				city={servicesPageData.location}
			/> */}
			{/* <Licensing /> */}
			{/* <section className="container">
				<h2 className="custom-heading sm:text-center first-letter:text-main-yellow">
					{servicesPageData.category
						? serviceHeadings.all
						: serviceHeadings[servicesPageData.category]}{" "}
					Photos
				</h2>
				<div className=" component-mb flex max-sm:flex-col gap-10 max-sm:gap-5 justify-between">
					<ThumbsSwiper category="basement" />
					<ThumbsSwiper category={servicesPageData.category} />
				</div>
			</section> */}
			{/* <PerksComponentGrid />

			<GenerateEstimate /> */}

			{/* <ServicePageAbout {...servicesPageData.about} isMobile={isMobile} /> */}
			{/* <FormMain>
				<CatalogBanner isMobile={isMobile} />
			</FormMain> */}
			{/* <FormComponent /> */}
			{/* {servicesPageData.location === "seattle" && (
				<>
					<HowWeWork {...howWeWorkData} />
					<Manufacturers {...manufacturersData} />
					<FAQ faqItems={faqData} />
				</>
			)} */}

			{/* <TopProducts /> */}
			{/* <ServicesBlogCards category={servicesPageData.category} /> */}

			{/* <ServicesButtons {...servicesPageData} /> */}
			<ContactUs />
			{/* <WarrantySection {...warrantyData} /> */}
			{/* <LocationsList /> */}
		</main>
	);
};

export default Services;
