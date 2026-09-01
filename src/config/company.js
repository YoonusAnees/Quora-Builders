export const COMPANY = {
  name: "Quora Builder",
  fullName: "Quora Builder | House Construction & Engineering",
  legalName: "Quora Builders",
  tagline: "House Construction & Engineering – Kandy, Sri Lanka",
  description: "Quora Builder is a premier house construction and engineering firm in Kandy, Sri Lanka. We specialize in custom residential house construction, architectural design, structural engineering for sloped terrain, home renovation, and turnkey project management.",
  url: "https://quorabuilders.com",
  phone: "+94 77 302 0979",
  phoneRaw: "+94773020979",
  email: "Quorabuilders@gmail.com",
  whatsapp: "https://wa.me/94773020979",
  address: {
    streetAddress: "Akurana",
    postalCode: "20850",
    addressLocality: "Kandy",
    addressRegion: "Central Province",
    addressCountry: "LK",
    formatted: "Quora Builders, Akurana 20850, Kandy, Sri Lanka"
  },
  geo: {
    latitude: 7.3863563,
    longitude: 80.6165344
  },
  openingHours: "Mo-Sa 08:00-18:00",
  socials: {
    facebook: "https://www.facebook.com/quorabuilders",
    tiktok: "https://www.tiktok.com/@quorabuilders?_r=1&_t=ZS-97iMut67ymw",
    instagram: "https://www.instagram.com/quorabuilders"
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7100260696093!2d80.6165344!3d7.386356300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3433a138503cf%3A0x85fe28ffc22e94f7!2sQuora%20Builders!5e0!3m2!1sen!2slk!4v1783049209123!5m2!1sen!2slk",
  stats: [
    { label: "Completed Projects", value: 25, suffix: "+" },
    { label: "Years Experience", value: 7, suffix: "+" },
    { label: "Active Sites in Kandy", value: 6, suffix: "+" },
    { label: "On-Time Handover", value: 100, suffix: "%" }
  ]
};

export const SERVICES = [
  {
    slug: "house-construction",
    title: "House Construction",
    subtitle: "Custom Luxury & Family Home Construction in Kandy",
    shortDesc: "End-to-end turnkey house construction tailored to Kandy's unique hill country topography and climate.",
    longDesc: "Quora Builder provides comprehensive residential house construction across Kandy and surrounding areas. From site preparation and foundation pouring on sloped terrain to superstructure framing, roofing, and fine interior handovers, we deliver durable, weather-resistant, modern homes.",
    icon: "Home",
    deliverables: [
      "Turnkey house construction from site clearing to keys handover",
      "Sloped & steep terrain foundation engineering (retaining walls, stepped footings)",
      "Reinforced concrete structural frame construction adhering to ICTAD/CIDA standards",
      "Weatherproofing, moisture isolation & heavy rainfall drainage systems",
      "Full material transparency & fixed-line BOQ estimations"
    ],
    process: [
      { step: "01", name: "Site & Soil Assessment", desc: "Detailed topographical survey and soil load-bearing capacity test on your Kandy plot." },
      { step: "02", name: "Architectural & Structural Plan Approval", desc: "Developing compliant blueprints and securing Kandy Municipal / Pradeshiya Sabha approvals." },
      { step: "03", name: "Foundation & Retaining Earthworks", desc: "Excavation, stepped foundation concrete pouring, and reinforced earth retaining walls." },
      { step: "04", name: "Superstructure & Roof Installation", desc: "Erecting columns, brickwork/blockwork walls, and waterproofing timber/steel roof structures." },
      { step: "05", name: "Utility Wiring, Plumbing & Finishes", desc: "Concealed electrical channels, high-grade plumbing, custom tiling, doors, and painting." },
      { step: "06", name: "Final Inspection & Quality Handover", desc: "Comprehensive quality punch-list check and handover of structural guarantee documents." }
    ],
    faqs: [
      { q: "How long does house construction take in Kandy?", a: "Standard 2,000 - 3,000 sq ft two-storey houses typically take 7 to 10 months depending on soil conditions, weather, and finishing customization." },
      { q: "Do you handle foundation engineering for hillside plots?", a: "Yes. Kandy's sloped terrain requires specialized soil testing, retaining wall design, and stepped footings which are core specialties of Quora Builder." }
    ]
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    subtitle: "3D Visualizations & Functional Floor Plans for Hillside Living",
    shortDesc: "Custom architectural planning, 3D renderings, and local authority submission drawings.",
    longDesc: "Our architectural design service combines aesthetic elegance with hill-country climate considerations. We design homes optimized for natural lighting, ventilation, rainwater harvesting, and spatial harmony with Kandy's natural landscape.",
    icon: "Compass",
    deliverables: [
      "Custom 2D floor plans & 3D exterior/interior architectural visualizations",
      "Municipal council & Pradeshiya Sabha permit submission drawings",
      "Natural lighting & cross-ventilation climate design",
      "Structural alignment with geotechnical soil constraints",
      "Detailed material specification sheets"
    ],
    process: [
      { step: "01", name: "Client Vision & Budget Consultation", desc: "Understanding lifestyle needs, space allocation, and target budget." },
      { step: "02", name: "Concept Sketches & 3D Layouts", desc: "Drafting initial space flows, exterior facade options, and 3D walkthroughs." },
      { step: "03", name: "Local Authority Drawings", desc: "Finalizing detailed engineering blueprints for local council approval." }
    ],
    faqs: [
      { q: "Can I customize an existing architectural plan?", a: "Yes, all our architectural designs are 100% custom-tailored to your land footprint and family preferences." }
    ]
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    subtitle: "Safe, Resilient Foundations & Column Design for Sloped Terrain",
    shortDesc: "Chartered structural engineering, soil testing, column reinforcement, and retaining walls.",
    longDesc: "Quora Builder's structural engineering team ensures your structure remains safe, stable, and seismic-resilient. We conduct rigorous geotechnical surveys and design engineered foundations specifically calculated for Kandy's clay, rock, and hillside slopes.",
    icon: "Shield",
    deliverables: [
      "Geotechnical soil investigation & load tolerance reports",
      "Stepped foundation & deep pile footings engineering",
      "Reinforced concrete beam, column, and slab calculations",
      "Earth retaining wall design & landslide prevention structures",
      "Structural stability certification"
    ],
    process: [
      { step: "01", name: "Geotechnical Core Drilling", desc: "Sampling soil strata to determine exact bedrock depth and bearing capacity." },
      { step: "02", name: "Structural Calculation & Beam Sizing", desc: "Engineering load distributions to resist earth movement and dead/live loads." }
    ],
    faqs: [
      { q: "Why is structural engineering critical in Kandy?", a: "Kandy's hilly geography and high seasonal rainfall make soil stability a primary safety factor. Proper structural engineering prevents wall cracking and foundation settlement." }
    ]
  },
  {
    slug: "home-renovation",
    title: "Home Renovation & Remodeling",
    subtitle: "Modernizing Existing Residences & Structural Upgrades",
    shortDesc: "Second-floor extensions, structural wall modifications, roofing upgrades, and modern refits.",
    longDesc: "Upgrade your existing house with Quora Builder's structural renovation capabilities. Whether adding a second floor, converting roof spaces, remodeling kitchens/bathrooms, or strengthening vintage foundations, we deliver modern comfort without compromising structural integrity.",
    icon: "Wrench",
    deliverables: [
      "Second-storey structural floor additions",
      "Open-plan living space conversions & wall removals",
      "Roofing replacement & waterproofing upgrades",
      "Electrical & plumbing system modernization",
      "Facade upgrades & exterior plastering"
    ],
    process: [
      { step: "01", name: "Structural Assessment", desc: "Evaluating existing foundation and wall capacity to safely carry new loads." },
      { step: "02", name: "Phased Renovation Plan", desc: "Executing upgrades with minimal interruption to your living space." }
    ],
    faqs: [
      { q: "Can Quora Builder add a 2nd floor to an old house?", a: "Yes, after performing a structural load test on the ground floor foundation and columns, we engineer lightweight steel or concrete extensions." }
    ]
  },
  {
    slug: "interior-finishing",
    title: "Interior & Exterior Finishing",
    subtitle: "High-Quality Tiling, Woodwork, Ceilings & Facade Detailing",
    shortDesc: "Premium plastering, tile laying, custom joinery, aluminum work, and weather-shield painting.",
    longDesc: "The final finish determines the beauty and longevity of your home. Quora Builder provides skilled craftsmanship in tile laying, teak/mahogany door installation, titanium flooring, drop ceilings, and mold-resistant exterior painting engineered for Kandy's humid climate.",
    icon: "Paintbrush",
    deliverables: [
      "Precision porcelain & granite floor/wall tiling",
      "Custom wooden doors, frames, and pantry cabinetry",
      "Aluminum window frames & tempered glass sliding doors",
      "Plaster ceiling grids & LED ambient lighting cutouts",
      "Weather-shield exterior painting & waterproofing coats"
    ],
    process: [
      { step: "01", name: "Material Selection & Mockups", desc: "Helping clients choose tile textures, paint shades, and wood treatments." },
      { step: "02", name: "Craftsman Installation", desc: "Executing tile alignment, wood joinery, and smooth wall finishing." }
    ],
    faqs: [
      { q: "What paints do you use for exterior walls in Kandy?", a: "We use high-durability, anti-fungal exterior paints designed to withstand high rainfall and sun exposure." }
    ]
  },
  {
    slug: "project-management",
    title: "Construction Project Management",
    subtitle: "Transparent Budgeting, Timeline Supervision & Quality Assurance",
    shortDesc: "End-to-end site management, BOQ verification, material procurement, and progress reporting.",
    longDesc: "Avoid cost overruns and delays with Quora Builder's professional project management. We manage site labor, verify raw material quality, coordinate sub-contractors, and provide transparent weekly digital progress reports to home owners.",
    icon: "ClipboardList",
    deliverables: [
      "Itemized Bill of Quantities (BOQ) & price lock contract",
      "Material quality testing (cement, sand, steel tensile testing)",
      "Weekly photo & video progress reports",
      "Strict timeline tracking with milestone handovers",
      "Safety oversight & zero-accident protocols"
    ],
    process: [
      { step: "01", name: "Milestone Schedule Mapping", desc: "Setting concrete completion deadlines for each stage." },
      { step: "02", name: "Active Supervision & Audits", desc: "Daily site engineers ensuring specifications are met." }
    ],
    faqs: [
      { q: "How do you protect clients against material price inflation?", a: "We lock in core steel and cement contracts early and provide transparent fixed BOQ estimations." }
    ]
  }
];

export const PROJECTS = [
  {
    slug: "modern-luxury-villa-kandy",
    title: "Modern Two-Storey Hillside Villa",
    location: "Akurana, Kandy",
    category: "Residential",
    area: "3,200 sq ft",
    floors: "2 Storeys",
    bedrooms: 4,
    bathrooms: 4,
    duration: "9 Months",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    description: "A luxury contemporary residence constructed on a sloped plot in Akurana, Kandy. Features stepped foundation engineering, cantilevered balconies, open-plan living, and panoramic mountain views.",
    servicesProvided: ["Architectural Design", "Structural Engineering", "House Construction", "Interior Finishing"],
    challenge: "The property site featured a steep 25-degree incline and loose topsoil requiring substantial stabilization.",
    solution: "Engineered a reinforced concrete retaining wall system paired with stepped pile foundations anchored directly to bedrock."
  },
  {
    slug: "residential-house-peradeniya",
    title: "Contemporary Family Residence",
    location: "Peradeniya, Kandy",
    category: "Residential",
    area: "2,400 sq ft",
    floors: "2 Storeys",
    bedrooms: 3,
    bathrooms: 3,
    duration: "8 Months",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    description: "A modern energy-efficient two-storey home built near the Mahaweli river corridor in Peradeniya. Features large glass apertures for natural lighting and elevated flood-resilient foundation design.",
    servicesProvided: ["Structural Engineering", "House Construction", "Project Management"],
    challenge: "High groundwater table due to proximity to river tributary.",
    solution: "Implemented waterproof concrete footings, deep gravel drainage channels, and sub-surface moisture membranes."
  },
  {
    slug: "custom-family-home-katugastota",
    title: "Custom Two-Storey Executive Home",
    location: "Katugastota, Kandy",
    category: "Residential",
    area: "2,800 sq ft",
    floors: "2 Storeys",
    bedrooms: 4,
    bathrooms: 3.5,
    duration: "8.5 Months",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    description: "A spacious executive family home built in Katugastota. Integrates classic Kandy roof slopes with modern minimalist interior architecture and teak timber woodwork.",
    servicesProvided: ["House Construction", "Interior Finishing", "Architectural Design"],
    challenge: "Tight access road for heavy concrete mixer trucks and material delivery.",
    solution: "Utilized mini-boom concrete pumps and managed phased off-site material staging."
  },
  {
    slug: "luxury-residence-kundasale",
    title: "Modern Minimalist Villa",
    location: "Kundasale, Kandy",
    category: "Residential",
    area: "3,500 sq ft",
    floors: "2 Storeys",
    bedrooms: 4,
    bathrooms: 4,
    duration: "10 Months",
    year: "2025",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    description: "Located in the rapidly expanding Kundasale residential corridor, this villa features double-height ceilings, a courtyard garden, solar power integration, and titanium polished floors.",
    servicesProvided: ["Architectural Design", "Structural Engineering", "House Construction"],
    challenge: "Extremely dry clay soil during summer leading to soil shrinkage concerns.",
    solution: "Deep foundation footings designed below shrink-swell soil zones with expansive concrete mix engineering."
  },
  {
    slug: "slope-engineered-villa-ampitiya",
    title: "Hillside Terrace House",
    location: "Ampitiya, Kandy",
    category: "Residential",
    area: "2,200 sq ft",
    floors: "2 Storeys",
    bedrooms: 3,
    bathrooms: 3,
    duration: "7.5 Months",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    description: "A split-level terraced residence built seamlessly into Ampitiya hills. Offers terraced gardens, rainwater runoff channels, and eco-friendly thermal roof insulation.",
    servicesProvided: ["Structural Engineering", "House Construction"],
    challenge: "Handling heavy monsoon rainwater runoff descending from upper hill slope.",
    solution: "Engineered catch-drain system and reinforced retaining walls with weep holes and geotextile filter layers."
  },
  {
    slug: "modern-home-digana",
    title: "Eco-Friendly Residence",
    location: "Digana, Kandy",
    category: "Residential",
    area: "2,600 sq ft",
    floors: "2 Storeys",
    bedrooms: 3,
    bathrooms: 3,
    duration: "8 Months",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    description: "Constructed near Victoria Golf Resort in Digana. Highlights open verandahs, solar energy harvesting, rainwater recycling, and local stone facade cladding.",
    servicesProvided: ["Architectural Design", "House Construction", "Interior Finishing"],
    challenge: "Maximizing ventilation while shading from eastern sun exposure.",
    solution: "Designed wide roof overhangs, vertical timber louvers, and cross-ventilated courtyard layout."
  }
];

export const LOCATIONS = [
  {
    slug: "kandy",
    name: "Kandy City",
    title: "House Construction in Kandy City & Central Suburbs",
    shortDesc: "Premier residential house construction and structural engineering across Kandy municipal council and surrounding neighborhoods.",
    content: "Building in Kandy city requires careful site planning, adherence to municipal building bylaws, and engineering customized for Kandy's unique hilly terrain and rainfall patterns. Quora Builder provides end-to-end house construction services from foundation testing to final key handover."
  },
  {
    slug: "peradeniya",
    name: "Peradeniya",
    title: "House Construction Companies in Peradeniya, Kandy",
    shortDesc: "Custom home building, structural design, and residential construction services in Peradeniya.",
    content: "Peradeniya is one of Kandy's most sought-after residential suburbs. Quora Builder offers custom house construction, river-corridor foundation engineering, and home renovations for families in Peradeniya."
  },
  {
    slug: "katugastota",
    name: "Katugastota",
    title: "House Builders & Construction in Katugastota, Kandy",
    shortDesc: "Quality residential house construction, architectural drafting, and project management in Katugastota.",
    content: "With rapid residential growth along the Katugastota corridor, Quora Builder delivers top-tier structural engineering and modern home construction tailored to local land conditions."
  },
  {
    slug: "kundasale",
    name: "Kundasale",
    title: "House Construction Services in Kundasale & Pallekele",
    shortDesc: "Turnkey luxury villa and family house construction in Kundasale and Pallekele.",
    content: "Kundasale offers flatter residential plots and growing developments. Quora Builder constructs contemporary single and two-storey luxury homes engineered for comfort and long-term value."
  },
  {
    slug: "ampitiya",
    name: "Ampitiya",
    title: "Hillside House Builders in Ampitiya, Kandy",
    shortDesc: "Specialized hillside house construction, retaining wall engineering, and architectural designs in Ampitiya.",
    content: "Ampitiya's scenic hillsides require experienced structural engineers who understand soil stabilization and slope foundation techniques. Quora Builder is the trusted contractor for Ampitiya hillside builds."
  },
  {
    slug: "digana",
    name: "Digana",
    title: "Home Construction & Villa Builders in Digana, Kandy",
    shortDesc: "Luxury home and villa construction near Victoria Lake and Golf Resort in Digana.",
    content: "Digana is famous for premium residential properties and holiday homes. Quora Builder delivers eco-friendly architectural designs and quality construction suited for Digana's serene environment."
  },
  {
    slug: "kadugannawa",
    name: "Kadugannawa",
    title: "House Construction in Kadugannawa, Kandy",
    shortDesc: "Residential home builders and structural engineering services in Kadugannawa.",
    content: "Quora Builder extends full house construction and renovation services to property owners in Kadugannawa, ensuring high safety standards and durable construction."
  }
];

export const COST_GUIDE_DATA = {
  year: "2026",
  city: "Kandy, Sri Lanka",
  title: "House Construction Cost in Kandy (2026 Detailed Guide)",
  intro: "Planning to build a house in Kandy in 2026? Construction costs in Kandy depend on floor area, land topography (flat vs sloped), foundation type, structural materials, and level of interior finishing.",
  costRanges: [
    {
      level: "Basic / Standard Specification",
      costPerSqFt: "LKR 11,000 - 14,000 / sq ft",
      description: "Includes solid brickwork/blockwork, standard grade cement, tile flooring, standard aluminum doors/windows, and quality basic bathroom fittings.",
      sample2000SqFt: "LKR 22 Million - 28 Million"
    },
    {
      level: "Semi-Luxury Specification",
      costPerSqFt: "LKR 14,000 - 18,000 / sq ft",
      description: "Includes high-grade porcelain tiling, teak wooden doors, branded bathroom fixtures, plaster ceilings, titanium features, and premium exterior paint.",
      sample2000SqFt: "LKR 28 Million - 36 Million"
    },
    {
      level: "Luxury / Custom Hillside Specification",
      costPerSqFt: "LKR 18,000 - 25,000+ / sq ft",
      description: "Includes custom architectural design, deep stepped pile footings, reinforced concrete retaining walls, double-glazed glass facades, smart home wiring, and luxury teak/granite finishes.",
      sample2000SqFt: "LKR 36 Million - 50 Million+"
    }
  ],
  costBreakdownStages: [
    { stage: "01. Soil Testing & Substructure (Foundation & Retaining Walls)", share: "15% - 25%", notes: "Higher on sloped land in Kandy due to earth excavation & retaining walls." },
    { stage: "02. Superstructure (Columns, Beams, Slabs & Brickwork)", share: "30% - 35%", notes: "Includes steel reinforcement, cement, sand, metal aggregate, and masonry." },
    { stage: "03. Roofing & Waterproofing", share: "10% - 12%", notes: "Timber or steel roof frame with cement tiles or asphalt shingles." },
    { stage: "04. Electrical, Plumbing & Utility Concealment", share: "10% - 12%", notes: "Concealed conduits, distribution boards, copper piping, and drainage." },
    { stage: "05. Doors, Windows & Glass Works", share: "8% - 10%", notes: "Teak doors, powder-coated aluminum windows, and tempered glass." },
    { stage: "06. Floor & Bathroom Tiling / Finishing", share: "10% - 15%", notes: "Granite, porcelain tiles, titanium floors, and sanitaryware." },
    { stage: "07. Painting & Exterior Works", share: "5% - 8%", notes: "Wall putty, weather-shield exterior painting, and perimeter drainage." }
  ]
};

export const GUIDES = [
  {
    slug: "cost-to-build-2000-sqft-house-kandy",
    title: "How Much Does It Cost to Build a 2,000 Sq Ft House in Kandy?",
    date: "2026-01-15",
    author: "Quora Builder Engineering Team",
    excerpt: "A complete budget breakdown for building a 2,000 square foot two-storey house in Kandy in 2026, including foundation, structural frame, roofing, and finishing costs.",
    readTime: "6 min read",
    content: [
      "Building a 2,000 sq ft home in Kandy is one of the most popular choices for Sri Lankan families. In 2026, a standard 2,000 sq ft two-storey house in Kandy typically ranges from LKR 24 Million to LKR 36 Million depending on finishing specifications and land slope.",
      "Key factors influencing the total cost include:",
      "1. Land Topography: Flat land in Kundasale or Katugastota requires standard column footings, whereas steep slopes in Ampitiya or Akurana require earthwork excavation and concrete retaining walls.",
      "2. Structural Materials: High-tensile steel rebars, quality cement, and solid red brick vs cement blocks.",
      "3. Finishing Level: Porcelain floor tiles, teak door frames, and custom pantry units versus basic cement or ceramic finishes.",
      "Quora Builder provides itemized Bill of Quantities (BOQ) with transparent price guarantees so homeowners can manage their budget without surprise expenses."
    ]
  },
  {
    slug: "sloped-land-construction-kandy",
    title: "Things to Check Before Building a House on Sloped Land in Kandy",
    date: "2026-02-01",
    author: "Quora Builder Structural Engineering Department",
    excerpt: "Essential geotechnical considerations, soil testing tips, retaining wall designs, and drainage management for hillside home construction in Kandy.",
    readTime: "7 min read",
    content: [
      "Kandy's scenic hills offer breathtaking views, but building on sloped land requires strict structural engineering precautions.",
      "Crucial checks before commencing hillside construction:",
      "1. Geotechnical Soil Investigation: Core drilling test to determine bedrock depth and soil shear strength.",
      "2. Stepped Footing & Retaining Walls: Designing concrete retaining walls with adequate weep holes and geotextile drain mats to prevent hydrostatic pressure buildup behind walls.",
      "3. Surface & Subsoil Drainage: Channeling monsoon rainwater away from foundation footings to eliminate soil erosion.",
      "4. Local Authority Approvals: Ensuring plans comply with NBRO (National Building Research Organisation) guidelines where applicable.",
      "Quora Builder specializes in sloped land structural engineering across Kandy, ensuring your hillside villa is safe, dry, and structurally rock-solid."
    ]
  },
  {
    slug: "house-construction-process-sri-lanka",
    title: "House Construction Process in Sri Lanka: Step-by-Step Guide",
    date: "2026-02-10",
    author: "Quora Builder Project Management",
    excerpt: "From architectural drawings and local council approvals to foundation pouring, brickwork, and handover: step-by-step guide to building a house in Sri Lanka.",
    readTime: "8 min read",
    content: [
      "Building your dream house in Sri Lanka involves distinct administrative, structural, and finishing phases.",
      "Step 1: Land Survey & Soil Test - Defining exact boundaries and soil bearing capacity.",
      "Step 2: Architectural & Engineering Design - Draft blueprints aligned with local building regulations.",
      "Step 3: Council Approval - Submitting drawings to Kandy Municipal Council or local Pradeshiya Sabha.",
      "Step 4: Substructure Construction - Earth clearing, foundation footings, plinth beams, and ground slab pouring.",
      "Step 5: Superstructure - Erecting columns, brick walls, lintels, and upper floor slab.",
      "Step 6: Roofing & Enclosure - Roof trusses, tiles, waterproofing, and door/window fitting.",
      "Step 7: M&E and Plastering - Electrical channels, plumbing lines, and internal/external plaster.",
      "Step 8: Finishes & Key Handover - Tiling, painting, fixtures, final cleanup, and certificate of occupancy."
    ]
  },
  {
    slug: "how-to-choose-construction-company-kandy",
    title: "How to Choose the Best House Construction Company in Kandy",
    date: "2026-02-20",
    author: "Quora Builder Advisory Team",
    excerpt: "Key questions to ask, qualifications to look for, BOQ verification, and project tracking methods when selecting a home builder in Kandy.",
    readTime: "5 min read",
    content: [
      "Selecting the right construction contractor is the single most important decision for your home building journey.",
      "Essential criteria to evaluate:",
      "1. Real Local Project Portfolio: Visit ongoing and completed construction sites in Kandy to verify material quality and workmanship.",
      "2. In-House Engineering Competence: Ensure the firm employs qualified structural engineers and architects rather than unverified sub-contractors.",
      "3. Transparent Fixed BOQ Contracts: Beware of unrealistically low preliminary bids that hide essential finishing costs.",
      "4. Safety & Insurance Coverage: Verify workers' safety compliance and contractor liability coverage.",
      "Quora Builder invites clients to tour our active project sites in Kandy and review detailed BOQs prior to signing contract agreements."
    ]
  }
];
