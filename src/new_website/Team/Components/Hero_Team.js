import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ButtonWrapper2 from '../../Services/buttons/filling.js'
import ButtonWrapper3 from '../../Services/buttons/fillinginvert.js'

import { MaxiBeam } from '../../Services/components/MaxiBeam'

import EncryptButton from './encrypt_button.js'
import { PulseBeams } from './PulseBeam.tsx'


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const people = [
    {
      id: 1,
      name: "Elliot Teissandier",
      designation: "University of Warwick",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1709212024/Untitled_design_9_h8p2cg.png",
    },
    {
      id: 2,
      name: "Mark Smith",
      designation: "University of Birmingham",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1709211942/yo_lowrzi.png",
    },
    {
      id: 3,
      name: "Donald J.",
      designation: "University of Oxford",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708688215/istockphoto-1212812078-170667a_vhogug.jpg",
    },
  
    {
      id: 4,
      name: "Amy M.",
      designation: "University of Cambridge",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1709212024/Untitled_design_9_h8p2cg.png",
    },
    {
      id: 5,
      name: "Ben S.",
      designation: "King's College London",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1709211942/yo_lowrzi.png",
    },
    {
      id: 6,
      name: "Jack K.",
      designation: "University College London",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1708688215/istockphoto-1212812078-170667a_vhogug.jpg",
    },
    {
      id: 7,
      name: "Innovation Studios",
      designation: "#1 UK Student Pool ",
      image:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1709211456/Untitled_design_8_ltp8rj.png",
    },
    
  ];

export default function Hero_Team() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      

      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#008080] to-[#008080] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="py-12 sm:py-12 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl font-alliance">
              {' '}
        <span className="relative whitespace-nowrap text-teal-800 font-alliance">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-teal-500"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-teal-800 font-alliance ">Empowering </span>
        </span>{''} Students. Boosting   {' '}
            <span className="inline-flex items-center justify-center text-teal-700 relative z-10 font-alliance">
      <svg
        className="absolute left-0 top-full -mt-4 max-w-full"
        width="280"
        height="24"
        viewBox="0 0 220 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{zIndex: '-1'}} // Explicitly set for clarity, though it's implicitly under the text due to DOM structure
      >
        <path
          d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
          fill="#4fd1c5" // Lighter teal color
          fillRule="evenodd"
        />
      </svg>
      Careers.
    </span> 
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-slate-800 font-alliance">
              <span className='text-teal-700 font-bold'>#</span>1 UK Student Pool: Passionate and Skilled, Ready to Dive into IT Projects!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 z-100">
              <div className=" z-50 flex justify-center">
        <div className="flex items-center justify-center gap-x-6">
        
        </div>
      </div>
              
                
              </div>
              
            </div>

            <div className="absolute inset-x-0 md:-mt-20 lg:-mt-24 z-0 flex justify-center">
            <MaxiBeam people={people} />
            
      </div>

      

          </div>
          
        </div>
        
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#008080] to-[#008080] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
      </div>
      
    </div>
  )
}
