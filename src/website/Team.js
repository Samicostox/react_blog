import JoinOurTeam from "./component/jointeam";
import HeaderT from "./component/header-team";
import { TabsWithIcon } from "./component/tabs";
import Footer from "./footer";
import Navbarv2 from "../navbarv2";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga4';


const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

const incentives = [
  {
    name: "Fast shipping",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: "Certified by teachers",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },

  {
    name: "Certified by teachers",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
];

const trio = [
  {
    name: "Amy Tierney",
    role: "Co-Founder / COO",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699613513/website-images/photo-amy.webp",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/amy-tierney-341529170/",
  },
  {
    name: "Hugo Hazard",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699614783/website-images/photo-hugo.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/hugo-hazard-5a8290220/",
  },

  {
    name: "Sami Ribardiere",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699637422/website-images/photo-sami.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/sami-ribardiere-039363234/",
  },
  {
    name: "Elliot Teissandier",
    role: "Co-Founder / Head of Business Development",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699613520/website-images/photo-elliot.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/elliot-teissandier/",
    Uni: "W",
    color: "bg-purple-100",
  },
];

const people = [
  {
    name: "Yahia Abdelkader",
    role: "Software Developer / Sales & Lead Generations",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699615837/website-images/photo-yahia.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/yahia-khairy-abdelkader/",
    Uni: "W",
    color: "bg-purple-100",
  },
  {
    name: "Rohan Luchmun",
    role: "Software Developer",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699615841/website-images/photo-rohan.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/rohan-luchmun-633390259/",
    Uni: "W",
    color: "bg-purple-100",
  },

  
  {
    name: "Rushen Fernando",
    role: "Software Developer",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699615838/website-images/photo-rushen.webp",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/rushen-fernando-287650254/",
    Uni: "W",
    color: "bg-purple-100",
  },
  {
    name: "Mustafa Khan",
    role: "Software Developer / Sales & Lead Generations",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699613503/website-images/photo-mustafa.jpg",

    linkedinUrl: "#https://www.linkedin.com/in/mustafakhan23/",
    Uni: "W",
    color: "bg-purple-100",
  },
  {
    name: "Nadia Jaufarally",
    role: "Software Developer",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699614818/website-images/photo-nadia.webp",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/nadiaj7860/",
    Uni: "W",
    color: "bg-purple-100",
  },
  {
    name: "Louisa Wingfield",
    role: "Chief Legal Officer",
    imageUrl:
      "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1699613530/website-images/photo-louisa.webp",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/louisa-w-932010200/",
    Uni: "B",
    color: "bg-red-100",
  },

  // More people...
];

const people_later = [
  {
    name: "Dhuha Al-Fahad",
    role: "Chief Marketing Officer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/dhuha-al-fahad-45ba011b5/",
    Uni: "BIS",
    color: "bg-red-100",
  },
  {
    name: "Arnav Kumar",
    role: "Software Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/arnav-kumar-a7b009204/",
    Uni: "BIS",
    color: "bg-red-100",
  },
  {
    name: "Aamaan Mohammed",
    role: "Software Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/mohammed-aamaan/",
    Uni: "BIS",
    color: "bg-red-100",
  },
];

export default function Team() {
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
        <title>Meet Our Team | Innovation Studios</title>
        <meta
          name="description"
          content="Meet the driving force behind Innovation Studios: a diverse team of skilled professionals in software development, data engineering, and business strategy. Our team's expertise fuels innovative solutions."
        />
      </Helmet>

      <Navbarv2></Navbarv2>
  

      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20 mx-auto">
        <HeaderT></HeaderT>

        <div className="mx-auto max-w-[1600px] px-6 lg:px-8 lg:pl-14 pt-10 sm:pb-32 mt-10">
          <div style={{ height: "1px", backgroundColor: "black" }}></div>

          <div className="mt-10">
            <TabsWithIcon></TabsWithIcon>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32 " />
      </div>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8 lg:pl-14 pt-10 sm:pb-32">
        <div style={{ height: "1px", backgroundColor: "black" }}></div>

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left mt-10 font-alliance">
            Our team2
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left font-alliance   ">
            Meet the brilliant minds shaping the future, our team of dedicated
            and innovative students!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {trio.map((trio) => (
            <li key={trio.name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover font-alliance"
                src={trio.imageUrl}
                alt=""
              />

              {/* Added container */}
              <div className="flex justify-between items-start mt-6">
                {" "}
                {/* Change here */}
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-left font-alliance">
                    {trio.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 text-left font-alliance font-light">
                    {trio.role}
                  </p>
                </div>
                <div>
                  <a
                    className={
                      "relative z-10 rounded " +
                      trio.color +
                      " px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    }
                  >
                    {trio.Uni}
                  </a>
                </div>
              </div>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={trio.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[3/2] w-full rounded-2xl object-cover font-alliance"
                src={person.imageUrl}
                alt=""
              />

              {/* Added container */}
              <div className="flex justify-between items-start mt-6">
                {" "}
                {/* Change here */}
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-left font-alliance">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 text-left font-alliance font-light">
                    {person.role}
                  </p>
                </div>
                <div>
                  <a
                    className={
                      "relative z-10 rounded " +
                      person.color +
                      " px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    }
                  >
                    {person.Uni}
                  </a>
                </div>
              </div>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <JoinOurTeam></JoinOurTeam>
      </div>

      <Footer></Footer>
    </div>
  );
}
