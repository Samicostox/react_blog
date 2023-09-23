import React, { useState,useRef  } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar';

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const formRef = useRef(null); 

  const location = useLocation();
  const emailFromSignup = location.state?.email; // Retrieve the email from Signup page
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    let value = e.target.value;
    
    if (/[^0-9]/.test(value)) {
      return;
    }
    
    const newOtp = [...otp];
    newOtp[index] = value;
    
    if (index < newOtp.length - 1 && value !== '') {
      document.getElementById(`otp-input-${index + 1}`).focus();
    } else if (index === newOtp.length - 1 && newOtp.every(o => o !== '')) {
      console.log("otp:", otp); // old state
      console.log("newOtp:", newOtp); // new state that should be sent
      handleSubmit({ preventDefault: () => {} }, newOtp); // Pass newOtp to handleSubmit
    }
    setOtp(newOtp);
};

  
const handleSubmit = async (e, newOtp = otp) => { // Use passed newOtp or state otp
  e.preventDefault();
  const otpValue = newOtp.join('');

    try {
      const response = await axios.post('https://djangoback-705982cd1fda.herokuapp.com/api/verify-email-code/', {
        code: otpValue,
        email: emailFromSignup,  // Include the email in the API call
      });

      if (response.data) {
        // handle success, navigate or show a message
        alert('OTP verified successfully');
        navigate('/')

      }
    } catch (error) {
      // handle error
      alert('OTP verification failed');
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
  
    // Get pasted data
    let paste = (e.clipboardData || window.clipboardData).getData('text');
    
    // Remove any non-digit characters
    paste = paste.replace(/\D/g,'');
    
    // If pasted data is not the exact length, ignore the paste
    if (paste.length !== otp.length) return;
    
    // Create an array from the pasted data
    const pasteArray = paste.split('');
  
    // Update the state with the pasted data
    setOtp(pasteArray);
  
    // If every character in the pasted OTP is a digit, call handleSubmit
    if(pasteArray.every(char => /\d/.test(char))) {
      handleSubmit({ preventDefault: () => {} }, pasteArray);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-4">Enter your OTP</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex space-x-2 mb-4">
        {otp.map((d, i) => (
          <input
            key={i}
            id={`otp-input-${i}`}
            type="text"
            value={d}
            onChange={(e) => handleChange(e, i)}
            onPaste={i === 0 ? handlePaste : null} // Apply onPaste event only to the first input
            maxLength="1"
            style={{ 
              width: '50px', 
              height: '50px', 
              margin: '5px', 
              fontSize: '24px', 
              textAlign: 'center',
              borderRadius: '10px',  // Added to make the input boxes rounded
              borderColor: 'green',  // Added to change the border color to green
              borderWidth: '2px',    // Optional, if you want to adjust the border width
              borderStyle: 'solid',  // Added to ensure that the border is solid
            }}
          />
        ))}
        </div>
        <br />
        
        <button 
  type="submit"
  className="flex justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
>
  Verify
</button>

      </form>
    </div>
  );

          }
