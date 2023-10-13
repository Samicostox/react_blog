import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "LeadGeneration", href: "/software" },
  { name: "Contact", href: "/contact2" },
  { name: "Team", href: "/team" },
  { name: "Past Projects", href: "/past-projects" },
];

const Navbarv2 = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        // You can adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleNavigation = (href, requiresAuth) => {
    if (requiresAuth && !isLoggedIn) {
      navigate("/signin");
      return;
    }
    navigate(href);
  };
  const [scrolled, setScrolled] = useState(false);

  return (
    <header
      className={`sticky absolute inset-x-0 top-0 z-50  ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-24 w-auto"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697027873/Design_sans_titre_3_tffvky.png"
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
          {isLoggedIn ? (
            <button
              onClick={() => navigate("/newhome")}
              className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
            >
              Software
            </button>
          ) : (
            <button
              onClick={() => navigate("/contact2")}
              className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
            >
              Contact Us
            </button>
          )}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
              className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
            >
              Log out{" "}
              <span className="text-white" aria-hidden="true">
                &rarr;
              </span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/signin")}
              className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
            >
              Get Started{" "}
              <span className="text-white" aria-hidden="true">
                &rarr;
              </span>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
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
                    onClick={() =>
                      handleNavigation(item.href, item.requiresAuth)
                    }
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 space-y-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => navigate("/newhome")}
                    className="rounded-md bg-green-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance mb-2"
                  >
                    Software
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/contact2")}
                    className="rounded-md bg-green-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance mb-2"
                  >
                    Contact Us
                  </button>
                )}
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-green-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
                  >
                    Log out{" "}
                    <span className="text-white" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/signin")}
                    className="rounded-md bg-green-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 font-alliance"
                  >
                    Get Started{" "}
                    <span className="text-white" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbarv2;
