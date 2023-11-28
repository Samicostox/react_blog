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
import Successclient from "../modals/successclient";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar";
import Navbarv2 from "../navbarv2";
import ReactGA from 'react-ga4';
export default function Contact2() {
  useEffect(() => {

    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname + window.location.search
    });
    
    window.scrollTo(0, 0);
  }, []);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  // Function to handle form submission
  // Function to handle form submission
  const handleSubmit = async (e) => {
    ReactGA.event({category:'Test',action:'submit',label:'form'})
    e.preventDefault();

    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      const response = await fetch(
        `${backendUrl}api/create_client/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Client created: ", data);

      ReactGA.event({
        category: "Lead Generation",  // Customize as needed
        action: "Form Submission",    // Customize as needed
        label: "Contact Form"         // Customize as needed
      });

      // Show the success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error("An error occurred while creating the client: ", error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="relative bg-white">
      <Successclient open={showSuccessModal} setOpen={setShowSuccessModal} />
      <Navbarv2></Navbarv2>

      {/* Hide image on small screens, show on large screens */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:left-1/2 mt-32">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694507174/protruding-squares_2_qtxkqi.png"
          alt="Contact Us - Innovation Studios"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-14xl lg:grid-cols-2 lg:pt-32">
        {/* Added padding for small screens and removed image for small screens */}
        <div className="px-4 sm:px-16 lg:px-16">
          <div className="lg:max-w-4xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-left font-alliance font-bold">
              Let's work together
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 text-left font-alliance font-light">
              Our team will be in touch just a few hours after receiving your
              message. We are excited to hear about your idea!
            </p>

            {/* Added padding around the form for small screens */}
            <form
              action="#"
              method="POST"
              className="mt-16 p-4 sm:p-0"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
                {" "}
                {/* Changed to 1 column for larger screens */}
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-alliance font-bold leading-6 text-gray-900 text-left"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      required
                      autoComplete="given-name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-alliance font-bold leading-6 text-gray-900 text-left"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      required
                      autoComplete="family-name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-alliance font-bold leading-6 text-gray-900 text-left"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 font-alliance font-bold"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900 text-left font-alliance font-bold"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 font-alliance font-bold"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900 text-left font-alliance font-bold"
                    >
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
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900 font-alliance font-bold"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 2000 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-gray-900 text-left font-alliance font-bold">
                    Expected budget
                  </legend>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        value="under_1k"
                        checked={formData.budget === "1000k"}
                        onChange={handleChange}
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600 font-alliance font-bold"
                      />
                      <label htmlFor="budget-under-25k">Less than £1,000</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        value="1k-5k"
                        checked={formData.budget === "1K-5K"}
                        onChange={handleChange}
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600 font-alliance font-bold"
                      />
                      <label htmlFor="budget-25k-50k">£1,000 – £5,000</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        value="5k-10k"
                        checked={formData.budget === "5k-10k"}
                        onChange={handleChange}
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600 font-alliance font-bold"
                      />
                      <label htmlFor="budget-50k-100k">£5,000 – £10,000</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        value="over_10k"
                        checked={formData.budget === "over_10k"}
                        onChange={handleChange}
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-green-600 shadow-sm focus:ring-green-600 font-alliance font-bold"
                      />
                      <label htmlFor="budget-over-100k">£10,000+</label>
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
  );
}
