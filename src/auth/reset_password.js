import React, { useState, useEffect } from 'react';
import Navbar from "../navbar";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import Bademail from '../modals/problem';
import Emailsent from '../modals/emailsent';
import { useNavigate } from 'react-router-dom';  // Import the Emailsent modal
import Navbarv2 from '../navbarv2';

export default function Resetpassword() {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState(null);
  const [showInvalidOTPModal, setShowInvalidOTPModal] = useState(false);
  const [showEmailSentModal, setShowEmailSentModal] = useState(false);  // New state for showing Emailsent modal
  const location = useLocation();
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate(`/signin`);
  };

    useEffect(() => {
      const parsed = queryString.parse(location.search);
      if (parsed.email) {
        setEmail(parsed.email);
      }
    }, [location.search]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const data = {
          email : email,
          code : code,
          new_password: password,
        };
        const backendUrl = process.env.REACT_APP_BACK_URL;
        const response = await axios.post(`${backendUrl}api/reset-password/`, data);
        if (response.status === 200) {
            setShowEmailSentModal(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setShowInvalidOTPModal(true);  // Show the modal when OTP is invalid
        }
      }
    };
    return (
      <>
      {showInvalidOTPModal && <Bademail setOpen={setShowInvalidOTPModal} title="Invalid OTP" message="The OTP you entered is incorrect. Please try again." />}  {/* Render the modal */}
      {showEmailSentModal && <Emailsent setOpen={setShowEmailSentModal} title="Password Reset Successful" message="You have successfully reset your password. You can now sign in with the new password." button="Go to Sign In" onGoToResetPassword={goToSignIn} />} {/* Add the Emailsent modal */}
      
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <Navbarv2 />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md" style={{ marginTop: '150px' }}>
            
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
              Reset Password
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
            <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              6-Digit OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="number"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
            
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    New Password
                  </label>
                  
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password} // Added this
                    onChange={(e) => setPassword(e.target.value)} // And this
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Reset Password
                </button>
              </div>
            </form>
  
           
          </div>
        </div>
      </>
    )
  }
  