import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Navbarv2 from '../navbarv2';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Added error state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Resetting the error before a new request
  
    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      console.log(backendUrl)
      const response = await fetch(`${backendUrl}api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('uni', data.university);
        localStorage.setItem('name', data.name);
        localStorage.setItem('profilepicture', data.profile_picture);
  
        // Navigate based on the message
        if (data.msg === 'Successfully logged in!') {
          navigate('/newhome');
        } else if (data.msg === 'Admin logged in') {
          navigate('/adminhome');
        } else {
          setError(data.msg);
        }
      } else {
        setError(data.msg);
      }
    } catch (error) {
      setError('There was a problem with the fetch operation.');
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
    <title>Login | Innovation Studios</title>
    <meta name="description" content="Access your Innovation Studios account. Login to explore our range of services, manage your projects, and connect with our team." />
</Helmet>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  
      
      <div className="sm:mx-auto sm:w-full sm:max-w-sm" style={{ marginTop: '150px' }}>
        
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        {error && <p className="mt-3 text-center text-red-500">{error}</p>} {/* Display error */}
      </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-left block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/forgotpassword" className="font-semibold text-green-700 hover:text-green-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/signup" className="font-semibold leading-6 text-green-800 hover:text-green-700">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
