import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjusted values

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-20">
        <motion.div style={{ x }} className="flex gap-4 snap-x snap-mandatory">
          <TextCard text="Your First Text Here" />
          <ImageCard text="" />
          <TextCard text="Your Second Text Here" />
        </motion.div>
      </div>
    </section>
  );
};

const TextCard = ({ text }) => {
  return (
    <div className="relative h-[450px] w-[50vw] flex items-center justify-center bg-neutral-200">
      <div className="max-w-lg">
        <div className="mt-24 sm:mt-32 lg:mt-16">
          <a href="#" className="inline-flex space-x-6">
            <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
              What's new
            </span>
          </a>
        </div>
        <h1 className="mt-10 text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
          The right talents for your projects
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
          Based in United Kingdom's Universities, Innovation Studios is a
          student-led consulting firm offering a blend of technical and business
          services at competitive rates. Our mission is to equip university
          students with valuable, paid work experience. At the same time, we aim
          to give you access to the brightest emerging talents across various
          disciplines.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Documentation
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            View on GitHub <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ text }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <img
        src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696091538/mfejpnzaoaiiiv9sygg8.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </div>
  );
};

export default Example;
