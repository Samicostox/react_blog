import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import PDF from "./pdf";
import Message from "./message";
import GoogleMap from "./googlemap";
import Home from "./Home";
import Store from "./stored";
import Displaycsv from "./displaycsv";
import Documents from "./documents";
import Repo from "./repo";
import Doc1 from "./documentations/doc1";

import NewPDF from "./technical_documents/newpdf";
import PDFViewer from "./technical_documents/embed_pdf";
import Doc2 from "./documentations/doc2";
import Doc3 from "./documentations/doc3";
import ModifyPDF from "./technical_documents/modify_pdf";
import DisplayPDF from "./displaypdf";

const navigation = [
  { name: "Technical documents", href: "#", icon: HomeIcon, current: true },
  { name: "Email Generation", href: "#", icon: UsersIcon, current: false },
  { name: "Cold Outreach", href: "#", icon: FolderIcon, current: false },
  { name: "PDFs", href: "#", icon: CalendarIcon, current: false },
  { name: "CSV", href: "#", icon: CalendarIcon, current: false },
  { name: "Repo", href: "#", icon: CalendarIcon, current: false },
];

const navigation2 = [
  {
    name: "Cold Approach",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Venues Fetcher",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Email Generation Guide",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Doc4", href: "#", icon: DocumentDuplicateIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Newhome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("Technical documents");
  const name_user = localStorage.getItem("name");
  const profile_pic = localStorage.getItem("profilepicture");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  function setToPDF() {
    setActiveContent("Technical documents");
  }

  function setToCold() {
    setActiveContent("Cold Outreach");
  }

  function setToCSV() {
    setActiveContent("Email Generation");
  }

  function setToDoc1() {
    setActiveContent("Cold Approach");
  }

  function setToDoc2() {
    setActiveContent("Venues Fetcher");
  }

  function setToDoc3() {
    setActiveContent("Email Generation Guide");
  }
  function setToModifyPDF() {
    setActiveContent("PDFs");
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="relative">
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-50 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button
                          type="button"
                          className="-m-2.5 p-2.5"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                      <div className="flex h-16 shrink-0 items-center">
                        <button type="button" onClick={() => navigate("/")}>
                          <img
                            className="h-8 w-auto"
                            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695632928/sami8694_Minimal_logo_tech_students_network_green_logo_white_ba_e6513ada-90f3-453c-aea9-fbd2672f25a9_a0nnlk.png  "
                            alt="Your Company"
                          />
                        </button>
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <div className="text-lg font-semibold leading-6 text-gray-900 mb-4">
                          Software
                        </div>
                        <ul
                          role="list"
                          className="flex flex-1 flex-col gap-y-7"
                        >
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <button
                                    onClick={() => {
                                      setActiveContent(item.name);
                                      setSidebarOpen(false); // Close the sidebar
                                    }}
                                    className={classNames(
                                      item.current
                                        ? "bg-gray-50 text-green-800"
                                        : "text-gray-700 hover:text-green-700 hover:bg-gray-50",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    )}
                                  >
                                    <item.icon
                                      className={classNames(
                                        item.current
                                          ? "text-green-700"
                                          : "text-gray-400 group-hover:text-green-600",
                                        "h-6 w-6 shrink-0"
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <div className="text-lg font-semibold leading-6 text-gray-900 mb-4 text-left">
                              Doc
                            </div>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation2
                                .filter((item) => item.name.startsWith("Doc"))
                                .map((item) => (
                                  <li key={item.name}>
                                    <button
                                      onClick={() =>
                                        setActiveContent(item.name)
                                      }
                                      className={classNames(
                                        activeContent === item.name
                                          ? "bg-gray-50 text-green-600"
                                          : "text-gray-700 hover:text-green-600 hover:bg-gray-50",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          activeContent === item.name
                                            ? "text-green-600"
                                            : "text-gray-400 group-hover:text-green-600",
                                          "h-6 w-6 shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </button>
                                  </li>
                                ))}
                            </ul>
                          </li>
                          {/* ...existing code */}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
              <div className="flex h-16 shrink-0 items-center">
                <button type="button" onClick={() => navigate("/")}>
                  <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695632928/sami8694_Minimal_logo_tech_students_network_green_logo_white_ba_e6513ada-90f3-453c-aea9-fbd2672f25a9_a0nnlk.png"
                    alt="Your Company"
                  />
                </button>
              </div>
              <nav className="flex flex-1 flex-col">
                <div className="text-lg font-semibold leading-6 text-gray-900 mb-4 text-left">
                  Software
                </div>
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => setActiveContent(item.name)}
                            className={classNames(
                              activeContent === item.name
                                ? "bg-gray-50 text-green-600"
                                : "text-gray-700 hover:text-green-600 hover:bg-gray-50",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                activeContent === item.name
                                  ? "text-green-600"
                                  : "text-gray-400 group-hover:text-green-600",
                                "h-6 w-6 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-lg font-semibold leading-6 text-gray-900 mb-4 text-left">
                      Doc
                    </div>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation2
                        .filter((item) => item.name.startsWith(""))
                        .map((item) => (
                          <li key={item.name}>
                            <button
                              onClick={() => setActiveContent(item.name)}
                              className={classNames(
                                activeContent === item.name
                                  ? "bg-gray-50 text-green-600"
                                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50",
                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  activeContent === item.name
                                    ? "text-green-600"
                                    : "text-gray-400 group-hover:text-green-600",
                                  "h-6 w-6 shrink-0"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </li>
                  {/* ... other code */}
                </ul>
                <div className="-mx-6 mt-auto mb-8">
                  <a
                    href="/newhome"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={profile_pic}
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">{name_user}</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
              Software
            </div>
            <a href="/newhome">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src={profile_pic}
                alt=""
              />
            </a>
          </div>

          <div className="flex ml-auto lg:ml-72 h-full justify-center items-center">
            {activeContent === "Technical documents" && (
              <NewPDF setToModifyPDF={setToModifyPDF} />
            )}
            {activeContent === "Email Generation" && (
              <Message setToDoc3={setToDoc3} />
            )}
            {activeContent === "Cold Outreach" && (
              <GoogleMap setToDoc3={setToDoc2} />
            )}
            {activeContent === "PDFs" && <DisplayPDF setToPDF={setToPDF} />}
            {activeContent === "CSV" && <Displaycsv setToCSV={setToCSV} />}
            {activeContent === "Repo" && <Repo />}

            {activeContent === "Cold Approach" && (
              <Doc1
                setTocold={setToCold}
                setToCSV={setToCSV}
                setToDoc1={setToDoc1}
                setToDoc2={setToDoc2}
                setToDoc3={setToDoc3}
              />
            )}
            {activeContent === "Venues Fetcher" && (
              <Doc2
                setTocold={setToCold}
                setToDoc1={setToDoc1}
                setToDoc2={setToDoc2}
                setToDoc3={setToDoc3}
              />
            )}
            {activeContent === "Email Generation Guide" && (
              <Doc3
                setToCSV={setToCSV}
                setTocold={setToCold}
                setToDoc1={setToDoc1}
                setToDoc2={setToDoc2}
                setToDoc3={setToDoc3}
              />
            )}
            {activeContent === "Doc4" && (
              <Doc1
                setTocold={setToCold}
                setToCSV={setToCSV}
                setToDoc1={setToDoc1}
                setToDoc2={setToDoc2}
                setToDoc3={setToDoc3}
              />
            )}

            {activeContent === "Modify PDf" && <ModifyPDF />}
          </div>
        </div>
      </div>
    </>
  );
}

const DashboardComponent = () => <div>Your Dashboard Content</div>;
const TeamComponent = () => <div>Your Team Content</div>;
const ProjectsComponent = () => <div>Your Projects Content</div>;
const CalendarComponent = () => <div>Your Calendar Content</div>;
const DocumentsComponent = () => <div>Your Documents Content</div>;
const ReportsComponent = () => <div>Your Reports Content</div>;
