import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNight from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";

const HeaderT = () => {
  return (
    <div className="mx-auto max-w-14xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40 max-w-[1600px] ">
      <div className="px-6 lg:px-0 lg:pt-4 ">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-full px-6 lg:px-8  ">
            {" "}
            {/* Modified this line */}{" "}
            {/* Removed max-w-lg to make title and paragraph wider */}
            <div className="mt-24 sm:mt-32 lg:mt-16 text-left">
              <a href="/#services" className="inline-flex space-x-6">
                <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm leading-6 text-green-600 ring-1 ring-inset ring-green-600/10 text-left font-alliance font-bold">
                  Our Services
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-alliance font-bold tracking-tight text-gray-900 sm:text-6xl text-left w-full max-w-[600px]">
              {" "}
              {/* Added w-full to make title wider */}
              Our Pool of Talents in the West Midlands
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left w-full font-alliance font-light">
              {" "}
              {/* Added w-full to make paragraph wider */}
              At Innovation Studios, we meticulously select and train our team
              of student consultants, ensuring they're equipped to bridge the
              gap between academic theory and real-world application. Through
              rigorous interview rounds and extensive training sessions, we
              prepare them to navigate the practical challenges that your
              projects may present, while also infusing them with innovative and
              up-to-date industry insights.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left w-full font-alliance font-light">
              While our students bring fresh perspectives from their
              university's innovation studios, our main team provides careful,
              full-time supervision from project inception to delivery.
              Together, we ensure your projects benefit from youthful
              exuberance, innovative ideas, and meticulous management,
              delivering solutions that are both effective and forward-thinking.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/#contact2"
                className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 font-alliance font-bold"
              >
                Contact Us
              </a>
              <a
                href="/#software"
                className="text-sm font-alliance font-bold leading-6 text-gray-900"
              >
                Our Software <span aria-hidden="true ">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:mt-24 md:mx-auto max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
          aria-hidden="true"
        />
        <div
          style={{
            paddingLeft: "5%",
            paddingTop: "5%",
          }}
        >
          <div className="max-w-[700px]">
            <img
              className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800 lg:max-w-none"
              src={
                "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615838/website-images/group-photo-warwick.webp"
              }
              alt={`Image of the team - Innovation Studios `}
              style={{ maxWidth: "40vw" }}
            />
          </div>

          <div className="pb-10"></div>
          <div className="max-w-[700px]">
            <img
              className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800 lg:max-w-none"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1699615841/website-images/group-photo-birmingham.webp"
              alt={`Image of the team - Innovation Studios`}
              style={{ maxWidth: "40vw" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderT;
