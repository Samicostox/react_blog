"use client";

// Adjust the import paths as necessary for your project structure.

import { cn } from "../Beam/cn.ts";
import { AnimatedBeam } from "../Beam/animated-beam.tsx";
import React, { forwardRef, useRef } from "react";
import { FaUser, FaRobot } from 'react-icons/fa';



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
            <Circle ref={div1Ref}> <FaUser className="text-black h-10 w-10" /></Circle>
            <Circle ref={div5Ref}><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708212076/1636px-Oxford-University-Circlet.svg_xyrarz.png" alt="Custom Icon" className="h-14 w-12" /></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}> <img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708213245/Shield_of_Imperial_College_London.svg_yjpcpy.png" alt="Custom Icon" className="h-14 w-12" /></Circle>
            <Circle ref={div4Ref} className="h-32 w-32"><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708195363/Logo_Sam_4_vsv5ue.png" alt="Custom Icon" className="h-full w-full" /></Circle>
            <Circle ref={div6Ref}><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708212076/1636px-Oxford-University-Circlet.svg_xyrarz.png" alt="Custom Icon" className="h-14 w-12" /></Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708212076/1636px-Oxford-University-Circlet.svg_xyrarz.png" alt="Custom Icon" className="h-14 w-12" /></Circle>
            <Circle ref={div7Ref}><img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708213245/Shield_of_Imperial_College_London.svg_yjpcpy.png" alt="Custom Icon" className="h-14 w-12" /></Circle>
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
        reverse
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
    
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={150}
        reverse
        endYOffset={10}
      />
    </div>
  );
}
