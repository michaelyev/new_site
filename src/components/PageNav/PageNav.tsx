// @ts-nocheck
/*eslint-disable*/
"use client";
import Link from "next/link";

export const PageNav = () => {
	const links = [
		{ text: "📞 Contact", href: "#contact" },
		{ text: "💰 Cost Table", href: "#cost_table" },
		{ text: "📜 Licencing", href: "#licensing" },
		{ text: "❓ FAQ", href: "#faq" },
		{ text: "🌐 Socials", href: "#socials" },
		{ text: "📍 Locations", href: "#locations" },
	];

	return (
		<div className="container scroll-anchor">
			<nav className=" component-mb relative flex slider-gap w-full  overflow-x-auto overflow-y-hidden mx-auto">
				{links.map((link, index) => (
					<Link
						className="catalog-button"
						key={index}
						href={link.href}
					>
						{link.text}
					</Link>
				))}
			</nav>
		</div>
	);
};
