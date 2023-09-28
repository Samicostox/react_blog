import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xtype from "xtypejs";

function Functional({ moveToNext }) {
  const navigate = useNavigate();
  /*
    const functionalTitles = localStorage.getItem("functionalTitles");
    const functional = localStorage.getItem("functional");
    const nonFunctionalTitles = localStorage.getItem("[nonFunctionalTitles");
    const nonFunctional = localStorage.getItem("nonFunctional");
    */

  const serializedFunctionalTitle = localStorage.getItem("functionalTitles");
  const serializedFunctional = localStorage.getItem("functional");
  const serializedNonFunctionalTitle = localStorage.getItem(
    "nonFunctionalTitles"
  );
  const serializedNonFunctional = localStorage.getItem("nonFunctional");
  const token = localStorage.getItem("token"); // Retrieve session token from local storage

  const functionalTitles = JSON.parse(serializedFunctionalTitle);
  const functional = JSON.parse(serializedFunctional);
  const nonFunctionalTitles = JSON.parse(serializedNonFunctionalTitle);
  const nonFunctional = JSON.parse(serializedNonFunctional);

  const [functionalData, setFunctionalData] = useState(functional); // assuming 'functional' is an array passed as prop or defined elsewhere
  const [nonFunctionalData, setNonFunctionalData] = useState(nonFunctional); // same assumption for 'nonFunctional'

  const functionalRefs = functionalTitles.map(() => []);
  const nonFunctionalRefs = nonFunctionalTitles.map(() => []);
  const functionalTitleRefs = functionalTitles.map(() => []);
  const nonFunctionalTitleRefs = nonFunctionalTitles.map(() => []);

  const [rerenderToggle, setRerenderToggle] = useState(false);

  const handleAddField = (type, index) => {
    if (type === "functional") {
      const newFunctionalData = [...functionalData];
      newFunctionalData[index].push(""); // Add a new empty field
      setFunctionalData(newFunctionalData);
    } else {
      const newNonFunctionalData = [...nonFunctionalData];
      newNonFunctionalData[index].push(""); // Add a new empty field
      setNonFunctionalData(newNonFunctionalData);
    }
    setRerenderToggle((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const functionalDataFromRefs = JSON.stringify(
      functionalRefs.map((refGroup) => refGroup.map((ref) => ref.value))
    );
    const functionalTitlesFromRefs = JSON.stringify(
      functionalTitleRefs.map((refGroup) => refGroup.value)
    );
    localStorage.setItem("functional", functionalDataFromRefs);
    localStorage.setItem("functionalTitles", functionalTitlesFromRefs);
    moveToNext();
  };

  const handleRemoveField = (type, sectionIndex, fieldIndex) => {
    if (type === "functional") {
      const newFunctionalData = [...functionalData];
      console.log("deleted item", newFunctionalData);
      newFunctionalData[sectionIndex].splice(fieldIndex, 1);
      setFunctionalData(newFunctionalData);
      console.log("deleted item", functionalData);
    } else {
      const newNonFunctionalData = [...nonFunctionalData];
      newNonFunctionalData[sectionIndex].splice(fieldIndex, 1);
      setNonFunctionalData(newNonFunctionalData);
    }
  };

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4x2 text-center mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            You can now update your Technical Document!
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-700">
            You will receive an updated PDF file with the modifications you just
            made.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "1200px" }}
          className="mx-auto mt-16 sm:mt-20"
        >
          <h2 className="mb-8">Functional Requirements</h2>
          {functionalTitles.map((title, index) => (
            <div
              key={rerenderToggle ? `${title}_toggled` : title}
              className="sm:col-span-1 requirement-section mb-4"
            >
              <input
                type="text"
                id={`functional_${index}`}
                ref={(el) => (functionalTitleRefs[index] = el)}
                defaultValue={title}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6" // Increased bottom margin here
              />
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
                      className="ml-2 bg-red-500 hover:bg-red-400 p-1 text-white"
                    >
                      X
                    </button>
                  </div>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleAddField("functional", index)}
                className="mt-2 inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Add
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
