import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Validate2Dialog from "./modals/validate"; // Alias validate2 as Validate2Dialog
import ErrorDialog from "./modals/error"; // Al

export default function GoogleMap({ setToDoc3 }) {
  const [cityName, setCityName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState(null); // Added error state
  const [keyword, setKeyword] = useState("");
  const [csvFileName, setCsvFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added this line
  const [successDialogOpen, setSuccessDialogOpen] = useState(false); // Renamed to successDialogOpen
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const title =
    "This process might take a few minutes, you have time for a 3 minutes chess game! the csv file once created will appear in your csv file dashboard";

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    setIsLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      const response =
       await fetch(
        `${backendUrl}api/fetch_venues/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            city_name: cityName,
            api_key: apiKey,
            token: token,
            keyword: keyword,
            csv_file_name: csvFileName,
          }),
        }
      );

      const data = await response.json();

      if (
        data.msg ===
        "Your request is being processed. You'll be notified once the CSV is ready."
      ) {
        setSuccessDialogOpen(true);
        console.log(successDialogOpen);
      } else {
        setErrorDialogOpen(true);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setErrorDialogOpen(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Validate2Dialog
          open={successDialogOpen}
          setOpen={setSuccessDialogOpen}
          title={title}
        />
        <ErrorDialog
          setToDoc3={setToDoc3}
          open={errorDialogOpen}
          setOpen={setErrorDialogOpen}
        />

        <div className="mx-auto max-w-4x2 text-center mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lead Generation
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-700 mx-auto" style={{maxWidth: "1000px"}}>
            Generates over 300 Cold Outreach leads in one click!  If you don't know how to use this tool please visit our  
            <a onClick={() => setToDoc3()} className="text-green-500" target="_blank" rel="noopener noreferrer">  Cold Outreach Documentation</a> 
          </p>
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "1200px" }}
          className="mx-auto mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div className="sm:col-span-1 py-4">
              <label
                htmlFor="cityName"
                className="text-left block text-sm font-semibold leading-6 text-gray-900"
              >
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
              <label
                htmlFor="apiKey"
                className="text-left block text-sm font-semibold leading-6 text-gray-900"
              >
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
              <label
                htmlFor="keyword"
                className="text-left block text-sm font-semibold leading-6 text-gray-900"
              >
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
              <label
                htmlFor="csvFileName"
                className="text-left block text-sm font-semibold leading-6 text-gray-900"
              >
                CSV File Name
              </label>
              <input
                type="text"
                id="csvFileName"
                value={csvFileName}
                maxLength={20}
                onChange={(e) => setCsvFileName(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-10">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-green-700 rounded-md shadow cursor-not-allowed hover:bg-green-600"
                  disabled
                >
                  <svg
                    className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
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
    </div>
  );
}
