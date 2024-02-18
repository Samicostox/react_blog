"use client";

// Adjust the import paths as necessary for your project structure.

import { cn } from "../Beam/cn.ts";
import { AnimatedBeam } from "../Beam/animated-beam.tsx";
import React, { forwardRef, useRef } from "react";
import { FaUser, FaRobot } from 'react-icons/fa';
import { AnimatedTooltipPreview } from "./Avatar.js";
import { AnimatedTooltip } from "../ToolTip/animated-tooltip.tsx";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Imperial College London",
    image:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1708254634/pilot_traveller_person_avatar-512_1_lk82hz.webp",
  },
  
];

const business = [
  {
    id: 1,
    name: "Ben Smith",
    designation: "Citadel",
    image:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1708256073/man5-512_humaer.webp",
  },
  
];

const business2 = [
  {
    id: 1,
    name: "Clara Morgan",
    designation: "CapGemini",
    image:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1708256209/26_avatar_people_business_businesswoman_woman_female_long_hair-512_ip5sm2.webp",
  },
  
];


const business3 = [
  {
    id: 1,
    name: "Amy Sulec",
    designation: "Vanguard",
    image:
      "https://res.cloudinary.com/dl2adjye7/image/upload/v1708256288/images_wsmev1.png",
  },
  
];





const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white p-4 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
});

export function MaxiBeam() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  // Added 'hidden md:flex' to make the component invisible on mobile and visible on medium screens and up
  return (
    <div
      className="hidden md:flex relative w-full max-w-[1200px] items-center justify-center overflow-hidden rounded-lg p-20"
      style={{ background: 'transparent', boxShadow: 'none' }}
      ref={containerRef}
    >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-12">
          {/* Adjusted the size of the icons and spacing between them */}
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}> <AnimatedTooltip items={people} /></Circle>
            <Circle ref={div5Ref}><AnimatedTooltip items={business} /></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}> <AnimatedTooltip items={people} /></Circle>
            <Circle ref={div4Ref} className="h-32 w-32"><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708195363/Logo_Sam_4_vsv5ue.png" alt="Custom Icon" className="h-full w-full" /></Circle>
            <Circle ref={div6Ref}><AnimatedTooltip items={business2} /></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}> <AnimatedTooltip items={people} /></Circle>
            <Circle ref={div7Ref}><AnimatedTooltip items={business3} /></Circle>
          </div>
        </div>

      {/* AnimatedBeam usage remains the same, assuming AnimatedBeam is already a JS component. */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-150}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={150}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-150}
        
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        
      />
    
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={150}
        
        endYOffset={10}
      />
    </div>
  );
}
