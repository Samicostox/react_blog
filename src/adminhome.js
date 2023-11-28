import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EnvelopeIcon } from '@heroicons/react/20/solid'

export default function Adminhome() {
  
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
      }
  
      const fetchData = async () => {
        try {
          const backendUrl = process.env.REACT_APP_BACK_URL;
          const response = await axios.post(`${backendUrl}api/fetch_all_clients/`, {
            token: token,
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          setClients(response.data.clients);
        } catch (error) {
          console.error('There was an error fetching data:', error);
        }
      };

      
  
      fetchData();
    }, [navigate]);

    const handleEmailClick = (email, company) => {
        window.location.href = `mailto:${email}?subject=Innovation Studios - ${company}&body=Body%20of%20the%20email`;
    }
    

    return (
      <div className="px-4 sm:px-6 lg:px-8 " style={{ maxWidth: "1800", margin: "auto" }}>
        <Navbar></Navbar>
        <div className="sm:flex sm:items-center mt-56" >
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900 text-left">Clients</h1>
            <p className="mt-2 text-sm text-gray-700 text-left">
              A list of all the clients in your account including their name, title, email and role.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    First Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Last Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Company
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Phone
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Message
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Budget
                    </th>
                    
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Send Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
        {clients.map((client) => (  // Use 'clients.map' instead of 'people.map'
          <tr key={client.id}>  
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 text-left">
              {client.first_name}  {/* Use the properties from 'client' */}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{client.last_name}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{client.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{client.company}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{client.phone}</td>
            <td className="whitespace-normal px-3 py-4 text-sm text-gray-500 text-left" style={{ maxWidth: '300px'}}>
  {client.message}
</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">{client.budget}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left">
            <button onClick={() => handleEmailClick(client.email, client.company)}>
                <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </td>
            {/* ... remaining JSX ... */}
          </tr>
        ))}
      </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  