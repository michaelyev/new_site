interface ServiceCard {
	heading: string;
	paragraph: string;
	url?: string;
	price: string;
	image: string;
	alt?: string;
	defaultLink?: string;
	category?: string;
}

type ServiceCategory = { [key: string]: ServiceCard[] }; // Key is string (category name), value is ServiceCard array

export const ourServicesCardsData: ServiceCategory = {
	all: [
		{
			"heading": "Kitchen Remodel",
			"paragraph":
				"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",
			"image": "/our_services/Kitchen/Kitchen_Remodel.jpg",
			"alt": "Open-concept kitchen and living area with white cabinets, marble-patterned countertops, and light wood flooring",
			"price": "Price starts at $12,500 CAD",
			"defaultLink": "kitchen-remodel-seattle",
			"category": "kitchen"
		},
		{
			"heading": "Bathroom Remodel",
			"paragraph":
				"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",
			"image": "/our_services/Bathroom/Bathroom_Remodel.jpg",
			"alt": "Modern bathroom with a black and white bathtub, glass shower, and white vanity with a cushioned chair.",
			"price": "Price starts at $10,000 CAD",
			"defaultLink": "bathroom-remodel-seattle",
			"category": "bathroom",

		},
		{
			"heading": "Basement Finishing",
			"paragraph":
				"Transform your basement into functional living space with our finishing services.",
			"image": "/our_services/Basement/Basement_Finishing.jpg",
			"alt": "Finished basement with stone columns, wood-like laminate flooring, and recessed ceiling lights.",
			"price": "Price starts at $12,500 CAD",
			"defaultLink": "basement-finishing-seattle",
			"category": "basement"
		},
		{
			"heading": "Attic Finishing",
			"paragraph":
				"Transform your attic into usable living space with our finishing services.",
			"image": "/our_services/Attic/Attic_Finishing.jpg",
			"alt": "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
			"price": "Price starts at $12,500 CAD",
			"defaultLink": "attic-finishing-seattle",
			"category": "attic"
		},{
			"heading": "ADU and DADU building",
			"paragraph":
				"Transform your attic into usable living space with our finishing services.",
			"image": "/our_services/Attic/Attic_Finishing.jpg",
			"alt": "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
			"price": "Price starts at $12,500 CAD",
			"defaultLink": "adu-builder-seattle",
			"category": "attic"
		},{
			"heading": "Basement Waterproofing",
			"paragraph":
				"Transform your attic into usable living space with our finishing services.",
			"image": "/our_services/Attic/Attic_Finishing.jpg",
			"alt": "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
			"price": "Price starts at $12,500 CAD",
			"defaultLink": "basement-waterproofing-seattle",
			"category": "attic"
		}
	]
	,
	tile: [
		{
		  heading: "Tile Installation",
		  paragraph: "Get professional tile installation for kitchens, bathrooms, and floors with a wide range of styles to choose from.",
		  image: "/our_services/Tile/tile_installation.jpg",
		  alt: "A man installing white tiles on a wall with careful precision and craftsmanship.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Floor Tile",
		  paragraph: "Find the perfect floor tile for your home and let us handle the installation for a flawless finish.",
		  image: "/our_services/Tile/floor_tile.jpg",
		  alt: "A stylish white herringbone tile floor paired with a cozy fireplace.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Bathroom Tile",
		  paragraph: "Upgrade your bathroom with beautiful tiles in various shapes and colors, installed at competitive rates.",
		  image: "/our_services/Tile/bathroom_tile.jpg",
		  alt: "A luxurious bathroom featuring a marble countertop and gold fixtures.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Shower Tile",
		  paragraph: "Transform your shower with stunning tiles designed to suit your style and space.",
		  image: "/our_services/Tile/shower_tile.jpg",
		  alt: "A clean, modern shower with a glass door and a neatly folded towel.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Backsplash Tile",
		  paragraph: "Give your kitchen a fresh look with our range of backsplash tiles, including subway and mosaic options.",
		  image: "/our_services/Tile/backsplash_tile.jpg",
		  alt: "A bold black and white herringbone backsplash adds character to a modern kitchen.",
		  price: "Price starts at CAD $1,200",
		},
		{
		  heading: "Ceramic Tile",
		  paragraph: "Durable ceramic tiles are a great choice for kitchens and bathrooms, combining style and practicality.",
		  image: "/our_services/Tile/ceramic_tile.jpg",
		  alt: "A selection of ceramic tiles showcasing their unique textures and colors.",
		  price: "Price starts at CAD $1,200",
		},
		{
		  heading: "Porcelain Tile",
		  paragraph: "Add elegance to your home with porcelain tiles that are as durable as they are beautiful.",
		  image: "/our_services/Tile/porcelain_tile.jpg",
		  alt: "Close-up of porcelain tiles with intricate patterns and shades.",
		  price: "Price starts at CAD $2,000",
		},
		{
		  heading: "Mosaic Tile",
		  paragraph: "Mosaic tiles bring a touch of creativity and style to any room, from backsplashes to floors.",
		  image: "/our_services/Tile/mosaic_tile.jpg",
		  alt: "A vibrant mosaic backsplash brings life to a modern kitchen counter.",
		  price: "Price starts at CAD $1,800",
		},
		{
		  heading: "Heated Tile Floor",
		  paragraph: "Stay warm with heated tile floors, a perfect upgrade for Canadian winters.",
		  image: "/our_services/Tile/heated_tile_floor.jpg",
		  alt: "Schluter Ditra tile floor heating system being installed.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Basement Floor Tile",
		  paragraph: "Upgrade your basement with durable and stylish tiles for a polished, lasting finish.",
		  image: "/our_services/Tile/basement_floor_tile.jpg",
		  alt: "A basement floor with classic black and white tiles leading to an adjacent space.",
		  price: "Price starts at CAD $2,200",
		},
		{
		  heading: "Subway Tile",
		  paragraph: "Classic subway tiles are perfect for kitchens and bathrooms, available in a variety of colors and sizes.",
		  image: "/our_services/Tile/subway_tile.jpg",
		  alt: "A modern shower with white subway tiles and sleek fixtures.",
		  price: "Price starts at CAD $1,200",
		},
		{
		  heading: "Grout Cleaning",
		  paragraph: "Keep your tiles looking fresh with professional grout cleaning that restores their original shine.",
		  image: "/our_services/Tile/grout_cleaning.jpg",
		  alt: "A steam cleaner restoring grout to its original color.",
		  price: "Price starts at CAD $500",
		},
		{
		  heading: "Fireplace Tile",
		  paragraph: "Transform your fireplace with stylish tiles and expert installation for a warm, inviting space.",
		  image: "/our_services/Tile/fireplace_tile.jpg",
		  alt: "A fireplace with elegant tiles and a cozy couch nearby.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Outdoor Tile",
		  paragraph: "Explore durable and stylish outdoor tiles for your patio or walkway, made to withstand the elements.",
		  image: "/our_services/Tile/outdoor_tile.jpg",
		  alt: "A modern outdoor dining area with sleek patio tiles and comfortable seating.",
		  price: "Price starts at CAD $2,500",
		},
	  ],
	  countertops: [
		{
		  heading: "Countertop Installation",
		  paragraph: "Choose from our wide selection of quartz, marble, and granite countertops. Book your installation today for a seamless experience.",
		  image: "/our_services/Countertops/countertop_installation.jpg",
		  alt: "A modern kitchen with wooden stools and a sleek white quartz countertop.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Quartz Countertops",
		  paragraph: "Discover the beauty and versatility of quartz countertops, available in a variety of colors to suit any kitchen style.",
		  image: "/our_services/Countertops/quartz_countertops.jpg",
		  alt: "Close-up of a quartz countertop with a white marble-like surface.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Granite Countertops",
		  paragraph: "Add natural beauty and durability to your kitchen with our expertly installed granite countertops.",
		  image: "/our_services/Countertops/granite_countertops.jpg",
		  alt: "A granite countertop with black and white speckles in a modern kitchen.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Laminate Countertops",
		  paragraph: "Laminate countertops offer a budget-friendly option with plenty of colors and styles to match your kitchen.",
		  image: "/our_services/Countertops/laminate_countertops.jpg",
		  alt: "A clean, modern kitchen with sleek laminate countertops and white cabinetry.",
		  price: "Price starts at CAD $1,200",
		},
		{
		  heading: "Soapstone Countertops",
		  paragraph: "Soapstone countertops bring a unique, natural look to your kitchen. Let us help you select and install the perfect slab.",
		  image: "/our_services/Countertops/soapstone_countertops.jpg",
		  alt: "A soapstone countertop with a bowl of colorful fruit displayed on top.",
		  price: "Price starts at CAD $2,800",
		},
		{
		  heading: "Butcher Block",
		  paragraph: "Timeless and versatile, butcher block countertops offer warmth and functionality to your kitchen space.",
		  image: "/our_services/Countertops/butcher_block.jpg",
		  alt: "A butcher block countertop with a stove and oven integrated into the workspace.",
		  price: "Price starts at CAD $2,000",
		},
		{
		  heading: "Concrete Countertop",
		  paragraph: "Achieve a modern, industrial vibe with durable concrete countertops, custom-installed for your kitchen.",
		  image: "/our_services/Countertops/concrete_countertop.jpg",
		  alt: "A concrete countertop with a built-in sink and a functional workspace.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Stainless Steel Countertops",
		  paragraph: "Stainless steel countertops are a hygienic and stylish option, ideal for both residential and professional kitchens.",
		  image: "/our_services/Countertops/stainless-steel_countertops.jpg",
		  alt: "A sleek stainless steel countertop in a minimalist kitchen.",
		  price: "Price starts at CAD $3,200",
		},
		{
		  heading: "Porcelain Countertop",
		  paragraph: "Porcelain countertops offer a sleek, seamless look and are resistant to scratches, stains, and heat.",
		  image: "/our_services/Countertops/porcelain_countertop.jpg",
		  alt: "A durable porcelain countertop with a smooth and polished finish.",
		  price: "Price starts at CAD $3,500",
		},
		{
		  heading: "Countertop Repair",
		  paragraph: "Save money with our countertop repair services, perfect for fixing cracks and scratches without replacing the whole surface.",
		  image: "/our_services/Countertops/countertop_repair.jpg",
		  alt: "A craftsman measuring a countertop for precise repair work.",
		  price: "Price starts at CAD $800",
		},
	  ],
	  cabinets: [
		{
		  heading: "Kitchen Cabinet Installation",
		  paragraph: "Let us handle your kitchen cabinet installation with care and precision. Choose the perfect set from our wide selection.",
		  image: "/our_services/Cabinets/cabinet_installation.jpg",
		  alt: "A man wearing gloves works on installing a cabinet, showcasing skill and attention to detail.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Kitchen Cabinets",
		  paragraph: "Browse our selection of melamine, MDF, hardwood, and plywood cabinets. Special discounts available on select styles.",
		  image: "/our_services/Cabinets/kitchen_cabinets.jpg",
		  alt: "A modern kitchen with dark green cabinets and white countertops, creating a sleek and inviting space.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Cabinet Design",
		  paragraph: "Visualize your dream cabinets with our complimentary design services for kitchens and bathrooms.",
		  image: "/our_services/Cabinets/cabinet_design.jpg",
		  alt: "A stylish kitchen featuring clean white cabinets and a warm wooden floor, designed to perfection.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "Bathroom Vanity",
		  paragraph: "Upgrade your bathroom with a new vanity. We offer a range of stylish and functional cabinets for all your needs.",
		  image: "/our_services/Cabinets/bathroom_cabinets.jpg",
		  alt: "A blue vanity with marble countertops and a white sink, adding charm to a modern bathroom.",
		  price: "Price starts at CAD $2,200",
		},
		{
		  heading: "Cabinet Refinishing",
		  paragraph: "Refresh your cabinets with our refinishing service. Save time and money while achieving professional results.",
		  image: "/our_services/Cabinets/cabinet_refinishing.jpg",
		  alt: "A person carefully cutting wood in a workshop, preparing for cabinet refinishing.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "Built-in Cabinets",
		  paragraph: "Built-in cabinets add a seamless look to any room, offering style and storage in one solution.",
		  image: "/our_services/Cabinets/built-in-cabinets.jpg",
		  alt: "A modern kitchen with built-in cabinets, a spacious island, and a sliding door leading outside.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Cabinet Door Replacement",
		  paragraph: "Replace old cabinet doors with new ones for a fresh look. Choose from a variety of affordable options.",
		  image: "/our_services/Cabinets/cabinet_door_replacement.jpg",
		  alt: "A kitchen with green cabinets and wooden floors, featuring newly replaced doors for a refreshed appearance.",
		  price: "Price starts at CAD $1,800",
		},
		{
		  heading: "Cabinet Repair",
		  paragraph: "We repair kitchen cabinets and more, giving your storage spaces a new lease on life.",
		  image: "/our_services/Cabinets/cabinet_repair.jpg",
		  alt: "A man using a drill to fix a cabinet door, showcasing home improvement in action.",
		  price: "Price starts at CAD $800",
		},
		{
		  heading: "Cabinet Painting",
		  paragraph: "Give your cabinets a new look with our professional painting service. We use high-quality paints for stunning results.",
		  image: "/our_services/Cabinets/cabinet_painting.jpg",
		  alt: "A vibrant blue paint roll placed on a white surface, ready for cabinet transformation.",
		  price: "Price starts at CAD $1,300",
		},
		{
		  heading: "Storage Cabinets",
		  paragraph: "Enhance any room with additional storage space. We offer and install stylish, functional storage cabinets.",
		  image: "/our_services/Cabinets/storage_cabinets.jpg",
		  alt: "A white storage cabinet with a basket on top, adding a clean and organized touch.",
		  price: "Price starts at CAD $2,500",
		},
	  ],
	  flooring: [
		{
		  heading: "Flooring Installation",
		  paragraph:
			"Upgrade your home with professional flooring installation. We offer a variety of flooring types, fixtures, and colors to suit your style.",
		  image: "/our_services/Flooring/Flooring_Installation.jpg",
		  alt: "A man carefully using a hammer to secure a piece of hardwood during a flooring project.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Hardwood Flooring",
		  paragraph:
			"Enhance your home with high-quality hardwood flooring. Choose from a range of styles and finishes to complement your décor and add lasting value.",
		  image: "/our_services/Flooring/Hardwood_Flooring.jpg",
		  alt: "A cozy living room with hardwood floors and stylish furniture, creating a warm and inviting space.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Laminate Flooring",
		  paragraph:
			"Laminate flooring combines durability and style at an affordable price. It’s easy to install and perfect for high-traffic areas.",
		  image: "/our_services/Flooring/Laminate_Flooring.jpg",
		  alt: "Close-up of a laminate floor showcasing its wood-like texture.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Carpet",
		  paragraph:
			"Add comfort and warmth to your home with our carpet installation service. Choose from a variety of colors and textures to fit any room.",
		  image: "/our_services/Flooring/Carpet.jpg",
		  alt: "A cozy bedroom with a soft blue rug that complements the beige carpet floor.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "LVT Flooring",
		  paragraph:
			"LVT flooring offers a stylish, cost-effective solution. It’s durable and moisture-resistant, making it perfect for busy or damp areas.",
		  image: "/our_services/Flooring/LVT_Flooring.jpg",
		  alt: "A modern room featuring wooden floors and shelves, showcasing LVT flooring in a sleek interior.",
		  price: "Price starts at CAD $3,000",
		},
	  ],

	  deck: [
		{
		  heading: "Deck Building",
		  paragraph:
			"Let us help you create a stunning outdoor area with our deck-building services. We design and build decks that are perfect for relaxation and entertaining.",
		  image: "/our_services/Decking/Deck_Building.jpg",
		  alt: "Various tools laid out alongside a bright yellow object, set on a backdrop of deck building materials.",
		  price: "Price starts at CAD $7,000",
		},
		{
		  heading: "Backyard Deck Installation",
		  paragraph:
			"Enhance your backyard with our year-round deck installation services. We take care of permits, plans, and provide a reliable warranty.",
		  image: "/our_services/Decking/Backyard_Deck_Installation.jpg",
		  alt: "A wooden deck in a backyard with a table and chairs, inviting for gatherings and relaxation.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Trex Deck",
		  paragraph:
			"Explore Trex decking with our installation services. It's eco-friendly, durable, and low-maintenance, available in a range of colors.",
		  image: "/our_services/Decking/Trex_Deck.jpg",
		  alt: "A Trex deck featuring a table and chairs under a large umbrella, perfect for outdoor dining and lounging.",
		  price: "Price starts at CAD $7,000",
		},
		{
		  heading: "Composite Deck",
		  paragraph:
			"Upgrade your outdoor space with a durable, low-maintenance composite deck. We offer free consultations and install year-round.",
		  image: "/our_services/Decking/Composite_Deck.jpg",
		  alt: "A wicker chair on a composite wooden deck, blending natural and modern design elements.",
		  price: "Price starts at CAD $6,500",
		},
		{
		  heading: "Custom Deck",
		  paragraph:
			"We specialize in custom deck installations, offering free renderings and expert architectural designs tailored to your needs.",
		  image: "/our_services/Decking/Custom_Deck.jpg",
		  alt: "A custom deck attached to a large green house, surrounded by lush greenery.",
		  price: "Price starts at CAD $8,000",
		},
		{
		  heading: "Pool Deck Construction",
		  paragraph:
			"Transform your pool area with a professionally built deck. Our services include safety features, expert consultations, and a solid warranty.",
		  image: "/our_services/Decking/Pool_Deck_Construction.jpg",
		  alt: "A wooden pool deck surrounding a clear blue pool.",
		  price: "Price starts at CAD $10,000",
		},
		{
		  heading: "Deck Repair",
		  paragraph:
			"Fix your deck with our reliable repair services. Whether it’s a pool deck or a rooftop deck, we offer fast, flexible solutions backed by a warranty.",
		  image: "/our_services/Decking/Deck_Repair.jpg",
		  alt: "A hammer placed on a wooden deck, illustrating the process of deck repair.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Deck Restoration",
		  paragraph:
			"Bring your deck back to life with our restoration services. We focus on every detail and offer free consultations to ensure a flawless finish.",
		  image: "/our_services/Decking/Deck_Restoration.jpg",
		  alt: "A man measuring wood with a tape measure, preparing for deck restoration.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Deck Railing Installation",
		  paragraph:
			"Enhance your deck with stylish and safe railings. We offer a variety of options, including cable railings, to suit your needs.",
		  image: "/our_services/Decking/Deck_Railing_Installation.jpg",
		  alt: "A charming wooden deck with a railing, adding safety and visual appeal.",
		  price: "Price starts at CAD $1,800",
		},
		{
		  heading: "Deck Replacement",
		  paragraph:
			"Upgrade your old deck with our deck replacement service. Our designers will help create a stylish, modern replacement that lasts.",
		  image: "/our_services/Decking/Deck_Replacement.jpg",
		  alt: "A man using a drill to install a wooden deck as part of a replacement project.",
		  price: "Price starts at CAD $7,000",
		},
		{
		  heading: "Timber Decking",
		  paragraph:
			"Give your backyard a timeless, natural look with custom timber decking. Our installations are backed by a comprehensive warranty.",
		  image: "/our_services/Decking/Timber_Decking.jpg",
		  alt: "A wooden deck made of timber, featuring a white roof and a blue house in the background.",
		  price: "Price starts at CAD $5,500",
		},
	  ],

	  kitchen: [
		{
		  heading: "Kitchen Remodel",
		  paragraph:
			"Bring your dream kitchen to life with our remodeling services. From design to material delivery, we handle it all to create your perfect space.",
		  image: "/our_services/Kitchen/Kitchen_Remodel.jpg",
		  alt: "Open-concept kitchen and living area with white cabinets, marble-patterned countertops, and light wood flooring.",
		  price: "Price starts at CAD $10,000",
		},
		{
		  heading: "Kitchen Design",
		  paragraph:
			"Work with our designer to create a kitchen that fits your style and needs. We'll guide you through every step with personalized consultations.",
		  image: "/our_services/Kitchen/Kitchen_Design.jpg",
		  alt: "A modern kitchen with white cabinetry, a large marble countertop island, and stainless steel appliances, including a range with a matching hood.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Kitchen Tile",
		  paragraph:
			"Upgrade your kitchen with stunning tile installations that enhance both functionality and aesthetics in your cooking space.",
		  image: "/our_services/Kitchen/Kitchen_Tile.jpg",
		  alt: "Two red apples on a white plate on a light wooden countertop with a white tiled backsplash in the background.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Kitchen Layout",
		  paragraph:
			"Optimize your kitchen's functionality and comfort with our professional layout planning services tailored to your space.",
		  image: "/our_services/Kitchen/Kitchen_Layout.jpg",
		  alt: "Close-up of a technical drawing of a kitchen layout.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Kitchen Cabinets",
		  paragraph:
			"Upgrade your storage with custom or prefabricated kitchen cabinets. We ensure quick installation so you can enjoy your new kitchen in no time.",
		  image: "/our_services/Kitchen/Kitchen_Cabinets.jpg",
		  alt: "Forest green kitchen with cabinetry, white marble countertops, an island, and a white tile backsplash.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Kitchen Countertops",
		  paragraph:
			"Choose from a variety of countertop styles and materials. We offer professional installation to elevate your kitchen's look and feel.",
		  image: "/our_services/Kitchen/Kitchen_Countertops.jpg",
		  alt: "Modern kitchen with white and gray countertops, woven basket, stovetop, cutting boards, white bowls, and a built-in black oven.",
		  price: "Price starts at CAD $3,500",
		},
		{
		  heading: "Kitchen Flooring",
		  paragraph:
			"Upgrade your kitchen floors with durable and stylish options. Whether you prefer tile or hardwood, we’ve got you covered.",
		  image: "/our_services/Kitchen/Kitchen_Flooring.jpg",
		  alt: "Modern chevron-patterned light tile kitchen floor leading to a dark reflective built-in unit framed with warm wood.",
		  price: "Price starts at CAD $2,000",
		},
		{
		  heading: "Kitchen Appliances",
		  paragraph:
			"Get your new appliances installed quickly and efficiently. We also handle delivery and old appliance disposal for a hassle-free experience.",
		  image: "/our_services/Kitchen/Kitchen_Appliances.jpg",
		  alt: "Modern kitchen with a SMEG built-in oven and stand mixer on a grey countertop.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "Kitchen Lighting",
		  paragraph:
			"Add style and functionality to your kitchen with our lighting solutions. Proper lighting makes your countertops and space stand out.",
		  image: "/our_services/Kitchen/Kitchen_Lighting.jpg",
		  alt: "Hanging wooden pendant light in a kitchen with wooden cabinets, tiled backsplash, and various kitchen items including a plant and mugs on a shelf.",
		  price: "Price starts at CAD $2,000",
		},
		{
		  heading: "Patio Kitchen",
		  paragraph:
			"Create the perfect outdoor kitchen with our patio installation services. Turn your backyard into a chef's paradise.",
		  image: "/our_services/Kitchen/Patio_Kitchen.jpg",
		  alt: "Outdoor patio kitchen with built-in grill, stainless steel drawers, a countertop with white dishes, gray dining table, and black lattice-back chairs.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Kitchen Plumbing",
		  paragraph:
			"Ensure your kitchen's plumbing is installed correctly and functions seamlessly. Our team will safely connect all your appliances.",
		  image: "/our_services/Kitchen/Kitchen_Plumbing.jpg",
		  alt: "Close-up of a kitchen sink with a gold faucet and matching drain.",
		  price: "Price starts at CAD $1,800",
		},
	  ],

	  bathroom: [
		{
		  heading: "Bathroom Remodel",
		  paragraph:
			"Redesign your bathroom with our expert remodeling services. Whether it’s a layout change or a full addition, we ensure top-notch results.",
		  image: "/our_services/Bathroom/Bathroom_Remodel.jpg",
		  alt: "Modern bathroom with a black and white bathtub, glass shower, and white vanity with a cushioned chair.",
		  price: "Price starts at CAD $8,000",
		},
		{
		  heading: "Bathroom Layout",
		  paragraph:
			"Maximize your bathroom space with a layout redesign. Small changes can add significant functionality and square footage.",
		  image: "/our_services/Bathroom/Bathroom_Layout.jpg",
		  alt: "Close-up of a pink pencil on a technical drawing with a white ruler in the corner.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Bathroom Design",
		  paragraph:
			"Work with our designers to create a stylish and functional bathroom tailored to your needs and preferences.",
		  image: "/our_services/Bathroom/Bathroom_Design.jpg",
		  alt: "Modern bathroom with white marble surfaces and gold-toned fixtures.",
		  price: "Price starts at CAD $0",
		},
		{
		  heading: "Bathroom Cabinetry",
		  paragraph:
			"Install durable and stylish cabinets designed for humid environments, perfect for maximizing your bathroom's storage.",
		  image: "/our_services/Bathroom/Bathroom_Cabinetry.jpg",
		  alt: "Modern bathroom with a scenic view, light green walls, white cabinetry, and decorative items on a gray granite countertop.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Heated Bathroom Floor",
		  paragraph:
			"Enjoy the luxury of heated floors installed by licensed electricians, adding comfort to your bathroom all year round.",
		  image: "/our_services/Bathroom/Heated_Bathroom_Floor.jpg",
		  alt: "Modern bathroom with black tiled heated floor, a light wood floating vanity, white rectangular sink, and a large window with a perforated metal screen.",
		  price: "Price starts at CAD $3,500",
		},
		{
		  heading: "Bathroom Expansion",
		  paragraph:
			"Expand your bathroom to include modern amenities like a walk-in shower, tub, or a combination of both for ultimate comfort.",
		  image: "/our_services/Bathroom/Bathroom_Expansion.jpg",
		  alt: "Modern grayscale bathroom with bathtub, window, rain shower head, toilet, floating vanity with sink, large mirror, and tropical plant.",
		  price: "Price starts at CAD $7,000",
		},
		{
		  heading: "Bathroom Shower",
		  paragraph:
			"Upgrade with a custom or prefabricated shower installation. Transform your bathroom with a new, stylish shower space.",
		  image: "/our_services/Bathroom/Bathroom_Shower.jpg",
		  alt: "Modern shower with white brick-pattern tiles and a dark grey shower fixture.",
		  price: "Price starts at CAD $3,500",
		},
		{
		  heading: "Bathroom Fixtures",
		  paragraph:
			"Order and install new fixtures with ease. We provide quick, hassle-free installation and free delivery for all purchases.",
		  image: "/our_services/Bathroom/Bathroom_Fixtures.jpg",
		  alt: "Modern bathroom sink with gray stone countertop, white vessel sink, black faucet, and vase with green leaves.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "Bathroom Plumbing",
		  paragraph:
			"Keep your bathroom running smoothly with our professional plumbing services, backed by a warranty for all work done.",
		  image: "/our_services/Plumbing/Bathroom_Plumbing.jpg",
		  alt: "Close-up of a chrome bathtub faucet with white handles against a gray paneled wall.",
		  price: "Price starts at CAD $2,000",
		},
		{
		  heading: "Bathroom Tile",
		  paragraph:
			"Refresh your bathroom with new tiles. Our installation service adds elegance without requiring a complete remodel.",
		  image: "/our_services/Bathroom/Bathroom_Tile.jpg",
		  alt: "White tiled shower wall with a chrome shower handle and hose.",
		  price: "Price starts at CAD $2,500",
		},
	  ],

	  basement: [
		{
		  heading: "Basement Finishing",
		  paragraph:
			"Turn your basement into a functional and cozy living area with our expert finishing services.",
		  image: "/our_services/Basement/Basement_Finishing.jpg",
		  alt: "Finished basement with stone columns, wood-like laminate flooring, and recessed ceiling lights.",
		  price: "Price starts at CAD $10,000",
		},
		{
		  heading: "Basement Flooring",
		  paragraph:
			"Explore a range of flooring options to make your basement comfortable and stylish.",
		  image: "/our_services/Basement/Basement_Flooring.jpg",
		  alt: "Basement with dark gray tile flooring, stone wall, white wainscoting, wooden bar with granite top, metal bar stools, armchair, and staircase.",
		  price: "Price starts at CAD $5,000",
		},
		{
		  heading: "Basement Remodel",
		  paragraph:
			"Redesign your basement to boost its functionality and appearance with our remodeling services.",
		  image: "/our_services/Basement/Basement_Remodel.jpg",
		  alt: "A cozy basement living room with a sofa, coffee table, stone fireplace, flat-screen TV, and built-in shelves.",
		  price: "Price starts at CAD $12,000",
		},
		{
		  heading: "Basement Entertainment Center",
		  paragraph:
			"Transform your basement into the ultimate entertainment hub with our custom solutions.",
		  image: "/our_services/Basement/Entertainment_Center.jpg",
		  alt: "Entertainment center with a mounted flat-screen TV, soundbar, and built-in white cabinets and shelves.",
		  price: "Price starts at CAD $8,000",
		},
		{
		  heading: "Basement Bathroom",
		  paragraph:
			"Add a fully functional bathroom to your basement for convenience and increased home value.",
		  image: "/our_services/Basement/Basement_Bathroom.jpg",
		  alt: "Modern basement bathroom with a white freestanding bathtub, dark gray tiled walls, a small wooden stool with bottles on it, and a glass shower door.",
		  price: "Price starts at CAD $6,000",
		},
		{
		  heading: "Basement Waterproofing",
		  paragraph:
			"Protect your basement from water damage with our reliable waterproofing solutions.",
		  image: "/our_services/Basement/Basement_Waterproofing.jpg",
		  alt: "Corner of a building foundation with black dimpled waterproofing membrane and exposed gray bricks above, surrounded by loose soil.",
		  price: "Price starts at CAD $5,500",
		},
		{
		  heading: "Basement Insulation",
		  paragraph:
			"Keep your basement comfortable and energy-efficient year-round with proper insulation.",
		  image: "/our_services/Basement/Basement_Insulation.jpg",
		  alt: "Basement under construction with wall insulation, exposed wooden ceiling beams, and a sliding glass door.",
		  price: "Price starts at CAD $4,500",
		},
		{
		  heading: "Basement Bar",
		  paragraph:
			"Design a stylish and functional bar in your basement, perfect for entertaining guests.",
		  image: "/our_services/Basement/Basement_Bar.jpg",
		  alt: "Modern basement bar with staircase, bar counter, and liquor shelves.",
		  price: "Price starts at CAD $7,000",
		},
		{
		  heading: "Basement Windows",
		  paragraph:
			"Enhance your basement’s lighting and ventilation with new, energy-efficient windows.",
		  image: "/our_services/Basement/Basement_Windows.jpg",
		  alt: "Well-lit basement room with a window with white shutters and a checkered valance, next to a built-in bookshelf containing books, photos, and decorative items.",
		  price: "Price starts at CAD $3,500",
		},
	  ],

	  attic: [
		{
		  heading: "Attic Finishing",
		  paragraph:
			"Turn your attic into a functional living space with our professional finishing services.",
		  image: "/our_services/Attic/Attic_Finishing.jpg",
		  alt: "Cozy finished attic living area with wooden beams, gray sofa, hanging wicker chair, wooden chairs, and a round coffee table.",
		  price: "Price starts at CAD $10,000",
		},
		{
		  heading: "Attic Ladder",
		  paragraph:
			"Make accessing your attic easier with a professionally installed attic ladder.",
		  image: "/our_services/Attic/Attic_Ladder2.jpg",
		  alt: "Foldable wooden attic ladder extended from a ceiling opening.",
		  price: "Price starts at CAD $1,500",
		},
		{
		  heading: "Attic Insulation",
		  paragraph:
			"Keep your home comfortable and energy-efficient with proper attic insulation.",
		  image: "/our_services/Attic/Attic_Insulation.jpg",
		  alt: "A hose blowing loose white insulation into an unfinished attic.",
		  price: "Price starts at CAD $3,500",
		},
		{
		  heading: "Attic Drywall",
		  paragraph:
			"Add durable and stylish walls to your attic with our drywall installation services.",
		  image: "/our_services/Attic/Attic_Drywall.jpg",
		  alt: "Newly drywalled attic with recessed lighting and an unfinished built-in shelf or closet space.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Attic Windows and Skylights",
		  paragraph:
			"Improve your attic's natural light and ventilation with new windows and skylights.",
		  image: "/our_services/Attic/Attic_Windows_Skylights.jpg",
		  alt: "Two skylights with wooden frames installed in an angled white ceiling of an attic.",
		  price: "Price starts at CAD $2,800",
		},
		{
		  heading: "Attic Storage Solutions",
		  paragraph:
			"Make the most of your attic with custom storage options tailored to your needs.",
		  image: "/our_services/Attic/Attic_Storage.jpg",
		  alt: "Built-in attic storage with shoe compartments and drawers, some drawers are open showing clothes inside.",
		  price: "Price starts at CAD $3,000",
		},
		{
		  heading: "Attic Ventilation",
		  paragraph:
			"Enhance airflow and energy efficiency in your attic with our ventilation solutions.",
		  image: "/our_services/Attic/Attic_Ventilation.jpg",
		  alt: "Close-up view of an attic's exterior gable with beige siding and a circular white vent.",
		  price: "Price starts at CAD $2,500",
		},
		{
		  heading: "Attic Lighting",
		  paragraph:
			"Brighten your attic with efficient and stylish lighting options for any space.",
		  image: "/our_services/Attic/Attic_Lighting.jpg",
		  alt: "Interior of an attic with exposed wooden beams, a ceiling fan, a yellow painted section of wall, a window, and a small wall-mounted light.",
		  price: "Price starts at CAD $1,800",
		},
		{
		  heading: "Attic Heating and Cooling",
		  paragraph:
			"Enjoy year-round comfort in your attic with effective heating and cooling systems.",
		  image: "/our_services/Attic/Attic_Heating_Cooling.jpg",
		  alt: "Interior of an attic with wooden panels and two large, flexible air ducts.",
		  price: "Price starts at CAD $4,000",
		},
		{
		  heading: "Attic Bathroom Addition",
		  paragraph:
			"Boost your home's value and functionality with a professionally installed attic bathroom.",
		  image: "/our_services/Attic/Attic_Bathroom_Addition.jpg",
		  alt: "Small bathroom with pastel green and white decor, featuring a vanity, pedestal sink, toilet, and wall-mounted mirror cabinet.",
		  price: "Price starts at CAD $7,000",
		},
	  ]

};

