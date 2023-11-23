import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'LeadGeneration', href: '/software' },
  { name: 'Contact', href: '/contact2' },
  { name: 'Software', href: '/newhome' },
  { name: 'Team', href: '/team' },
  { name: 'Past Projects', href: '/past-projects' },
  { name: 'Blogs', href: '/blogs' },
  
];

const Navbar = () => {
  const navigate = useNavigate();  // Initialize useNavigate
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleNavigation = (href, requiresAuth) => {
    if (requiresAuth && !isLoggedIn) {
      navigate('/signin');  // Redirect to login if not authenticated
      return;
    }
    navigate(href);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-24 w-auto"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1696254880/Logos_1_erqpem.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              onClick={() => handleNavigation(item.href, item.requiresAuth)}
              className="text-sm leading-6 text-gray-900 cursor-pointer font-alliance"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isLoggedIn ? (
            <button onClick={() => {
              handleLogout();
              navigate('/');
            }} className="text-sm font-semibold leading-6 text-gray-900 font-alliance font-bold">
              Log out <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <a onClick={() => navigate("/signin")} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer font-alliance font-bold">
              Get Started <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-24 w-auto"
                src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1696254880/Logos_1_erqpem.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => handleNavigation(item.href, item.requiresAuth)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log out <span aria-hidden="true">&rarr;</span>
                  </button>
                ) : (
                  <a
                    onClick={() => navigate("/signin")}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer "
                  >
                    Get Started <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );

 };

  export default Navbar;