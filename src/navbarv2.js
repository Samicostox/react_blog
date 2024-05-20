import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  MapIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  PresentationChartBarIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Recruitment", href: "/recruitment" },
  { name: "Past Projects", href: "/past-projects2" },
  { name: "Internal Tool", href: "/software" },
  { name: 'Blogs', href: '/blogs' },
];

const services = [
  {
    name: "Mobile Development",
    description: "Elevate your mobile app experience with us.",
    href: "/service-mobile",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Web Development",
    description: "Captivate and convert with our striking websites.",
    href: "/service-web",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Data Science",
    description: "Turn data into decisive insights effortlessly.",
    href: "/service-data",
    icon: CircleStackIcon,
  },
  {
    name: "Business Plan",
    description: "Navigate towards success with our bespoke business plans.",
    href: "/service-businessplan",
    icon: MapIcon,
  },
  {
    name: "Strategy",
    description: "Plan strategically for impactful, lasting success.",
    href: "/service-strategy",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Benchmarking",
    description: "Stay ahead with our innovative benchmarking services.",
    href: "/service-benchmarking",
    icon: MagnifyingGlassIcon,
  },
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`sticky absolute inset-x-0 top-0 z-50 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-24 w-auto"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697027873/Design_sans_titre_3_tffvky.png"
              alt="Innovation Studios logo"
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
        <Popover className="hidden lg:flex relative lg:pr-10">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="/services2"
              className="font-alliance flex items-center gap-x-1 text-sm  leading-6 text-gray-900"
            >
              Services
            </a>

            <Transition
              show={isHovered}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="font-alliance absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className=" group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="font-alliance block font-semibold text-gray-900 text-left"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className=" font-alliance mt-1 text-gray-600 text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </div>
        </Popover>
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
              className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
            >
              Software
            </button>
          ) : (
            <button
              onClick={() => navigate("/contact2")}
              className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
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
              className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
            >
              Log out{" "}
              <span className="text-white" aria-hidden="true">
                &rarr;
              </span>
            </button>
          ) : (
            <button
              onClick={() => navigate("/bookcall")}
              className="rounded-md bg-teal-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
            >
              Discovery Call{" "}
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
                src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697027873/Design_sans_titre_3_tffvky.png"
                alt="Innovation Studios logo"
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
                    className="font-alliance -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2 py-6">
                {services.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-alliance group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className=" h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 space-y-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => navigate("/newhome")}
                    className="rounded-md bg-teal-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance mb-2"
                  >
                    Software
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/contact2")}
                    className="rounded-md bg-teal-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance mb-2"
                  >
                    Contact Us
                  </button>
                )}
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="rounded-md bg-teal-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
                  >
                    Log out{" "}
                    <span className="text-white" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/bookcall")}
                    className="rounded-md bg-teal-800 w-full px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 font-alliance"
                  >
                   Discovery Call{" "}
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
