import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ModifyPDF(props) {

  

    const navigate = useNavigate();
    /*
    const functionalTitles = localStorage.getItem("functionalTitles");
    const functional = localStorage.getItem("functional");
    const nonFunctionalTitles = localStorage.getItem("[nonFunctionalTitles");
    const nonFunctional = localStorage.getItem("nonFunctional");
    */
    

    const serializedFunctionalTitle = localStorage.getItem("functionalTitles");
    const serializedFunctional = localStorage.getItem("functional");
    const serializedNonFunctionalTitle = localStorage.getItem("nonFunctionalTitles");
    const serializedNonFunctional = localStorage.getItem("nonFunctional");

    const functionalTitles = JSON.parse(serializedFunctionalTitle);
    const functional = JSON.parse(serializedFunctional);
    const nonFunctionalTitles = JSON.parse(serializedNonFunctionalTitle);
    const nonFunctional = JSON.parse(serializedNonFunctional);
  


    const [functionalData, setFunctionalData] = useState(functional); // assuming 'functional' is an array passed as prop or defined elsewhere
    const [nonFunctionalData, setNonFunctionalData] = useState(nonFunctional); // same assumption for 'nonFunctional'

    const [functionalTitlesState, setFunctionalTitlesState] = useState(functionalTitles);
    const [nonFunctionalTitlesState, setNonFunctionalTitlesState] = useState(nonFunctionalTitles);

    const functionalRefs = functionalTitles.map(() => []);
    const nonFunctionalRefs = nonFunctionalTitles.map(() => []);
    const functionalTitleRefs = functionalTitles.map(() => []);
    const nonFunctionalTitleRefs = nonFunctionalTitles.map(() => []);

    const [rerenderToggle, setRerenderToggle] = useState(false);




    const handleAddField = (type, index) => {
        if (type === 'functional') {
            const newFunctionalData = [...functionalData];
            newFunctionalData[index].push(''); // Add a new empty field
            setFunctionalData(newFunctionalData);
        } else {
            const newNonFunctionalData = [...nonFunctionalData];
            newNonFunctionalData[index].push(''); // Add a new empty field
            setNonFunctionalData(newNonFunctionalData);
        }
        setRerenderToggle(prev => !prev);   
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const functionalDataFromRefs = functionalRefs.map(refGroup => refGroup.map(ref => ref.value));
        const nonFunctionalDataFromRefs = nonFunctionalRefs.map(refGroup => refGroup.map(ref => ref.value));
        const functionalTitlesFromRefs = functionalTitleRefs.map(ref => ref.value);
        const nonFunctionalTitlesFromRefs = nonFunctionalTitleRefs.map(ref => ref.value);
    
        const payload = {
            functional_titles: functionalTitlesFromRefs,
            functional_requirements: functionalDataFromRefs,
            non_functional_titles: nonFunctionalTitlesFromRefs,
            non_functional_requirements: nonFunctionalDataFromRefs
        };
      console.log('Sent data:', JSON.stringify(payload));
   
      // Send a POST request
      try {
          const response = await fetch('YOUR_ENDPOINT_URL_HERE', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
          });
   
          if (response.ok) {
              // Handle successful response
              console.log('Data sent successfully.');
              // Navigate or show success message or any other action you want to perform
          } else {
              // Handle errors
              console.error('Failed to send data:', response.statusText);
          }
      } catch (error) {
          console.error('There was an error:', error);
      }
   };

   const handleRemoveField = (type, sectionIndex, fieldIndex) => {
    if (type === 'functional') {
        const newFunctionalData = [...functionalData];
        console.log('deleted item',newFunctionalData);
        newFunctionalData[sectionIndex].splice(fieldIndex, 1);
        setFunctionalData(newFunctionalData);
        console.log('deleted item',functionalData);
    } else {
        const newNonFunctionalData = [...nonFunctionalData];
        newNonFunctionalData[sectionIndex].splice(fieldIndex, 1);
        setNonFunctionalData(newNonFunctionalData);
    }
};

   const handleRemoveField2 = (type, sectionIndex, fieldIndex) => {
    if (type === 'functional') {
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

      
      <form onSubmit={handleSubmit} style={{maxWidth: "1200px"}} className="mx-auto mt-16 sm:mt-20">
    <h2 className="mb-8">Functional Requirements</h2>
    {functionalTitles.map((title, index) => (
        <div key={rerenderToggle ? `${title}_toggled` : title} className="sm:col-span-1 requirement-section mb-4">

            <input
                type="text"
                ref={functionalTitleRefs[index]}
                defaultValue={title}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6" // Increased bottom margin here
            />
            <ul>
                {functionalData[index].map((req, reqIndex) => (
                    <div className="flex items-center mb-2" key={reqIndex}>
                        <input
                            type="text"
                            ref={(el) => functionalRefs[index][reqIndex] = el}
                            id={`functional_${index}_${reqIndex}`}
                            defaultValue={req}
                            name={`functional_${index}_${reqIndex}`}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                        />
                        <button 
                            type="button"
                            onClick={() => handleRemoveField('functional', index, reqIndex)}
                            className="ml-2 bg-red-500 hover:bg-red-400 p-1 text-white"
                        >
                            X
                        </button>
                    </div>
                ))}
            </ul>
            <button type="button" onClick={() => handleAddField('functional', index)} className="mt-2 inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500">Add</button> 
            
        </div>
    ))}
    <h2 className="mb-8">Non-functional Requirements</h2>
    {nonFunctionalTitles.map((title, index) => (
        <div key={rerenderToggle ? `${title}_toggled` : title} className="sm:col-span-1 requirement-section mb-4">
            <input
                type="text"
                ref={nonFunctionalTitleRefs[index]}
                defaultValue={title}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6 mb-6" // Increased bottom margin here
            />
            <ul>
                {nonFunctionalData[index].map((req, reqIndex) => (
                    <div className="flex items-center mb-2" key={reqIndex}>
                        <input
                            type="text"
                            ref={(el) => nonFunctionalRefs[index][reqIndex] = el}
                            id={`functional_${index}_${reqIndex}`}
                            defaultValue={req}
                            name={`functional_${index}_${reqIndex}`}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700 sm:text-sm sm:leading-6"
                        />
                        <button 
                            type="button"
                            onClick={() => handleRemoveField('nonFunctional', index, reqIndex)}
                            className="ml-2 bg-red-500 hover:bg-red-400 p-1 text-white"
                        >
                            X
                        </button>
                    </div>
                ))}
            </ul>
            <button type="button" onClick={() => handleAddField('nonFunctional', index)} className="mt-2 inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500">Add</button> 
            
        </div>
    ))}

    

    <button
      type="submit"
      className="mt-8 inline-flex justify-center items-center w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500"
    >
      Generate PDF
    </button>
</form>

  );
    /*
    return (
      <div className="requirements-form">
  
        <h2>Functional Requirements </h2>
        {(functionalTitles).map((title, index) => (
          <div key={title} className="requirement-section">
            <h3>{title}</h3>
            <ul>
              {functional[index].map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
  
        <h2>Non-functional Requirements</h2>
        {nonFunctionalTitles.map((title, index) => (
          <div key={title} className="requirement-section">
            <h3>{title}</h3>
            <ul>
              {nonFunctional[index].map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
          </div>
        ))}
  
      </div>
    );*/
  }
  

export default ModifyPDF;


