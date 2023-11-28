import { useState, useEffect } from 'react';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

export default function PDF() {
  const [scopeOfApp, setScopeOfApp] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [university, setUniversity] = useState('1'); // Default to University of Birmingham
  const [nameOfProject, setNameOfProject] = useState('');
  const [typeOfProject, setTypeOfProject] = useState(''); // You can also set a default value
  const [nameOfClientCompany, setNameOfClientCompany] = useState('');
  const [consultantName, setConsultantName] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  const projectTypes = ["Web Application", "Mobile Application", "Website"]; // Popula
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');  // replace '/login' with your login page route
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading to true
    const token = localStorage.getItem("token");  // Retrieve session token from local storage

    const payload = {
      token: token,
      question: scopeOfApp,
      title: title,
      date: date,
      university: university,
      name_of_project : nameOfProject,
      type_of_project: typeOfProject,
      name_of_client_company : nameOfClientCompany,
      consultant_name: consultantName

    };

    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      const response = await fetch(`${backendUrl}api/generate_requirements_pdf/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'requirements.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setIsLoading(false);  
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-4x2 text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter the Scope of the App</h2>
        <p className="mt-2 text-lg leading-8 text-gray-700">
          You will receive a PDF file with the requirements based on your input.
        </p>
      </div>
      <form onSubmit={handleSubmit} style={{maxWidth: "1200px"}} className="mx-auto mt-16 sm:mt-20">
        

          {/* Additional Fields */}
          <div className="sm:col-span-1">
            <label htmlFor="title" className="text-left block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="date" className="text-left block text-sm font-semibold leading-6 text-gray-900">
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
            <label htmlFor="university" className="text-left block text-sm font-semibold leading-6 text-gray-900">
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
    <label htmlFor="nameOfProject" className="text-left block text-sm font-semibold leading-6 text-gray-900">
      Name of Project
    </label>
    <input
      type="text"
      id="nameOfProject"
      value={nameOfProject}
      onChange={(e) => setNameOfProject(e.target.value)}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
    />
  </div>

  <div className="sm:col-span-1 py-4">
    <label htmlFor="typeOfProject" className="text-left block text-sm font-semibold leading-6 text-gray-900">
      Type of Project
    </label>
    <select
      id="typeOfProject"
      value={typeOfProject}
      onChange={(e) => setTypeOfProject(e.target.value)}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
    >
      {projectTypes.map((type, index) => <option key={index} value={type}>{type}</option>)}
    </select>
  </div>

  <div className="sm:col-span-1 py-4">
    <label htmlFor="nameOfClientCompany" className="text-left block text-sm font-semibold leading-6 text-gray-900">
      Name of Client Company
    </label>
    <input
      type="text"
      id="nameOfClientCompany"
      value={nameOfClientCompany}
      onChange={(e) => setNameOfClientCompany(e.target.value)}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
    />
  </div>

  <div className="sm:col-span-1 py-4">
    <label htmlFor="consultantName" className="text-left block text-sm font-semibold leading-6 text-gray-900">
      Consultant Name
    </label>
    <input
      type="text"
      id="consultantName"
      value={consultantName}
      onChange={(e) => setConsultantName(e.target.value)}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
    />
  </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="sm:col-span-1 py-4">
            <label htmlFor="message" className="text-left block text-sm font-semibold leading-6 text-gray-900">
              Scope of App
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={scopeOfApp}
                onChange={(e) => setScopeOfApp(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-10">
  {isLoading ? (
    <div className="flex items-center justify-center">
      <button type="button"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-green-700 rounded-md shadow cursor-not-allowed hover:bg-green-600"
          disabled>
          <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating...
      </button>
    </div>
  ) : (
    <button
      type="submit"
      className="inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
    >
      Generate PDF
    </button>
  )}
</div>
        </div>
      </form>
    </div>
    </div>
  );
}
