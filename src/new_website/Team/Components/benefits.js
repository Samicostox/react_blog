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
    return (
      <div className="bg-zinc-50 px-2 md:px-6 ">
         <div className="mb-8 px-4 pt-40">
        <h3 className="text-slate-900 text-5xl font-semibold text-center text-left font-alliance">
          Our {' '}
                <span className="relative inline-flex items-center justify-center text-slate-900 font-alliance font-bold">
                  <svg className="absolute " width="246" height="76" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z"
                      fill="#2DD4BF"
                      fillRule="nonzero"
                    />
                  </svg>
                  Benefits
                </span>
        </h3>
        <p className="text-center text-sm mt-2 max-w-lg mx-auto font-alliance text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
  
      <div className="divide-y divide-gray-400 overflow-hidden rounded-lg bg-gray-200 shadow-lg sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-20 max-w-7xl mx-auto border border-gray-300">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-700 text-left shadow-sm transform transition-transform duration-500 overflow-hidden hover:bg-teal-50"
            )}
          >
            {/* Meteor Effect (hidden by default, shown on hover) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Meteors number={10} />
            </div>
            

            {/* Card Content */}
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