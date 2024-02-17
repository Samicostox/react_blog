import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjust the import paths based on where your images are stored
import Icon01 from './images/integration-icon-01.svg';
import Icon02 from './images/integration-icon-02.svg';
import Icon03 from './images/integration-icon-03.svg';
import Icon04 from './images/integration-icon-04.svg';
import Icon05 from './images/integration-icon-05.svg';
import Icon06 from './images/integration-icon-06.svg';
import Animated from './integration_logo';
import Cta from '../CTA';


export default function Integrations() {
    useEffect(() => {
        AOS.init({
          // settings here
          duration: 1000, // Global animation duration
        });
      }, []);
  return (
    <section className="relative bg-slate-900 mt-20">
      {/* Bottom vertical line */}
      <div className="hidden md:block absolute w-0.5 h-8 bottom-0 bg-slate-800 left-1/2 -translate-x-1/2" aria-hidden="true"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6">
  <div className="py-12 md:py-20">
    {/* Section header */}
    <div className="max-w-4xl mx-auto text-center pb-12">
      <h2 className="text-4xl md:text-6xl text-white font-alliance font-bold mt-20">
        A Taste of the technology 
        <span className="relative whitespace-nowrap text-teal-500 font-alliance">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-teal-600 font-alliance">Our Students</span>
        </span> can cover
      </h2>
    </div>
          {/* Logo animation */}
          <div className="relative flex flex-col items-center p-16">
            {/* Blurred dots */}
            <svg className="absolute top-1/2 -translate-y-1/2" width="557" height="93" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="hlogo-blurreddots-a">
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="blurreddots-b">
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-c">
                  <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
                </filter>
                <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-d">
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-e">
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="blurreddots-f">
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
                <filter x="-100%" y="-100%" width="300%" height="300%" filterUnits="objectBoundingBox" id="blurreddots-g">
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-h">
                  <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
                </filter>
                <filter x="-150%" y="-150%" width="400%" height="400%" filterUnits="objectBoundingBox" id="blurreddots-i">
                  <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
                </filter>
                <filter x="-75%" y="-75%" width="250%" height="250%" filterUnits="objectBoundingBox" id="blurreddots-j">
                  <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
                </filter>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g className="fill-teal-600" transform="translate(437 8)">
                  <circle fillOpacity=".64" filter="url(#blurreddots-a)" cx="6" cy="66" r="6" />
                  <circle fillOpacity=".32" filter="url(#blurreddots-b)" cx="90" cy="6" r="6" />
                  <circle fillOpacity=".64" filter="url(#blurreddots-c)" cx="90" cy="66" r="6" />
                  <circle fillOpacity=".32" filter="url(#blurreddots-d)" cx="6" cy="36" r="4" />
                  <circle fillOpacity=".32" filter="url(#blurreddots-e)" cx="60" cy="36" r="4" />
                  <circle fillOpacity=".64" cx="34" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="34" cy="50" r="2" />
                  <circle fillOpacity=".64" cx="118" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="118" cy="50" r="2" />
                </g>
                <g className="fill-teal-600" transform="matrix(-1 0 0 1 120 8)">
                  <circle fillOpacity=".64" filter="url(#blurreddots-f)" cx="6" cy="66" r="6" />
                  <circle fillOpacity=".32" filter="url(#blurreddots-g)" cx="90" cy="6" r="6" />
                  <circle fillOpacity=".64" filter="url(#blurreddots-h)" cx="90" cy="66" r="6" />
                  <circle fillOpacity=".32" filter="url(#blurreddots-i)" cx="6" cy="36" r="4" />
                  <circle fillOpacity=".64" filter="url(#blurreddots-j)" cx="60" cy="36" r="4" />
                  <circle fillOpacity=".32" cx="34" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="34" cy="50" r="2" />
                  <circle fillOpacity=".64" cx="118" cy="22" r="2" />
                  <circle fillOpacity=".32" cx="118" cy="50" r="2" />
                </g>
              </g>
            </svg>
            <Animated></Animated>
          </div>
          {/* Integration boxes */}
          <div className="relative max-w-xs sm:max-w-md mx-auto md:max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-2 md:mt-2">
            {/* Top vertical line */}
            <div className="hidden md:block absolute w-0.5 h-8 -top-16 -mt-2 bg-slate-800 left-1/2 -translate-x-1/2" aria-hidden="true" />
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-1/2 h-0.5 bg-slate-800 right-0" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon01} width={36} height={46} alt="Icon 01" />
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="100">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon02} width={46} height={46} alt="Icon 02" />
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="200">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon03} width={53} height={45} alt="Icon 03" />
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="300">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon04} width={48} height={46} alt="Icon 04" />
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="400">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-full h-0.5 bg-slate-800" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon05} width={49} height={48} alt="Icon 05" />
              </div>
            </div>
            <div className="relative flex justify-center items-center bg-slate-800 aspect-square p-2" data-aos="fade-up" data-aos-delay="500">
              {/* Inner lines */}
              <div className="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2" aria-hidden="true">
                <div className="absolute w-0.5 h-full bg-slate-800 left-1/2 -translate-x-1/2" />
                <div className="absolute w-1/2 h-0.5 bg-slate-800 left-0" />
              </div>
              {/* Circle */}
              <div className="bg-gradient-to-t from-slate-800 to-slate-900 w-20 h-20 rounded-full flex justify-center items-center">
                {/* Icon */}
                <img  src={Icon06} width={48} height={44} alt="Icon 06" />
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </section>
    
  )
}