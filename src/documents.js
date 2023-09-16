// App.js

// data.js










// CardPage.js

import React, { useState, useEffect } from 'react';


export default function Documents() {
    const cards = [
        {
          id: 1,
          title: 'Card 1',
          description: 'This is Card 1 description.',
          imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
        },
        {
          id: 2,
          title: 'Card 2',
          description: 'This is Card 2 description.',
          imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
        },
        {
            id: 3,
            title: 'Card 2',
            description: 'This is Card 2 description.',
            imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
          },
          {
            id: 4,
            title: 'Card 2',
            description: 'This is Card 2 description.',
            imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
          },
          {
            id: 5,
            title: 'Card 2',
            description: 'This is Card 2 description.',
            imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
          },
          {
            id: 6,
            title: 'Card 2',
            description: 'This is Card 2 description.',
            imgSrc: 'https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png'
          },

          
        // Add more cards here...
      ];

     
  return (
    <div className="mx-auto" style={{ maxWidth: '1300px' }}>
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4x2 text-center mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your PDF Files</h2>
          <p className="mt-2 text-lg leading-8 text-gray-700">
            Click on any image to download the corresponding PDF.
          </p>
        </div>
        {cards.length === 0 ? (
          <div className="mt-20">  
            {/* Empty State component can go here */}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3 xl:gap-x-6 mt-12 sm:mt-16">
            {cards.map((card) => (
              <div key={card.id} className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img className="w-full  rounded-t-md" src={card.imgSrc} alt="Image Description" />
                <div className="p-2 md:p-3">
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-800 dark:text-gray-400">
                    {card.description}
                  </p>
                  <a className="mt-2 py-1 px-2 inline-flex justify-center items-center gap-1 rounded-md border border-transparent font-medium bg-green-800 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 transition-all text-xs dark:focus:ring-offset-gray-800" href="#">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}