"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


import { motion } from "framer-motion";


const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};
const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};
export const PulseBeams = () => {
  useEffect(() => {
    AOS.init({
      // settings here
      duration: 1000, // Global animation duration
    });
  }, []);
  return (
    <div className="flex h-[20rem] w-[1300px] relative items-center justify-center antialiased bg-transparent overflow-hidden "data-aos="fade-up">
      <button className="bg-slate-800 hover:bg-teal-900 w-[160px] z-40 h-[60px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6 text-white inline-block transition-colors duration-300">
        <span className="absolute inset-0 overflow-hidden rounded-mg ">
          <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex justify-center w-[160px] text-center space-x-2 h-[60px] items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10  hover:bg-teal-900 font-alliance">
          <span className="sm:text-2xl text-lg inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-gray-200 to-neutral-400 font-alliance">
            Apply Now
          </span>
        </div>
      </button>
      {/* Core SVGs component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      width="600"
      height="400"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0 sm:w-400 md:w-600"
    >
      <path
        d="M310 220.5H21.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--teal-800)"
      />
      <path
        d="M530 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--teal-800)"
      />
      <path
     
        d="M425.5 262V328C425.5 333.523 421.023 338 415.5 338H152C146.477 338 142 342.477 142 348V421.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M493 262V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="var(--teal-800)"
      />
     
       <path
         d="M429 220V12"
        stroke="var(--teal-800)"
      />
      

      {/* Gradient Beams */}

      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
        strokeWidth="2" // Increased stroke-width
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="url(#grad2)"
        strokeWidth="2" // Increased stroke-width
      />
      <path
        d="M425.5 262V328C425.5 333.523 421.023 338 415.5 338H152C146.477 338 142 342.477 142 348V421.5"
        stroke="url(#grad3)"
        strokeWidth="2" // Increased stroke-width
      />
      <path
        d="M493 262V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad4)"
        strokeWidth="2" // Increased stroke-width
      />
      
      <path
        d="M429 220V10"  // Adjust the start point (x=429, y=220) according to your layout and desired beam length
        stroke="url(#grad5)" // Using grad1 for this example, but you can define a new gradient if desired
        strokeWidth="2" // Adjust as needed for visibility
      />

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      
      <circle
        cx="428.5"
        cy="11"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600) md:var(--slate-600)"
        className="lg:hidden " 
      />
    </svg>
  );
};
const GradientColors = () => {
  return (
    <>
      <stop stopColor="#1BFFA8" stopOpacity="0"></stop>
      <stop stopColor="#008577"></stop>
      <stop offset="0.325" stopColor="#1BFFA8"></stop>
      <stop offset="1" stopColor="#008577" stopOpacity="0"></stop>
    </>
  );
};

