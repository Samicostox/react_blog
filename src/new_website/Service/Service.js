// Import React and necessary components
import React from 'react';
import Hero from './Components/Hero';
import Navbarv2 from '../../navbarv2';
import Features02 from './Components/feature';
import Footer from '../../website/footer';
import { HoverEffect } from './Components/card-hover-effect';



// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file


// Define the new page component
const Service = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div>
        <Navbarv2></Navbarv2>
    
        <Hero></Hero>
        <div className='bg-slate-900'><Features02></Features02></div>

        
        <HoverEffect></HoverEffect>
       
        <Footer></Footer>
       
    
        
    </div>
  );
};

export default Service;


