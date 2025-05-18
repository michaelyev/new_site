import { SOCIALS_SIZE, socialIcons } from "@/constants/socialIcons/socialIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FormMain } from "../FormMain/FormMain";
import { contacts } from "@/constants/contacts/contacts";

export const ContactUs: React.FC = () => {
	return (
		<section
			id="contact"
			className="container mb-[100px] max-md:mb-[50px] relative"
		>
			<h2 className="w-max mx-auto custom-heading  first-letter:text-main-yellow">
				Contact Us
			</h2>

			<ul className="w-full flex max-md:flex-col max-md:text-center items-center justify-between md:gap-x-[30px] lg:gap-x-[70px]">
				<li className="flex flex-col text-main-yellow max-md:max-w-[214px] max-md:mb-5">
					<a
						className="text-main-yellow font-bold"
						href="tel:206-255-2708"
					>
						{contacts.king_county.phone}
					</a>
					<a
						className="text-main-yellow font-semibold"
						href="mailto:sales@renova.contractors"
					>
						{contacts.king_county.email}
					</a>
				</li>
				<li className="flex text-main-gray text-[16px] font-light max-md:mb-5">
					{contacts.king_county.address}
				</li>
				<li className="text-main-gray text-[16px] max-md:mb-5 font-light">
					Monday - Saturday 9:00 - 18:00
				</li>
				<li className="flex space-between gap-2">
					{socialIcons?.map(({ icon, href, id }: any) => (
						<Link key={id} href={href}>
							<Image
								src={icon}
								height={SOCIALS_SIZE}
								width={SOCIALS_SIZE}
								alt=""
							/>
						</Link>
					))}
				</li>
				<li className="max-md:mt-[40px]">
					<FormMain />
				</li>
			</ul>
		</section>
	);
};
