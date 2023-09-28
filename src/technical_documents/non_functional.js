import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import xtype from "xtypejs";

function NonFunctional(props) {
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
    const token = localStorage.getItem("token"); // Retrieve session token from local storage

    const functionalDataFromRefs = functionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );
    const nonFunctionalDataFromRefs = nonFunctionalRefs.map((refGroup) =>
      refGroup.map((ref) => ref.value)
    );
    const functionalTitlesFromRefs = functionalTitleRefs.map(
      (refGroup) => refGroup.value
    );
    const nonFunctionalTitlesFromRefs = nonFunctionalTitleRefs.map(
      (refGroup) => refGroup.value
    );
    console.log(xtype(functionalTitlesFromRefs));
    console.log(xtype(functionalDataFromRefs));
    const payload = {
      token: "d8518b03fe17f68ae1c54e2c1c85e2735a79e35a",
      pdf_id: 13,
      functional_titles: functionalTitlesFromRefs,
      functional_requirements: functionalDataFromRefs,
      non_functional_titles: nonFunctionalTitlesFromRefs,
      non_functional_requirements: nonFunctionalDataFromRefs,
      name_of_project: "YourProjectName",
      type_of_project: "aaa",
      name_of_client_company: "aaa",
      consultant_name: "aaa",
      title: "aaa",
      date: "12/01/2002",
      university: "1",
      question:
        "betgogo is a web app that allows user to place bet between each other, this app will have a login and sign up page where users can login or register, reset their password and reset their email. It will have a profile page where users can update their profile and manage their account. there will be a friend page where users can mlanage their relationship with others. there will be a bet page where users can see their current bet, create new bets and modify existing bets. Also wanty a new thing",
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

  const handleRemoveField2 = (type, sectionIndex, fieldIndex) => {
    if (type === "functional") {
      const newFunctionalData = functionalData.map((section, idx) => {
        if (idx !== sectionIndex) return section;
        return section.filter((_, index) => index !== fieldIndex);
      });
      setFunctionalData(newFunctionalData);
    } else {
      const newNonFunctionalData = nonFunctionalData.map((section, idx) => {
        if (idx !== sectionIndex) return section;
        return section.filter((_, index) => index !== fieldIndex);
      });
      setNonFunctionalData(newNonFunctionalData);
    }
  };

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4x2 text-center mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            You can nonical Document!
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
          <h2 className="mb-8">Non-functional Requirements</h2>
          {nonFunctionalTitles.map((title, index) => (
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
                      className="ml-2 bg-red-500 hover:bg-red-400 p-1 text-white"
                    >
                      X
                    </button>
                  </div>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => handleAddField("nonFunctional", index)}
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
              Update PDF
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NonFunctional;
