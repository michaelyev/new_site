import ReactMarkdown from "react-markdown";
import { ManufacturersClient } from "./ManufacturersClient";

type Props = {
	markdownmanufacturers: string;
	p: string;
	h2: string;
};

export const Manufacturers: React.FC<Props> = ({
	h2,
	p,
	markdownmanufacturers,
}) => {
	return (
		<section
			id="manufacturers"
			className="scroll-anchor container component-mb  relative z-1 "
		>
			<div className="mb-10  text-center ">
				<h2 className="mb-10 custom-heading  first-letter:text-main-yellow">
					{h2 ? h2 : "Brands, Suppliers and Manufacturers we use"}
				</h2>
				<ReactMarkdown className="markdown max-sm:hidden sm:w-2/3 w-full mx-auto text-center">
					{markdownmanufacturers}
				</ReactMarkdown>
				{/* <p className="text-main-gray max-sm:hidden sm:w-2/3 w-full mx-auto">{p}</p> */}
			</div>

			<ManufacturersClient />

			{/* <ReactMarkdown className="markdown max-sm:hidden sm:w-2/3 w-full mx-auto text-center">
				{markdownmanufacturers}
			</ReactMarkdown> */}
		</section>
	);
};
