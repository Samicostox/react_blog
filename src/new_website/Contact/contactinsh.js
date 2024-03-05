import React, { useState } from 'react';
import ButtonWrapper3 from '../Services/buttons/fillinginvert';

const Contactcl = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        budget: "",
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Submit form data to the server
    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = process.env.REACT_APP_BACK_URL + "api/contact_submit/";

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            // Handle success (e.g., show a success message or redirect)
        } catch (error) {
            console.error('Failed to submit form:', error);
            // Handle error (e.g., show an error message)
        }
    };
    
  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl text-left font-alliance">It’s time to build something exciting!</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white text-left font-alliance">#1 Trusted company to work with students in the uk! Stop dreaming about your project, make it come true! </p>

                    <img className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" />

                    <img className="hidden w-full translate-x-24 translate-y-8 md:block " src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" />
                </div>

                <div className="hidden md:mt-auto md:block">
                    <div className="flex items-center text-yellow">
                        <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                        <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    </div>

                    <blockquote className="mt-6">
                        <p className="text-lg leading-relaxed text-white text-left font-alliance">“The team at Birmingham Innovation Studio are not only skilled software engineers, but also valuable tech consultants with a clear understanding of commercial realities and supporting product strategy. Their insights and expertise have been invaluable to UPlist, helping us to accelerate go-to-market and bring our vision to life.</p>
                    </blockquote>

                    <div className="flex items-center mt-8">
                        <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/dl2adjye7/image/upload/v1709288584/Announce_End_Of_Project_1_eh3hwi.png" alt="" />
                        <div className="ml-4">
                            <p className="text-base font-semibold text-white text-left font-alliance">Ross Derick</p>
                            <p className="mt-px text-sm text-gray-400 text-left font-alliance">CEO, Uplist</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:pl-12">
                <div className="overflow-hidden bg-white rounded-md  text-left">
                    <div className="p-6 sm:p-10  text-left">
                        <h3 className="text-3xl font-semibold text-black text-left font-alliance">Get a free quote</h3>
                        <p className="mt-4 text-base text-gray-600 text-left font-alliance">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>

                        <form action="#" method="POST" className="mt-4">
                            <div className="space-y-6">
                                <div>
                                <label for="" className="font-medium text-gray-900 text-left font-alliance text-lg"> Your name </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your full name"
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                                        />
                                    </div>
                                   
                                </div>

                                <div>
                                    <label for="" className="font-medium text-gray-900 text-left font-alliance text-lg"> Email address </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter your Email"
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                                        />
                                    </div>
                                </div>

                                <div>
            <label htmlFor="phone" className="font-medium text-gray-900 text-left font-alliance text-lg">Phone Number</label>
            <div className="mt-2.5 relative">
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Phone number format: 123-456-7890"
                />
            </div>
        </div>

                                <div>
                                    <label for="" className="text-base font-medium text-gray-900 text-left text-lg"> Project brief </label>
                                    <div className="mt-2.5 relative">
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder="Enter your project brief"
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-teal-500 focus:border-teal-500 caret-teal-500"
                                            rows="4"
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                <button className="font-alliance w-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-teal-800 bg-[linear-gradient(110deg,#004d40,45%,#00897b,55%,#004d40)] bg-[length:200%_100%] px-6 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-teal-50 text-lg font-bold">
                                    Get Free Quote
                                </button>

                               
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="md:hidden text-yellow-400">
                <div className="flex items-center text-yellow-400">
                    <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor ">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-6 h-6  fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-6 h-6 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </div>

                <blockquote className="mt-6">
                    <p className="text-lg leading-relaxed text-white text-left font-alliance">“The team at Birmingham Innovation Studio are not only skilled software engineers, but also valuable tech consultants with a clear understanding of commercial realities and supporting product strategy. Their insights and expertise have been invaluable to UPlist, helping us to accelerate go-to-market and bring our vision to life.</p>
                </blockquote>

                <div className="flex items-center mt-8">
                    <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://res.cloudinary.com/dl2adjye7/image/upload/v1709288584/Announce_End_Of_Project_1_eh3hwi.png" alt="" />
                    <div className="ml-4">
                        <p className="text-base font-semibold text-white text-left font-alliance">Ross Derick</p>
                        <p className="mt-px text-sm text-gray-400 text-left font-alliance">CEO, Uplist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Contactcl;
