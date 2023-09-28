import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrontPage from "./front_page";
import Functional from "./functional";
import NonFunctional from "./non_functional";

const steps = [
  { id: "1", name: "FrontPage", href: "#", status: "current" },
  { id: "2", name: "Functional", href: "#", status: "incomplete" },
  { id: "3", name: "NonFunctional", href: "#", status: "incomplete" },
];

export default function UpdatePDF() {
  const [activeContent, setActiveContent] = useState("FrontPage");
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
    <div>
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step) => (
            <li key={step.name} className="md:flex-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateStatus(step);
                }}
                className={`group flex flex-col ${
                  step.status === "complete"
                    ? "border-indigo-600 hover:border-indigo-800"
                    : step.status === "current"
                    ? "border-indigo-600"
                    : "border-gray-200 hover:border-gray-300"
                } py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`}
              >
                <span
                  className={`text-sm font-medium ${
                    step.status === "complete"
                      ? "text-indigo-600"
                      : step.status === "current"
                      ? "text-indigo-600"
                      : "text-gray-500 group-hover:text-gray-700"
                  }`}
                >
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        {activeContent === "FrontPage" && (
          <FrontPage moveToNext={moveToNextStep} />
        )}
        {activeContent === "Functional" && (
          <Functional moveToNext={moveToNextStep} />
        )}
        {activeContent === "NonFunctional" && <NonFunctional />}
      </div>
    </div>
  );
}
