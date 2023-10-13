import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./about_us/hero";
import Services from "./about_us/services";
import Testimonials from "./about_us/testimonials";
import Content from "./about_us/content";
import Timeline from "./about_us/timeline";
import Navbar from "./navigation_bar";
import Package from "./about_us/package_service";
import Slider from "./about_us/slider";
import TypeformEmbed from "./typeform_students";
import Footer from "./footer";
import Example from "./about_us/scroll_horizontal";
import InnovationStudios from "./about_us/innovation_studios";
import ScrollSnapProgressBar from "./about_us/package_service";
import NumberLine from "./about_us/package_service";
const navigation = [
  { name: "LeadGeneration", href: "/software" },
  { name: "Contact", href: "/contact2" },
  { name: "Software", href: "/newhome" },
  { name: "Team", href: "/team" },
  { name: "Past Projects", href: "/past-projects" },
];
const sections = [
  { content: "Section 1 Content" },
  { content: "Section 2 Content" },
  // More sections...
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
    <div className="relative bg-white z-2">
      <Navbar />

      <div className="relative bg-black z-2 overflow-hidden top-0">
        <div className="relative isolate overflow-hidden pt-14">
          <img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696091538/mfejpnzaoaiiiv9sygg8.jpg"
            alt=""
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
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl z-3">
                Work Now With Tomorrow's Most Brillant Minds.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
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

      <InnovationStudios />
      <Timeline />
      <Services />
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
              You can Sign Up for the beta via the form below, you will have a
              premium access to our software!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/#newhome"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-green-900 shadow-sm hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-alliance"
              >
                Sign Up
              </a>
              <a
                href="#"
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

      <Footer />
    </div>
  );
}
