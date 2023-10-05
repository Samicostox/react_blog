import { useState,useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Navbar from '../../navbar'
import Offer from '../component/offer'
import Footer from '../footer'
import CTAP from './CTA_pastprojects'



export default function Service_mobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <div className="bg-white">
     <Navbar></Navbar>

     

      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
        <div className="max-w-[1800px] mx-auto px-6 py-24 sm:py-32 xl:flex lg:items-center lg:px-40 lg:py-40 lg:gap-x-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-green-600">We’re recruiting</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Join the team
                  <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-x1 text-4xl font-alliance font-bold tracking-tight text-gray-900 sm:text-6xl text-left ">
            Mobile Application Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip
              nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/#contact2"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get a Quote
              </a>
              
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            
             
              
                <img src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696331868/Untitled_1080_x_1080_px_900_x_1080_px_1_hbkthq.png" alt="" className="mx-auto w-[33rem] max-w-full "/>
             
         
          </div>
        </div>
      </div>

      <Offer></Offer>
      <CTAP></CTAP>
      <Footer></Footer>
    </div>
  )
}
