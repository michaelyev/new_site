/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  domains: ['res.cloudinary.com', 'https://swiperjs.com'],
	},
	async redirects() {
		return [
		  {
			source: "/",
			has: [
			  { type: "host", value: "renovaremodels.com" },
			  { type: "host", value: "www.renovaremodels.com" }
			],
			destination: "https://www.renova.contractors/",
			permanent: true
		  },
		  {
			source: "/bathroom-remodel-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors/bathroom-remodel-seattle",
			permanent: true
		  },
		  {
			source: "/attic-finishing-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors/attic-finishing-seattle",
			permanent: true
		  },
		  {
			source: "/basement-finishing-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors/basement-finishing-seattle",
			permanent: true
		  },
		  {
			source: "/kitchen-remodel-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors/kitchen-remodel-seattle",
			permanent: true
		  },
		  {
			source: "/basement-waterproofing-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors/basement-finishing-seattle",
			permanent: true
		  },
		  {
			source: "/adu-builder-seattle",
			has: [{ type: "host", value: "renovaremodels.com" }],
			destination: "https://www.renova.contractors",
			permanent: true
		  }
		];
	  }
  }

  module.exports = nextConfig;
