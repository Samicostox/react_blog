/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Navbar from "../navbar"
export default function Contact2() {
    return (
        <div className="relative bg-white">
      <Navbar></Navbar>

      {/* Hide image on small screens, show on large screens */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:left-1/2 mt-32">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694507174/protruding-squares_2_qtxkqi.png"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-14xl lg:grid-cols-2 lg:pt-32">
        {/* Added padding for small screens and removed image for small screens */}
        <div className="px-4 sm:px-16 lg:px-16 mt-28">
          <div className="lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-left">
              Let's work together
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 text-left">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>

            {/* Added padding around the form for small screens */}
            <form action="#" method="POST" className="mt-16 p-4 sm:p-0">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1"> {/* Changed to 1 column for larger screens */}
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
                      Company
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900 text-left">
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        How can we help you?
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-semibold leading-6 text-gray-900 text-left">Expected budget</legend>
                    <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-under-25k"
                          name="budget"
                          defaultValue="under_25k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600"
                        />
                        <label htmlFor="budget-under-25k">Less than $25K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-25k-50k"
                          name="budget"
                          defaultValue="25k-50k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600"
                        />
                        <label htmlFor="budget-25k-50k">$25K – $50K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-50k-100k"
                          name="budget"
                          defaultValue="50k-100k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600"
                        />
                        <label htmlFor="budget-50k-100k">$50K – $100K</label>
                      </div>
                      <div className="flex gap-x-2.5">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600"
                        />
                        <label htmlFor="budget-over-100k">$100K+</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-10 flex justify-start border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-green-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  