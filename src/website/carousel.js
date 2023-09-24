import React, { useState, useEffect,useRef  } from "react";
import Particles from "react-tsparticles"; 
import { loadFull } from "tsparticles"; 

const ChevronRightIcon = () => <span>→</span>;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [mouseDownX, setMouseDownX] = useState(null);
  const [timerId, setTimerId] = useState(null);
 


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 6000);
  
    setTimerId(timer); // Save the timer's ID
  
    return () => clearInterval(timer); // Clear the timer
  }, []);

  const resetTimer = () => {
    clearInterval(timerId);
    const newTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
    }, 6000);
    setTimerId(newTimer);
  };
  
  
  


  const slides = [
    {
      title: "Mobile Development",
      text: "Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.",
      hiring: true,
      buttonText: "Get a Quote",
      svgSource: "https://tailwindui.com/img/component-images/mobile-app-screenshot.png",
      href: '/#service-mobile'
    },
    {
      title: "Web Development",
      text: "Ut labore sit non cupidatat cillum ut excepteur duis commodo. Consequat aliqua nostrud et nostrud veniam ad labore consectetur.",
      hiring: true,
      buttonText: "Get a Quote",
      svgSource: "https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg",
      href: '/#service-mobile'
    },
    {
      title: "Data Engineering",
      text: "Fugiat deserunt sunt dolore reprehenderit irure esse eu commodo velit duis.",
      hiring: true,
      buttonText: "Get a Quote",
      svgSource: "https://tailwindui.com/img/component-images/mobile-app-screenshot.png",
      href: '/#service-mobile'
    },
    {
       title: "Business Dev",
       text: "Fugiat deserunt sunt dolore reprehenderit irure esse eu commodo velit duis.",
       hiring: true,
       buttonText: "Get a Quote",
       svgSource: "https://tailwindui.com/img/component-images/mobile-app-screenshot.png",
       href: '/#service-mobile'
    },
      {
        title: "Benchmarking",
        text: "Fugiat deserunt sunt dolore reprehenderit irure esse eu commodo velit duis.",
        hiring: true,
        buttonText: "Get a Quote",
        svgSource: "https://tailwindui.com/img/component-images/mobile-app-screenshot.png",
        href: '/#service-mobile'
      },
      {
        title: "Strategy",
        text: "Fugiat deserunt sunt dolore reprehenderit irure esse eu commodo velit duis.",
        hiring: true,
        buttonText: "Get a Quote",
        svgSource: "https://tailwindui.com/img/component-images/mobile-app-screenshot.png",
        href: '/#service-mobile'
      }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 6);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 6) % 6);
  };

  const handleMouseDown = (e) => {
    setMouseDownX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (mouseDownX === null) return;
    
    const deltaX = e.clientX - mouseDownX;
  
    // Change slide if the mouse movement is significant enough
    if (deltaX < -50) nextSlide();
    else if (deltaX > 50) prevSlide();
  
    setMouseDownX(null);
    resetTimer();
  };

  const handleTouchStart = (e) => {
    setMouseDownX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (mouseDownX === null) return;
    
    const deltaX = e.changedTouches[0].clientX - mouseDownX;
  
    // Change slide if the touch movement is significant enough
    if (deltaX < -50) nextSlide();
    else if (deltaX > 50) prevSlide();
  
    setMouseDownX(null);
    resetTimer();
  };

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };


  return (
    
    <div className="relative overflow-hidden" >
      {/*
     <Particles
  init={particlesInit}
  id="tsparticles"
  className="absolute inset-0 z-10"
  options={{
    background: {
      color: "white",
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#008000", // Darker green color
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 5,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#008000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2, // Adjust the speed as needed
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
        },
      },
    },
    retina_detect: true,
  }}
/>

*/}




      <div 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart} // If you decide to add touch events
        onTouchEnd={handleTouchEnd} // If you decide to add touch events
        className="flex transition-all ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
    {slides.map((slide, index) => (
      <div key={index} className="relative isolate flex-none w-full pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                {slide.hiring && (
                  <div className="flex">
                    <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <span className="font-semibold text-green-600">We’re hiring</span>
                      <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                      <a href="#" className="flex items-center gap-x-1">
                        <span className="absolute inset-0" aria-hidden="true" />
                        See open positions
                        <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
                <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left">
                  {slide.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-black-600 text-left">{slide.text}</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={slide.href}
                    className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            
              <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  fill="#4B5563"
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                />
                <path
                  fill="#343E4E"
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                />
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img src={slide.svgSource} alt="" />
                </foreignObject>
              </svg>

              
            
              </div>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
  );
};

export default Carousel;
