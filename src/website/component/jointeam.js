import React, { useEffect } from "react";
import { ChevronRightIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

const JoinOurTeam = () => {
  const benefits = [
    "Competitive salaries",
    "Flexible work hours",
    "Comprehensive training",
    "Apply theory to practice",
    "Engage in impactful projects",
    "Industry exposure",
  ];

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
    <div className="bg-green-600 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699615311/website-images/image-join-the-team.jpg"
              alt="Join The Team - Innovation Studios"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-left font-alliance font-bold">
                Join our team
              </h2>
              <p className="mt-6 text-lg leading-8 text-white text-left font-alliance">
                Reach out if you are a university student looking for some paid
                work experience in your area of study!
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-x-3 text-white font-alliance"
                  >
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none full-white"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a
                  data-tf-popup="lZ2mKiQJ"
                  data-tf-opacity="100"
                  data-tf-size="100"
                  data-tf-iframe-props="title=Talent Recuitment"
                  data-tf-transitive-search-params
                  data-tf-medium="snippet"
                  onClick={handleClick}
                  className="text-sm leading-6 text-white font-alliance font-bold cursor-pointer"
                >
                  Join The Team{" "}
                  <span aria-hidden="true" className="text-white">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
    </div>
  );
};

export default JoinOurTeam;
