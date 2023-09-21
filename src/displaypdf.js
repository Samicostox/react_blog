import React, { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, ChevronUpDownIcon, TrashIcon, BarsArrowUpIcon, MagnifyingGlassIcon, ChevronDownIcon  } from '@heroicons/react/20/solid'
import Emptystate from './emptystate';
import Verify from './modals/areyousure';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'phone' },
  { id: 3, name: 'email' },
];

export default function DisplayPDF({setToPDF}) {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfToDelete, setPdfToDelete] = useState(null); 
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }

    setIsLoading(true);

    fetch('https://djangoback-705982cd1fda.herokuapp.com/api/userpdfs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setPdfFiles(data.pdf_files);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      setIsLoading(false);
    });
  }, []);

  const filteredFiles = pdfFiles.filter(file => 
    (selectedCategory.name === 'All' ? true : file.category === selectedCategory.name) &&
    (searchQuery ? file.name.toLowerCase().includes(searchQuery.toLowerCase()) : true)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const deletePDF = (pdfId) => {
    const token = localStorage.getItem('token');
    fetch('https://djangoback-705982cd1fda.herokuapp.com/api/delete_pdf/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: token, pdf_id: pdfId }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.msg === "PDF file deleted successfully") {
        setPdfFiles(prevFiles => prevFiles.filter(file => file.id !== pdfId));
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  const openModal = (pdfId) => {
    setPdfToDelete(pdfId);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    if (pdfToDelete !== null) {
      deletePDF(pdfToDelete);
      setPdfToDelete(null);
    }
  };

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
    <Verify open={modalOpen} setOpen={setModalOpen} onDelete={confirmDelete} />
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4x2 text-center mt-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your PDF Files</h2>
        <p className="mt-2 text-lg leading-8 text-gray-700">
          Here are all the PDF files you've uploaded.
        </p>
      </div>
      
      {filteredFiles.length === 0 ? (
        <div className="mt-20"> {/* Adding margin-top here */}
          {/* Assuming Emptystate component is used for empty state */}
          <Emptystate setToPDF={setToPDF}/>
        </div>
      ) : (
        <>
          {/* Filtering and Sorting System */}
          <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mt-20">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Filter PDF Files</h3>
        <div className="relative mt-3 sm:ml-4 sm:mt-0">
          <label htmlFor="search-csv" className="sr-only">Search</label>
          <div className="flex rounded-md shadow-sm">
          
              <div className="flex rounded-md shadow-sm">
      <div className="relative flex-grow focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search-candidate"
                id="search-candidate"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700"
                placeholder="Search PDF"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <BarsArrowUpIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              Sort
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>
          </div>
          {showSortMenu && (
            <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowSortMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm"
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 mt-16 sm:mt-20">
        {filteredFiles.slice().reverse().map((pdfFile) => (
    <li key={pdfFile.id} className="relative overflow-hidden rounded-xl border border-gray-200">
      <a href={pdfFile.pdf_file} download>
        
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img
        src={pdfFile.category === 'phone' ? 
          "https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png" : 
          pdfFile.category === 'email' ? 
          "https://res.cloudinary.com/dl2adjye7/image/upload/v1694853894/imgonline-com-ua-ReplaceColor-ko8MIMdERcDM1_eh9daf.jpg" : 
          "https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png" // Default image
        }
        alt={pdfFile.name}
        className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
      />

          <div className="text-sm font-medium leading-6 text-gray-900">{pdfFile.name}</div>
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Created at</dt>
            <dd className="text-gray-700">
              <time dateTime={pdfFile.created_at}>{new Date(pdfFile.created_at).toLocaleDateString()}</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Category</dt>
            <dd className="text-gray-700">{pdfFile.category}</dd>
          </div>
        </dl>
      </a>
      <button onClick={() => openModal(pdfFile.id)} className="absolute top-2 right-0 m-2">
        <TrashIcon className="h-6 w-6 fill-red-700" />
      </button>
      
    </li>
  ))}
</ul>
</>
 )}

      </div>
    </div>
  );
}
