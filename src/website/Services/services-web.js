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
    name: "1. Project Outline",
    description:
      "We dive into your web ideas, extracting requirements and utilizing agile and Kanban. Our student team crafts a flexible, client-aligned project outline, turning your digital aspirations into structured plans.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "2. Design",
    description:
      "Merging aesthetics with functionality, our designs adhere to the latest guidelines and ensure your brand identity is consistently represented, crafting a seamless and engaging user journey on your website.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190297/icons8-ui-ux-design-96_k1ku97.png",
  },
  {
    name: "3. Development",
    description:
      "Our student developers employ web technologies to transform designs into functional, innovative websites, ensuring visual appeal, robust functionality, and adherence to your budget and requirements.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190419/icons8-development-96_kqu2mg.png",
  },
  {
    name: "4. Testing",
    description:
      "Your website undergoes rigorous testing, ensuring a bug-free, seamless user experience that exceeds expectations, with your feedback integrated to refine and optimize performance.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190546/icons8-testing-80_f0rgbp.png",
  },
  {
    name: "5. Deployment",
    description:
      "We navigate deployment intricacies to ensure your website launches smoothly and successfully with Heroku or Azure, providing a consistent, uninterrupted user experience across the board.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190739/icons8-launch-96_dlqjg2.png",
  },
  {
    name: "6. Maintenance",
    description:
      "Post-launch, we offer 2 weeks to 1 month of dedicated maintenance, focusing on bug fixes and updates, with ongoing email support to ensure your website remains up-to-date and operational.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191003/icons8-maintenance-80_u5uied.png",
  },
];
export default function Service_web() {
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
        <title>Web Development Services | Innovation Studios</title>
        <meta
          name="description"
          content="Innovation Studios provides cutting-edge web development services, ensuring responsive and performant websites tailored to your business needs."
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
              Web Application Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Elevate your online presence with our bespoke web development
              services. We craft beautiful, user-friendly websites that
              captivate and convert, ensuring your brand stands out in the
              digital landscape.
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
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641969/website-images/image-service-web.jpg"
              alt="Web Development Services - Innovation Studios"
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
