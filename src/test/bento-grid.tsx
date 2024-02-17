import { cn } from "./cn.ts";
import React from "react";
import { FollowerPointerCard } from "./follwoing-pointer.tsx";

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
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (

  
    
      
    <div

    
    
    
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
    >


      {header}

      
      
      <div className="group-hover/bento:translate-x-2 transition duration-200 text-left">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-left">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 text-left">
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
