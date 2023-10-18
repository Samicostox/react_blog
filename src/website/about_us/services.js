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

export default function Services() {
  return (
    <div className="pb-36">
      <h1 className="text-center text-4xl text-black font-alliance font-bold">
        OUR SERVICES
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center font-alliance mb-12 sm:max-w-4x1 md:max-w-4x1 lg:max-w-4xl mx-auto">
        Empowering your business with cutting-edge website design, innovative
        mobile app development, strategic business planning, and insightful data
        science solutions.
      </p>

      <div className="divide-y divide-gray-400 overflow-hidden rounded-lg bg-gray-200 shadow-lg sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-20 max-w-7xl mx-auto border border-gray-300">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-700 text-left shadow-sm transform transition-transform duration-500 "
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white text-left"
                )}
              >
                <action.icon className="h-6 w-6 text-left" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900 text-left">
                <a
                  href={action.href}
                  className="focus:outline-none text-left font-alliance"
                >
                  {/* Extend touch target to entire panel */}
                  <span
                    className="absolute inset-0 text-left font-alliance"
                    aria-hidden="true"
                  />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500 text-left font-alliance font-light">
                {action.text}
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400 transform transition-transform duration-300 rotate-90 group-hover:rotate-0"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
