import header_liked from "/public/logo/header_liked.svg";
import header_cart from "/public/logo/header_cart.svg";
import type { HeaderData, HeaderIcons } from "@/types/header/headerData";

export const ICON_SIZE = 26;

export const headerData: HeaderData[] = [
  /* {
		id: "products",
		title: "Products",
		href: "/catalog",
		dropdown: true,
	}, */
  {
    id: "services",
    title: "Services",
    href: "/services",
    dropdown: true,
  },
  /* {
		id: "about",
		title: "About Us",
		href: "/about",
		dropdown: false,
	}, */
  /* {
		id: "blog",
		title: "Blog",
		href: "/blog",
		dropdown: false,
	}, */
  {
    id: "contact",
    title: "Contact",
    href: "/contact",
    dropdown: false,
  },
];

export const headerIcons: HeaderIcons[] = [
  ,/* {
		id: 1,
		icon: header_liked,
		alt: "header_liked_icon",
		href: "/liked",
	},
	{
		id: 2,
		icon: header_cart,
		alt: "header_cart_icon",
		href: "/cart",
	} */
  /* ,
	{
		id: 3,
		icon: header_user,
		alt: "header_user_icon",
		href: "/",
	} */
];

interface PopularService {
  name: string;
  link: string;
}

interface Type {
  name: string;
  link: string;
  popularServices?: PopularService[];
}

export interface Service {
  link: string;
  text: string;
  id?: string;
  types: Type[];
}

