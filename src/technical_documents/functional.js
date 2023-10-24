import React, { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

function Functional({ moveToNext }) {
  const savedFunctional = JSON.parse(localStorage.getItem("functional")) || [];
  const savedFunctionalTitles =
    JSON.parse(localStorage.getItem("functionalTitles")) || [];

  const [functionalData, setFunctionalData] = useState(savedFunctional);
  const [functionalTitlesData, setFunctionalTitlesData] = useState(
    savedFunctionalTitles
  );
  const [editingTitleIndex, setEditingTitleIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("functional", JSON.stringify(functionalData));
    localStorage.setItem(
      "functionalTitles",
      JSON.stringify(functionalTitlesData)
    );
  }, [functionalData, functionalTitlesData]);

  const handleInputChange = (sectionIndex, fieldIndex, value) => {
    const updatedFunctionalData = [...functionalData];
    updatedFunctionalData[sectionIndex][fieldIndex] = value;
    setFunctionalData(updatedFunctionalData);
  };

  const handleTitleChange = (index, value) => {
    const updatedTitles = [...functionalTitlesData];
    updatedTitles[index] = value;
    setFunctionalTitlesData(updatedTitles);
  };

  const handleAddField = (sectionIndex) => {
    const newFunctionalData = [...functionalData];
    newFunctionalData[sectionIndex].push("");
    setFunctionalData(newFunctionalData);
  };

  const handleRemoveField = (sectionIndex, fieldIndex) => {
    const newFunctionalData = [...functionalData];
    newFunctionalData[sectionIndex].splice(fieldIndex, 1);
    setFunctionalData(newFunctionalData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moveToNext();
  };

  return (
    <div className="w-full pl-5 pr-5 pt-10 pb-10 sm:pl-[10px] sm:pr-[10px]">
      {/* Form Container */}
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 border-2 rounded-md">
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "1200px" }}
          className="mx-auto mt-8 sm:mt-10"
        >
          {/* Form Title */}
          <h2 className="font-alliance text-3xl pb-10 text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
            Functional Requirements
          </h2>

          {/* Functional Titles and Inputs */}
          {functionalTitlesData.map((title, index) => (
            <div
              key={index}
              className="font-alliance sm:col-span-1 requirement-section mb-4 relative"
            >
              {editingTitleIndex === index ? (
                <input
                  type="text"
                  value={functionalTitlesData[index]}
                  onChange={(e) => handleTitleChange(index, e.target.value)}
                  onBlur={() => setEditingTitleIndex(null)}
                  className="font-alliance block w-full text-2xl rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6"
                />
              ) : (
                <div className="flex items-center justify-between">
                  <h3 className="font-alliance text-2xl mb-6">{title}</h3>
                  <button
                    type="button"
                    onClick={() => setEditingTitleIndex(index)}
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* Input Fields */}
              <ul>
                {functionalData[index].map((req, reqIndex) => (
                  <div className="flex items-center mb-2" key={reqIndex}>
                    <input
                      type="text"
                      value={functionalData[index][reqIndex]}
                      onChange={(e) =>
                        handleInputChange(index, reqIndex, e.target.value)
                      }
                      className="font-alliance block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveField(index, reqIndex)}
                      className="ml-2 p-1 text-white"
                    >
                      <TrashIcon className="h-6 w-6 fill-red-700" />
                    </button>
                  </div>
                ))}
              </ul>

              {/* Add Field Button */}
              <button
                type="button"
                onClick={() => handleAddField(index)}
                className="rounded-md mt-2 inline-flex justify-center items-center w-60 h-10 rounded-full bg-green-700 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Add a new requirement
              </button>
            </div>
          ))}

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="font-alliance inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Save your new Functional Requirements
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Functional;
