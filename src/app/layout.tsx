import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import NextBreadcrumb from "@/components/Breadcrumbs/Breadcrumbs";
import ClientWrapper from "@/components/Dropdown/ClientWrapper";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<head>
				<Script
					id="google-ads"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10799331489');
          `,
					}}
				/>
				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-VCL1839D6R"
				></Script>

				<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=AW-10799331489"
				></Script>
				<Script
					id="gtag-init"
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10799331489');
          `,
					}}
				/>
				<Script id="analytics">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date())

  gtag('config', 'G-VCL1839D6R')`}</Script>
				<Script id="facebook-pixel" strategy="afterInteractive">
					{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '401679525836971');
          fbq('track', 'PageView');
        `}
				</Script>
				<meta
					name="msvalidate.01"
					content="6BAC73CBD2804DA3E05336B597702D53"
				/>
			</head>
			<body className="bg-main-dark">
				<ClientWrapper>
					<Header />
				</ClientWrapper>
				<div className="container relative top-[220px] max-sm:top-[195px]">
					<NextBreadcrumb
						homeElement={<span className="text-white ">Home</span>}
						separator={<span color="main-gray">|</span>}
						activeClasses="text-main-yellow hover:underline"
						listClasses="hover:underline mx-2 text-white"
						capitalizeLinks
					/>
				</div>

				{children}
				<Footer />
			</body>
			<SpeedInsights />
			<Analytics />
			<GoogleAnalytics gaId="G-VCL1839D6R" />
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=AW-16668157015"
			/>
			<Script id="gtag-init" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16668157015');
        `}
			</Script>{" "}
		</html>
	);
}
