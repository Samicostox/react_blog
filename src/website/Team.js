import Navbar from "../navbar"
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, dark, atomDark, nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tomorrowNight from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";

const incentives = [
    {
      name: 'Fast shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: 'Certified by teachers',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    
  ]

const people = [
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
      Uni : "UOB",
      color : "bg-red-100"
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
        Uni : "UOB",
        color : "bg-red-100"
      },
      {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
        Uni : "UOB",
        color : "bg-red-100"
      },
      {
        name: 'Lindsay Walton',
        role: 'Consultant',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
        Uni : "UOB",
        color : "bg-red-100"
      },
      {
          name: 'Lindsay Walton',
          role: 'Consultant',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          twitterUrl: '#',
          linkedinUrl: '#',
          Uni : "UOB",
          color : "bg-red-100"
        },
        {
          name: 'Lindsay Walton',
          role: 'Consultant',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
          twitterUrl: '#',
          linkedinUrl: '#',
          Uni : "UOB",
          color : "bg-red-100"
        },
        {
            name: 'Lindsay Walton',
            role: 'Front-end Developer',
            imageUrl:
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            twitterUrl: '#',
            linkedinUrl: '#',
            Uni : "WIS",
            color : "bg-purple-100"
          },
          {
              name: 'Lindsay Walton',
              role: 'Front-end Developer',
              imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
              twitterUrl: '#',
              linkedinUrl: '#',
              Uni : "WIS",
              color : "bg-purple-100"
            },
            {
              name: 'Lindsay Walton',
              role: 'Front-end Developer',
              imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
              twitterUrl: '#',
              linkedinUrl: '#',
              Uni : "WIS",
              color : "bg-purple-100"
            },
            
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <Navbar></Navbar>

        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 max-w-[1800px] mx-auto">
  <div className="mx-auto max-w-14xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
    <div className="px-6 lg:px-0 lg:pt-4">
      <div className="mx-auto max-w-[1800px]">
        <div className="max-w-full pl-16 pr-16 "> {/* Removed max-w-lg to make title and paragraph wider */}
          <div className="mt-24 sm:mt-32 lg:mt-16 text-left">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10 text-left ">
                Our Services
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-left w-full max-w-[600px]"> {/* Added w-full to make title wider */}
            Our Pool of Talents in the West Midlands
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-left w-full"> {/* Added w-full to make paragraph wider */}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Us
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Our Software <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6 text-left "> {/* Added inline style to make it wider */}
                      <SyntaxHighlighter
  language="react"
  style={tomorrowNight}
  customStyle={{
    backgroundColor: 'transparent', // Set background to transparent
  }}
  codeTagProps={{
    style: {
      color: 'white', // Set the text color to white
    },
  }}
>
       {`
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div><div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
  );
}
        `}
      </SyntaxHighlighter>
      </div>
                    </div>
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

        <div className="w-full px-4 py-24 sm:px-6 lg:px-8"> {/* Made it full-width */}
  <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
    <div className="mx-auto max-w-xl lg:max-w-none">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          We built our business on customer service
        </h1>
      </div>
      <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
        {incentives.map((incentive) => (
          <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" />
              </div>
            </div>
            <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left    ">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
               <li key={person.name}>
               <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
               
               {/* Added container */}
               <div className="flex justify-between items-start mt-6"> {/* Change here */}
                    <div>
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 text-left">{person.name}</h3>
                        <p className="text-base leading-7 text-gray-600 text-left">{person.role}</p>
                    </div>

                    <div>
                        <a
                         className={"relative z-10 rounded " + person.color + " px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"}
                        >
                        {person.Uni}
                        </a>
                    </div>
                    </div>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  