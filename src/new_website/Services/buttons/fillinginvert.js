import { FiLogIn } from "react-icons/fi";
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ButtonWrapper3 = () => {
  return (
    <div className="flex rounded-lg items-center justify-center bg-teal-600 ">
      <RoundedSlideButton />
    </div>
  );
};

const RoundedSlideButton = () => {
  const navigate = useNavigate();

  // Function to handle click event
  const handleClick = () => {
    navigate('/bookcall'); // N
  };
  return (
    <button
    onClick={handleClick}
      className={`
        relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-lg 
        border-teal-300 px-4 py-2 font-semibold
        text-white transition-all duration-500  // Removed 'uppercase' from here
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-slate-900
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
      `}
    >
      <span className="text-white hover:text-white font-alliance text-sm">Book a Call</span>
      <span className="text-white" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
};

export default ButtonWrapper3;
