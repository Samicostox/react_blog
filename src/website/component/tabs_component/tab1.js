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
                  <p className="flex-auto text-left font-alliance ">
                    {feature.description}
                  </p>
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
                src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699614789/website-images/image-training.jpg"
                alt=""
              />

              <figure className="relative isolate">
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-transparent bg-clip-text text-left">
                  <p className="text-transparent bg-clip-text">
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus
                    tortoraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.”
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
    text:
      "Engage in real-world applications that enhance academic knowledge while navigating through practical challenges and projects.",
  },
  {
    title: "Training",
    href: "/#contact2",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    text:
      "Benefit from comprehensive training modules, ensuring you acquire vital professional skills and industry-relevant expertise.",
  },
  {
    title: "Support",
    href: "/#contact2",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    text:
      "Enjoy a robust support system where your ideas are valued and your challenges are addressed through consistent mentorship and resources.",
  },
  {
    title: "Compensation",
    href: "/#contact2",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
    text:
      "Earn competitive compensation, providing financial support during your educational journey and potentially easing student loan burdens.",
  },
  {
    title: "Career",
    href: "/#contact2",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    text:
      "Establish a strong career foundation by connecting with industry professionals and gaining insights into your future professional pathway.",
  },
  {
    title: "Community",
    href: "/#contact2",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
    text:
      "Be part of a vibrant community where networking, collaborative learning, and social interactions pave the way for lifelong friendships and professional connections.",
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
    description:
      "Work directly with a company part-time while receiving our continuous support.",
    features: [
      "Direct placement in a company ",
      "Regular training sessions",
      "Weekly check-ins and feedback",
      "Mentoring from experienced professionals",
      "Access to resources and tools",
      "Use of professional templates",
    ],
    mostPopular: false,
  },
  {
    name: "In House",
    id: "tier-startup",
    href: "/#contact2",
    priceMonthly: "£20",
    description: "Work on projects under our direct supervision and guidance.",
    features: [
      "Opportunity to work on diverse projects",
      "Guided project execution and management",
      "Regular training sessions",
      "Weekly check-ins and project reviews",
      "Mentoring from our core team",
      "Access to cutting-edge resources and tools",
      "Professional templates for projects",
    ],
    mostPopular: true,
  },
  {
    name: "Full-Time",
    id: "tier-enterprise",
    href: "/#contact2",
    priceMonthly: "£xx",
    description:
      "Step into the professional world with a full-time position facilitated by us.",
    features: [
      "Full-time placement in a company",
      "Position and benefits based on company",
      "Introduction and initial support ",
      "Networking opportunities",
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
