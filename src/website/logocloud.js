import React from 'react';

const LogoCloud = ({ className }) => {
  const logos = [
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg",
    "https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg",
    //... More logos
  ];

  return (
    <div className={`mx-auto px-6 lg:px-8  overflow-hidden ${className}`}>
      {/* Centered title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance font-bold">They trusted us</h2>
      </div>
  
      {/* Logo ticker */}
      <div className="w-full overflow-hidden mt-20">
        <div className="flex space-x-36 animate-ticker">  {/* Increase space here */}
          {logos.map((logo, index) => (
            <img
              key={index}
              className="max-h-12 object-contain"
              src={logo}
              alt="Company logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
          }


export default LogoCloud;
