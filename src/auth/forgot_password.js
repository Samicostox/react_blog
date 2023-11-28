import React, { useState } from 'react';
import Navbar from "../navbar";
import axios from 'axios';
import Emailsent from '../modals/emailsent';  // Import your modal component
import { useNavigate } from 'react-router-dom';
import Bademail from '../modals/problem';
import { EnvelopeIcon } from '@heroicons/react/20/solid'
import Navbarv2 from '../navbarv2';
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
export default function Forgotpassword() {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showBadEmailModal, setShowBadEmailModal] = useState(false); // New state for the bad email modal
    const navigate = useNavigate();
    const title = "Wrong Email Address";
    const message = "Please enter a correct address email";
    const title2 = "Email Sent Succefully";
    const message2 = "You can now reset your password in the reset password page.";
    const button2 = "Go to reset password";
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const backendUrl = process.env.REACT_APP_BACK_URL;
        const response = await axios.post(`${backendUrl}api/forgot-password/`, { email });
        if (response.status === 200) {
          setShowModal(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setShowBadEmailModal(true); // Show bad email modal if the email is invalid
        }
      }
    };
  
    const handleGoToResetPassword = () => {
      setShowModal(false);
      navigate(`/resetpassword?email=${email}`);
    };
    return (
      <>
      {showModal && <Emailsent setOpen={setShowModal} onGoToResetPassword={handleGoToResetPassword} title = {title2} message = {message2} button = {button2}/>}
      {showBadEmailModal && <Bademail setOpen={setShowBadEmailModal} title = {title} message = {message} />}
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <Navbarv2 />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
          <div className="sm:mx-auto sm:w-full sm:max-w-sm " style={{ marginTop: '150px' }}>
            
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Password
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
          Email address
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
                </div>
              </div>
  
              <div>
               
               
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Email
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Remember your password?{' '}
              <a href="/signin" className="font-semibold leading-6 text-green-700 hover:text-green-600">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  