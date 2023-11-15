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
    name: "1. Executive Summary",
    description:
      "We craft a succinct executive summary that introduces your business, articulates the purpose of the business plan, and specifies whether the objective is to attract capital or align your team. We ensure to highlight the financial needs, if any, and provide a snapshot of your business’s financial health and pivotal achievements.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "2. Company Description",
    description:
      "Our service provides a concise yet comprehensive introduction of your company, positioning it aptly within its industry and elucidating relevant market trends and financial data. We meticulously detail your business type, leadership, and employee dynamics, while spotlighting your unique selling propositions and advantages.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697194000/company_mbx4qf.svg",
  },
  {
    name: "3. Market Analysis and Opportunity",
    description:
      "We emphasize thorough market research and analysis to furnish a robust business plan. Our deliverables include insightful data on market size, growth, and potential risks, coupled with a succinct overview of your target demographic and a strategic positioning of your business in the market.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697193674/am_zfftao.svg",
  },
  {
    name: "4. Competitive Analysis",
    description:
      "We conduct a rigorous competitive analysis, exploring the operations, financials, and value propositions of your competitors. Our service ensures that your business plan highlights strategies to leverage competitors' strengths and weaknesses to your benefit.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697193804/ca_gdhaaa.svg",
  },
  {
    name: "5. Execution Plan",
    description:
      "Our expertly crafted execution plan outlines how your business will operate, develop, and fulfill its strategic objectives. We detail your organizational structure, leadership, and daily operations, providing clear timelines for startups to commence operations and achieve profitability, or for established companies to implement new strategies.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697193880/plan_freyov.svg",
  },
  {
    name: "6. Marketing Plan",
    description:
      "We develop a streamlined marketing plan that elucidates how your business will be promoted and how it will retain customers. Our service ensures that key aspects like brand messaging, marketing assets, and a succinct marketing SWOT analysis are included, keeping stakeholders well-informed of your promotional strategies.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697192863/markstrategy_xemy0f.svg",
  },
];

export default function Service_businessplan() {
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
        <title>Business Plan Services | Innovation Studios</title>
        <meta
          name="description"
          content="Innovation Studios offers comprehensive business plan services, aiding startups and enterprises alike in crafting compelling roadmaps to success."
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
              Business Plan
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Future-proof your business with our expert strategic planning. We
              dive deep into market analytics and trends to craft strategies
              that position you for lasting success and growth.
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
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641865/website-images/image-service-business-plan.jpg"
              alt="Business Plan Services - Innovation Studios"
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
