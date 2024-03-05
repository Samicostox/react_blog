// Import React and necessary components
import React from 'react';

import Navbarv2 from '../../navbarv2';


import Contactcl from '../Contact/contactinsh.js';
import Footer from '../../website/footer.js';

// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file


// Define the new page component
const Contactpage = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div className='overflow-x-hidden'>
      

      
        <Navbarv2></Navbarv2>
        <Contactcl></Contactcl>
        <Footer></Footer>
        
    </div>
  );
};

export default Contactpage;


