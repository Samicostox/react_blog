import { useState } from "react";

function FrontPage({ moveToNext }) {
  // ... Existing state variables ...

  // Add state for the new fields:

  const [nameOfProject, setNameOfProject] = useState(
    localStorage.getItem("name_of_project") || ""
  );
  const [type_of_project, setTypeOfProject] = useState(
    localStorage.getItem("type_of_project") || ""
  );
  const [name_of_client_company, setNameOfClientCompany] = useState(
    localStorage.getItem("name_of_client_company") || ""
  );
  const [consultant_name, setConsultantName] = useState(
    localStorage.getItem("consultant_name") || ""
  );
  const [title, setTitle] = useState(localStorage.getItem("title") || "");
  const [date, setDate] = useState(localStorage.getItem("date") || "");
  const [university, setUniversity] = useState(
    localStorage.getItem("university") || ""
  );
  const [scopeOfApp, setScopeOfApp] = useState(
    localStorage.getItem("scope") || ""
  );
  const projectTypes = ["Web Application", "Mobile Application", "Website"];

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("name_of_project", nameOfProject);
    localStorage.setItem("type_of_project", type_of_project);
    localStorage.setItem("name_of_client_company", name_of_client_company);
    localStorage.setItem("consultant_name", consultant_name);
    localStorage.setItem("title", title);
    localStorage.setItem("date", date);
    localStorage.setItem("university", university);

    moveToNext(); // This moves to the next step in UpdatePDF
  };

  return (
    <div className="w-full pl-5 pr-5 pt-10 pb-10 sm:pl-[10px] sm:pr-[10px]">
      <div className="isolate bg-white px-6 py-24 sm:py-3 lg:px-8 border-2 rounded-md">
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "1200px" }}
          className="mx-auto mt-8 sm:mt-10"
        >
          <h2 className="font-alliance text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">
            Front Page
          </h2>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="name_of_project"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Name of Project
            </label>
            <input
              type="text"
              id="name_of_project"
              value={nameOfProject}
              onChange={(e) => setNameOfProject(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="type_of_project"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Type of Project
            </label>
            <select
              id="type_of_project"
              value={type_of_project}
              onChange={(e) => setTypeOfProject(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            >
              {projectTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="name_of_client_company"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Name Of Client Company
            </label>
            <input
              type="text"
              id="name_of_client_company"
              value={name_of_client_company}
              onChange={(e) => setNameOfClientCompany(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="consultant_name"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Consultant Name
            </label>
            <input
              type="text"
              id="consultant_name"
              value={consultant_name}
              onChange={(e) => setConsultantName(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="title"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="date"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="university"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              University
            </label>
            <select
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            >
              <option value="1">University of Birmingham</option>
              <option value="2">University of Warwick</option>
            </select>
          </div>
          <div className="sm:col-span-1 py-4">
            <label
              htmlFor="message"
              className="font-alliance text-left block text-sm font-semibold leading-6 text-gray-900"
            >
              Scope of App
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={scopeOfApp}
                onChange={(e) => setScopeOfApp(e.target.value)}
                className="font-alliance block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10 pb-10">
            <button
              type="submit"
              className="font-alliance inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Save your new Front Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FrontPage;
