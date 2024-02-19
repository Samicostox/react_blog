// Import React and necessary components
import React from 'react';

import Navbarv2 from '../../navbarv2';

import Footer from '../../website/footer';


import Hero_Team from './Components/Hero_Team.js';
// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file


// Define the new page component
const Team2 = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div>
        <Navbarv2></Navbarv2>
        <Hero_Team></Hero_Team>
        <div className='mt-0 md:mt-96'></div>

        <Footer></Footer>

    </div>
  );
};

export default Team2;


