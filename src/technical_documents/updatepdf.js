import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrontPage from "./front_page";
import Functional from "./functional";
import NonFunctional from "./non_functional";

const steps = [
  { id: "1", name: "Front Page", href: "#", status: "current" },
  { id: "2", name: "Functional", href: "#", status: "incomplete" },
  { id: "3", name: "Non Functional", href: "#", status: "incomplete" },
];

export default function UpdatePDF({ setPdfToUpdate, setSelectedPdf }) {
  const [activeContent, setActiveContent] = useState("Front Page");
  const navigate = useNavigate();

  function moveToNextStep() {
    const currentStepIndex = steps.findIndex(
      (step) => step.status === "current"
    );
    if (currentStepIndex < steps.length - 1) {
      updateStatus(steps[currentStepIndex + 1]);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  function updateStatus(selectedStep) {
    setActiveContent(selectedStep.name);
    steps.forEach((step) => {
      if (step.name === selectedStep.name) {
        step.status = "current";
      } else if (steps.indexOf(step) < steps.indexOf(selectedStep)) {
        step.status = "complete";
      } else {
        step.status = "incomplete";
      }
    });
  }

  return (
    <div className="pt-10 pl-10 pr-10 pb-10">
      <div className="mx-auto max-w-4x2 text-center mt-10 pb-20">
        <h2 className="font-alliance text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          You can update your Technical Document!
        </h2>
        <p className="font-alliance mt-2 text-lg leading-8 text-gray-700">
          You will receive an updated PDF file with the modifications you just
          made.
        </p>
        <button
          className="font-alliance pt-10"
          onClick={() => setPdfToUpdate(null)}
        >
          {" "}
          ← Back to Preview
        </button>
      </div>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step) => (
            <li key={step.name} className="font-alliance md:flex-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateStatus(step);
                }}
                className={`group flex flex-col ${
                  step.status === "complete"
                    ? "border-green-700 hover:border-green-700"
                    : step.status === "current"
                    ? "border-green-700"
                    : "border-gray-200 hover:border-gray-300"
                } py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`}
              >
                <span
                  className={`text-sm font-medium ${
                    step.status === "complete"
                      ? "text-green-700"
                      : step.status === "current"
                      ? "text-green-700"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {step.id}
                </span>
                <span className="text-sm font-medium font-alliance">
                  {step.name}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        {activeContent === "Front Page" && (
          <FrontPage moveToNext={moveToNextStep} />
        )}
        {activeContent === "Functional" && (
          <Functional moveToNext={moveToNextStep} />
        )}
        {activeContent === "Non Functional" && (
          <NonFunctional
            setPdfToUpdate={setPdfToUpdate}
            setSelectedPdf={setSelectedPdf}
          />
        )}
      </div>
    </div>
  );
}
