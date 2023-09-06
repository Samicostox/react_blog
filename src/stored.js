import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Emptystate from './emptystate';  // import the Emptystate component

export default function Store({ setToPDF }) {
  const [pdfFiles, setPdfFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }
    
    axios.post('https://djangoback-705982cd1fda.herokuapp.com/api/user_pdfs/', {
      token: token
    })
    .then(response => {
      setPdfFiles(response.data);
    })
    .catch(error => {
      console.error('Error fetching PDF files:', error);
    });
  }, []);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Your PDF Files</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Click on any image to download the corresponding PDF.
          </p>
        </div>
        {pdfFiles.length === 0 ? (
            <div className="mt-20">  {/* Adding margin-top here */}
          <Emptystate setToPDF={setToPDF}/>  
          </div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {pdfFiles.map((pdf) => (
              <li key={pdf.id} className="text-center">
                <a href={pdf.pdf_file} target="_blank" rel="noopener noreferrer" download>
                  <img 
                    className="aspect-[14/13] w-full rounded-2xl object-cover mx-auto shadow-md border border-gray-300"  
                    src="https://res.cloudinary.com/dl2adjye7/image/upload/v1693928140/Icon-maskable-192_2_btjfe8.png" 
                    alt="Click to Download PDF" 
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                  {pdf.name}
                </h3>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
