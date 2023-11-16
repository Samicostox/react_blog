/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Navbar from "../navbar";
import Carousel from "./carousel";
import Header from "./header";
import LogoCloud from "./logocloud";
import Hero from "./hero";
import { CardDefault } from "./component/cardsservices";
import Footer from "./footer";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Navbarv2 from "../navbarv2";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

const featuredTestimonial = {
  body:
    "We recently collaborated with the Innovation Studios team to study the impact of AI on our low-code development platform Quodly.com. We were genuinely impressed by the maturity and professionalism of the team at Innovation Studios despite their young age and experience. They were rapidly able to integrate and collaborate with our experimented team and provided valuable insights both in  technological analysis and in strategic implementation.  Our seamless experience with them has led to engage with them on a regular basis",
  author: {
    name: "Eric Teissandier",
    handle: "CEO, 4D",
    imageUrl:
      "https://res.cloudinary.com/dptyvjqcf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1697625656/eric-teissandier_f3bxvz.jpg",
    logoUrl:
      "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625589/d_logo_icon_247741_du9ahu.png",
  },
};
const testimonials = [
  [
    [
      {
        body:
          "Birmingham Innovation Studio is an impeccably professional organisation that promotes values of technical excellence and client-focus. The School of Computer Science is proud to be associated with such a well-run initiative, not least because it provides benefits for students across the University of Birmingham and demonstrates the entrepreneurial spirit and professional capabilities of our students.",
        author: {
          name: "Matthew Leeke",
          handle: "Deputy Head of School of Computer Science",
          imageUrl:
            "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625814/leeke-matthew_q7atfv.jpg",
        },
      },
      // More testimonials...
    ],
    [
      {
        body:
          "It has been a pleasure working with Innovation Studios. They really helped bring my idea to life and construct something that is going to help connect more mountain bikers together.",
        author: {
          name: "Alex Watkins",
          handle: "CEO, NuZones",
          imageUrl:
            "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625907/blank-profile-picture-973460_960_720_gaegxi.webp",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body:
          "Working at Innovation Studios as a software engineer gives me the opportunity to tackle real world project. This enhances my practical skills and experience, adding great value to my professional profile.",
        author: {
          name: "Hugo Biais",
          handle: "Student at the University of Birmingham",
          imageUrl:
            "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625769/1682583212519_qwfwo5.jpg",
        },
      },
      // More testimonials...
    ],

    [
      {
        body:
          "The team at Birmingham Innovation Studio are not only skilled software engineers, but also valuable tech consultants with a clear understanding of commercial realities and supporting product strategy. Their insights and expertise have been invaluable to UPlist, helping us to accelerate go-to-market and bring our vision to life.",
        author: {
          name: "Ross Derick",
          handle: "CEO, Uplist",
          imageUrl:
            "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625907/blank-profile-picture-973460_960_720_gaegxi.webp",
        },
      },
      // More testimonials...
    ],
  ],
];

const stats = [
  { id: 1, name: "Students working with us", value: "30", plussign: true },
  { id: 2, name: "Projects Completed", value: "15", plussign: true },
  { id: 3, name: "Universities", value: "2", plussign: false },
  { id: 4, name: "Partners", value: "5", plussign: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Landingpage() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
    window.scrollTo(0, 0);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Services - Innovation Studios</title>
        <meta
          name="description"
          content="Discover the comprehensive range of software development, data engineering, and business services offered by Innovation Studios, a student-run enterprise."
        />
      </Helmet>
      {/* Header */}

      <Navbarv2></Navbarv2>

      <div className="relative isolate"></div>

      <main className="">
        {/* Hero section */}
        <div className="relative z-10">
          <Carousel></Carousel>
        </div>

        <div className="relative z-10 bg-white w-full ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 ">
            <div className="w-full bg-white h-20 relative z-10">
              {/* Content of the container goes here */}
            </div>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-alliance font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Year In Results
                </h2>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col bg-teal-900 p-8">
                    <dt className="text-sm font-semibold leading-6 text-white font-alliance">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white font-alliance font-bold">
                      <VisibilitySensor partialVisibility={true}>
                        {({ isVisible }) => (
                          <CountUp
                            className="order-first text-3xl font-semibold tracking-tight text-white font-alliance font-bold"
                            start={0}
                            end={isVisible ? stat.value : 0}
                            duration={4.0}
                            suffix={stat.plussign == true ? "+" : ""} // You can add conditions here if you want both "+" and "-" based on the value
                          />
                        )}
                      </VisibilitySensor>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="w-full bg-white h-20 relative z-10">
          {/* Content of the container goes here */}
        </div>

        <div className="relative z-10 bg-white w-full">
          <CardDefault title2="OUR SERVICES"></CardDefault>
        </div>

        <div className="w-full bg-white h-20 relative z-10">
          {/* Content of the container goes here */}
        </div>
        <div className="relative z-10 bg-white w-full">
          <LogoCloud className="max-w-screen z-10 bg-white"></LogoCloud>
        </div>

        <div className="w-full bg-white h-30 relative z-10">
          {/* Content of the container goes here */}
        </div>

        {/* Testimonials section */}
        <div className="relative isolate 0 sm:pt-32 z-10 bg-white pb-10">
          <div className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <div className="w-full bg-white h-20 relative z-10">
                  {/* Content of the container goes here */}
                </div>
                <p className="text-lg font-semibold leading-8 tracking-tight text-teal-700 font-alliance font-bold">
                  Testimonials
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance">
                  We have worked with hundreds of amazing people
                </h2>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900  text-left">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={featuredTestimonial.author.imageUrl}
                      alt="Testimonials"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold text-left">
                        {featuredTestimonial.author.name}
                      </div>
                      <div className="text-gray-600  text-left">{`${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <img
                      className="h-10 w-auto flex-none"
                      src={featuredTestimonial.author.logoUrl}
                      alt="Testimonials"
                    />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                  >
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                              columnIdx === columnGroup.length - 1)
                            ? "xl:row-span-2"
                            : "xl:row-start-1",
                          "space-y-8"
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5  text-left"
                          >
                            <blockquote className="text-gray-900  text-left">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt="Testimonials"
                              />
                              <div>
                                <div className="font-semibold  text-left">
                                  {testimonial.author.name}
                                </div>
                                <div className="text-gray-600  text-left">{`${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 bg-white w-full">
        <Footer></Footer>
      </div>

      {/* Footer */}
    </div>
  );
}
