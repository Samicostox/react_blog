"use client";

// Removed the Icons import since you don't have it
import { cn } from "../Beam/cn.ts";
import React, { forwardRef, useRef } from "react";

// Example of using an icon from react-icons, if you choose to use it
import { FaUser, FaRobot } from 'react-icons/fa';
import { AnimatedBeam } from "../Beam/animated-beam.tsx";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-2xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
            {/* Replace Icons.user with a placeholder or an icon from react-icons */}
            <FaUser className="text-black" />
          </Circle>
          <Circle ref={div2Ref}>
            {/* Replace Icons.openai with a placeholder or an icon from react-icons */}
            <FaRobot className="h-6 w-6" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}
