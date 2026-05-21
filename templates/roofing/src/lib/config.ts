import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "San Diego Roofing Replacement & Repair",
    tagline: "Roofs Built To Last",
    phone: "(858) 392-4413",
    phoneHref: "tel:+18583924413",
    email: "info@sdroofingpros.com",
    address: "3827 Florence St, San Diego, CA 92113, USA",
    city: "San Diego",
    serviceAreas: ["San Diego", "Chula Vista", "Oceanside", "Escondido", "Carlsbad", "El Cajon"],
    license: "CSLB #1098765",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Roof Replacement", desc: "Expert installation of new roofing systems for lasting protection and enhanced curb appeal.", urgent: false },
    { icon: "thunder", title: "Storm Damage Repair", desc: "Rapid response and effective repairs for roofs damaged by severe weather conditions.", urgent: true },
    { icon: "shield-check", title: "Insurance Claims", desc: "Assistance with navigating insurance claims to ensure you receive fair compensation for roof damage.", urgent: false },
    { icon: "hammer", title: "Emergency Tarping", desc: "Immediate tarping services to prevent further water intrusion after unexpected roof damage.", urgent: true },
    { icon: "droplets", title: "Gutter Installation", desc: "Professional gutter system installation to protect your home's foundation and landscaping.", urgent: false },
    { icon: "search", title: "Free Inspections", desc: "Comprehensive roof inspections to identify potential issues and provide accurate repair or replacement recommendations.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "La Jolla", stars: 5, text: "Our roof was leaking after a heavy storm, and San Diego Roofing responded so quickly! They had a crew out the same day for emergency tarping and then completed a full repair within a week. The team was professional, explained everything clearly, and the price was fair. Highly recommend their storm damage repair service!" },
    { name: "Michael P.", location: "Encinitas", stars: 5, text: "We needed a complete roof replacement, and San Diego Roofing made the entire process seamless. From the initial free inspection to the final cleanup, their crew was efficient and incredibly skilled. Our new roof looks fantastic, and we feel much more secure. Excellent work and great communication throughout!" },
    { name: "Emily R.", location: "Poway", stars: 5, text: "Dealing with an insurance claim for roof damage felt overwhelming, but San Diego Roofing guided us every step of the way. They worked directly with our insurance company, making sure all the necessary documentation was handled. The repair work itself was top-notch, and our roof is now better than ever. So grateful for their expertise!" }
  ],

  trustBadges: [
    "GAF Master Elite Contractor", "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency", "BBB Accredited"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Roofs Installed", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent requests, ensuring quick dispatch for emergency repairs and inspections." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Transparent, detailed quotes with no hidden fees, so you know the cost before we start." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists committed to quality." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction on every project." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI receptionist is available around the clock to assist with scheduling and inquiries." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all the necessary tools and materials to complete the job efficiently." }
  ],

  formServiceOptions: ["Roof Replacement", "Storm Damage Repair", "Insurance Claims", "Emergency Tarping", "Gutter Installation", "Free Inspections"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!