/*   export const ourServicesCardsData = {
	tile: [
		{
			heading: "Tile Installation",
			paragraph:
				"New tile installation, wide variety of tiles available for kitchen backsplash, floors, bathroom floors, shower walls.",
			url: "/tile-installation",
			image: "/our_services/_attic_finishing.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Floor Tile",
			paragraph:
				"Explore our catalogue to see what floor tile will look best in your home, easy floor tile installation with us",
			url: "/service/floor-tile",
			image: "/our_services/_floor_tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile available for installation in all colors and shapes, can be purchased at a discount, bathroom glows with new tile install.",
			url: "/service/bathroom-tile",
			image: "/our_services/_bathroom_tile.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "Shower Tile",
			paragraph:
				"Shower tile installation of any shape and size, change your shower with our new tile, shower walls and shower floor changed in one call.",
			url: "/service/shower-tile",
			image: "/our_services/-shower-tile.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "Backsplash Tile",
			paragraph:
				"Kitchen backsplash tile, subway tile, mosaic tile and more, can be purchased with a discount. Backsplash ideas rendered and installed by us.",
			url: "/service/backsplash-tile",
			image: "/our_services/_backsplash_tile.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceramic Tile",
			paragraph:
				"Ceramic tiles are a practical option for kitchen backsplashes and bathroom walls. Ceramic tiles - installed easily in any room.",
			url: "/service/ceramic-tile",
			image: "/our_services/_ceramic_tile.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Porcelain Tile",
			paragraph:
				"Our porcelain tile collection offers both elegance and versatility. We offer sales and installation services for porcelain tiles.",
			url: "/service/porcelain-tile",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Mosaic Tile",
			paragraph:
				"Mosaic kitchen backsplash, mosaic tile floors - no arguing that mosaic tile looks great anywhere it goes. Install mosaic tiles with us.",
			url: "/service/mosaic-tile",
			image: "/our_services/_mosaic_tile.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Tile Floor",
			paragraph:
				"Radiant floor heating is a great addition to your home. Upgrade any room by adding a heated tile floor, feel the benefit of heated floors.",
			url: "/service/heated-tile-floor",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Basement Floor Tile",
			paragraph:
				"Install specialty basement tile, don't just cover it with basement floor paint. Explore basement flooring ideas with a free consultation.",
			url: "/service/basement-floor-tile",
			image: "/our_services/basement_floor_tile.jpg",
			price: "Price starts at $2,200",
		},
		{
			heading: "Subway Tile",
			paragraph:
				"Discover our wide selection of subway tile for your kitchen backsplash or bathroom. Explore the variety of sizes and colors available.",
			url: "/service/subway-tile",
			image: "",
			price: "Price starts at $1,200",
		},
		{
			heading: "Grout Cleaning",
			paragraph:
				"Cleaning grout is a difficult task, that's why we offer tile and grout cleaning. Our grout cleaner will make your tiles look like new.",
			url: "/service/grout-tile-cleaning",
			image: "",
			price: "Price starts at $500",
		},
		{
			heading: "Fireplace Tile",
			paragraph:
				"Transform your fireplace with our free consultation on fireplace tile ideas and our expert fireplace tile installation services.",
			url: "/service/fireplace-tile",
			image: "/our_services/_Fireplace_Tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Outdoor Tile",
			paragraph:
				"We offer a wide selection of outdoor tiles for your patio to ensure a perfect fit for your needs. Explore our outdoor patio tile options.",
			url: "/service/outdoor-tile",
			image: "/our_services/_outdoor_tile.webp",
			price: "Price starts at $2,500",
		},
	],
	countertops: [
		{
			heading: "Countertop Installation",
			paragraph:
				"We offer a wide variety of quartz countertops, marble countertops, and granite countertops. Schedule your countertop installation now.",
			url: "/countertop-installation",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Quartz Countertops",
			paragraph:
				"Quartz countertops offer a wide range of colors and shades, making them the perfect choice for any kitchen. Discover your countertop.",
			url: "/service/quartz-countertops",
			image: "/our_services/_Quartz_Countertops.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Granite Countertops",
			paragraph:
				"Installing granite countertops in your kitchen is quick and easy. Made from natural stone, these durable surfaces add beauty to any kitchen.",
			url: "/service/granite-countertops",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Laminate Countertops",
			paragraph:
				"Laminate countertops offer an affordable and low-maintenance option with a wide variety of colors and styles to choose from.",
			url: "/service/laminate-countertops",
			image: "/our_services/_Laminate_Countertops.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Soapstone Countertops",
			paragraph:
				"Get a unique soapstone slab for your kitchen. We can help you choose and install your soapstone countertop, pick one from our inventory.",
			url: "/service/soapstone-countertops",
			image: "/our_services/_Soapstone_Countertops.jpg",
			price: "Price starts at $2,800",
		},
		{
			heading: "Butcher Block",
			paragraph:
				"Butcher block countertops are popular in kitchens for their timeless elegance, durability, and versatile nature, easy to cut and install.",
			url: "/service/butcher-block",
			image: "/our_services/_butcher_block.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Concrete Countertop",
			paragraph:
				"Concrete countertops give a modern industrial aesthetic to contemporary kitchens, but their installation process can be difficult.",
			url: "/service/concrete-countertops",
			image: "/our_services/_Concrete_Countertops.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Stainless Steel Countertops",
			paragraph:
				"Stainless steel countertops are a popular choice among professionals due to their ease of cleaning and hygienic properties.",
			url: "/service/stainless-steel-countertops",
			image: "/our_services/_Stainless_Steel_Countertops.jpg",
			price: "Price starts at $3,200",
		},
		{
			heading: "Porcelain Countertop",
			paragraph:
				"Porcelain countertops are resistant to scratches, stains, and heat, come in a wide swath of color palettes, fabricated as one seamless piece.",
			url: "/service/porcelain-countertops",
			image: "/our_services/_Porcelain_Countertops.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Countertop Repair",
			paragraph:
				"When your countertop has cracks or scratches, we can repair it instead of replacing the entire surface, helping you save money.",
			url: "/service/countertop-repair",
			image: "/our_services/_Countertop_Repair.jpg",
			price: "Price starts at $800",
		},
	],
	cabinets: [
		{
			heading: "Kitchen Cabinet Installation",
			paragraph:
				"Kitchen cabinets installed by professionals in your kitchen. Pick your perfect kitchen cabinet set, from our inventory.",
			url: "/cabinet-installation",
			image: "/our_services/_Kitchen_cabinets.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Melamine, MDF, hardwood, plywood kitchen cabinets, and many more are available for purchase with select cabinets at a discount.",
			url: "/service/kitchen-cabinets",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Cabinet Design",
			paragraph:
				"Our designer services for creating kitchen and bathroom cabinet designs are complimentary. Visualize your cabinets with ease.",
			url: "/service/cabinet-design",
			image: "/our_services/_Cabinets_Design.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Cabinet Installation",
			paragraph:
				"If you need more storage, we can install cabinets in any room of your house. Cabinet Installation for all your storage needs done right.",
			url: "/service/cabinet-installation",
			image: "/our_services/_Cabinet_Installer.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Bathroom Cabinets",
			paragraph:
				"Bathroom cabinets are a great way to add style to your bathroom. Specialty cabinets are available for bathroom vanity and storage needs.",
			url: "/service/bathroom-cabinets",
			image: "",
			price: "Price starts at $2,200",
		},
		{
			heading: "Cabinet Refinishing",
			paragraph:
				"Our cabinet refacing service can save you time and money with professional results. Kitchen cabinet refinishing and more with our help.",
			url: "/service/cabinet-refinishing",
			image: "/our_services/_Cabinet_Refinishing.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Built-in Cabinets",
			paragraph:
				"Built-in cabinets provide a seamless and timeless look to any room, creating a sense of cohesiveness, and helping to declutter your space.",
			url: "/service/built-in-cabinets",
			image: "/our_services/_Built-In_Cabinets.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Cabinet Door Replacement",
			paragraph:
				"Freshen up your kitchen cabinets by replacing the cabinet doors with a wide variety of options that won't break the bank.",
			url: "/service/cabinet-door-replacement",
			image: "/our_services/_cabinet_door_replacement.webp",
			price: "Price starts at $1,800",
		},
		{
			heading: "Cabinet Repair",
			paragraph:
				"We specialize in repairing kitchen cabinets as well as any other cabinets in your home that require fixing.",
			url: "/service/cabinet-repair",
			image: "/our_services/_Cabinet-Repair.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Brighten up your cabinets with our professional cabinet painting service. We use high-quality cabinet paint for all of your cabinets.",
			url: "/service/cabinet-painting",
			image: "/our_services/_Cabinet_Painting.jpg",
			price: "Price starts at $1,300",
		},
		{
			heading: "Storage Cabinets",
			paragraph:
				"Add storage space and functionality to any room with our cabinet installation and sales service. See storage cabinets we sell and install.",
			url: "/service/storage-cabinets",
			image: "",
			price: "Price starts at $2,500",
		},
	],
	electrical: [
		{
			heading: "Electrical Installation",
			paragraph:
				"Upgrade your home's wiring with our electrical installation service, all electricians are licensed and bonded, worry-free installation.",
			url: "/electrical",
			image: "",
			price: "Price starts at $1,200",
		},
		{
			heading: "Electrical Panel",
			paragraph:
				"Installing an electrical panel can help stabilize voltage levels and improve the overall performance of your home's electrical system.",
			url: "/service/electrical-panel",
			image: "/our_services/_Electrical_Panel_Installation.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Knob and Tube",
			paragraph:
				"If your home still has knob and tube wiring, we highly recommend upgrading to a modern electrical system with our licensed electricians.",
			url: "/service/knob-and-tube",
			image: "/our_services/_knob_and_tube.webp",
			price: "Price starts at $2,500",
		},
		{
			heading: "House Rewire",
			paragraph:
				"Upgrade your home's electrical wiring for added safety and energy savings. Our certified electricians will have you saving in days.",
			url: "/service/house-rewire",
			image: "/our_services/_House_Rewire.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Electrical Floor Heating",
			paragraph:
				"Installing electric floor heating in any room adds comfort and helps retain heat in your house.",
			url: "/service/electrical-floor-heating",
			image: "/our_services/_Electric_Floor_Heating.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Lighting Service",
			paragraph:
				"Our lighting service can add any style of interior or exterior lights to your home, including recessed, chandeliers, and outdoor lights.",
			url: "/service/lighting-service",
			image: "/our_services/_Lightning_Service.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Ceiling Fans Installation",
			paragraph:
				"Ceiling fans can be installed by our expert electricians in any room and customized to your specific needs and fit your interior style.",
			url: "/service/ceiling-fans",
			image: "/our_services/_Ceiling_Fans_Installation.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Under Cabinet Lighting",
			paragraph:
				"Make your cabinets stand out with our under-cabinet lighting installation a stylish and functional addition to your cabinets.",
			url: "/service/under-cabinet-lighting",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Landscape lighting",
			paragraph:
				"Landscape lighting installation is essential for the beauty and functionality of your yard, use our designer to determine the best fit.",
			url: "/service/landscape-lighting",
			image: "",
			price: "Price starts at $2,000",
		},
	],
	hvac: [
		{
			heading: "HVAC Installation",
			paragraph:
				"Expert HVAC installation, ensuring optimal comfort and energy efficiency with top-tier service.",
			url: "/hvac-installation",
			image: "/our_services/_Heating_and_Cooling.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "HVAC Repair",
			paragraph:
				"Get 24/7 HVAC repair support with same-day, on-site emergency visits. Experience unparalleled service any time, any day!",
			url: "/service/hvac-repair",
			image: "/our_services/_HVAC_Repair.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "HVAC Cleaning",
			paragraph:
				"Affordable HVAC cleaning with flexible scheduling. See improvements within hours. Sign up for annual service today!",
			url: "/service/hvac-cleaning",
			image: "/our_services/_HVAC_Cleaning.jpg",
			price: "Price starts at $600",
		},
		{
			heading: "Split System Installation",
			paragraph:
				"Expert installation of split systems for optimal home comfort. Free consultation determines your needs before installation.",
			url: "/service/split-installation",
			image: "/our_services/_Mini_Split_Installation.jpg",
			price: "Price starts at $3,000",
		},
	],
	flooring: [
		{
			heading: "Flooring Installation",
			paragraph:
				"Upgrade your home with our flooring installation. Includes various types of flooring, fixtures, and various colors.",
			url: "/flooring",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Hardwood Flooring",
			paragraph:
				"Upgrade your home with our high-quality hardwood flooring. Choose from a variety of styles and finishes to match your décor and enhance the value of your property.",
			url: "/service/hardwood-flooring",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Laminate Flooring",
			paragraph:
				"Our laminate flooring offers durability and a stylish appearance at an affordable price. It’s easy to install and maintain, making it ideal for high-traffic areas.",
			url: "/service/laminate-flooring",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Carpet",
			paragraph:
				"Choose our carpet installation for comfort and style. We offer a wide range of colors and textures to fit any room’s design.",
			url: "/service/carpet",
			image: "",
			price: "Price starts at $1,500",
		},
		{
			heading: "LVT Flooring",
			paragraph:
				"Select our LVT flooring for a cost-effective solution that doesn’t compromise on style. Ideal for areas that require durability and moisture resistance.",
			url: "/service/lvt-flooring",
			image: "",
			price: "Price starts at $3,000",
		},
	],
	deck: [
		{
			heading: "Deck Building",
			paragraph:
				"Our expert deck building service transforms your outdoor space into a beautiful, functional area for relaxation and entertainment",
			url: "/deck-building",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Backyard Deck Installation",
			paragraph:
				"Renew your backyard with our year-round deck installation service. Permits, plans, and a lasting warranty are included.",
			url: "/service/backyard-deck-installation",
			image: "/our_services/_backyard_deck_installation.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Trex Deck",
			paragraph:
				"Discover Trex Decking with our installation: Eco-friendly, low-maintenance, & durable in all conditions, with a wide range of colors.",
			url: "/service/trex-decking",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Composite Deck",
			paragraph:
				"Transform your outdoor space with our low-maintenance, durable composite deck: free consultations & year-round installs.",
			url: "/service/composite-deck",
			image: "/our_services/_composite_deck.jpg",
			price: "Price starts at $6,500",
		},
		{
			heading: "Custom Deck",
			paragraph:
				"We provide custom deck installation services for your backyard along with free renderings and expert architectural designs for durability.",
			url: "/service/custom-deck",
			image: "/our_services/_custom_deck.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Pool Deck Construction",
			paragraph:
				"Transform your pool with our deck construction service - warranty, expert consultation, renderings, and safety all in one package.",
			url: "/service/pool-deck-construction",
			image: "/our_services/_pool_deck_construction.webp",
			price: "Price starts at $10,000",
		},
		{
			heading: "Rooftop Deck Building",
			paragraph:
				"Our designers will assist you in creating rooftop deck ideas to ensure our rooftop deck installation matches your vision.",
			url: "/service/rooftop-deck-building",
			image: "/our_services/_rooftop_deck.webp",
			price: "Price starts at $12,000",
		},
		{
			heading: "Deck Repair",
			paragraph:
				"Repair your deck, pool deck, and rooftop deck with our top-notch deck repair service—fast, flexible, and supported by a solid warranty.",
			url: "/service/deck-repair",
			image: "/our_services/_deck_repair_services.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Deck Restoration",
			paragraph:
				"Revitalize your deck with our deck restoration service! Expert attention to detail & free consultation for a stunning result.",
			url: "/service/deck-restoration",
			image: "/our_services/_deck_restoration.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Deck Railing Installation",
			paragraph:
				"Deck railing installation: Various deck railing options are available, including cable railings, where style meets safety.",
			url: "/service/deck-railing",
			image: "/our_services/_deck_railing_installation.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Building Deck Stairs and Steps",
			paragraph:
				"Installation of deck stairs and deck steps is available for any deck, customizing unique stairs and steps is an option with our designers.",
			url: "/service/building-deck-stairs-and-steps",
			image: "/our_services/_deck-stairs-construction.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Deck Replacement",
			paragraph:
				"Take advantage of our deck replacement service to upgrade your old deck with a stylish, modern replacement with the help of our designer.",
			url: "/service/deck-replacement",
			image: "/our_services/_Hardwood_Decking.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Timber Decking",
			paragraph:
				"With our custom timber decking installation service, we can give your backyard a more natural look that will last for years with our warranty.",
			url: "/service/timber-decking",
			image: "/our_services/_timber_decking.jpg",
			price: "Price starts at $5,500",
		},
	],
	windows: [
		{
			heading: "Window Installation",
			paragraph:
				"Making windows for homes, be it prefab or custom, we can install them within hours. Windows of all dimensions and thicknesses available.",
			url: "/window-installation",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Window Replacement",
			paragraph:
				"We can replace your windows within hours for emergency home window replacement, ensuring your security and safety.",
			url: "/service/window-replacement",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Egress Window",
			paragraph:
				"Egress window installation is essential for code compliance. Our basement egress windows come with egress window covers for protection.",
			url: "/service/egress-window",
			image: "/our_services/_Egress_Window.jpg",
			price: "Price starts at $2,200",
		},
		{
			heading: "Energy-Efficient Windows",
			paragraph:
				"We offer top-rated energy-efficient windows for installation, saving you money on electricity bills without sacrificing the aesthetic.",
			url: "/service/energy-efficient-windows",
			image: "/our_services/_Energy-Efficient_Windows.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Skylight Installation",
			paragraph:
				"Skylight windows maximize natural light and improve air circulation in every room, installation on any roof.",
			url: "/service/skylight-installation",
			image: "/our_services/_skylight.webp",
			price: "Price starts at $2,800",
		},
		{
			heading: "Commercial Windows",
			paragraph:
				"Commercial windows for business projects, fully covered and insured from purchase to installation. Don't wait for the unexpected.",
			url: "/service/commercial-windows",
			image: "/our_services/_Commercial_Windows.jpg",
			price: "Price starts at $4,000",
		},
	],
	doors: [
		{
			heading: "Door Installation",
			paragraph:
				"Install any type of doors, interior and exterior doors. Take advantage of our discounts for multiple door installations in your home.",
			url: "/door-installation",
			image: "/our_services/_Interior_Doors.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Exterior Doors",
			paragraph:
				"We specialize in the installation of exterior doors, wooden doors, and French doors. Our options include front doors, backyard doors, patio doors, and doors for sheds.",
			url: "/service/exterior-doors",
			image: "/our_services/_Exterior_Doors.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Garage Doors",
			paragraph:
				"Garage door installation with automatic door opener conveniently, purchase with us to get a discount on garage door installation.",
			url: "/service/garage-doors",
			image: "/our_services/_Garage_Doors.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Sliding Doors",
			paragraph:
				"Sliding door installation service for pre-existing or new sliding doors. Add new closet sliding doors or glass sliding doors for patios.",
			url: "/service/sliding-doors",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Door Repair",
			paragraph:
				"Door repair service for exterior and interior doors, any door in your house can be fixed: garage door, patio doors, closet doors.",
			url: "/service/door-repair",
			image: "/our_services/_door_repair.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Door Replacement",
			paragraph:
				"Door replacement service: we replace old doors with new ones and offer free disposal and delivery.",
			url: "/service/door-replacement",
			image: "/our_services/_Door_Replacement.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Entry Door",
			paragraph:
				"Install entry doors of any style and dimensions, and add a safety door for your entry door.",
			url: "/service/entry-door",
			image: "/our_services/_Entry_Door.jpg",
			price: "Price starts at $2,000",
		},
	],
	architecture: [
		{
			heading: "Architectural Service",
			paragraph:
				"Architectural services for city and project compliances with no delay, complete overview for any project, with all required documentation.",
			url: "/architectural-service",
			image: "",
			price: "Price starts at $3,500",
		},
		{
			heading: "Home Design",
			paragraph:
				"Customize your ideal home with our experienced designers, who will assist you in creating the perfect design for your home.",
			url: "/service/home-design",
			image: "/our_services/_Home_Design.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Structural Engineering",
			paragraph:
				"Ensure safety and stability with our precise structural engineering for all projects that require structural changes and permits.",
			url: "/service/structural-engineering",
			image: "/our_services/_Structural_Engineer.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Civil Engineering",
			paragraph:
				"Change landscapes with our innovative civil engineering solutions, innovative tools, and methods used in every project.",
			url: "/service/civil-engineering",
			image: "/our_services/_Civil_Engineering.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Interior Design",
			paragraph:
				"Interior design service offered by our exceptional in-house designer, who will create elegant and functional interior designs for your home.",
			url: "/service/interior-design",
			image: "/our_services/_Interior_Design.jpg",
			price: "Price starts at $0",
		},
		{
			heading: "Landscape Architect",
			paragraph:
				"Craft beautiful and functional outdoor spaces with the help of our expert outdoor architect, who has a keen eye for yards and gardens.",
			url: "/service/landscape-design",
			image: "/our_services/_Landscape_Architect.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "3-D Rendering",
			paragraph:
				"Complimentary 3D renderings for better project visualization with any extensive change in your home through designer consultation.",
			url: "/service/3d-rendering",
			image: "/our_services/_3-D _rendering.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your building with our seismic retrofitting service, where we take every precaution for resilience.",
			url: "/service/seismic-retrofitting",
			image: "/our_services/_Seismic_Retrofitting.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Foundation Repair",
			paragraph:
				"Immediate remediation of problematic foundations, stabilizing and restoring your building's integrity with our foundation repair service.",
			url: "/service/foundation-repair",
			image: "/our_services/_Foundation_Repair.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "GeoTech Engineering",
			paragraph:
				"Mitigate construction risks and optimize projects with our geotechnical services, ensuring your project's success from the start.",
			url: "/service/geotech-engineering",
			image: "/our_services/_GeoTech_Engineering.jpg",
			price: "Price starts at $4,500",
		},
	],
	plumbing: [
		{
			heading: "Plumbing",
			paragraph:
				"Resolve any plumbing issue with our licensed plumbing service for bathrooms, kitchens, and all plumbing work.",
			url: "/plumbing-services",
			image: "/our_services/_Plumbing_Company.jpg",
			price: "Price starts at $800",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Your kitchen stays dry with our kitchen plumbing service. We provide licensed plumbers to install appliances, sinks, faucets, and pipes.",
			url: "/service/kitchen-plumbing",
			image: "/our_services/_kitchen_plumbing.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing functions perfectly, with no leaks or cracks in old pipes, new pipe installation, and layout changes.",
			url: "/service/bathroom-plumbing",
			image: "/our_services/_bathroom_plumbing.webp",
			price: "Price starts at $1,500",
		},
		{
			heading: "Jacuzzi Installation",
			paragraph:
				"Professional installation of jacuzzis. Our plumbers will have you soaking in a jacuzzi in no time, getting the job done right and fast.",
			url: "/service/jacuzzi-installation",
			image: "/our_services/_Jacuzzi_Installation.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Toilet Installation",
			paragraph:
				"Professional installation of toilets is fast and easy. Purchase with us for free delivery and disposal of your old toilet.",
			url: "/service/toilet-installation",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Home Repiping",
			paragraph:
				"Upgrade your plumbing system with repiping services to ensure that all your pipes are up to code and reliable.",
			url: "/service/home-repiping",
			image: "/our_services/_repiping_specialists.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Drain Cleaning",
			paragraph:
				"Clean drains and clear clogged drains in hours. We will consult with you to prevent the build-up of problems related to clogged drains.",
			url: "/service/drain-cleaning",
			image: "/our_services/_Drain_Cleaning.jpg",
			price: "Price starts at $500",
		},
		{
			heading: "Gas Line Installation",
			paragraph:
				"Professional installation of gas lines is performed by our certified plumbers, ensuring safety and compliance with permits and regulations.",
			url: "/service/gas-line-installation",
			image: "/our_services/_Gas_Line_Repair.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Sewer Line Repair",
			paragraph:
				"Expert sewer line repair services for damaged lines available same day, with emergency response provided immediately for sewer line repair.",
			url: "/service/sewer-line-repair",
			image: "/our_services/_Sewer_Line_Repair.jpg",
			price: "Price starts at $2,500",
		},
	],
	kitchen: [
		{
			heading: "Kitchen Remodel",
			paragraph:
				"Kitchen remodeling services: design and render your dream kitchen, order all materials, and provide delivery to build your perfect space.",
			url: "/kitchen-remodel",
			image: "/our_services/_kitchen_remodel.webp",
			price: "Price starts at $10,000",
		},
		{
			heading: "Kitchen Design",
			paragraph:
				"Create your dream kitchen with our professional designer, who will guide you step by step through the entire process with consultations.",
			url: "/service/kitchen-design",
			image: "/our_services/_Kitchen-Design.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Tile",
			paragraph:
				"Upgrade your kitchen with elegant kitchen tile installation to complement your ideal cooking space.",
			url: "/service/kitchen-tile",
			image: "/our_services/_Kitchen_Tile.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Kitchen Layout",
			paragraph:
				"Optimize your kitchen space with our expert layout planning. We will ensure that it fits all your needs with comfort.",
			url: "/service/kitchen-layout",
			image: "/our_services/_Kitchen_Layout.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Cabinets",
			paragraph:
				"Upgrade your kitchen storage with custom cabinet solutions or have us install prefabricated cabinets, installed within days.",
			url: "/service/kitchen-cabinets",
			image: "/our_services/_Custom_Cabinets.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Countertops",
			paragraph:
				"Level up your kitchen's aesthetics with our customizable countertops, available for purchase and professional installation.",
			url: "/service/kitchen-countertops",
			image: "/our_services/_Kitchen-countertops.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Kitchen Flooring",
			paragraph:
				"Upgrade your kitchen flooring for durability and style. Tile or hardwood, we've got you covered with free delivery and discounts.",
			url: "/service/kitchen-flooring",
			image: "/our_services/_Kitchen_floorings.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Kitchen Appliances",
			paragraph:
				"Kitchen appliance installation service: save on delivery costs, free disposal of old appliances, new appliances installed in hours.",
			url: "/service/kitchen-appliances",
			image: "/our_services/_Kitchen_appliances.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Kitchen Lighting",
			paragraph:
				"Illuminate your kitchen with stylish and functional lighting. New kitchen lighting will make your kitchen countertops stand out.",
			url: "/service/kitchen-lighting",
			image: "/our_services/_kitchen_lighting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Patio Kitchen",
			paragraph:
				"Create an outdoor kitchen oasis with our patio kitchen installation service.",
			url: "/service/patio-kitchen",
			image: "/our_services/_Patio_Kitchen.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Kitchen Plumbing",
			paragraph:
				"Ensure your kitchen's plumbing works flawlessly with our services. Our plumbers will safely install all your kitchen appliances.",
			url: "/service/kitchen-plumbing",
			image: "/our_services/_kitchen_plumbing.jpg",
			price: "Price starts at $1,800",
		},
	],
	bathroom: [
		{
			heading: "Bathroom Remodel",
			paragraph:
				"Remodel your bathroom with experts, change your layout, or do a completely new addition; we have the system down for the best results.",
			url: "/bathroom-remodel",
			image: "/our_services/_Bathroom_Remodel.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Bathroom Layout",
			paragraph:
				"Optimize your bathroom space; don't lose square footage. A change in layout can add more usable square footage to your bathroom.",
			url: "/service/bathroom-layout",
			image: "/our_services/_Bathroom_Layout.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Bathroom Design",
			paragraph:
				"Create a stylish and functional bathroom design with our designers, who will customize it to fit your needs and unique style.",
			url: "/service/bathroom-design",
			image: "/our_services/_Bathroom_Design.jpg",
			price: "Price starts at $0",
		},
		{
			heading: "Bathroom Cabinetry",
			paragraph:
				"Bathroom cabinet installation provides stylish and reliable storage, with cabinets designed for humid environments.",
			url: "/service/bathroom-cabinetry",
			image: "/our_services/_Bathroom_Cabinetry.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Heated Bathroom Floor",
			paragraph:
				"Experience the ultimate comfort of a heated bathroom floor with installation by licensed electricians.",
			url: "/service/heated-bathroom-floor",
			image: "/our_services/_Heated_Bathroom_Floor.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Expansion",
			paragraph:
				"Expand your bathroom space to enhance comfort and functionality by adding a walk-in shower or tub, or a modern combination of both.",
			url: "/service/bathroom-expansion",
			image: "/our_services/_bathroom_Expansion.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Bathroom Shower",
			paragraph:
				"Upgrade your bathroom with a new shower installation. We provide both prefab and custom shower installations.",
			url: "/service/bathroom-shower",
			image: "/our_services/_Bathroom_Shower.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Bathroom Fixtures",
			paragraph:
				"Order and receive new bathroom fixtures hassle-free. Enjoy fast and seamless bathroom fixture installation service with free delivery.",
			url: "/service/bathroom-fixtures",
			image: "/our_services/_Bathroom_Fixtures.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Bathroom Plumbing",
			paragraph:
				"Ensure your bathroom plumbing works perfectly with our bathroom plumbing services; warranty is provided for all plumbing work.",
			url: "/service/bathroom-plumbing",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Bathroom Tile",
			paragraph:
				"Bathroom tile installation offers the opportunity to refresh your bathroom without major changes, keeping it simple and elegant.",
			url: "/service/bathroom-tile",
			image: "",
			price: "Price starts at $2,500",
		},
	],
	roofing: [
		{
			heading: "Roofing",
			paragraph:
				"Have your roof installed responsibly with our year-round roofing installation service, backed by our warranty.",
			url: "/roofing",
			image: "/our_services/_Roofing.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Roof Repair",
			paragraph:
				"Resolve roofing issues promptly with our roof repair services.",
			url: "/service/roof-repair",
			image: "/our_services/_Roof_Repair.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Metal Roofing",
			paragraph:
				"Upgrade to durable and fire-resistant metal roofing for long-lasting protection.",
			url: "/service/metal-roofing",
			image: "/our_services/_Metal_Roofing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Roof Replacement",
			paragraph:
				"Install a new roof to better your home's exterior and prevent future issues. Our roof replacement service includes free disposal.",
			url: "/service/roof-replacement",
			image: "/our_services/_Roof_Replacement.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Roofing",
			paragraph:
				"Protect your commercial property with our reliable commercial roofing installation service, with warranty coverage included.",
			url: "/service/commercial-roofing",
			image: "/our_services/_Commercial_Roofing.jpg",
			price: "Price starts at $15,000",
		},
		{
			heading: "Flat Roofing",
			paragraph:
				"Install a flat roof for modern and minimalist aesthetics. Flat roofing services for commercial and residential properties.",
			url: "/service/flat-roofing",
			image: "/our_services/_Flat_Roofing.jpg",
			price: "Price starts at $12,000",
		},
		{
			heading: "Skylights",
			paragraph:
				"Bring natural light into your home with our skylight installations, which are great for reducing your energy costs.",
			url: "/service/skylights",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Shingles Roof",
			paragraph:
				"Upgrade to traditional shingles for a classic look and reliable protection, shingle roofing has various options for your home's roof.",
			url: "/service/shingles-roof",
			image: "/our_services/_Shingles_Roof.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Asphalt Roofing",
			paragraph:
				"Consider installing long-lasting and cost-effective asphalt roofing for your home.",
			url: "/service/asphalt-roofing",
			image: "/our_services/_asphalt_shingles.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Gutter Repair",
			paragraph:
				"Ensure proper drainage with our professional gutter repair services.",
			url: "/service/gutter-repair",
			image: "/our_services/_Gutter_Repair.jpg",
			price: "Price starts at $1,200",
		},
		{
			heading: "Gutter Cleaning",
			paragraph:
				"Ensure your gutters remain clear and fully functional with our professional gutter cleaning services.",
			url: "/service/gutter-cleaning",
			image: "/our_services/_Gutter_Cleaning.jpg",
			price: "Price starts at $600",
		},
	],
	siding: [
		{
			heading: "Siding",
			paragraph:
				"Enhance your home's exterior with durable siding solutions.",
			url: "/siding",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Siding Repair",
			paragraph:
				"Restore the beauty and integrity of your siding with our repair services.",
			url: "/service/siding-repair",
			image: "/our_services/_siding_repair.webp",
			price: "Price starts at $3,000",
		},
		{
			heading: "Vinyl Siding",
			paragraph:
				"Upgrade to low-maintenance and versatile vinyl siding for your home.",
			url: "/service/vinyl-siding",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Hardie Siding",
			paragraph:
				"Opt for durable and weather-resistant Hardie siding for long-lasting protection.",
			url: "/service/hardie-siding",
			image: "/our_services/_Hardie_Siding.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Cedar Siding",
			paragraph:
				"Enhance your home's natural charm with beautiful cedar siding.",
			url: "/service/cedar-siding",
			image: "/our_services/_Cedar_Siding.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Aluminum Siding",
			paragraph:
				"Choose lightweight and durable aluminum siding for your home's exterior.",
			url: "/service/aluminum-siding",
			image: "/our_services/_aluminium_siding.jpg",
			price: "Price starts at $9,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Add elegance and texture to your home with stylish stone veneer siding.",
			url: "/service/stone-veneer",
			image: "",
			price: "Price starts at $11,000",
		},
		{
			heading: "Composite Siding",
			paragraph:
				"Opt for eco-friendly and durable composite siding for your home.",
			url: "/service/composite-siding",
			image: "/our_services/_Composite_Siding.jpg",
			price: "Price starts at $8,500",
		},
	],
	excavation: [
		{
			heading: "Excavation Service",
			paragraph: "P",
			url: "/excavation-contractors",
			image: "",
			price: "Price starts at $4,000",
		},
		{
			heading: "Site Preparation",
			paragraph:
				"Professional excavation services for site preparation, land clearing, grading, and earthwork.",
			url: "/service/site-preparation",
			image: "/our_services/_Site_Preparation.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Earthworks",
			paragraph:
				"Shape and mold the land to suit your construction needs with earthworks.",
			url: "/service/earthworks",
			image: "/our_services/_Earthworks.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for construction with our grading services.",
			url: "/service/grading",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Land Clearing",
			paragraph:
				"Clear your land of obstacles and vegetation to prepare for construction.",
			url: "/service/land-clearing",
			image: "/our_services/_Land_Clearing.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Dirt Removal",
			paragraph:
				"Efficiently remove excess dirt and debris from your construction site.",
			url: "/service/dirt-removal",
			image: "/our_services/_Dirt_Removal.jpg",
			price: "Price starts at $4,000",
		},
	],
	basement: [
		{
			heading: "Basement Finishing",
			paragraph:
				"Transform your basement into functional living space with our finishing services.",
			url: "/basement-finishing",
			image: "/our_services/_Basement_Finishing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Basement Flooring",
			paragraph:
				"Choose from a variety of flooring options to enhance your basement's comfort and style.",
			url: "/service/basement-flooring",
			image: "/our_services/_Basement_Flooring.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Basement Remodel",
			paragraph:
				"Revamp your basement for improved functionality and aesthetics with our remodeling services.",
			url: "/service/basement-remodel",
			image: "/our_services/_Basement_Remodel.jpg",
			price: "Price starts at $12,000",
		},
		{
			heading: "Basement Entertainment Center",
			paragraph:
				"Create the ultimate entertainment space in your basement with our customized solutions.",
			url: "/service/basement-entertainment-center",
			image: "/our_services/_Basement_Entertainment_Center.jpg",
			price: "Price starts at $8,000",
		},
		{
			heading: "Basement Bathroom",
			paragraph:
				"Add convenience and value to your basement with a professionally installed bathroom.",
			url: "/service/basement-bathroom",
			image: "/our_services/_Basement_Bathroom.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Basement Waterproofing",
			paragraph:
				"Protect your basement from moisture and water damage with our waterproofing solutions.",
			url: "/service/basement-waterproofing",
			image: "/our_services/_Basement_Waterproofing.jpg",
			price: "Price starts at $5,500",
		},
		{
			heading: "Basement Insulation",
			paragraph:
				"Ensure year-round comfort and energy efficiency in your basement with proper insulation.",
			url: "/service/basement-insulation",
			image: "/our_services/_Basement_Insulation.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Basement Bar",
			paragraph:
				"Create a stylish and functional bar space in your basement for entertaining guests.",
			url: "/service/basement-bar",
			image: "/our_services/_Basement_Bar.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Basement Windows",
			paragraph:
				"Brighten up your basement and improve ventilation with new windows.",
			url: "/service/basement-windows",
			image: "/our_services/_Basement_Windows.jpg",
			price: "Price starts at $3,500",
		},
	],
	attic: [
		{
			heading: "Attic Finishing",
			paragraph:
				"Transform your attic into usable living space with our finishing services.",
			url: "/public/our_services/_attic_finishing.jpg",
			image: "/our_services/_attic_finishing.jpg",
			price: "Price starts at $10,000",
		},
		{
			heading: "Attic Ladder",
			paragraph:
				"Gain easy access to your attic with a professionally installed attic ladder.",
			url: "/service/attic-ladder",
			image: "/our_services/_attic_ladder.jpg",
			price: "Price starts at $1,500",
		},
		{
			heading: "Attic Insulation",
			paragraph:
				"Ensure energy efficiency and comfort in your home with proper attic insulation.",
			url: "/service/attic-insulation",
			image: "/our_services/_attic_insulation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Attic Drywall",
			paragraph:
				"Finish your attic walls with durable and attractive drywall.",
			url: "/service/attic-drywall",
			image: "/our_services/_attic_drywall.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Windows and Skylights",
			paragraph:
				"Brighten up your attic space and improve ventilation with new windows and skylights.",
			url: "/service/attic-windows-and-skylights",
			image: "/our_services/_attic_windows_and_skylights.jpg",
			price: "Price starts at $2,800",
		},
		{
			heading: "Attic Storage Solutions",
			paragraph:
				"Maximize your attic space with customized storage solutions.",
			url: "/service/attic-storage-solutions",
			image: "/our_services/_attic_storage_solutions.jpg",
			price: "Price starts at $3,000",
		},
		{
			heading: "Attic Ventilation",
			paragraph:
				"Ensure proper airflow and ventilation in your attic for improved comfort and energy efficiency.",
			url: "/service/attic-ventilation",
			image: "/our_services/_attic_ventilation.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Attic Lighting",
			paragraph:
				"Illuminate your attic space with effective and energy-efficient lighting solutions.",
			url: "/service/attic-lighting",
			image: "/our_services/_attic_lighting.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Attic Heating and Cooling",
			paragraph:
				"Ensure year-round comfort in your attic with effective heating and cooling solutions.",
			url: "/service/attic-heating-and-cooling",
			image: "/our_services/_attic_heating_and_cooling.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Attic Bathroom Addition",
			paragraph:
				"Add convenience and value to your home with a professionally installed attic bathroom.",
			url: "/service/attic-bathroom-addition",
			image: "/our_services/_attic_bathroom_addition.jpg",
			price: "Price starts at $7,000",
		},
	],
	landscaping: [
		{
			heading: "Landscaping",
			paragraph:
				"We provide landscape services to cater all your backyard and front yard needs.",
			url: "/landscaping",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Landscape Design",
			paragraph:
				"Transform your outdoor space with customized landscape design solutions.",
			url: "/service/landscape-design",
			image: "/our_services/_landscape-design.webp",
			price: "Price starts at $3,500",
		},
		{
			heading: "Pergola Installation",
			paragraph:
				"Enhance your outdoor space with our free consultation on pergola designs and our professional pergola installation services.",
			url: "/service/pergola-installation",
			image: "/our_services/_pergola.webp",
			price: "Price starts at $3,000",
		},
		{
			heading: "Grading",
			paragraph:
				"Achieve a level and stable surface for your landscape with our grading services.",
			url: "/service/grading",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Planting",
			paragraph:
				"Enhance the beauty of your landscape with expert planting services.",
			url: "/service/planting",
			image: "/our_services/_Planting.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Tree Removal",
			paragraph:
				"Remove unwanted or hazardous trees from your landscape safely and efficiently.",
			url: "/service/tree-removal",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Patio Installation",
			paragraph:
				"Create an inviting outdoor living space with our professional patio installation services.",
			url: "/service/patio-installation",
			image: "/our_services/_patio_building.webp",
			price: "Price starts at $5,500",
		},
		{
			heading: "Sod Installation",
			paragraph:
				"Achieve a lush and healthy lawn quickly with our sod installation services.",
			url: "/service/sod-installation",
			image: "/our_services/_Sod_Installation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Fence Installation",
			paragraph:
				"Enhance privacy and security in your outdoor space with our fence installation services.",
			url: "/service/fence-installation",
			image: "/our_services/_Fence_Installation.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Retaining Walls",
			paragraph:
				"Add functionality and visual appeal to your landscape with professionally built retaining walls.",
			url: "/service/retaining-walls",
			image: "/our_services/_retaining_wall.webp",
			price: "Price starts at $6,500",
		},
		{
			heading: "Fountain",
			paragraph:
				"Add elegance and tranquility to your landscape with a beautiful fountain feature.",
			url: "/service/fountain",
			image: "/our_services/_Fountain.jpg",
			price: "Price starts at $7,000",
		},
		{
			heading: "Fire Pits",
			paragraph:
				"Create a cozy gathering spot in your outdoor space with a custom fire pit.",
			url: "/service/fire-pits",
			image: "/our_services/_Fire_Pits.jpg",
			price: "Price starts at $4,000",
		},
		{
			heading: "Path Installation",
			paragraph:
				"Enhance accessibility and aesthetics in your landscape with professionally installed paths.",
			url: "/service/path-installation",
			image: "/our_services/_path-installation.webp",
			price: "Price starts at $2,800",
		},
		{
			heading: "Irrigation Installation",
			paragraph:
				"Ensure your landscape stays lush and healthy with a professionally installed irrigation system.",
			url: "/service/irrigation-installation",
			image: "/our_services/_Irrigation_Installation.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Power Washing",
			paragraph:
				"Restore the beauty of your outdoor surfaces with our power washing services.",
			url: "/service/power-washing",
			image: "",
			price: "Price starts at $800",
		},
		{
			heading: "Weed Control",
			paragraph:
				"Keep your landscape pristine and weed-free with our effective weed control solutions.",
			url: "/service/weed-control",
			image: "/our_services/_Weed_Control.jpg",
			price: "Price starts at $500",
		},
		{
			heading: "Landscape Lighting",
			paragraph:
				"Highlight the beauty of your landscape and enhance safety with professionally installed lighting.",
			url: "/service/landscape-lighting",
			image: "",
			price: "Price starts at $1,800",
		},
	],
	painting: [
		{
			heading: "Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/painting",
			image: "",
			price: "Price starts at $2,000",
		},
		{
			heading: "Interior Painting",
			paragraph:
				"Refresh and revitalize your indoor space with our professional interior painting services.",
			url: "/service/interior-painting",
			image: "/our_services/_Interior_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Exterior Painting",
			paragraph:
				"Protect and beautify your home's exterior with our expert exterior painting services.",
			url: "/service/exterior-painting",
			image: "/our_services/_Exterior_Painting.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Cabinet Painting",
			paragraph:
				"Transform the look of your cabinets with our high-quality cabinet painting services.",
			url: "/service/cabinet-painting",
			image: "",
			price: "Price starts at $1,800",
		},
		{
			heading: "Trim Painting",
			paragraph:
				"Enhance the visual appeal of your space with professionally painted trim.",
			url: "/service/trim-painting",
			image: "",
			price: "Price starts at $1,500",
		},
		{
			heading: "Room Painting",
			paragraph:
				"Add personality and style to any room with our expert room painting services.",
			url: "/service/room-painting",
			image: "/our_services/_Room_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Ceiling Painting",
			paragraph:
				"Brighten and refresh your space with professionally painted ceilings.",
			url: "/service/ceiling-painting",
			image: "/our_services/_Ceiling_Painting.jpg",
			price: "Price starts at $1,800",
		},
		{
			heading: "Deck Painting",
			paragraph:
				"Protect and enhance your deck with our professional deck painting services.",
			url: "/service/deck-painting",
			image: "/our_services/_Deck_Painting.jpg",
			price: "Price starts at $2,500",
		},
		{
			heading: "Siding Painting",
			paragraph:
				"Give your home's siding a fresh new look with our expert siding painting services.",
			url: "/service/siding-painting",
			image: "",
			price: "Price starts at $3,000",
		},
		{
			heading: "Fence Painting",
			paragraph:
				"Revitalize your fence and enhance your outdoor space with our fence painting services.",
			url: "/service/fence-painting",
			image: "/our_services/_Fence_Painting.jpg",
			price: "Price starts at $2,000",
		},
		{
			heading: "Varnishing",
			paragraph:
				"Protect and enhance the natural beauty of wood surfaces with our varnishing services.",
			url: "/service/varnishing",
			image: "",
			price: "Price starts at $2,500",
		},
		{
			heading: "Stucco",
			paragraph:
				"Restore and beautify your stucco surfaces with our professional stucco services.",
			url: "/service/stucco",
			image: "",
			price: "Price starts at $3,500",
		},
	],
	masonry: [
		{
			heading: "Masonry Services",
			paragraph:
				"Expert masonry services, including brick laying, stone masonry, and more.",
			url: "/masonry-contractors",
			image: "",
			price: "Price starts at $5,000",
		},
		{
			heading: "Brick Laying and Repair",
			paragraph:
				"Enhance your property with expert brick laying and repair services.",
			url: "/service/brick-laying-and-repair",
			image: "/our_services/_Brick_Laying_Repair.jpg",
			price: "Price starts at $5,000",
		},
		{
			heading: "Stone Masonry",
			paragraph:
				"Add timeless beauty to your property with our professional stone masonry services.",
			url: "/service/stone-masonry",
			image: "",
			price: "Price starts at $6,000",
		},
		{
			heading: "Seismic Retrofitting",
			paragraph:
				"Ensure the safety and stability of your property with our seismic retrofitting services.",
			url: "/service/seismic-retrofitting",
			image: "",
			price: "Price starts at $7,000",
		},
		{
			heading: "Chimney Masonry",
			paragraph:
				"Keep your chimney in top condition with our expert chimney masonry services.",
			url: "/service/chimney-masonry",
			image: "/our_services/_Chimney_Masonry.jpg",
			price: "Price starts at $4,500",
		},
		{
			heading: "Concrete Block",
			paragraph:
				"Build durable structures with our professional concrete block services.",
			url: "/service/concrete-block",
			image: "/our_services/_Concrete_Block.jpg",
			price: "Price starts at $3,500",
		},
		{
			heading: "Masonry Restoration",
			paragraph:
				"Restore the beauty and integrity of your masonry with our restoration services.",
			url: "/service/masonry-restoration",
			image: "/our_services/_Masonry_Restoration.jpg",
			price: "Price starts at $6,000",
		},
		{
			heading: "Stone Veneer",
			paragraph:
				"Enhance your property's appearance with stylish and durable stone veneer.",
			url: "/service/stone-veneer",
			image: "",
			price: "Price starts at $8,000",
		},
		{
			heading: "Commercial Masonry",
			paragraph:
				"Trust our expertise for all your commercial masonry needs.",
			url: "/service/commercial-masonry",
			image: "/our_services/_Commercial_Masonry.jpg",
			price: "Price starts at $12,000",
		},
	],
} */
