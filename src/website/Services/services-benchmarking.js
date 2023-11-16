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
    name: "1. Scope Definition",
    description:
      "We dive into understanding your goals, aligning the benchmarking exercise with your business objectives, and collaboratively selecting specific processes or areas to yield insightful results.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "2. Selection of Comparisons",
    description:
      "We strategically identify benchmark partners, whether industry leaders or direct competitors, ensuring they provide an optimal comparison point to measure your performance against.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697194211/comparaison_v0uqaf.svg",
  },
  {
    name: "3. Data Collection",
    description:
      "Embarking on data collection, we meticulously gather performance data from your organization and selected benchmarks, ensuring a comprehensive and relevant overview.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191263/icons8-data-backup-100_w78o90.png",
  },
  {
    name: "4. Data Analysis",
    description:
      "Leveraging sophisticated tools and academic expertise, we analyze data, highlighting performance gaps and opportunities, backed by our unique blend of student talent and professional oversight.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191998/data_processing_z7vqnl.svg",
  },
  {
    name: "5. Strategy & Action Plan",
    description:
      "Our analysis insights shape a strategic blueprint, offering actionable recommendations and clear steps to address performance gaps and elevate your business operations.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697193880/plan_freyov.svg",
  },
  {
    name: "6. Post-Delivery Support",
    description:
      "Strategy formulation is just the beginning. We are with you every step of the way, offering post-delivery consultations, revisions, and insights to ensure the strategy is actualised effectively.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191003/icons8-maintenance-80_u5uied.png",
  },
];
export default function Service_benchmarking() {
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
        <title>Benchmarking Services | Innovation Studios</title>
        <meta
          name="description"
          content="Stay ahead of the competition with Innovation Studios' benchmarking services. Analyze, compare, and implement best practices to achieve industry excellence."
        />
      </Helmet>

      <Navbarv2></Navbarv2>

      <div className="relative isolate">
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
              Benchmarking
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Turn your vision into a tangible roadmap with our tailored
              business plan services. Whether you are a startup or an
              established entity, our team crafts plans that attract investors
              and steer your business towards unparalleled success.
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
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641919/website-images/image-service-benchmarking.jpg"
              alt="Benchmarking Plan Services - Innovation Studios"
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
