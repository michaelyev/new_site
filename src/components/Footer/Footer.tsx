import Image from "next/image";
import logo_bottom from "/public/logo/logo_bottom.svg";
import Link from "next/link";
import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
/* import { topProducts } from "@/constants/topProducts/topProducts"; */
import { dropdowns } from "@/constants/header/headerProperties";
import { contacts } from "@/constants/contacts/contacts";
import { FormMain } from "../FormMain/FormMain";
import { ourServicesLocalLinks } from "@/constants/ourServices/ourServicesLoccalLinks";

interface Props {
	location?: string;
}

export const Footer: React.FC<Props> = ({ location }) => {
	return (
		<footer className="container bg-comfort-blue  text-main-gray relative border-t-[1px] rounded-3xl  pt-5 sm:pt-12 ">
			<div className="flex  w-max mx-auto max-sm:items-center max-sm:text-center items-start md:flex-row flex-col pb-[60px]  md:gap-[20px] lg:gap-[90px] xl:gap-[157px] ">
				<Image
					src={logo_bottom}
					width={145}
					height={159}
					alt="renova logo"
				/>
				<ul className="max-w-[194px] max-md:mt-[40px]">
					<li className="mb-[20px] max-sm:hidden">
						{contacts.king_county.address}
					</li>
					<li className="sm:mb-[20px]">
						<a
							className="text-main-yellow font-bold"
							href="tel:206-255-2708"
						>
							{contacts.king_county.phone}
						</a>
					</li>
					<li className="mb-[20px] text-main-yellow">
						<a
							className="text-main-yellow font-semibold"
							href="mailto:sales@renova.contractors"
						>
							{contacts.king_county.email}
						</a>
					</li>
					<li className="mb-[20px] sm:hidden">
						{contacts.king_county.address}
					</li>
					<li className="mb-[20px]">
						Monday - Sunday <br></br> 9:00 - 18:00
					</li>
					<li className="flex justify-between">
						{socialIcons?.map(({ icon, href, id, title }: any) => (
							<Link title={title} key={id} href={href}>
								<Image
									src={icon}
									height={SOCIALS_SIZE}
									width={SOCIALS_SIZE}
									alt=""
								/>
							</Link>
						))}
					</li>
				</ul>
				<div className="max-sm:hidden flex max-md:gap-x-[58px] max-md:mt-5 md:gap-[30px] lg:gap-[90px] xl:gap-[157px]">
					{/* <nav>
						<h3 className="relative left-4 text-title text-white mb-[20px]">
							PRODUCTS
						</h3>
						<ul className=" text-left ">
							{topProducts.map((topProduct) => (
								<li
									className="mb-[10px] text-secondary small-button"
									key={topProduct.title}
								>
									{topProduct.title}
								</li>
							))}
						</ul>
					</nav> */}
					<nav>
						<h3 className="relative left-4 text-title text-white mb-[20px]">
							SERVICES
						</h3>
						<ul className="text-left ">
							{dropdowns.services.map((service) => (
								<li
									className="mb-[10px] text-secondary small-button "
									key={service.text}
								>
									<Link
										title={service.text}
										href={service.link}
									>
										{service.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav className="max-xl:hidden ">
						<p className="text-title text-white mb-[20px]">MENU</p>
						<ul>
							<li className="mb-[15px] ">
								<Link href="/">Main</Link>{" "}
							</li>
							<li className="mb-[15px]">
								<Link title="Services" href="/services">
									Services
								</Link>{" "}
							</li>
							{/* <li className="mb-[15px]">
								<Link href="/">Catalog</Link>{" "}
							</li> */}
							{/* <li className="mb-[15px]">
								<Link title="Blog" href="/blog">
									Blog
								</Link>{" "}
							</li> */}
						</ul>
					</nav>
				</div>
			</div>
			<div className="flex max-sm:flex-col justify-center items-center gap-2.5 pb-[60px]">
				<p className="text-title ">ANY QUESTIONS?</p>
				<FormMain />
			</div>
			<p className="w-max mx-auto pb-[34px]">
				Copyright © All rights reserved
			</p>
			<Link
				title="sitemap"
				className="w-full mx-auto flex justify-center mb-5"
				href="/sitemap.xml"
			>
				Sitemap
			</Link>
		</footer>
	);
};
