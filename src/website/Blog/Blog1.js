import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Navbarv2 from '../../navbarv2'
import Footer from '../footer'
import CTAB from './CTA_blog'
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga4';
import React, { useState, useEffect } from "react";

export default function Blog1() {
    useEffect(() => {

        ReactGA.send({
          hitType: "pageview", 
          page: window.location.pathname + window.location.search
        });
        
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
         <Helmet>
        <title>Understanding Software Development for Beginners</title>
        <meta
          name="description"
          content="Innovation Studios, Introduction to Software Development."
        />
      </Helmet>
    <Navbarv2></Navbarv2>
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <p className="text-base leading-7 text-green-700 text-left font-alliance font-bold">Introduction</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance font-bold">Everything you need to know about software development</h1>
       
        <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700754933/sami8694_Isometric_software_engineering_illustrationcentered_on_8596c65a-bc9c-4caf-89f8-e17152301d1c_2_hzd5e8.png" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />

<h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left font-alliance font-bold mt-20">What is Software Development?</h2>
  
        
        <div className="mt-4 max-w-4xl text-left">
          <p>
          Software development is the process of creating, designing, deploying, and supporting software. It's like building a digital machine where each part has to work perfectly with others. Imagine software as a recipe. Just like a chef combines different ingredients to create a dish, developers mix various programming languages and tools to build software. 
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left font-alliance font-bold mt-20">Front-End Development</h2>
          <p className="mt-8">
          Front-end development is the art of creating the user interface and user experience of software, particularly websites and applications. It's close to crafting the visible parts of a car – everything the driver and passengers can see and interact with. Front-end developers use a combination of programming languages like HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JavaScript. HTML provides the basic structure of sites, akin to the skeleton of a body. CSS comes into play to format the visual layout, acting like the body's skin and clothes. JavaScript, then, is like the brain, making everything interactive and functional.
          </p>
          <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700757979/1_l4xICbIIYlz1OTymWCoUTw_2_ebqpnn.jpg" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />

<p className="mt-8">
Moreover, front-end developers often utilise frameworks and libraries like React, Angular, or Vue.js to streamline and enhance their development process. These tools provide ready-made components and functions, allowing developers to create more complex, dynamic, and responsive user interfaces. With the increasing importance of mobile devices, front-end developers also focus on making websites responsive, meaning they adapt smoothly to different screen sizes.
          </p>

          <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700758062/Popularity-Angular-vs-React-vs-Vuejs_1_t7i8g9.jpg" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />

<h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left font-alliance font-bold mt-20">Back-End Development</h2>
          <p className="mt-6">
          Back-end development, on the other hand, is the unseen but critical component of software development. It's comparable to the engine room of a ship, where all the functional machinery lies. Back-end developers use server-side languages like Python, Ruby, Java, and Node.js to build the logic and functionality of applications. This includes creating, reading, updating, and deleting data (CRUD operations), ensuring that the front-end has data to display and interact with.
          </p>
          
          <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700758218/638779dba7e1afcda90d40da_backend-dev_2_v4gbpy.png" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />
         
          <p className="mt-10">
          This area also involves working with server architectures, APIs (Application Programming Interfaces), and handling the logic for user authentication and authorisation. APIs serve as bridges allowing different software systems to communicate with each other. Back-end developers ensure that data is served to the user in a secure, efficient manner. They are also responsible for optimising the performance of the application and maintaining the core functional logic.
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl text-left">
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left font-alliance font-bold mt-20">Databases</h2>
          <p className="mt-6">
          Databases are integral to software development, acting as the storage centers for all data needed by applications. They come in various forms, such as relational databases (like MySQL or PostgreSQL) and NoSQL databases (like MongoDB). Relational databases organise data into tables and rows, using SQL (Structured Query Language) for managing and querying data. SQL is a powerful tool for data manipulation, allowing for complex queries and data transformations.
          </p>
          <p className="mt-8">
          NoSQL databases, however, offer more flexibility and are better suited for handling large volumes of unstructured data. They are often used in big data and real-time web applications. Regardless of the type, databases are designed to be highly efficient, reliable, and secure, ensuring that data is available whenever and wherever it's needed.
          </p>
          <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700758330/maxresdefault_5_teshng.jpg" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />
    <p className="mt-6">
    In modern development, knowledge of database management, query optimisation, and understanding the nuances of data storage is essential for back-end developers. This involves not only storing data but also ensuring its integrity, security, and accessibility. With the growing importance of data in decision-making, databases have become more crucial than ever in the software development process.
          </p>


          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left font-alliance font-bold mt-20">Deployment and Servers</h2>
          <p className="mt-6">
          Deployment is like opening a new restaurant. It's about making your software available for users. This involves putting the code on servers, which are powerful computers that host your software and make it accessible on the internet. Think of servers as the physical building of the restaurant where everything happens.
          </p>
          <img 
      src="https://res.cloudinary.com/dl2adjye7/image/upload/v1700758481/What_Is_Web_Application_Architecture__2_dtrcq2.webp" 
      alt="Descriptive Text" 
      className="mt-12 w-full rounded-lg " 
      style={{ borderRadius: '15px' }}
    />

          <p className="mt-6">
          In summary, software development is a complex process that involves various specialised roles. Front-end and back-end development work together to create the user experience and functionality, while databases store necessary information. Deployment and servers are what make the software available to users worldwide. This field is dynamic and ever-evolving, making it an exciting area to explore, even for non-techies!
          </p>
        </div>
      </div>
      <CTAB></CTAB>
    </div>
    <Footer></Footer>
    </div>
  )
}
