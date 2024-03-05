// Import React and necessary components
import React from 'react';

import Navbarv2 from '../../navbarv2';

import Footer from '../../website/footer';
import { Helmet } from 'react-helmet';


import Hero_Team from './Components/Hero_Team.js';
import CustomersList from './Highlights/customers-list.js';
import WorkwithusTeam from './Components/workwithus.js';
import Services from '../../website/about_us/services.js';
import Benefits from './Components/benefits.js';
import { MeteorsDemo } from './Meteors/meteorsdemo.js';
import { BackgroundBeamsDemo } from './Components/bgbeam.js';
import Cta from './Components/CTA.js';
import Integrations from '../Past_Projects/Integrations/Integrations.jsx';
import { PulseBeams } from './Components/PulseBeam.tsx';
import GlassNavigation from '../Navbar/navbarv3.js';
import ContactSection from '../Contact/contact3.js';
import Contactcl from '../Contact/contactinsh.js';

// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file


// Define the new page component
const Team2 = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>#1 UK Student Pool To Work On Your Projects</title>
        <meta
          name="description"
          content="Empowering innovation with software development, data engineering, and R&D at Innovation Studios. Transform your ideas into reality."
        />
      </Helmet>

      
        <Navbarv2></Navbarv2>
        <div className='sm:mt-0 md:mt-0 '>
        <Hero_Team></Hero_Team>
        </div>
        <div className='sm:mt-0 md:mt-96 lg:mt-20 flex justify-center items-center'>
        <PulseBeams></PulseBeams>

        </div>
        
        <div className='mt-6 md:mt-20'></div>

        <div className="bg-slate-900">

        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20'>

        <div className="max-w-4xl mx-auto text-center pb-12">
      <h2 className="text-4xl md:text-6xl text-white font-alliance font-bold mt-20">
        Apply if you have experience in one of those
        <span className="relative whitespace-nowrap text-teal-500 font-alliance">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-teal-600 font-alliance">Technologies</span>
        </span> 
      </h2>
    </div>

        <CustomersList></CustomersList>
        </div>

        </div>

        <Benefits></Benefits>

        <div className="h-auto w-full bg-zinc-50">

        <img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1708272146/Untitled_300_x_1080_px_nbtb5k.png" alt="Downward Arrow" className="mx-auto h-96 w-100 bg-zinc-50" />

        </div>

        <WorkwithusTeam></WorkwithusTeam>



        <Cta></Cta>
 




  

        

        <Footer></Footer>

    </div>
  );
};

export default Team2;


