import {
    InboxIcon,
    TrashIcon,
    UsersIcon,
    MapIcon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    CircleStackIcon,
    PresentationChartBarIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";
import { Meteors } from "../Meteors/meteors.tsx";
import { useRef, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
  
  const features = [
    {
      name: "Unlimited inboxes",
      description:
        "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
      href: "#",
      icon: InboxIcon,
    },
    {
      name: "Manage team members",
      description:
        "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
      href: "#",
      icon: UsersIcon,
    },
    {
      name: "Spam report",
      description:
        "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
      href: "#",
      icon: TrashIcon,
    },
    {
      name: "Unlimited inboxes",
      description:
        "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
      href: "#",
      icon: InboxIcon,
    },
    {
      name: "Manage team members",
      description:
        "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
      href: "#",
      icon: UsersIcon,
    },
    {
      name: "Spam report",
      description:
        "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
      href: "#",
      icon: TrashIcon,
    },
  ];
  
  const actions = [
    {
      title: "Mobile Development",
      href: "/service-mobile",
      icon: DevicePhoneMobileIcon,
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
      text:
        "Dive into the mobile-centric world with our top-tier mobile app solutions. From idea to launch, our team ensures your app not only looks great but also resonates with your target audience for maximum engagement.",
    },
    {
      title: "Web Development",
      href: "/service-web",
      icon: ComputerDesktopIcon,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
      text:
        "Elevate your online presence with our bespoke web development services. We craft beautiful, user-friendly websites that captivate and convert, ensuring your brand stands out in the digital landscape.",
    },
    {
      title: "Data Science",
      href: "/service-data",
      icon: CircleStackIcon,
      iconForeground: "text-sky-700",
      iconBackground: "bg-sky-50",
      text:
        "Unlock the power of your data with our cutting-edge data science services. We transform raw data into actionable insights, helping you make informed decisions and stay ahead in your industry.",
    },
    {
      title: "Business Plan",
      href: "/service-businessplan",
      icon: MapIcon,
      iconForeground: "text-yellow-700",
      iconBackground: "bg-yellow-50",
      text:
        "Future-proof your business with our expert strategic planning. We dive deep into market analytics and trends to craft strategies that position you for lasting success and growth.",
    },
    {
      title: "Strategies",
      href: "/service-strategy",
      icon: PresentationChartBarIcon,
      iconForeground: "text-rose-700",
      iconBackground: "bg-rose-50",
      text:
        "Stay ahead of the curve with our comprehensive benchmarking services. We will help you gauge where you stand in the market, unveiling opportunities and strategies to outperform competitors and set industry standards.",
    },
    {
      title: "Benchmarking",
      href: "/service-benchmarking",
      icon: MagnifyingGlassIcon,
      iconForeground: "text-indigo-700",
      iconBackground: "bg-indigo-50",
      text:
        "Turn your vision into a tangible roadmap with our tailored business plan services. Whether you are a startup or an established entity, our team crafts plans that attract investors and steer your business towards unparalleled success.",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  export default function Benefits() {
    useEffect(() => {
      AOS.init({
        // settings here
        duration: 1000, // Global animation duration
      });
    }, []);
    return (
      <div className="bg-zinc-50 px-2 md:px-6 ">
        <div className="mb-8 px-4 pt-40">
          <h3 className="text-slate-900 text-5xl font-semibold text-center text-left font-alliance">
            Our <span className="relative inline-flex items-center justify-center text-slate-900 font-alliance font-bold">
              {/* SVG and Benefits text remains unchanged */}
            </span>
          </h3>
          <p className="text-center text-sm mt-2 max-w-lg mx-auto font-alliance text-slate-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur reprehenderit.
          </p>
        </div>
  
        <div className="divide-y divide-gray-400 overflow-hidden rounded-lg bg-transparent shadow-lg sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-20 max-w-7xl mx-auto border border-gray-300">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              data-aos={actionIdx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={`${actionIdx < 2 ? 0 : actionIdx < 4 ? 200 : 400}`}
              className={classNames(
                actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-700 text-left shadow-sm transform transition-transform duration-500 overflow-hidden hover:bg-teal-50"
              )}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Meteors number={10} />
              </div>
  
              <div className="relative z-10">
                <div>
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-3 ring-4 ring-white"
                    )}
                  >
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href={action.href} className="focus:outline-none">
                      {action.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {action.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }