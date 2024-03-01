// Import React and necessary components
import React from 'react';
// Import the HeroParallaxDemo component
// Make sure the path matches the location of your HeroParallaxDemo component file

import { HeroParallax } from "./hero-parallax.tsx";
import Navbarv2 from '../../navbarv2.js';
import Integrations from './Integrations/Integrations.jsx';
import Cta from './CTA.js';
import Footer from '../../website/footer.js';




// Define the new page component
const PastProjects2 = () => {
  // Sample products data to pass to HeroParallaxDemo
  // Replace or modify this data as needed
  

  return (
    <div className='overflow-x-hidden'>
        <Navbarv2></Navbarv2>
        
      {/* Call the HeroParallaxDemo component and pass the products data */}
      <HeroParallax products={products} />
      <Integrations></Integrations>

      <Cta></Cta>
      

      

      <Footer></Footer>
      
      

      
      
    </div>
  );
};

export default PastProjects2;


export const products = [
    {
      title: "SafeQueen",
      link: "https://www.safequeen.co.uk/",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708684564/SafeQueen_Paralax_u2x4xa.png",
      
        
        
        
    },
    {
      title: "Qodly",
      link: "https://qodly.com/",
      buttonText: 'R&D',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708684982/471shots_so_atgwqg.png",
    },
    {
      title: "Orion",
      link: "https://salient-fe5631c9500d.herokuapp.com/",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685217/776shots_so_fwalss.png",
    },
  
    {
      title: "Manta",
      link: "https://editorially.org",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685560/888shots_so_ls71sw.png",
    },
    {
      title: "SenNoods",
      link: "https://editrix.ai",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685715/153shots_so_juwzg8.png",
    },
    {
      title: "Vanguard",
      link: "https://app.pixelperfect.quest",
      buttonText: 'R&D',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708686314/893shots_so_enoglf.png",
    },
  
    {
      title: "WeebExpress",
      link: "https://algochurn.com",
      buttonText: 'Data Engineering',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708686780/168shots_so_fktyo4.png",
    },
    {
      title: "Nuzones",
      link: "https://ui.aceternity.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708687128/245shots_so_iwbj53.png",
    },
    {
      title: "Zmartly",
      link: "https://tailwindmasterkit.com",
      buttonText: 'Data Science',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708687340/246shots_so_ezwey1.png",
    },
    {
      title: "Qodly",
      link: "https://qodly.com/",
      buttonText: 'R&D',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708684982/471shots_so_atgwqg.png",
    },
    {
      title: "Orion",
      link: "https://salient-fe5631c9500d.herokuapp.com/",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685217/776shots_so_fwalss.png",
    },
  
    {
      title: "Manta",
      link: "https://editorially.org",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685560/888shots_so_ls71sw.png",
    },
    {
      title: "SenNoods",
      link: "https://editrix.ai",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708685715/153shots_so_juwzg8.png",
    },
    {
      title: "Vanguard",
      link: "https://app.pixelperfect.quest",
      buttonText: 'R&D',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708686314/893shots_so_enoglf.png",
    },
  
    {
      title: "WeebExpress",
      link: "https://algochurn.com",
      buttonText: 'Data Engineering',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708686780/168shots_so_fktyo4.png",
    },
  ];
  