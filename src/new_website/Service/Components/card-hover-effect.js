import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Bookcall from "./button";

export const projects = [
  {
    title: "1. Discover",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708875917/2_b6f16x.png" 
  },
  {
    title: "2. Design",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708875918/3_vdgh0n.png" // Example image URL
  },
  {
    title: "3. Develop",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708875918/4_j0auq9.png" // Example image URL
  },
  {
    title: "4. Test",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708875918/5_aaytuw.png" // Example image URL
  },
  {
    title: "5. Launch",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708874316/Untitled_design_3_j5vvgd.png" // Example image URL
  },
  {
    title: "6. Scale",
    description: "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://algochurn.com",
    image: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708875918/6_ipnisn.png" // Example image URL
  },
  // Add more projects as needed
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (

      
    <div className='bg-gray-100 pb-20'>
    <div className="max-w-6xl mx-auto text-center pt-12 md:pt-20 px-2 ">
        <h2 className="text-4xl md:text-5xl bg-clip-text pb-4 font-alliance font-bold text-slate-900 ">Simple yet {' '}
    <span className="relative whitespace-nowrap text-teal-800 font-alliance">
      <svg
        aria-hidden="true"
        viewBox="0 0 418 42"
        className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-400"
        preserveAspectRatio="none"
      >
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
      </svg>
      <span className="relative text-teal-800 font-alliance">Effective</span>
    </span>{''} Process</h2>
        <p className="text-lg text-slate-900 font-alliance">There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
    
    <div className="max-w-5xl mx-auto px-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 py-10">
        {projects.map((project, idx) => (
          <div
            key={project.link} // Assuming link is unique for each project
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-teal-700/[0.8] block rounded-3xl"
                  layoutId="hoverBackground" // Note: 'layoutId' might not be needed unless you're using it for shared layout animations
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-2xl h-full w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-transparent group-hover:border-slate-700 relative z-40 pb-4">
              <div className="flex flex-col sm:flex-row items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">

                <div className="flex-shrink-0">
                  <img src={project.image} alt="Project Image" className="w-28 h-28 object-cover rounded-lg mt-2"/>
                </div>

                <div className="relative z-40 flex-grow">
                  <div className="md:pt-4 text-xl pr-2 sm:pl-0 pl-6 pt-0">
                    <h4 className="text-white font-bold tracking-wide sm:mt-4 text-left font-alliance ">
                      {project.title}
                    </h4>
                    <p className="mt-2 text-zinc-200 tracking-wide leading-relaxed text-sm text-left font-alliance">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        ))}
        
        
      </div>
      
      <div className="flex items-center justify-center gap-x-6 mt-6">
        
          <Bookcall></Bookcall>
        </div>
      
      
      
    </div>
    
    
    
    </div>
    

  );
};
