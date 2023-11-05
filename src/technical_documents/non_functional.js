import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xtype from "xtypejs";
import { TrashIcon } from "@heroicons/react/20/solid";

function NonFunctional({ moveToNext, setPdfToUpdate, setSelectedPdf }) {
  const savedNonFunctional =
    JSON.parse(localStorage.getItem("nonFunctional")) || [];
  const savedNonFunctionalTitles =
    JSON.parse(localStorage.getItem("nonFunctionalTitles")) || [];

  const [nonFunctionalData, setNonFunctionalData] = useState(
    savedNonFunctional
  );
  const [nonFunctionalTitlesData, setNonFunctionalTitlesData] = useState(
    savedNonFunctionalTitles
  );
  const [editingTitleIndex, setEditingTitleIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("nonFunctional", JSON.stringify(nonFunctionalData));
    localStorage.setItem(
      "nonFunctionalTitles",
      JSON.stringify(nonFunctionalTitlesData)
    );
  }, [nonFunctionalData, nonFunctionalTitlesData]);

  const handleInputChange = (sectionIndex, fieldIndex, value) => {
    const updatedNonFunctionalData = [...nonFunctionalData];
    updatedNonFunctionalData[sectionIndex][fieldIndex] = value;
    setNonFunctionalData(updatedNonFunctionalData);
  };

  const handleTitleChange = (index, value) => {
    const updatedTitles = [...nonFunctionalTitlesData];
    updatedTitles[index] = value;
    setNonFunctionalTitlesData(updatedTitles);
  };

  const handleAddField = (sectionIndex) => {
    const newNonFunctionalData = [...nonFunctionalData];
    newNonFunctionalData[sectionIndex].push("");
    setNonFunctionalData(newNonFunctionalData);
  };

  const handleRemoveField = (sectionIndex, fieldIndex) => {
    const newNonFunctionalData = [...nonFunctionalData];
    newNonFunctionalData[sectionIndex].splice(fieldIndex, 1);
    setNonFunctionalData(newNonFunctionalData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve session token from local storage

    const functional_titles = JSON.parse(
      localStorage.getItem("functionalTitles")
    );
    const functional_requirements = JSON.parse(
      localStorage.getItem("functional")
    );
    const name_of_project = localStorage.getItem("name_of_project");
    const id = localStorage.getItem("pdf_id");
    const type_of_project = localStorage.getItem("type_of_project");
    const name_of_client_company = localStorage.getItem(
      "name_of_client_company"
    );
    const consultant_name = localStorage.getItem("consultant_name");
    const title = localStorage.getItem("title");
    const date = localStorage.getItem("date");
    const university = localStorage.getItem("university");
    const scope = localStorage.getItem("scope");
    const newDate = new Date(date + "T00:00:00Z");
    const payload = {
      token: token,
      pdf_id: id,
      functional_titles: functional_titles,
      functional_requirements: functional_requirements,
      non_functional_titles: nonFunctionalTitlesData,
      non_functional_requirements: nonFunctionalData,
      name_of_project: name_of_project,
      type_of_project: type_of_project,
      name_of_client_company: name_of_client_company,
      consultant_name: consultant_name,
      title: title,
      date: date,
      university: university,
      question: scope,
    };
    console.log("Sent data:", JSON.stringify(payload));

    // Send a POST request
    try {
      const response = await fetch(
        "https://djangoback-705982cd1fda.herokuapp.com/api/generate_pdf_after/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Handle successful response
        console.log("Data sent successfully.");
        const data = await response.json();
        console.log("Response", data);
        // Navigate or show success message or any other action you want to perform
        setSelectedPdf(data);
        setPdfToUpdate(null);
      } else {
        // Handle errors
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
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
            Non Functional Requirements
          </h2>

          {/* Functional Titles and Inputs */}
          {nonFunctionalTitlesData.map((title, index) => (
            <div
              key={index}
              className="sm:col-span-1 requirement-section mb-4 relative"
            >
              {editingTitleIndex === index ? (
                <input
                  type="text"
                  value={nonFunctionalTitlesData[index]}
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
                {nonFunctionalData[index].map((req, reqIndex) => (
                  <div className="flex items-center mb-2" key={reqIndex}>
                    <input
                      type="text"
                      value={nonFunctionalData[index][reqIndex]}
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
                className="rounded-md mt-2 inline-flex justify-center items-center w-60 h-10 rounded-full bg-green-700 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-6  00"
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
              Save your new Non Functional Requirements
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NonFunctional;
/*
function NonFunctional(props) {
  const navigate = useNavigate();

  const serializedNonFunctionalTitle = localStorage.getItem(
    "nonFunctionalTitles"
  );
  const serializedNonFunctional = localStorage.getItem("nonFunctional");

  const nonFunctionalTitles = JSON.parse(serializedNonFunctionalTitle);
  const nonFunctional = JSON.parse(serializedNonFunctional);

  const [nonFunctionalData, setNonFunctionalData] = useState(nonFunctional); // same assumption for 'nonFunctional'
  const [nonFunctionalTitlesData, setNonFunctionalTitlesData] = useState(
    nonFunctionalTitles
  );
  const nonFunctionalRefs = nonFunctionalTitles.map(() => []);
  const nonFunctionalTitleRefs = nonFunctionalTitles.map(() => []);

  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [editingTitleIndex, setEditingTitleIndex] = useState(null);

  const handleAddField = (type, index) => {
    const nonFunctionalDataFromRefs = nonFunctionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );
    const nonFunctionalTitlesFromRefs = nonFunctionalTitleRefs.map(
      (refGroup) => refGroup.value
    );
    setNonFunctionalData(nonFunctionalDataFromRefs);
    setNonFunctionalTitlesData(nonFunctionalTitlesFromRefs);

    const newNonFunctionalData = [...nonFunctionalDataFromRefs];
    newNonFunctionalData[index].push(""); // Add a new empty field
    setNonFunctionalData(newNonFunctionalData);
    setRerenderToggle((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    if (editingTitleIndex !== null) {
      const updatedTitles = [...nonFunctionalTitlesData];
      updatedTitles[editingTitleIndex] =
        nonFunctionalTitleRefs[editingTitleIndex].value;
      setNonFunctionalTitlesData(updatedTitles);
    }
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve session token from local storage

    const nonFunctionalDataFromRefs = nonFunctionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );

    

    const functional_titles = JSON.parse(
      localStorage.getItem("functionalTitles")
    );
    const functional_requirements = JSON.parse(
      localStorage.getItem("functional")
    );
    const name_of_project = localStorage.getItem("name_of_project");
    const id = localStorage.getItem("pdf_id");
    const type_of_project = localStorage.getItem("type_of_project");
    const name_of_client_company = localStorage.getItem(
      "name_of_client_company"
    );
    const consultant_name = localStorage.getItem("consultant_name");
    const title = localStorage.getItem("title");
    const date = localStorage.getItem("date");
    const university = localStorage.getItem("university");
    const scope = localStorage.getItem("scope");
    const payload = {
      token: token,
      pdf_id: id,
      functional_titles: functional_titles,
      functional_requirements: functional_requirements,
      non_functional_titles: JSON.stringify(nonFunctionalTitlesData),
      non_functional_requirements: nonFunctionalDataFromRefs,
      name_of_project: name_of_project,
      type_of_project: type_of_project,
      name_of_client_company: name_of_client_company,
      consultant_name: consultant_name,
      title: title,
      date: date,
      university: university,
      question: scope,
    };
    console.log("Sent data:", JSON.stringify(payload));

    // Send a POST request
    try {
      const response = await fetch(
        "https://djangoback-705982cd1fda.herokuapp.com/api/generate_pdf_after/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Handle successful response
        console.log("Data sent successfully.");
        const data = await response.json();
        console.log("Response", data);
        // Navigate or show success message or any other action you want to perform
      } else {
        // Handle errors
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const startEditingTitle = (index) => {
    // If there's an active editing index, save the changes to the state
    if (editingTitleIndex !== null && editingTitleIndex !== index) {
      const updatedTitles = [...nonFunctionalTitlesData];
      updatedTitles[editingTitleIndex] =
        nonFunctionalTitleRefs[editingTitleIndex].value;
      setNonFunctionalTitlesData(updatedTitles);
    }

    // Set the new editing index
    setEditingTitleIndex(index);
  };

  const stopEditingTitle = () => {
    // If there's an active editing index, save the changes to the state
    if (editingTitleIndex !== null) {
      const updatedTitles = [...nonFunctionalTitlesData];
      updatedTitles[editingTitleIndex] =
        nonFunctionalTitleRefs[editingTitleIndex].value;
      setNonFunctionalTitlesData(updatedTitles);
    }

    // Reset the editing index
    setEditingTitleIndex(null);
  };

  const handleRemoveField = (type, sectionIndex, fieldIndex) => {
    const nonFunctionalTitlesFromRefs = nonFunctionalTitleRefs.map(
      (refGroup) => refGroup.value
    );
    setNonFunctionalTitlesData(nonFunctionalTitlesFromRefs);
    const newNonFunctionalData = [...nonFunctionalData];
    newNonFunctionalData[sectionIndex].splice(fieldIndex, 1);
    setNonFunctionalData(newNonFunctionalData);
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
            Non-functional Requirements
          </h2>
          {nonFunctionalTitlesData.map((title, index) => (
            <div
              key={rerenderToggle ? `${title}_toggled` : title}
              className="sm:col-span-1 requirement-section mb-4"
            >
              {editingTitleIndex === index ? (
                <input
                  type="text"
                  id={`functional_${index}`}
                  ref={(el) => (nonFunctionalTitleRefs[index] = el)}
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
                {nonFunctionalData[index].map((req, reqIndex) => (
                  <div className="flex items-center mb-2" key={reqIndex}>
                    <input
                      type="text"
                      ref={(el) => (nonFunctionalRefs[index][reqIndex] = el)}
                      id={`functional_${index}_${reqIndex}`}
                      defaultValue={req}
                      name={`functional_${index}_${reqIndex}`}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveField("nonFunctional", index, reqIndex)
                      }
                      className="ml-2  p-1 text-white"
                    >
                      <TrashIcon className="h-6 w-6 fill-red-700" />
                    </button>
                  </div>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleAddField("nonFunctional", index)}
                className="mt-2 inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
              >
                Add a new requirement
              </button>
            </div>
          ))}
          <div className="mt-10">
            <button
              type="submit"
              className="inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Update PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NonFunctional;
*/
