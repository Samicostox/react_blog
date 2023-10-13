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

      const characters = initialCode.split("");
      const numberOfCharactersToShow = Math.min(
        characters.length,
        Math.floor(window.scrollY / 5)
      );

      const newCode = characters.slice(0, numberOfCharactersToShow).join("");
      setCode(newCode);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEditorInView]);

  return (
    <div className="relative  top-0 right-0 left-0 mr-10 z-1 justify-center pt-28 pb-28">
      <div className="mx-auto max-w-[1800px]  ">
        <div className="mx-auto grid grid-cols-[2fr,2fr] items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0">
          <div className="text-base leading-7 text-gray-700 lg:max-w-full pl-32">
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Making you Industry Ready
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Making you Industry Ready
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className="mt-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Making you Industry Ready
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
          </div>

          <div className="lg:pr-4 h-[1300px]">
            <div
              ref={editorRef}
              className="sticky top-[20vh] mt-10 shadow-lg rounded-lg overflow-hidden "
              style={{
                backgroundColor: "#1E1E1E",
                borderLeft: "50px solid #16a34a",
                borderTop: "50px solid #16a34a",
                borderRadius: "25px 25px 25px 25px", // Added border-radius
              }}
            >
              <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400 rounded-tl-lg">
                <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white rounded-tl-lg">
                  NotificationSetting.jsx
                </div>
                <div className="border-r border-gray-600/10 px-4 py-2">
                  App.jsx
                </div>
              </div>
              <div
                className="pt-8 rounded-tl"
                style={{
                  backgroundColor: "#1E1E1E",
                  borderRadius: "25px 0px 0px 0px",
                }}
              >
                <Editor
                  height="500px"
                  language="javascript"
                  theme="vs-dark"
                  value={code}
                  options={{
                    inlineSuggest: true,
                    fontSize: "16px",
                    formatOnType: true,
                    autoClosingBrackets: true,
                    minimap: {
                      enabled: false, // Disabling the minimap
                      scale: 0,
                    },
                    scrollbar: {
                      vertical: "hidden",
                      horizontal: "hidden",
                    },
                    scrollBeyondLastLine: false, // Prevents scrolling beyond the last line in the editor
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
