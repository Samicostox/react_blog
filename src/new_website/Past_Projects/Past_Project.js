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
    <div>
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
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
      
        
        
        
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
  
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      buttonText: 'Web Development',
      iconUrl: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1708188866/reshot-icon-computer-Q54WFMUSVT_xmqkly.svg',
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  