export const dropdowns: { [key: string]: Service[] } = {
  services: [
    {
      id: "adu",
      link: "/basement-waterproofing-seattle",
      text: "Basement Waterproofing",
      types: [
        {
          name: "Bathroom Tile",
          link: "/bathroom-remode/bathroom-tile",
        },
        {
          name: "Bathroom Cabinetry",
          link: "/cabinet-installation/bathroom-cabinetry",
        },
        {
          name: "Bathroom Plumbing",
          link: "/bathroom-remode/bathroom-plumbing",
        },
        {
          name: "Bathroom Fixture",
          link: "/bathroom-remode/bathroom-fixtures",
        },
        {
          name: "Bathroom Shower",
          link: "/bathroom-remode/bathroom-shower",
        },
      ],
    },
    {
      id: "adu",
      link: "/adu-builder-seattle",
      text: "ADU and DADU",
      types: [
        {
          name: "Bathroom Tile",
          link: "/bathroom-remode/bathroom-tile",
        },
        {
          name: "Bathroom Cabinetry",
          link: "/cabinet-installation/bathroom-cabinetry",
        },
        {
          name: "Bathroom Plumbing",
          link: "/bathroom-remode/bathroom-plumbing",
        },
        {
          name: "Bathroom Fixture",
          link: "/bathroom-remode/bathroom-fixtures",
        },
        {
          name: "Bathroom Shower",
          link: "/bathroom-remode/bathroom-shower",
        },
      ],
    },
    /* {
			id: "electrical",
			link: "/electrical",
			text: "Electrical Installation",
			types: [
				{
					name: "Electrical Panel",
					link: "/electrical/electrical-panel",
				},
				{
					name: "Knob and Tube",
					link: "/electrical/knob-and-tube",
				},
				{
					name: "House Rewire",
					link: "/electrical/house-rewire",
				},
				{
					name: "Electrical Floor Heating",
					link: "/electrical/electrical-floor-heating",
				},
				{
					name: "Lighting Service",
					link: "/electrical/lighting-service",
				},
				{
					name: "Ceiling Fans Installation",
					link: "/electrical/ceiling-fans",
				},
				{
					name: "Under Cabinet Lighting",
					link: "/electrical/under-cabinet-lighting",
				},
				{
					name: "Landscape Lighting",
					link: "/electrical/landscape-lighting",
				},
			],
		}, */
    /* {
			id: "landscaping",
			link: "/landscaping",
			text: "Landscaping Services",
			types: [
				{
					name: "Landscape Design",
					link: "/landscaping/landscape-design",
				},
				{ name: "Grading", link: "/landscaping/grading" },
				{ name: "Planting", link: "/landscaping/planting" },
				{ name: "Tree Removal", link: "/landscaping/tree-removal" },
				{
					name: "Patio Installation",
					link: "/landscaping/patio-installation",
				},
				{
					name: "Sod Installation",
					link: "/landscaping/sod-installation",
				},
				{
					name: "Fence Installation",
					link: "/landscaping/fence-installation",
				},
				{
					name: "Retaining Walls",
					link: "/landscaping/retaining-walls",
				},
				{ name: "Fountain", link: "/landscaping/fountain" },
				{ name: "Fire Pits", link: "/landscaping/fire-pits" },
				{
					name: "Path Installation",
					link: "/landscaping/path-installation",
				},
				{
					name: "Irrigation Installation",
					link: "/landscaping/irrigation-installation",
				},
				{ name: "Power Washing", link: "/landscaping/power-washing" },
				{ name: "Weed Control", link: "/landscaping/weed-control" },
				{
					name: "Landscape Lighting",
					link: "/electrical/landscape-lighting",
				},
			],
		}, */
    /* {
			id: "doors",
			link: "/door-installation",
			text: "Doors",
			types: [
				{
					name: "Interior Doors",
					link: "/door-installation/interior-doors",
				},
				{
					name: "Exterior Doors",
					link: "/door-installation/exterior-doors",
				},
				{
					name: "Garage Doors",
					link: "/door-installation/garage-doors",
				},
				{
					name: "Sliding Doors",
					link: "/door-installation/sliding-doors",
				},
				{ name: "Door Repair", link: "/door-installation/door-repair" },
				{
					name: "Door Replacement",
					link: "/door-installation/door-replacement",
				},
				{ name: "Entry Door", link: "/door-installation/entry-door" },
			],
		}, */
    {
      id: "bathrooms",
      link: "/bathroom-remodel-seattle",
      text: "Bathroom Remodel",
      types: [
        {
          name: "Bathroom Tile",
          link: "/bathroom-remode/bathroom-tile",
        },
        {
          name: "Bathroom Cabinetry",
          link: "/cabinet-installation/bathroom-cabinetry",
        },
        {
          name: "Bathroom Plumbing",
          link: "/bathroom-remode/bathroom-plumbing",
        },
        {
          name: "Bathroom Fixture",
          link: "/bathroom-remode/bathroom-fixtures",
        },
        {
          name: "Bathroom Shower",
          link: "/bathroom-remode/bathroom-shower",
        },
      ],
    },
    /* {
			id: "plumbing",
			link: "/plumbing-services",
			text: "Plumbing Services",
			types: [
				{
					name: "Kitchen Plumbing",
					link: "/plumbing-services/kitchen-plumbing",
				},
				{
					name: "Bathroom Plumbing",
					link: "/plumbing-services/bathroom-plumbing",
				},
				{
					name: "Jacuzzi Installation",
					link: "/plumbing-services/jacuzzi-installation",
				},
				{
					name: "Toilet Installation",
					link: "/plumbing-services/toilet-installation",
				},
				{
					name: "Home Repiping",
					link: "/service/home-repiping",
				},
				{
					name: "Drain Cleaning",
					link: "/service/drain-cleaning",
				},
				{
					name: "Gas Line Installation",
					link: "/service/gas-line-installation",
				},
				{
					name: "Sewer Line Repair",
					link: "/service/sewer-line-repair",
				},
			],
		}, */

    {
      id: "attic",
      link: "/attic-finishing-seattle",
      text: "Attic Finishing",
      types: [
        {
          name: "Attic Insulation",
          link: "/attic-finishing/attic-insulation",
        },
        {
          name: "Attic Drywall",
          link: "/attic-finishing/attic-drywall",
        },
        {
          name: "Attic Windows and Skylights",
          link: "/attic-finishing/attic-windows-and-skylights",
        },
        {
          name: "Attic Storage Solutions",
          link: "/attic-finishing/attic-storage-solutions",
        },
        {
          name: "Attic Ventilation",
          link: "/attic-finishing/attic-ventilation",
        },
        {
          name: "Attic Lighting",
          link: "/attic-finishing/attic-lighting",
        },
        {
          name: "Attic Heating and Cooling",
          link: "/attic-finishing/attic-heating-and-cooling",
        },
        {
          name: "Attic Bathroom Addition",
          link: "/attic-finishing/attic-bathroom-addition",
        },
      ],
    },
    /* {
			id: "architecture",
			link: "/architectural-service",
			text: "Architecture",
			types: [
				{
					name: "Home Design",
					link: "/architectural-service/home-design",
				},
				{
					name: "Structural Engineering",
					link: "/architectural-service/structural-engineering",
				},
				{
					name: "Civil Engineering",
					link: "/architectural-service/civil-engineering",
				},
				{
					name: "Interior Design",
					link: "/architectural-service/interior-design",
				},
				{
					name: "Landscape Architect",
					link: "/architectural-service/landscape-design",
				},
				{
					name: "GeoTech Engineering",
					link: "/architectural-service/geotech-engineering",
				},
				{
					name: "3-D Rendering",
					link: "/architectural-service/3d-rendering",
				},
				{
					name: "Seismic Retrofitting",
					link: "/masonry-contractors/seismic-retrofitting",
				},
				{
					name: "Foundation Repair",
					link: "/architectural-service/foundation-repair",
				},
			],
		}, */
    {
      id: "basement",
      link: "/basement-finishing-seattle",
      text: "Basement Finishing",
      types: [
        {
          name: "Basement Flooring",
          link: "/flooring/basement-flooring",
        },
        {
          name: "Basement Remodel",
          link: "/basement-finishing/basement-remodel",
        },
        {
          name: "Basement Entertainment Center",
          link: "/basement-finishing/basement-entertainment-center",
        },
        {
          name: "Basement Bathroom",
          link: "/basement-finishing/basement-bathroom",
        },
        {
          name: "Basement Waterproofing",
          link: "/basement-finishing/basement-waterproofing",
        },
        {
          name: "Basement Insulation",
          link: "/basement-finishing/basement-insulation",
        },
        {
          name: "Basement Bar",
          link: "/basement-finishing/basement-bar",
        },
        {
          name: "Basement Windows",
          link: "/basement-finishing/basement-windows",
        },
      ],
    },
    /* {
			id: "hvac",
			link: "/hvac-installation",
			text: "HVAC Installation",
			types: [
				{ name: "HVAC Repair", link: "/hvac-installation/hvac-repair" },
				{
					name: "HVAC Cleaning",
					link: "/hvac-installation/hvac-cleaning",
				},
				{
					name: "Split System Installation",
					link: "/hvac-installation/split-system-installation",
				},
			],
		}, */
    /* {
			id: "excavation",
			link: "/excavation-contractors",
			text: "Excavation Service",
			types: [
				{
					name: "Site Preparation",
					link: "/excavation-contractors/site-preparation",
				},
				{
					name: "Earthworks",
					link: "/excavation-contractors/earthworks",
				},
				{ name: "Grading", link: "/excavation-contractors/grading" },
				{
					name: "Land Clearing",
					link: "/excavation-contractors/land-clearing",
				},
				{
					name: "Dirt Removal",
					link: "/excavation-contractors/dirt-removal",
				},
			],
		}, */
    {
      id: "kitchen",
      link: "/kitchen-remodel-seattle",
      text: "Kitchen Remodel",
      types: [
        {
          name: "Kitchen Cabinets",
          link: "/cabinet-installation/kitchen-cabinets",
        },
        {
          name: "Kitchen Countertops",
          link: "/countertop-installation/kitchen-countertops",
        },
        {
          name: "Kitchen Flooring",
          link: "/flooring/kitchen-flooring",
        },
        {
          name: "Kitchen Appliances",
          link: "/service/kitchen-appliances",
        },
        {
          name: "Kitchen Lighting",
          link: "/kitchen-remodel/kitchen-lighting",
        },
        {
          name: "Kitchen Plumbing",
          link: "/kitchen-remodel/kitchen-plumbing",
        },
        { name: "Patio Kitchen", link: "/landscaping/patio-kitchen" },
      ],
    },
    /* {
			id: "windows",
			link: "/window-installation",
			text: "Window Services",
			types: [
				{
					name: "Window Replacement",
					link: "/window-installation/window-replacement",
				},
				{
					name: "Egress Window",
					link: "/window-installation/egress-window",
				},
				{
					name: "Energy-Efficient Windows",
					link: "/window-installation/energy-efficient-windows",
				},
				{
					name: "Skylight Installation",
					link: "/serwindow-installationvice/skylight-installation",
				},
				{
					name: "Commercial Windows",
					link: "/window-installation/commercial-windows",
				},
			],
		}, */

    /* {
			id: "siding",
			link: "/siding-installation-seattle",
			text: "Siding",
			types: [
				{
					name: "Siding Repair",
					link: "/siding-installation/siding-repair",
				},
				{
					name: "Vinyl Siding",
					link: "/siding-installation/vinyl-siding",
				},
				{
					name: "Hardie Siding",
					link: "/siding-installation/hardie-siding",
				},
				{
					name: "Cedar Siding",
					link: "/siding-installation/cedar-siding",
				},
				{
					name: "Aluminum Siding",
					link: "/siding-installation/aluminum-siding",
				},
				{
					name: "Stone Veneer",
					link: "/masonry-contractors/stone-veneer",
				},
				{
					name: "Composite Siding",
					link: "/siding-installation/composite-siding",
				},
			],
		}, */
    /* {
			id: "painting",
			link: "/painters",
			text: "Painting Services",
			types: [
				{
					name: "Interior Painting",
					link: "/painters/interior-painting",
				},
				{
					name: "Exterior Painting",
					link: "/painters/exterior-painting",
				},
				{
					name: "Cabinet Painting",
					link: "/painters/cabinet-painting",
				},
				{
					name: "Trim Painting",
					link: "/painters/trim-painting",
				},
				{
					name: "Room Painting",
					link: "/painters/room-painting",
				},
				{
					name: "Ceiling Painting",
					link: "/painters/ceiling-painting",
				},
				{
					name: "Deck Painting",
					link: "/painters/deck-painting",
				},
				{
					name: "Siding Painting",
					link: "/painters/siding-painting",
				},
				{
					name: "Fence Painting",
					link: "/painters/fence-painting",
				},
				{
					name: "Varnishing",
					link: "/painters/varnishing",
				},
				{
					name: "Stucco",
					link: "/painters/stucco",
				},
			],
		}, */
  ],
  products: [
    {
      link: "/countertop-installation-near-me",
      text: "Countertop Installation",
      types: [
        {
          name: "Quartz Countertops",
          link: "/quartz_countertops",
        },
        {
          name: "Marble Countertops",
          link: "/marble_countertops",
        },
        {
          name: "Granite Countertops",
          link: "/granite_countertops",
        },
        {
          name: "Onyx Countertops",
          link: "/onyx_countertops",
        },
        {
          name: "Remnants",
          link: "/remnants",
        },
        {
          name: "Travertine Countertops",
          link: "/travertine_countertops",
        },
        {
          name: "Limestone Countertops",
          link: "/limestone_countertops",
        },
        {
          name: "Soapstone Countertops",
          link: "/soapstone_countertops",
        },
      ],
    },
    {
      link: "/flooring",
      text: "Flooring",
      types: [
        {
          name: "Hardwood Flooring",
          link: "/hardwood_flooring",
          popularServices: [
            {
              name: "Hardwood Floor Installation",
              link: "/hardwood_floor_installation",
            },
            {
              name: "Hardwood Floor Refinishing",
              link: "/hardwood_floor_refinishing",
            },
            {
              name: "Custom Staining",
              link: "/hardwood_custom_staining",
            },
            {
              name: "Wood Floor Repair",
              link: "/hardwood_floor_repair",
            },
            {
              name: "Patterned Wood Flooring",
              link: "/hardwood_patterned_flooring",
            },
          ],
        },
        {
          name: "Laminate Flooring",
          link: "/laminate_flooring",
          popularServices: [
            {
              name: "Laminate Floor Installation",
              link: "/laminate_floor_installation",
            },
            {
              name: "Laminate Floor Repair",
              link: "/laminate_floor_repair",
            },
            {
              name: "Moisture-Resistant Laminate",
              link: "/laminate_moisture_resistant",
            },
            {
              name: "Embossed Laminate Designs",
              link: "/laminate_embossed_designs",
            },
            {
              name: "Laminate Floor Removal",
              link: "/laminate_floor_removal",
            },
          ],
        },
        {
          name: "Tile Flooring",
          link: "/tile_flooring",
          popularServices: [
            {
              name: "Tile Floor Installation",
              link: "/tile_floor_installation",
            },
            {
              name: "Tile Floor Repair",
              link: "/tile_floor_repair",
            },
            {
              name: "Grout Cleaning",
              link: "/tile_grout_cleaning",
            },
            {
              name: "Porcelain Tile Options",
              link: "/tile_porcelain_options",
            },
            {
              name: "Custom Tile Patterns",
              link: "/tile_custom_patterns",
            },
          ],
        },
      ],
    },
  ],
};
