import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';

const steps = [
  { name: 'Step 1', status: 'complete', content: 'Content for Step 1' },
  { name: 'Step 2',  status: 'complete', content: 'Content for Step 2' },
  { name: 'Step 3',  status: 'current', content: 'Content for Step 3' },
  { name: 'Step 4', status: 'upcoming', content: 'Content for Step 4' },
  { name: 'Step 5',  status: 'upcoming', content: 'Content for Step 5' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StepperWithContent() {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center"> {/* Centering the stepper */}
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-green-600" />
                </div>
                <a
                 
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-green-600 hover:bg-green-900"
                >
                  <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                 
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white"
                  aria-current="step"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-green-600" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
            <div className="mt-2 text-center cursor-pointer" onClick={() => setSelectedStep(step.name)}>
                {step.name}
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-10">
        {selectedStep && <div>{steps.find(step => step.name === selectedStep).content}</div>}
      </div>
    </div>
  )
}
