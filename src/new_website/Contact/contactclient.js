import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Navbarv2 from '../../navbarv2';

export default function ContactClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbarv2 />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white max-w-7xl mx-auto shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            {/* Content Section */}
            <div className="p-8 lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 text-left">Get in touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
              </p>
              <dl className="mt-8 space-y-4">
                <div className="flex">
                  <BuildingOffice2Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-base text-gray-600">545 Mavis Island, Chicago, IL 99191</span>
                </div>
                <div className="flex">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-base text-gray-600">+1 (555) 234-5678</span>
                </div>
                <div className="flex">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-base text-gray-600">hello@example.com</span>
                </div>
              </dl>
            </div>

            {/* Form Section */}
            <div className="p-8 lg:w-1/2 bg-gray-50">
              <form action="#" method="POST">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone number</label>
                  <input type="tel" name="phone-number" id="phone-number" autoComplete="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                </div>
                <div className="mt-8">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
