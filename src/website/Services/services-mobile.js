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
    name: "1. Requirement Gathering",
    description:
      "We dive into your ideas, meticulously extracting requirements through detailed dialogues and questionnaires. Utilizing agile and Kanban, our student team ensures a flexible, client-approved project outline that mirrors your aspirations.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "2. Design",
    description:
      "Adhering to Human Interface Guidelines, our designs, crafted with tools like Figma, blend aesthetics with user-centric functionality, ensuring your brand identity is cohesively represented throughout the user experience.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190297/icons8-ui-ux-design-96_k1ku97.png",
  },
  {
    name: "3. Development",
    description:
      "Leveraging Flutter and React Native, our student developers infuse innovation into every code line. We accommodate essential changes and ensure optimal performance through thorough testing, all while maintaining budget integrity.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190419/icons8-development-96_kqu2mg.png",
  },
  {
    name: "4. Testing",
    description:
      "Your app undergoes stringent testing, involving you in the user testing phase to refine and ensure a seamless, bug-free user experience that not only meets but exceeds expectations.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190546/icons8-testing-80_f0rgbp.png",
  },
  {
    name: "5. Deployment",
    description:
      "Navigating through platform guidelines and managing deployment intricacies, we ensure your app is smoothly and successfully launched on platforms like the App Store, providing an uninterrupted user experience.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190739/icons8-launch-96_dlqjg2.png",
  },
  {
    name: "6. Maintenance",
    description:
      "Our commitment extends post-launch with a 2-week to 1-month maintenance period, focusing on bug fixes and crucial updates, while providing continuous support via email to address any arising issues promptly.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191003/icons8-maintenance-80_u5uied.png",
  },
];
export default function Service_mobile() {
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
        <title>Mobile Development Services | Innovation Studios</title>
        <meta
          name="description"
          content="Offering top-tier mobile development solutions, Innovation Studios brings your app idea to life on both iOS and Android platforms. Let's shape the future of mobile together."
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
              Mobile Application Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Dive into the mobile-centric world with our top-tier mobile app
              solutions. From idea to launch, our team ensures your app not only
              looks great but also resonates with your target audience for
              maximum engagement.,
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
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641816/website-images/image-service-mobile.jpg"
              alt="Mobile Development Services - Innovation Studios"
              className="mx-auto w-[33rem] max-w-full "
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
