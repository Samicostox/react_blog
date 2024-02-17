import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { MovingBorderDemo } from './Button/movingborderbutton';
import { PhoneIcon } from "@heroicons/react/24/outline";

// Assuming you have a component to handle images in React similar to `next/image`
// If not, you can use the standard <img> tag for images.
// For routing, if you're not using a specific library like React Router, links can be handled with <a> tags.

export const HeroParallax = ({
  products,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
   
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 ">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white text-center text-tyle-200  font-alliance">
        Past Projects <br /> from {' '}
        <span className="relative whitespace-nowrap text-teal-800 font-alliance">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-teal-800 font-alliance">Innovation Studios</span>
        </span>{''}
      </h1>
      
      <div className="justify-center items-center">
      <p className="max-w-6xl md:text-xl mt-8 dark:text-neutral-200 text-center font-alliance">
        We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.
      </p>
      </div>
    </div>
  );
};


  

export const ProductCard = ({
  product,
  translate,
}) => {
  // Destructuring to extract the gradient property from the product object
  const {
    title,
    link,
    thumbnail,
    buttonText,
    iconUrl,
    gradient = 'linear-gradient(110deg,#004d4d,45%,#008080,55%,#004d4d)' // Default gradient
  } = product;

  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={title}
      className="group product h-96 w-[30rem] relative flex-shrink-0 cursor-pointer"
    >
      <a href={link} className="block hover:shadow-2xl">
        <img
          src={thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-80 bg-teal-900 pointer-events-none"></div>
      <h2 className="absolute bottom-16 left-4 opacity-0 group-hover:opacity-100 text-white">
        {title}
      </h2>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100">
        <button className={`font-alliance inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-teal-700 bg-[${gradient}] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-50 opacity-100`}>
          {buttonText}
          <img src={iconUrl} className="w-5 h-5 ml-2" alt="Icon"/>
        </button>
      </div>
    </motion.div>
  );
};

