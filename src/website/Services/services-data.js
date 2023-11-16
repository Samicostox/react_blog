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
    name: "1. Problem Defintion and Objectives Outline",
    description:
      "We initiate our projects by deeply understanding your business challenges and objectives. Through detailed discussions and strategic planning, we define clear problem statements and establish a tailored project scope, ensuring that our data-driven solutions align seamlessly with your business goals and vision.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190198/icons8-documents-96_xohmbh.png",
  },
  {
    name: "2. Data Acquisition and Understanding",
    description:
      "Our team employs a range of techniques to acquire, explore, and understand the data that will drive your solutions. Through exploratory data analysis and quality assessments, we ensure the data is robust and relevant, laying a solid foundation for the subsequent phases of the project.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191263/icons8-data-backup-100_w78o90.png",
  },
  {
    name: "3. Data Preprocessing and Cleaning",
    description:
      "We meticulously clean and preprocess the data, addressing any inconsistencies, missing values, and outliers. Through strategic transformations and feature engineering, we ensure the data is in an optimal format, ready to yield accurate and reliable insights in the modeling phase.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191351/icons8-data-cleaning-99_h1xp4m.png",
  },
  {
    name: "4. Model Development and Validation",
    description:
      "We design, train, and validate machine learning models that are custom-tailored to your specific problem and data. Rigorous validation ensures that our models provide reliable and generalizable insights, turning your data into actionable, predictive power.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191998/data_processing_z7vqnl.svg",
  },
  {
    name: "5. Model Deployment",
    description:
      "We strategically deploy models into your operational environment, ensuring they are scalable, maintainable, and integrate seamlessly with your existing systems. Continuous monitoring post-deployment ensures consistent performance and reliability in delivering insights.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697190739/icons8-launch-96_dlqjg2.png",
  },
  {
    name: "6. Project Delivery and Maintenance",
    description:
      "We ensure you can leverage the deployed models effectively through comprehensive training and robust documentation. Our commitment extends beyond delivery, offering ongoing support and maintenance to ensure the sustainability and evolution of your data-driven solutions in alignment with your business dynamics.",
    imageSrc:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1697191003/icons8-maintenance-80_u5uied.png",
  },
];
export default function Service_data() {
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
        <title>Data Engineering Services | Innovation Studios</title>
        <meta
          name="description"
          content="Harness the power of your data with Innovation Studios. Our data engineering solutions transform raw data into actionable insights, driving business growth."
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
        <div className="max-w-[1800px] mx-auto px-6 xl:flex lg:items-center lg:px-40  lg:gap-x-20">
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
              Data Engineering
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Unlock the power of your data with our cutting-edge data science
              services. We transform raw data into actionable insights, helping
              you make informed decisions and stay ahead in your industry.
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
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699641940/website-images/image-service-data.jpg"
              alt="Data Services - Innovation Studios"
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
