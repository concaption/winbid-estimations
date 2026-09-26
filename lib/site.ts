export const site = {
  name: "Winbid Estimation",
  legalName: "Winbid Estimation",
  url: "https://winbidestimation.co",
  tagline: "Win Bids with Expert Cost Estimation",
  description:
    "Construction cost estimating for residential, commercial and industrial projects. Detailed, CSI-division takeoffs delivered in 24 to 48 hours so contractors can bid faster and win more work.",
  phone: "+1 804 577 8922",
  phoneHref: "+18045778922",
  email: "admin@winbidestimation.co",
  emailAlt: "winbidestimations@gmail.com",
  address: {
    street: "4445 Corporation Ln Ste 264",
    locality: "Virginia Beach",
    region: "VA",
    postalCode: "23462",
    country: "US",
  },
  geo: { lat: 36.8399, lng: -76.1435 },
  hours: "Mon to Sat, 10:00 AM to 6:00 PM ET",
  tallyFormId: "mDp29X",
  areaServed: "United States",
} as const

export const services = [
  {
    slug: "residential-cost-estimation",
    title: "Residential Cost Estimation",
    short:
      "Turn a set of house plans into a budget you can build to, with a line-by-line breakdown of every trade.",
    intro:
      "Detailed takeoffs and cost breakdowns for single-family homes, custom builds, multi-family and renovation work. You get quantities, material pricing and labour hours set out by trade, so you can bid with confidence and show the homeowner exactly where the money goes.",
    bullets: [
      "Quantity takeoff for every division, from site work to finishes",
      "Material and labour pricing from RS Means and live supplier data",
      "Separate allowances, contingency and markup lines you control",
      "Excel and PDF delivery, formatted to submit as it is",
      "Turnaround of 24 to 48 hours on most residential plan sets",
    ],
    faqs: [
      {
        q: "What do you need from me to start a residential estimate?",
        a: "Architectural and structural plans in PDF or CAD, the bid date, and any specifications or allowances you want reflected. Email them to admin@winbidestimation.co and we confirm scope and turnaround before we begin.",
      },
      {
        q: "How much does a residential estimate cost?",
        a: "Smaller residential projects start at around $200. Pricing scales with the size and complexity of the plan set, and monthly packages start at $1,500 for contractors bidding regularly.",
      },
    ],
  },
  {
    slug: "commercial-project-bidding",
    title: "Commercial Project Bidding",
    short:
      "Tailored cost estimates for commercial bids, built to the CSI divisions your general contractor expects.",
    intro:
      "Bid support for retail, office, healthcare, education, hospitality and industrial projects. We work to the full CSI division structure, including mechanical and electrical scope, so your proposal reads the way the GC and the owner expect it to.",
    bullets: [
      "Full CSI division breakdown, General Requirements through Electrical",
      "Industrial and MEP scope covered in the same estimate",
      "Bid comparison support so you can see where you are high or low",
      "Subcontractor scope sheets to send out for quotes",
      "Expedited turnaround available when the bid date is tight",
    ],
    faqs: [
      {
        q: "Can you work to a bid deadline?",
        a: "Yes. Tell us the bid date when you send the plans. Standard turnaround is 24 to 48 hours, and larger projects typically run two to four days. Expedited delivery is available for a small fee against a guaranteed date.",
      },
      {
        q: "Do you cover mechanical and electrical scope?",
        a: "Yes. Industrial MEP is part of our standard commercial estimating work rather than an add-on.",
      },
    ],
  },
  {
    slug: "virtual-estimation-assistant",
    title: "Virtual Estimation Assistant",
    short:
      "A dedicated estimator working as part of your team, so you can bid more jobs without hiring in-house.",
    intro:
      "For contractors bidding regularly, a named estimator works to your templates, your pricing and your bid calendar. It costs a fraction of an in-house estimator and scales up and down with your pipeline.",
    bullets: [
      "A named estimator who learns your pricing and your format",
      "Takeoffs, bid forms and scope sheets prepared to your templates",
      "Works to your bid calendar, not a ticket queue",
      "Monthly packages from $1,500, typically saving around 60 percent against in-house cost",
      "Scale hours up during busy bid periods and back down after",
    ],
    faqs: [
      {
        q: "How is this different from ordering estimates one at a time?",
        a: "You work with the same estimator each time, so your pricing, templates and preferences carry over instead of being re-explained on every project.",
      },
      {
        q: "What does it cost?",
        a: "Monthly packages start at $1,500, which for most contractors is around 60 percent less than the cost of an in-house estimator.",
      },
    ],
  },
] as const

export const csiDivisions = [
  "General Requirements",
  "Site Construction",
  "Concrete",
  "Masonry",
  "Metals",
  "Wood and Plastics",
  "Thermal and Moisture Protection",
  "Doors and Windows",
  "Finishes",
  "Specialties",
  "Equipment",
  "Furnishings",
  "Special Construction",
  "Conveying Systems",
  "Mechanical",
  "Electrical",
] as const

export const projects = [
  {
    slug: "manufacturing-facility-expansion",
    title: "Manufacturing Facility Expansion",
    sector: "Industrial",
    summary:
      "Full-division takeoff for an expansion to an operating manufacturing plant, including structural steel, concrete and the mechanical and electrical scope for the new production area.",
    image: "/img/project/project-1.jpg",
  },
  {
    slug: "modern-urban-suburb",
    title: "Modern Urban Suburb",
    sector: "Residential",
    summary:
      "Repeatable estimates across a multi-unit residential development, with per-unit and per-phase cost breakdowns so the developer could track budget as the build progressed.",
    image: "/img/project/project-2.jpg",
  },
  {
    slug: "retail-mall-estimation",
    title: "Retail Mall Estimation",
    sector: "Commercial",
    summary:
      "Bid-stage estimate for a retail development, covering shell, common areas and tenant improvement allowances, delivered against a fixed bid deadline.",
    image: "/img/project/project-3.jpg",
  },
] as const

export const faqs = [
  {
    q: "What is your turnaround time for an estimate?",
    a: "Between 24 and 48 hours for most projects. Larger construction projects generally take two to four days. If you tell us the bid date when you send the plans, we work to it, and expedited delivery is available for a small fee against a guaranteed date.",
  },
  {
    q: "What estimating software do you use?",
    a: "Plan Swift for takeoff, RS Means for labour and material pricing, Bluebeam for plan review and markup, and Quest Estimating. Using established pricing databases is what keeps the numbers defensible when a client questions a line.",
  },
  {
    q: "How much does a construction estimate cost?",
    a: "Smaller construction projects start at a minimum of around $200, and pricing rises with the size of the project. Monthly packages begin at $1,500 and typically save contractors around 60 percent against the cost of estimating in-house.",
  },
  {
    q: "How do I send my plans?",
    a: "Email your plans to admin@winbidestimation.co, or submit them through the form on our contact page. Include the bid date and any specifications. We confirm scope, price and delivery date before starting work.",
  },
  {
    q: "Which project types do you estimate?",
    a: "Residential, commercial, industrial and renovation work, across all sixteen CSI divisions from General Requirements through to Electrical, including industrial MEP scope.",
  },
  {
    q: "What do I receive at the end?",
    a: "A quantity takeoff and cost breakdown by CSI division in Excel and PDF, with material, labour and equipment separated, plus scope sheets you can send to subcontractors for quotes.",
  },
  {
    q: "Where are you based, and who do you work with?",
    a: "Winbid Estimation is based in Virginia Beach, Virginia, and works with general contractors, subcontractors, developers and homeowners across the United States.",
  },
] as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const
