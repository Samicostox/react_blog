import React from "react";

const LogoCloud = ({ className }) => {
  const logos = [
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696537893/University-of-Birmingham-logo_od1gji.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696537983/e4b96220-cc71-4e7f-946f-4433d1fa2895_xnwxrc.jpg",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538138/Screenshot_2023-10-05_213455_dlyfie.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538028/mqdefault_idsy1j.jpg",
    "https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625589/d_logo_icon_247741_du9ahu.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538447/Copy_of_Medium_logo-black_160x50_aj8png.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1697626795/logo_futtsy.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538138/Screenshot_2023-10-05_213455_dlyfie.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538028/mqdefault_idsy1j.jpg",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696537893/University-of-Birmingham-logo_od1gji.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696537983/e4b96220-cc71-4e7f-946f-4433d1fa2895_xnwxrc.jpg",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538138/Screenshot_2023-10-05_213455_dlyfie.png",
    "https://res.cloudinary.com/dl2adjye7/image/upload/v1696538028/mqdefault_idsy1j.jpg",
    //... More logos
  ];

  return (
    <div className={`mx-auto px-6 lg:px-8  overflow-hidden ${className}`}>
      {/* Centered title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance font-bold">
          They trusted us
        </h2>
      </div>

      {/* Logo ticker */}
      <div className="w-full overflow-hidden mt-20">
        <div className="flex space-x-36 animate-ticker">
          {" "}
          {/* Increase space here */}
          {logos.map((logo, index) => (
            <img
              key={index}
              className="max-h-16 object-contain"
              src={logo}
              alt="Company logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
