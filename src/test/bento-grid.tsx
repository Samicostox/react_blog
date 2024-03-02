import { cn } from "./cn.ts";
import React from "react";
import { FollowerPointerCard } from "./follwoing-pointer.tsx";
import { motion } from 'framer-motion';
import { BorderBeam } from "../new_website/Services/BorderBeam/border-beam.tsx";
import { useNavigate } from "react-router-dom";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", // Added px-4 sm:px-6 lg:px-8 for responsive padding
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClickPath,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClickPath?: string;
}) => {
  const navigate = useNavigate(); // Hook to navigate

  // Function to handle click, navigating to the specified path
  const handleClick = () => {
    if (onClickPath) {
      navigate(onClickPath);
    }
  };
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-gray-200 dark:border-gray-700 justify-between flex flex-col space-y-4 hover:border-transparent",
        className
      )}
      onClick={handleClick}
    >
      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-xl ">
        <BorderBeam
          size={100}
          duration={10}
          borderWidth={3}
          anchor={90}
          colorFrom="#008080"
          colorTo="#4dd0e1"
          delay={0}
        />
      </div>

      {header}
      <div className="transition duration-200 text-left z-10 relative group-hover:translate-x-2">
        {icon}
        <div className="font-bold text-slate-900 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);