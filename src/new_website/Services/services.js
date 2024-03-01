// Import React and necessary components
import React from 'react';
import Hero_Service from './components/hero';
import Navbarv2 from '../../navbarv2';
import { AnimatedBeamDemo } from './components/Beam';
import { MaxiBeam } from './components/MaxiBeam';
import Analytic from './components/analytics';
import ScrollingTestimonials from './components/Testimonials';
import { BentoGridDemo } from './components/bento2';
import WorkWithUs from './components/workwithus';
import { AnimatedTooltipPreview } from './components/Avatar';
import Integrations from '../Past_Projects/Integrations/Integrations';
import Cta from '../Past_Projects/CTA';
import Footer from '../../website/footer';
import ExampleShimmer from './components/shipperboard';
import { BorderBeam } from './BorderBeam/border-beam.tsx';
import { FollowingPointerDemo } from '../../test/pointer.js';
import Process from './components/process.js';
// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file



const stats = [
  { id: 1, name: "Students working with us", value: "30", plussign: true },
  { id: 2, name: "Projects Completed", value: "15", plussign: true },
  { id: 3, name: "Universities", value: "2", plussign: false },
  { id: 4, name: "Partners", value: "5", plussign: true },
];

// Define the new page component
const Services = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div className='overflow-x-hidden'>
        <Navbarv2></Navbarv2>
        <Hero_Service></Hero_Service>
        <div className='mt-0 md:mt-96'>
        <ScrollingTestimonials></ScrollingTestimonials>
        </div>

        <div className='mt-20'>

        <div className="mb-8 px-4">
        <h3 className="text-slate-900 text-5xl font-semibold text-center text-left font-alliance">
          Our {' '}
                <span className="relative inline-flex items-center justify-center text-slate-900 font-alliance font-bold">
                  <svg className="absolute -z-10" width="246" height="76" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M55.224 10.087c-13.986 3.38-25.552 7.614-33.97 12.438-4.171 2.412-7.508 4.953-9.953 7.58-2.395 2.628-3.807 5.332-4.21 8.058-.266 1.99.075 3.985 1.02 5.955.922 1.973 2.37 3.919 4.327 5.819 7.028 6.749 20.696 12.657 39.108 16.904 18.475 4.28 40.791 6.693 63.89 6.91 20.527.186 40.83-1.353 58.737-4.452 11.396-1.964 21.73-4.463 30.631-7.407 8.905-2.941 16.508-6.232 22.611-9.788 3.663-2.222 4.978-1.73 3.59.491-1.13 1.509-2.83 2.971-5.067 4.357-3.235 1.976-7.254 3.82-11.962 5.49-4.686 1.628-9.745 3.15-15.139 4.553a273.749 273.749 0 0 1-17.309 3.752 339.58 339.58 0 0 1-19.111 2.822c-3.367.35-6.676.738-10.087 1.025-3.412.286-6.868.546-10.339.75-13.955.815-28.266.87-42.283.165-13.996-.735-27.452-2.236-39.729-4.435-14.867-2.672-27.78-6.263-37.927-10.548-10.21-4.343-17.115-9.34-20.204-14.618C.15 43.028-.38 40.095.268 37.176c.295-1.462.868-2.917 1.713-4.357.883-1.432 2.027-2.847 3.427-4.239 2.819-2.783 6.622-5.463 11.342-7.99 4.626-2.528 10.101-4.9 16.335-7.074C48.423 8.116 68.15 4.072 90.24 1.802A371.99 371.99 0 0 1 115.924.135c54.806-1.437 105.87 8.691 124.34 24.662 1.911 1.728 3.392 3.498 4.431 5.295 1.352 2.388 1.655 4.82.901 7.234-.223 1.092-1.189 2.158-2.836 3.127-.493.309-1.076.603-1.742.88-.916.272-1.27-.27-1.344-1.462-.074-1.193 0-3.05-.429-5.409-.722-3.525-3.213-6.994-7.384-10.284-4.32-3.334-10.299-6.44-17.723-9.206-7.488-2.813-16.364-5.247-26.304-7.211-9.952-1.996-20.87-3.493-32.344-4.434-17.147-1.405-35.144-1.505-52.444-.292-8.673.62-17.094 1.537-25.108 2.732-7.997 1.207-15.556 2.672-22.552 4.37l-.162-.05Z"
                      fill="#2DD4BF"
                      fillRule="nonzero"
                    />
                  </svg>
                  Services
                </span>
        </h3>
        <p className="text-center text-sm mt-2 max-w-lg mx-auto font-alliance text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>

      <div className='mt-20'>
        
        <BentoGridDemo></BentoGridDemo>
        <img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708272146/Untitled_300_x_1080_px_nbtb5k.png" alt="Downward Arrow" className="mx-auto h-96 w-100" />

        
        <div className="mb-8 px-4">
        

        <h3 className="text-slate-900 text-5xl font-semibold text-center text-left font-alliance">
          
          How is it to {' '}
        <span className="relative whitespace-nowrap text-teal-800 font-alliance">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-teal-800 font-alliance"> Work Together</span>
        </span>
        </h3>
        <p className="text-center text-sm mt-4 max-w-lg mx-auto font-alliance text-slate-900">
          Explore our processes on how we collaborate with businesses around the uk and with universities to bring your ideas to life 
        </p>
      </div>

        <Process></Process>

      

        <Integrations></Integrations>
        

        <Cta></Cta>
        

        <Footer></Footer>
        

      

       
        

        </div>

        </div>
        


  
        
       

        
     
      

      
      
    </div>
  );
};

export default Services;


