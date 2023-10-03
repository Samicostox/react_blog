import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import tomorrowNight from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";

const HeaderT = () => {
    return (
        <div className="mx-auto max-w-14xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40 max-w-[1800px] ">
          <div className="px-6 lg:px-0 lg:pt-4 ">
            <div className="mx-auto max-w-[1800px]">
              <div className="max-w-full px-6 lg:px-8 pr-16 "> {/* Modified this line */}
                {" "}
                {/* Removed max-w-lg to make title and paragraph wider */}
                <div className="mt-24 sm:mt-32 lg:mt-16 text-left">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm leading-6 text-green-600 ring-1 ring-inset ring-green-600/10 text-left font-alliance font-bold">
                      Our Services
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-4xl font-alliance font-bold tracking-tight text-gray-900 sm:text-6xl text-left w-full max-w-[600px]">
                  {" "}
                  {/* Added w-full to make title wider */}
                  Our Pool of Talents in the West Midlands
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-left w-full font-alliance font-light">
                  {" "}
                  {/* Added w-full to make paragraph wider */}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.Anim aute id magna aliqua ad ad non
                  deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                  sunt amet fugiat veniam occaecat fugiat aliqua.Anim aute id
                  magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                  cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                  fugiat aliqua.Anim aute id magna aliqua ad ad non deserunt
                  sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.Anim aute id magna aliqua
                  ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat
                  aliqua.Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                  irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                  veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 font-alliance font-bold"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="text-sm font-alliance font-bold leading-6 text-gray-900"
                  >
                    Our Software <span aria-hidden="true ">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-green-600 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-green-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6 text-left ">
                        {" "}
                        {/* Added inline style to make it wider */}
                        <SyntaxHighlighter
                          language="react"
                          style={tomorrowNight}
                          customStyle={{
                            backgroundColor: "transparent", // Set background to transparent
                          }}
                          codeTagProps={{
                            style: {
                              color: "white", // Set the text color to white
                            },
                          }}
                        >
                          {`
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div><div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
  );
}
        `}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default HeaderT;
