import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Content() {
  const initialCode =
    "var message = 'Monaco Editor!'\nconsole.log(message);\n" +
    "// More code lines here...\n" +
    "function example() {\n  console.log('Example function');\n}\n" +
    // ... (rest of your initial code)
    "function example() {\n  console.log('Example function');\n}\n" +
    "var message = 'Monaco Editor!'\nconsole.log(message);\n" +
    "// More code lines here...\n" +
    "function example() {\n  console.log('Example function');\n}\n" +
    // ... (rest of your initial code)
    "function example() {\n  console.log('Example function');\n}\n";
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  const [isEditorInView, setIsEditorInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsEditorInView(entries[0].isIntersecting);
      },
      { threshold: 0.5 } // Adjust if needed
    );

    if (editorRef.current) {
      observer.observe(editorRef.current);
    }

    return () => {
      if (editorRef.current) {
        observer.unobserve(editorRef.current);
      }
    };
  }, [editorRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isEditorInView) return;

      const lines = initialCode.split("\n");
      const numberOfLinesToShow = Math.min(
        lines.length,
        Math.floor(window.scrollY / 75)
      );

      const newCode = lines.slice(0, numberOfLinesToShow).join("\n");
      setCode(newCode);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEditorInView]);

  return (
    <div className="bg-white z-2">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <a href="#" className="inline-flex space-x-6">
                    <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                      What's new
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span>Just shipped v0.1.0</span>
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-left text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                  The right talents for your projects
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                  Based in United Kingdom's Universities, Innovation Studios is
                  a student-led consulting firm offering a blend of technical
                  and business services at competitive rates. Our mission is to
                  equip university students with valuable, paid work experience.
                  At the same time, we aim to give you access to the brightest
                  emerging talents across various disciplines.
                  {/* ... (rest of your text) */}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div ref={editorRef} className="sticky top-0">
            <div className="mt-10 shadow-lg rounded-lg overflow-hidden">
              <Editor
                height="500px"
                language="javascript"
                theme="vs-dark"
                value={"\n" + code}
                options={{
                  inlineSuggest: true,
                  fontSize: "16px",
                  formatOnType: true,
                  autoClosingBrackets: true,
                  minimap: {
                    enabled: false, // Disabling the minimap
                    scale: 0,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
