import Navbar from './navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoogleMap() {
  const [cityName, setCityName] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState(null); // Added error state
  const [keyword, setKeyword] = useState('');
  const [csvFileName, setCsvFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Added this line

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsLoading(true);
    try {
      const response = await fetch('https://djangoback-705982cd1fda.herokuapp.com/api/fetch_venues/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city_name: cityName,
          api_key: apiKey,
          token: token,
          keyword: keyword,
          csv_file_name: csvFileName,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.msg || `HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = csvFileName || 'response.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(error.message || "There was a problem with the fetch operation.");
    }
    setIsLoading(false);
  };



  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Navbar></Navbar>
      <div className="mx-auto max-w-4x2 text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Lead Generation</h2>
        <p className="mt-2 text-lg leading-8 text-gray-700">
      Generates over 300 Cold Outreach leads in one click! 
    </p>
    {error && <p className="text-center text-red-500">{error}</p>}
      </div>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: "1200px" }} className="mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="sm:col-span-1 py-4">
            <label htmlFor="cityName" className="text-left block text-sm font-semibold leading-6 text-gray-900">
              City Name
            </label>
            <input
              type="text"
              id="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-2">
            <label htmlFor="apiKey" className="text-left block text-sm font-semibold leading-6 text-gray-900">
              API Key
            </label>
            <input
              type="text"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          
          <div className="sm:col-span-1 py-2">
            <label htmlFor="keyword" className="text-left block text-sm font-semibold leading-6 text-gray-900">
              Keyword
            </label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-1 py-2">
            <label htmlFor="csvFileName" className="text-left block text-sm font-semibold leading-6 text-gray-900">
              CSV File Name
            </label>
            <input
              type="text"
              id="csvFileName"
              value={csvFileName}
              onChange={(e) => setCsvFileName(e.target.value)}
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
                  Loading...
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
            >
              Send Your Request
            </button>
          )}
        </div>
      
      </form>
    </div>
  );
}