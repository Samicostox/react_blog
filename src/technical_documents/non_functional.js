import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xtype from "xtypejs";

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
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve session token from local storage

    const nonFunctionalDataFromRefs = nonFunctionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );

    const nonFunctionalTitlesFromRefs = nonFunctionalTitleRefs.map(
      (refGroup) => refGroup.value
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
      non_functional_titles: nonFunctionalTitlesFromRefs,
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
              <input
                type="text"
                ref={(el) => (nonFunctionalTitleRefs[index] = el)}
                defaultValue={title}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6" // Increased bottom margin here
              />
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
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
