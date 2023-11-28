



import React, { useState,useEffect } from 'react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';
import Navbarv2 from '../navbarv2';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    university: '',
    passcode : ''
    
  });

  const [error, setError] = useState(null);  // New state for handling errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset the error state before making a new request
  
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');  // Set the error state
      return;
    }
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
  
    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      const response = await fetch(`${backendUrl}api/signup/`, requestOptions);
      const data = await response.json();
  
      if (data.msg === 'Successfully signed up! Please check your email for the verification code') {
        navigate('/OTP', { state: { email: formData.email } });
      } else if (data.email && data.email.includes("user with this email already exists.")) {
        setError('Email already exists');  // Set the error state based on server response
      }else if (data.msg && data.msg === "Wrong Beta key") {
        setError('Wrong Beta key');  // Set the error state for wrong passcode
    }
       else {
        setError('Signup failed: ' + JSON.stringify(data));  // Set the error state with more detailed server response
      }
    } catch (error) {
      setError('There was a problem with the fetch operation.');  // Set the error state
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname + window.location.search
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbarv2 />
    <Helmet>
    <title>Signup | Innovation Studios</title>
    <meta name="description" content="Join Innovation Studios. Sign up to get started with our services, be part of our community, and bring your innovative ideas to life." />
</Helmet>

    <div className="flex min-h-screen flex-1 flex-col px-6 py-12 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md" style={{ marginTop: '150px' }}>
        
        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
        {error && <p className="mt-3 text-center text-lg text-red-500">{error}</p>}
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 bg-white sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Avatar */}
          
              {/* Name field */}
              <div>
                <label htmlFor="name" className="text-left block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* Email field */}
              <div>
                <label htmlFor="email" className="text-left block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* Password field */}
              <div>
                <label htmlFor="password" className="text-left block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* Confirm Password field */}
              <div>
                <label htmlFor="confirm_password" className="text-left block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  autoComplete="password"
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="passcode" className="text-left block text-sm font-medium text-gray-700">
                  Beta Key
                </label>
                <input
                  type="password"
                  name="passcode"
                  id="passcode"
                  
                  required
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              {/* University dropdown */}
        <div>
          <label htmlFor="university" className="text-left block text-sm font-medium text-gray-700">
            Choose University
          </label>
          <select
            name="university"
            id="university"
            required
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="" disabled selected>Select your University</option>
            <option value="1">University of Warwick</option>
            <option value="2">University of Birmingham</option>
          </select>
        </div>
             
              {/* Submit Button */}
              <div></div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
            Already a Member?{' '}
            <a href="/signin" className="font-semibold leading-6 text-green-800 hover:text-green-700">
              Sign In
            </a>
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
