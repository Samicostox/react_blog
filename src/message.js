import Navbar from './navbar';
import { useState,useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import Newhome from './newhome'
import Validate2Dialog from './modals/validate'; // Alias validate2 as Validate2Dialog
import ErrorDialog from './modals/error'; // Al

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Message({setToDoc3}) {
  const [agreed, setAgreed] = useState(false);
  const [sampleText, setSampleText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false); // Renamed to successDialogOpen
  const [errorDialogOpen, setErrorDialogOpen] = useState(false); 
  const [csvFileName, setCsvFileName] = useState('');
  const navigate = useNavigate();
  const title = "This process might take a few minutes if you selected the personalised email option. the csv file once created will appear in your csv file dashboard";

  useEffect(() => {
    console.log("Error Dialog Open: ", errorDialogOpen);
    console.log("Success Dialog Open: ", successDialogOpen);
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');  // replace '/login' with your login page route
    }
  }, []);
  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const token = localStorage.getItem("token");
    try {
      const backendUrl = process.env.REACT_APP_BACK_URL;
      const response = await fetch(`${backendUrl}api/process_text/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sample_text: sampleText, personalize: agreed, title: csvFileName, token:token}),
      });

      const data = await response.json();

      if (data.msg === "Your request is being processed. You'll be notified once the CSV is ready.") {
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
    
    
  <div className="mx-auto max-w-4xl text-center mt-10"> {/* Adjusted max-width to be more standardized */}
  <Validate2Dialog open={successDialogOpen} setOpen={setSuccessDialogOpen} title={title} />
  <ErrorDialog setToDoc3={setToDoc3} open={errorDialogOpen} setOpen={setErrorDialogOpen} />
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Enter your google search</h2>
  <p className="mt-4 text-lg leading-8 text-gray-700 mx-auto" style={{maxWidth: "1000px"}}>
    It will output you a CSV file filtered thanks to an NLP algorithm with all the relevant data about your businesses. If you don't know how to use this tool please visit our  
    <a onClick={() => setToDoc3()} className="text-green-500" target="_blank" rel="noopener noreferrer">  Email Generation Documentation</a> 
  </p>
</div>
      <form onSubmit={handleSubmit} style={{maxWidth: "1200px"}} className="mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="sm:col-span-1">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
              Google search
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
  <label htmlFor="csvFileName" className="block text-sm font-semibold leading-6 text-gray-900 text-left">
    CSV File Name
  </label>
  <div className="mt-2.5">
    <input
      type="text"
      name="csvFileName"
      id="csvFileName"
      value={csvFileName}
      onChange={(e) => setCsvFileName(e.target.value)}
      maxLength={20}
      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
    />
  </div>
</div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-1">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-green-700' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-700">
              Personalied Email
              <a href="#" className="font-semibold text-green-700">
                
              </a>
              .
            </Switch.Label>
          </Switch.Group>
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
      className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
    >
      Send Your Request
    </button>
  )}
</div>
      </form>
      
    </div>
  
    </div>
  )
}


