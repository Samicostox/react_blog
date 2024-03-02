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
           The {' '}
            <span className="inline-flex items-center justify-center text-teal-700 relative z-10 font-alliance">
      <svg
        className="absolute left-0 top-full -mt-4 max-w-full"
        width="220"
        height="24"
        viewBox="0 0 220 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{zIndex: '-1'}} // Explicitly set for clarity, though it's implicitly under the text due to DOM structure
      >
        <path
          d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
          fill="#4fd1c5" // Lighter teal color
          fillRule="evenodd"
        />
      </svg>
      Benefits
    </span> of working with us!
                  
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