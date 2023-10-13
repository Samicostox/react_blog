import React, { useEffect } from "react";
import {
  InboxIcon,
  TrashIcon,
  UsersIcon,
  CheckIcon,
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ReceiptRefundIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "1. Complete this Short Questionaire",
    description:
      "We want to know more about you, what are your interests, your background and your goals. Answer our short questionaire and send us your CV so that we can review your application",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "2. General Interview",
    description:
      "Let's figure out if we're a good fit for each other! We'll ask you a few questions about your background, experience, and personal aspirations. Plus, we'll introduce you to our company, our goals, and share some of our stories.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "3. Technical Interview",
    description:
      "Finally depending on the kind of project you are applying to work on we will ask you technical questions and ask you to present some of your past projects.",
    href: "#",
    icon: TrashIcon,
  },
];

function Tab1() {
  useEffect(() => {
    // Dynamically load the Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleClick = () => {
    // Handle button click if needed
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
            Join the Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left font-alliance">
            Navigate through our recruitment process to get involved! The entire
            journey, from sending your application to the final interview,
            should take just 1 week.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-bold leading-7 text-gray-900 text-left font-alliance">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700 text-left font-alliance">
                    <feature.icon
                      className="h-6 w-6 text-white text-left font-alliance"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 text-left font-alliance font-light">
                  <p className="flex-auto text-left font-alliance ">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <button
          onClick={handleClick}
          data-tf-popup="lZ2mKiQJ"
          data-tf-opacity="100"
          data-tf-size="100"
          data-tf-iframe-props="title=Talent Recuitment"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          className=" mt-24 inline-block max-w-full overflow-hidden bg-green-800 rounded-md shadow-sm hover:bg-green-600 text-white text-lg rounded-full px-8 py-2 font-bold h-12 cursor-pointer whitespace-nowrap overflow-ellipsis text-center font-alliance"
        >
          Apply!
        </button>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
}
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];
function Tab2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover "
                src="https://res.cloudinary.com/dl2adjye7/image/upload/v1697210000/sami8694_Isometric_industry_ready_students_illustration_busines_9d0ee45b-503b-4c3b-b3b0-648205a34a45_jzbfd7.png"
                alt=""
              />

              <figure className="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                </svg>
                <img
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                  className="h-12 w-auto"
                />
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white text-left ">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor.”
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600 text-left font-alliance">
                Training Sessions
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
                Making you Industry Ready
              </h1>
              <div className="max-w-xl">
                <p className="mt-6 text-left font-alliance font-light">
                  As part of your journey with us, we organize bi-weekly
                  training sessions covering a wide variety of topics, from REST
                  API to best practices. Our goal is to make you industry-ready
                  by providing additional resources that build upon what you're
                  learning at university.
                </p>
                <p className="mt-8 text-left font-alliance font-light">
                  We're all about continuous learning and collaboration here!
                  Our interactive training sessions not only boost your
                  technical skills but also enhance your soft skills, preparing
                  you for real-world industry challenges. Your growth matters to
                  us, and we're here to support your journey, ensuring you're
                  ready to navigate the dynamic tech landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const actions = [
  {
    title: "Experience",
    href: "/#contact2",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
    text: "",
  },
  {
    title: "Training",
    href: "/#contact2",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    text: "",
  },
  {
    title: "Support",
    href: "/#contact2",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    text: "",
  },
  {
    title: "Compensation",
    href: "/#contact2",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    text: "",
  },
  {
    title: "Career",
    href: "/#contact2",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    text: "",
  },
  {
    title: "Community",
    href: "/#contact2",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    text: "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Tab5() {
  return (
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
            "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-700 text-left shadow-sm"
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
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}

const tiers = [
  {
    name: "Part-Time",
    id: "tier-freelancer",
    href: "/#contact2",
    priceMonthly: "£20",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "In House",
    id: "tier-startup",
    href: "/#contact2",
    priceMonthly: "£20",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Full-Time",
    id: "tier-enterprise",
    href: "/#contact2",
    priceMonthly: "£xx",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];

function Tab4() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl  lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600 font-alliance">
            Approach
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-alliance">
            Different Employement contract
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 font-alliance">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-green-700" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600 font-alliance">
                      Most Recomended
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 text-left font-alliance font-light">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 font-alliance">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 font-alliance">
                    /hour
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 font-alliance"
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-x-3 font-alliance font-light"
                    >
                      <CheckIcon
                        className="h-6 w-5 flex-none text-green-700 font-alliance"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-green-700 text-white shadow-sm hover:bg-green-600"
                    : "text-green-600 ring-1 ring-inset ring-green-400 hover:ring-green-500",
                  "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 font-alliance"
                )}
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div className="p-4 bg-purple-200 rounded-md">
      <h2 className="text-xl font-bold">Tab 5</h2>
      <p>This is the content for Tab 5. It's a purple box!</p>
    </div>
  );
}

export { Tab1, Tab2, Tab3, Tab4, Tab5 };
