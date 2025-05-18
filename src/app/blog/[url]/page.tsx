import ReactMarkdown from "react-markdown";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { url: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const id = params.url;

	const post = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/${id}`,
	).then((res) => res.json());

	// Assuming 'title' and 'description' properties exist in the API response
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		},
	};
}

export async function generateStaticParams(): Promise<{ url: string }[]> {
	const url = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/`,
	).then((res) => res.json());

	// Check if the response is an array before using .map
	if (Array.isArray(url)) {
		return url.map((post: { url: any }) => ({
			url: post.url,
		}));
	} else {
		// Handle the case where the response is not an array
		console.error("API response for blog/url/ is not an array");

		return []; // Or return an empty array if no valid data is present
	}
}

const page = async ({ params }: Props): Promise<JSX.Element> => {
	const getBlog = async (): Promise<any> => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/url/${params.url}`,
		);

		return res.json();
	};

	const blog = await getBlog();

	const dateObj = new Date(blog.createdAt);

	const options = { year: "numeric", month: "long", day: "numeric" };
	const americanFormat = dateObj.toLocaleDateString("en-US", options as any);

	return (
		<main className="first-component container">
			<div className="">
				<div className="flex inside-mb text-main-yellow">
					<h3>{americanFormat}</h3>
				</div>
				<ReactMarkdown className="markdown component-mb">
					{blog.markdown}
				</ReactMarkdown>
			</div>
		</main>
	);
};

export default page;
