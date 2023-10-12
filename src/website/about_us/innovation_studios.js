import React from "react";

const Card = ({ imgSrc, title, description, url }) => (
  <div className="m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 text-left">
    <a href={url}>
      <img className="rounded-t-lg" src={imgSrc} alt="" />
    </a>
    <div className="p-5">
      <a href={url}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <a
        href={url}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default function InnovationStudios() {
  const imgSrcBham =
    "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697039921/birmingham_ngicng.jpg";

  const titleBham = "Birmingham Innovation Studio";
  const urlBham = "https://www.birminghaminnovationstudio.com/";

  const description =
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.";

  const imgSrcWar =
    "https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697039865/warwick_hvxrqw.jpg";
  const titleWar = "Warwick Innovation Studio";
  const urlWar = "https://www.warwickinnovationstudio.com/";

  return (
    <div className="flex flex-col items-center justify-center min-h-1000 p-4 space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Our Innovation Studios
      </h1>
      <div className="flex space-x-4">
        <Card
          imgSrc={imgSrcBham}
          title={titleBham}
          description={description}
          url={urlBham}
        />
        <Card
          imgSrc={imgSrcWar}
          title={titleWar}
          description={description}
          url={urlWar}
        />
      </div>
    </div>
  );
}
