const S3 = "https://ocdplanandbuild-com.s3.us-east-1.amazonaws.com";
import logoImg from "@/assets/logo.png";

export const LOGO_URL = logoImg;

export const CALENDLY_URL = "https://calendly.com/zdimensionz2/30min";
export const PHONE = "+1 (408) 410-7671";
export const PHONE_HREF = "tel:+14084107671";
export const EMAIL = "susan@decobayinteriors.com";
export const LOCATION = "The Bay Area · California · USA";

export const HERO_IMAGE = `${S3}/services/bay-area-kitchen-bathroom-remodeling-high-detail-designbuild-renovations-for-homes.webp`;

export const PROJECTS = [
  {
    tag: "Commercial",
    title: "Palmetto fast-casual restaurant build-out",
    place: "Bay Area",
    text: "A quick-service Palmetto storefront built out end to end — commercial kitchen, service counter and a bright, branded dining room ready for opening day.",
    image: "https://live.staticflickr.com/65535/55461952403_517b993980_b.jpg",
  },

  {
    tag: "Residential",
    title: "Comfort & style home remodel",
    place: "Berkeley",
    text: "Warm materials, softened lines and a layout reshaped around how the family actually lives day to day.",
    image: `${S3}/portfolio/berkeley-residential-comfort-style-home-remodel/berkeley-residential-comfort-style-home-remodel-cover.webp`,
  },
  {
    tag: "Structural",
    title: "Foundation replacement with house jacking",
    place: "Berkeley",
    text: "Engineering-led foundation replacement and drainage, carried out beneath a home that stayed standing throughout.",
    image: `${S3}/portfolio/berkeley-residential-complete-house-foundation-replacement-with-house-jacking/berkeley-residential-complete-house-foundation-replacement-with-house-jacking-cover.webp`,
  },
  {
    tag: "Commercial",
    title: "Second-generation retail construction",
    place: "Concord",
    text: "An existing retail shell rebuilt into a brand-ready space, from permits and MEP to the final finish schedule.",
    image: `${S3}/portfolio/concord-commercial-2nd-generation-construction-for-retail/concord-commercial-2nd-generation-construction-for-retail-cover.webp`,
  },
  {
    tag: "Residential",
    title: "Complete kitchen & deck renovation",
    place: "Oakland",
    text: "Indoor and outdoor living stitched together — a working kitchen that opens onto a deck built for long evenings.",
    image: `${S3}/portfolio/oakland-residential-complete-kitchen-and-deck-renovation/oakland-residential-complete-kitchen-and-deck-renovation-cover.webp`,
  },
  {
    tag: "Commercial",
    title: "Shell construction for retail",
    place: "San Rafael",
    text: "Ground-up shell construction delivered on a tenant timeline, coordinated across city, landlord and franchise standards.",
    image: `${S3}/portfolio/san-rafael-commercial-shell-construction-for-retail/san-rafael-commercial-shell-construction-for-retail-cover.webp`,
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Custom homes, additions & ADUs",
    text: "Design–build homes, additions and ADUs with 3D planning, clear communication and transparent pricing from start to finish.",
    image: `${S3}/services/bay-area-custom-home-building-adu-construction-designbuild-homes-additions-and-adus.webp`,
  },
  {
    n: "02",
    title: "Kitchen & bathroom remodeling",
    text: "High-detail renovations with 3D planning, coordinated trades and communication-driven project management.",
    image: `${S3}/services/bay-area-kitchen-bathroom-remodeling-high-detail-designbuild-renovations-for-homes.webp`,
  },
  {
    n: "03",
    title: "Foundation & structural repairs",
    text: "Engineering-driven inspections, repairs and replacements with integrated drainage for residential and hillside homes.",
    image: `${S3}/services/bay-area-residential-and-hillside-home-foundation-structural-repairs.webp`,
  },
  {
    n: "04",
    title: "Office construction & tenant improvements",
    text: "Build-outs with upfront cost evaluation, TI analysis and permits handled — from lease review to move-in day.",
    image: `${S3}/services/bay-area-office-construction-tenant-improvements.webp`,
  },
  {
    n: "05",
    title: "Retail development & franchise build-outs",
    text: "End-to-end retail, from site selection support and TI planning through construction and franchise-standard finishes.",
    image: `${S3}/services/bay-area-retail-space-development-franchise-build-outs.webp`,
  },
  {
    n: "06",
    title: "Restaurant & hospitality construction",
    text: "Commercial kitchens, ADA restrooms, health inspections and efficient front- and back-of-house layouts.",
    image: `${S3}/services/bay-area-restaurant-hospitality-construction-commercial-kitchens-dining-rooms-and-guest-space-build-outs.webp`,
  },
];

export const COMING_SOON = {
  tag: "Commercial · In progress",
  title: "Palmetto — second location",
  place: "Bay Area, California",
  text: "Another Palmetto fast-casual location currently under construction: kitchen infrastructure, finishes and brand-standard dining space taking shape ahead of opening.",
  images: [
    "https://live.staticflickr.com/65535/55462006004_27acaffb1c_b.jpg",
    "https://live.staticflickr.com/65535/55461951173_f7dc03332f_b.jpg",
    "https://live.staticflickr.com/65535/55461951178_d41bfbc999_b.jpg",
    "https://live.staticflickr.com/65535/55460851307_ba1f30cfbf_b.jpg",
  ],
};

export const PROCESS = [

  { n: "01", title: "Consultation", text: "Free site evaluation with a 3D scan. You leave with a clear scope, timeline and budget range." },
  { n: "02", title: "Design & plan", text: "Precise drawings and a transparent line-item budget. Every decision documented up front." },
  { n: "03", title: "Permits", text: "City, health and fire packages managed end to end, built around Bay Area code and municipal quirks." },
  { n: "04", title: "Construction", text: "One point of contact, weekly updates, and trades kept in lockstep on site." },
  { n: "05", title: "Completion", text: "Final walkthrough, same-week punch list and full warranty coverage." },
];
