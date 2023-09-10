import React from 'react';
import Newhome from '../newhome';

function PDFViewer(props) {
  const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // viewport height
  };

  const iframeStyle = {
      width: '50%',
      height: '75vh', 
      border: 'none'
  };

  const download = async (e) => {
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
      const response = await fetch('https://djangoback-705982cd1fda.herokuapp.com/api/generate_requirements_pdf/', {
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
      navigate('/pdfviewer');
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setIsLoading(false);
    }
  };

  return (
      <div style={containerStyle}>
          <iframe 
              src="https://www.africau.edu/images/default/sample.pdf" 
              style={iframeStyle}
              title="PDF in iframe">
          </iframe>
      </div>
  );
}

export default PDFViewer;
