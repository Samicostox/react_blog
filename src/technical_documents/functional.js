import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xtype from "xtypejs";
import { TrashIcon } from "@heroicons/react/20/solid";
function Functional({ moveToNext }) {
  const functionalTitles = JSON.parse(localStorage.getItem("functionalTitles"));
  const functional = JSON.parse(localStorage.getItem("functional"));

  const [functionalData, setFunctionalData] = useState(functional); // assuming 'functional' is an array passed as prop or defined elsewhere
  const [functionalTitlesData, setFunctionalTitlesData] = useState(
    functionalTitles
  );
  const functionalRefs = functionalTitles.map(() => []);
  const functionalTitleRefs = functionalTitles.map(() => []);

  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [editingTitleIndex, setEditingTitleIndex] = useState(null);

  const startEditingTitle = (index) => {
    // If there's an active editing index, save the changes to the state
    if (editingTitleIndex !== null && editingTitleIndex !== index) {
      const updatedTitles = [...functionalTitlesData];
      updatedTitles[editingTitleIndex] =
        functionalTitleRefs[editingTitleIndex].value;
      setFunctionalTitlesData(updatedTitles);
    }

    // Set the new editing index
    setEditingTitleIndex(index);
  };

  const stopEditingTitle = () => {
    // If there's an active editing index, save the changes to the state
    if (editingTitleIndex !== null) {
      const updatedTitles = [...functionalTitlesData];
      updatedTitles[editingTitleIndex] =
        functionalTitleRefs[editingTitleIndex].value;
      setFunctionalTitlesData(updatedTitles);
    }

    // Reset the editing index
    setEditingTitleIndex(null);
  };

  const handleAddField = (type, index) => {
    const functionalDataFromRefs = functionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );
    const functionalTitlesFromRefs = functionalTitleRefs.map(
      (refGroup) => refGroup.value
    );
    setFunctionalData(functionalDataFromRefs);
    setFunctionalTitlesData(functionalTitlesFromRefs);
    const newFunctionalData = [...functionalDataFromRefs];
    newFunctionalData[index].push(""); // Add a new empty field
    setFunctionalData(newFunctionalData);

    setRerenderToggle((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingTitleIndex !== null) {
      const updatedTitles = [...functionalTitlesData];
      updatedTitles[editingTitleIndex] =
        functionalTitleRefs[editingTitleIndex].value;
      setFunctionalTitlesData(updatedTitles);
    }
    /*

    
    const functionalTitlesFromRefs = JSON.stringify(
      functionalTitleRefs.map((refGroup) => refGroup.value)
    );
    
    localStorage.setItem("functionalTitles", functionalTitlesFromRefs);
    moveToNext();*/
    const functionalDataFromRefs = JSON.stringify(
      functionalRefs.map((refGroup) => refGroup.map((ref) => ref.value))
    );
    localStorage.setItem("functional", functionalDataFromRefs);
    localStorage.setItem(
      "functionalTitles",
      JSON.stringify(functionalTitlesData)
    );
    moveToNext();
  };

  const handleRemoveField = (type, sectionIndex, fieldIndex) => {
    const newFunctionalData = [...functionalData];
    console.log("deleted item", newFunctionalData);
    newFunctionalData[sectionIndex].splice(fieldIndex, 1);
    setFunctionalData(newFunctionalData);
    console.log("deleted item", functionalData);
    setRerenderToggle((prev) => !prev);
  };

  return (
    <div className="w-full pl-5 pr-5 pt-10 pb-10 sm:pl-[10px] sm:pr-[10px]">
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 border-2 rounded-md">
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "1200px" }}
          className="mx-auto mt-8 sm:mt-10"
        >
          <h2 className="text-3xl pb-10 text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
            Functional Requirements
          </h2>
          {functionalTitlesData.map((title, index) => (
            <div
              key={rerenderToggle ? `${title}_toggled` : title}
              className="sm:col-span-1 requirement-section mb-4 relative"
            >
              {editingTitleIndex === index ? (
                <input
                  type="text"
                  id={`functional_${index}`}
                  ref={(el) => (functionalTitleRefs[index] = el)}
                  defaultValue={title}
                  onBlur={stopEditingTitle}
                  className="block w-full text-2xl rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6"
                />
              ) : (
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl mb-6">{title}</h3>
                  <button
                    type="button"
                    onClick={() => startEditingTitle(index)}
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
              <ul>
                {functionalData[index].map((req, reqIndex) => (
                  <div className="flex items-center mb-2" key={reqIndex}>
                    <input
                      type="text"
                      ref={(el) => (functionalRefs[index][reqIndex] = el)}
                      id={`functional_${index}_${reqIndex}`}
                      defaultValue={req}
                      name={`functional_${index}_${reqIndex}`}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveField("functional", index, reqIndex)
                      }
                      className="ml-2 p-1 text-white"
                    >
                      <TrashIcon className="h-6 w-6 fill-red-700" />
                    </button>
                  </div>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleAddField("functional", index)}
                className="mt-2 inline-flex justify-center items-center w-10 h-10 rounded-full bg-green-700 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                +
              </button>
            </div>
          ))}
          <div className="mt-10">
            <button
              type="submit"
              className="inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
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
