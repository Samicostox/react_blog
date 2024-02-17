import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Services from "./about_us/services";
import Content from "./about_us/content";
import { TypeAnimation } from "react-type-animation";
import Footer from "./footer";
import InnovationStudios from "./about_us/innovation_studios";
import NumberLine from "./about_us/package_service";
import Navbarv2 from "../navbarv2";
import Example from "./navigation_bar";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

import { BentoGridThirdDemo } from "../test/bento";
import { BentoGridDemo } from "../test/bento2";
import { FollowingPointerDemo } from "../test/pointer";


const stats = [
  { id: 1, name: "Students working with us", value: "30", plussign: true },
  { id: 2, name: "Projects Completed", value: "15", plussign: true },
  { id: 3, name: "Universities", value: "2", plussign: false },
  { id: 4, name: "Partners", value: "5", plussign: true },
];
export default function AboutUs() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleNavigation = (href, requiresAuth) => {
    if (requiresAuth && !isLoggedIn) {
      navigate("/signin"); // Redirect to login if not authenticated
      return;
    }
    navigate(href);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname + window.location.search
    });
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        // You can adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [viewLeft, setViewLeft] = useState(true);

  return (
    <div className="bg-red">
      <Helmet>
        <title>Innovation Studios</title>
        <meta
          name="description"
          content="Empowering innovation with software development, data engineering, and business solutions at Innovation Studios. Transform your ideas into reality."
        />
      </Helmet>

      <Navbarv2></Navbarv2>
      <div className="bg-gray-100">
     
      </div>
      <div className="relative bg-black z-2 overflow-hidden top-0 ">
        <div className="relative isolate overflow-hidden pt-14">
          <img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1697380837/3451101_vpsa8n.jpg"
            alt="Innovation Studios background image"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 h-[800px]">
            <div className="text-center h-[800px]">
              <h1 className="text-6xl font-alliance text-white font-bold">
                Work Now With
              </h1>
              <TypeAnimation
                className="typingText text-6xl"
                sequence={[
                  "",
                  2000,
                  "Tomorrow's Leaders",
                  2000,
                  "Tomorrow's Most Brillant Minds",
                  2000,
                  "Tomorrow's Engineers",
                  2000,
                  "Innovation Studios",
                  5000,
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="strong"
                cursor={true}
                repeat={Infinity}
                style={{
                  display: "inline-block",
                  color: "teal",
                  fontFamily: "Alliance",
                }}
              />

              <p className="mt-6 text-lg leading-8 text-gray-300 font-alliance">
                We are a student-led consulting firm, which aims to provide a
                unique platform where businesses meet and work with the
                brilliant minds of tomorrow.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact2"
                  className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more{" "}
                  <span className="text-white " aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>

      <Content />
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8 lg:pl-14 pt-10   mt-10">
        <div style={{ height: "1px", backgroundColor: "black" }}></div>

        <div className="mt-10">
          <InnovationStudios />
        </div>
      </div>

      <div className="mx-auto max-w-[1700px] px-6 lg:px-8 lg:pl-14 pt-10   mt-10">
        <div style={{ height: "1px", backgroundColor: "black" }}></div>

        <div className="mt-10">
          <div className="relative pb-36 z-10 bg-white w-full ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
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
                    <div
                      key={stat.id}
                      className="flex flex-col bg-teal-900 p-8"
                    >
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
                              duration={3.0}
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
        </div>
      </div>
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8 lg:pl-14 pt-10   mt-10">
        <div style={{ height: "1px", backgroundColor: "black" }}></div>

        <div className="mt-20">
          <Services />
        </div>
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-[1700px] px-6 lg:px-8 lg:pl-14 pt-10 mt-10">
          <div style={{ height: "1px", backgroundColor: "black" }}></div>
        </div>

        <div className="mt-20">
          <h1 className="text-center text-4xl text-black  font-alliance font-bold ">
            OUR APPROACH
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center font-alliance mb-12 pb-10">
            From inception to delivery we are here all along the way.
          </p>
          <NumberLine />

          <div className="bg-white">
            <div className="mx-auto  max-w-[1500px] py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden bg-green-800 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl font-alliance">
                  Ready to dive in?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 font-alliance">
                  Let's start our journey together! Simply fill in our form and
                  we will be in touch.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/contact2"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-green-900 shadow-sm hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-alliance"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/services"
                    className="text-sm font-semibold leading-6 text-white font-alliance"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  aria-hidden="true"
                >
                  <circle
                    cx={512}
                    cy={512}
                    r={512}
                    fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                    fillOpacity="0.7"
                  />
                  <defs>
                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                      <stop stopColor="#4CAF50" />
                      <stop offset={1} stopColor="#81C784" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
