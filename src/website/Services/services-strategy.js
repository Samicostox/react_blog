import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Navbar from "../../navbar";
import Offer from "../component/offer";
import Footer from "../footer";
import CTAP from "./CTA_pastprojects";
import Navbarv2 from "../../navbarv2";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga4';

const steps = [
  {
    name: "Technical Documents",
    description:
      "Our specialists curate comprehensive technical documentation that is not only precise but also user-friendly. Whether it's product specifications, system architectures, or user manuals, we ensure every detail aligns with your business goals.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "Risk Analysis",
    description:
      "Risk is inherent in business. Our team delves deep to identify potential risks associated with your ventures. More importantly, for each risk pinpointed, we propose robust mitigation strategies, ensuring your operations remain resilient in face of uncertainties.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697192751/risk_analysis_cylvcg.svg",
  },
  {
    name: "Marketing Strategy",
    description:
      "Understanding your market is paramount. We harness the power of data analytics, industry trends, and deep market research to sculpt strategies that resonate with your target audience.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697192863/markstrategy_xemy0f.svg",
  },
  {
    name: "Pricing Strategy",
    description:
      "Price is more than just a number; it's a reflection of value. Through competitor analysis, value proposition refinement, and consumer behaviour insights, we recommend pricing structures that optimise profitability while ensuring customer satisfaction.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697192921/icons8-pricing-strategy-78_z4qwmp.png",
  },
  {
    name: "Road Map",
    description:
      "With a clearly defined path, we layout step-by-step actionable plans. This ensures that strategy translates seamlessly into execution, propelling your business forward.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697193006/icons8-roadmap-80_vyqfxx.png",
  },
  {
    name: "Post-Delivery Support",
    description:
      "Strategy formulation is just the beginning. We are with you every step of the way, offering post-delivery consultations, revisions, and insights to ensure the strategy is actualised effectively.al.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191003/icons8-maintenance-80_u5uied.png",
  },
];
export default function Service_strategy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname + window.location.search
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Strategic Services | Innovation Studios</title>
        <meta
          name="description"
          content="Navigate the business landscape with confidence. Innovation Studios provides forward-thinking strategic services to position your venture for long-term success."
        />
      </Helmet>

      <Navbarv2></Navbarv2>

      <div className="relative isolate ">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="max-w-[1800px] mx-auto px-6  xl:flex lg:items-center lg:px-40  lg:gap-x-20">
          {" "}
          {/* in order to have less space between navbar and section remove those two "py-24 sm:py-32", this will also remove the pâdding down so take that into consideration*/}
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-green-600">
                  Not Interested?
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="/services" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Explore our other services
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-x1 text-4xl font-alliance font-bold tracking-tight text-gray-900 sm:text-6xl text-left ">
              Strategy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Stay ahead of the curve with our comprehensive benchmarking
              services. We will help you gauge where you stand in the market,
              unveiling opportunities and strategies to outperform competitors
              and set industry standards.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/contact2"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641888/website-images/image-service-strategy.jpg"
              alt="Strategy Services - Innovation Studios"
              className="mx-auto w-[35rem] max-w-full "
            />
          </div>
        </div>
      </div>

      <Offer steps={steps} />
      <CTAP></CTAP>
      <Footer></Footer>
    </div>
  );
}
