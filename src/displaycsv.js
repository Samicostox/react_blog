


import React, { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'phone' },
  { id: 3, name: 'email' },
];

export default function DisplayCSV() {
  const [csvFiles, setCsvFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }

    setIsLoading(true);

    fetch('https://djangoback-705982cd1fda.herokuapp.com/api/usercsv/', {
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
      setCsvFiles(data.csv_files);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      setIsLoading(false);
    });
  }, []);

  const filteredFiles = csvFiles.filter(file => 
    selectedCategory.name === 'All' ? true : file.category === selectedCategory.name
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full pl-5 pr-5 sm:pl-[100px] sm:pr-[100px]">
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4x2 text-center mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your CSV Files</h2>
          <p className="mt-2 text-lg leading-8 text-gray-700">
            Here are all the CSV files you've uploaded.
          </p>
        </div>
        <div className="w-[300px] mt-20">
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            {({ open }) => (
              <>
                <Listbox.Label className="text-left block text-sm font-medium leading-6 text-gray-900 mt-6">Filter by Category</Listbox.Label>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-800 sm:text-sm sm:leading-6">
                    <span className="block truncate text-left">{selectedCategory.name}</span>
                  </Listbox.Button>
  
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {categories.map((category) => (
                        <Listbox.Option
                          key={category.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-green-700 text-white' : 'text-gray-900',
                              'relative cursor-pointer select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={category}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  active ? 'text-white' : 'text-gray-900',
                                  'block truncate text-left'
                                )}
                              >
                                {category.name}
                              </span>
  
                              {selected && (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-green-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>

        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 mt-16 sm:mt-20">
  {filteredFiles.map((csvFile) => (
    <li key={csvFile.id} className="overflow-hidden rounded-xl border border-gray-200">
      <a href={csvFile.csv_file} download>
        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
          <img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694028599/63ff784daa460f472e688fb0_csv_2_dok9c8.png"
            alt={csvFile.name}
            className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
          />
          <div className="text-sm font-medium leading-6 text-gray-900">{csvFile.name}</div>
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Created at</dt>
            <dd className="text-gray-700">
              <time dateTime={csvFile.created_at}>{new Date(csvFile.created_at).toLocaleDateString()}</time>
            </dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-gray-500">Category</dt>
            <dd className="text-gray-700">{csvFile.category}</dd>
          </div>
        </dl>
      </a>
    </li>
  ))}
</ul>
      </div>
    </div>
  );
}
