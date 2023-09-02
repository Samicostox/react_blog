import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const location = useLocation();
  const emailFromSignup = location.state?.email; // Retrieve the email from Signup page
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    let value = e.target.value;

    if (/[^0-9]/.test(value)) {
      return;
    }

    otp[index] = value;

    if (index < otp.length - 1 && value !== '') {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp([...otp]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpValue = otp.join('');

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

  return (
    <div className="otp-container">
      <h1>Enter your OTP</h1>
      <form onSubmit={handleSubmit}>
        {otp.map((d, i) => (
          <input
            key={i}
            id={`otp-input-${i}`}
            type="text"
            value={d}
            onChange={(e) => handleChange(e, i)}
            maxLength="1"
            style={{ width: '50px', height: '50px', margin: '5px', fontSize: '24px', textAlign: 'center' }}
          />
        ))}
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}
