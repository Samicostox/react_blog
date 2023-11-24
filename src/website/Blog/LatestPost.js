import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react';

export default function LatestPost({ post }) {
  return (

    
    <div className="bg-white">
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(10%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <div className="bg-white animate-slideUp" style={{ animation: 'slideUp 0.5s ease-out forwards' }}>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                
              <div className="text-left">
                <a href={post.category.href} className="inline-flex space-x-6 text-left">
                  <span 
                    className="bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10 text-left"
                    style={{ borderRadius: '15px' }}
                  >
                    Latest Post
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>{post.date}</span>
                  </span>
                </a>
              </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-left font-alliance">
                {post.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                {post.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={post.category.href}
                    className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Read More <span className="text-white" aria-hidden="true">→</span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-green-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
    {/* Image added here */}
    <img 
      src={post.imageUrl} 
      alt={post.title} 
      className="w-screen rounded-tl-xl"
    />
  </div>
  <div
    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
    aria-hidden="true"
  />
</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
    </div>
  )
}
