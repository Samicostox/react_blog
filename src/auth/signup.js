



import React, { useState } from 'react';
import Navbar from '../navbar';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    university: '',
    
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
      const response = await fetch('https://djangoback-705982cd1fda.herokuapp.com/api/signup/', requestOptions);
      const data = await response.json();
  
      if (data.msg === 'Successfully signed up! Please check your email for the verification code') {
        navigate('/OTP', { state: { email: formData.email } });
      } else if (data.email && data.email.includes("user with this email already exists.")) {
        setError('Email already exists');  // Set the error state based on server response
      } else {
        setError('Signup failed: ' + JSON.stringify(data));  // Set the error state with more detailed server response
      }
    } catch (error) {
      setError('There was a problem with the fetch operation.');  // Set the error state
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <>
    <div className="flex min-h-screen flex-1 flex-col px-6 py-12 lg:px-8">
      <Navbar />
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
          <img
            className="mx-auto h-24 w-24 rounded-md"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
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
            <a href="/#signin" className="font-semibold leading-6 text-green-800 hover:text-green-700">
              Sign In
            </a>
          </p>
          </div>
        </div>
      </div>
    </>
  );
}
