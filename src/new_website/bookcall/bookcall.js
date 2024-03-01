// Import React and necessary components
import React from 'react';
import CalendlyEmbed from './calendly';
import Navbarv2 from '../../navbarv2';


// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file


// Define the new page component
const BookCall = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div className='overflow-x-hidden'>
        <Navbarv2></Navbarv2>

        <CalendlyEmbed></CalendlyEmbed>

    </div>
  );
};

export default BookCall;


