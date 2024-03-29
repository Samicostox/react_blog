import { FiLogIn } from "react-icons/fi";
import React from 'react';
import { PopupButton } from '@typeform/embed-react';

const ButtonWrapper4 = () => {
  return (
    <div className="flex rounded-lg items-center justify-center bg-slate-900">
      <RoundedSlideButton />
    </div>
  );
};

const RoundedSlideButton = () => {
  return (
    <PopupButton id="LAVPtHED"
      className={`
        relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-teal-300 px-4 py-2 font-semibold
        text-white transition-all duration-500  // Removed 'uppercase' from here
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-teal-400
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
      `}
    >
      <span className="text-white hover:text-neutral-900 font-alliance text-sm">Join The Team</span>
      <span className="text-white" aria-hidden="true">
        &rarr;
      </span>
    </PopupButton>
  );
};

export default ButtonWrapper4;
