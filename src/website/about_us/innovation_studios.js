import React from "react";
import { Button } from "@material-tailwind/react";

function handleReadMoreClick(link) {
  window.location.href = link;
  window.scrollTo(0, 0);
}

const Card = ({ imgSrc, title, description, url }) => (
  <div className="m-4 md:m-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 text-left transform transition-transform duration-500 hover:scale-105">
    <a href={url}>
      <img
        className="rounded-t-lg"
        src={imgSrc}
        alt="Innovation Studios Illustration"
      />
    </a>
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-alliance font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <p className="mb-3 font-normal font-alliance text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <Button onClick={() => handleReadMoreClick(url)}>
        Read More{" "}
        <span className="ml-1 text-white" aria-hidden="true">
          →
        </span>
      </Button>
    </div>
  </div>
);

export default function InnovationStudios() {
  const imgSrcBham =
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615841/website-images/group-photo-birmingham.webp";

  const titleBham = "Birmingham";

  const descriptionBham =
    "Our Birmingham Innovation Studio, established a year ago, is a nexus for student-driven, groundbreaking solutions.";

  const descriptionWar =
    "Celebrate with us the recent launch of our dynamic Warwick hub, furthering our vision of nurturing young innovators.";

  const imgSrcWar =
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615838/website-images/group-photo-warwick.webp";
  const titleWar = "Warwick";

  return (
    <div className="flex flex-col items-center justify-center min-h-1000 p-4 space-y-4">
      <h1 className="text-4xl font-bold font-alliance text-gray-900 dark:text-white">
        Our Innovation Studios
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 text-center font-alliance ">
        We have teams of students at the Universities of Birmingham and Warwick.
      </p>
      <div className="flex space-x-4 ">
        <ul
          role="list"
          className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2"
        >
          <Card
            imgSrc={imgSrcBham}
            title={titleBham}
            description={descriptionBham}
          />
          <Card
            imgSrc={imgSrcWar}
            title={titleWar}
            description={descriptionWar}
          />
        </ul>
      </div>
    </div>
  );
}
