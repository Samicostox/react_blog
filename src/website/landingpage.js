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

const featuredTestimonial = {
  body:
    "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Roksana",
    handle: "CEO, Safequeen",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538447/Copy_of_Medium_logo-black_160x50_aj8png.png",
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
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

const stats = [
  { id: 1, name: "Students working with us", value: "30+" },
  { id: 2, name: "Projects Completed", value: "15+" },
  { id: 3, name: "Universities", value: "2" },
  { id: 4, name: "Partners", value: "5+" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Landingpage() {
  useEffect(() => {
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
                <h2 className="text-3xl font-alliance font-bold tracking-tight text-gray-900 sm:text-4xl ">
                  Our Year In Results
                </h2>
                <p className="mt-4 font-alliance text-lg leading-8 text-gray-600">
                  This is what we achieved after only one year of hardworking
                  and passion.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col bg-gray-400/5 p-8"
                  >
                    <dt className="text-sm font-semibold leading-6 text-gray-500 font-alliance">
                      {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 font-alliance font-bold">
                      {stat.value}
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
          <CardDefault title2 = "OUR SERVICES"></CardDefault>
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
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-700 font-alliance font-bold">
                  Testimonials
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance">
                  We have worked with thousands of amazing people
                </p>
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
                      alt=""
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
                      alt=""
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
                                alt=""
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
