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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
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
      <p className="text-6xl font-black uppercase text-white">{text}</p>
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
