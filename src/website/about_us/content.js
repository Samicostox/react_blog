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
    <div className="relative top-0 right-0 left-0 mr-10 z-1 justify-center pt-28 pb-28 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2fr,2fr] items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0">
          <div
            className="text-base leading-7 text-gray-700 lg:max-w-full pl-4 sm:pl-8 md:pl-12 lg:pl-48"
            style={{
              paddingLeft: "13%",
              paddingRight: "9%",
            }}
          >
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Bridging The Gap Between University and Industry
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Welcome to [Your Company Name], a pioneering student-led
                consulting firm born from the innovative minds at the University
                of Birmingham and recently expanded to the University of
                Warwick. Our mission is deeply rooted in bridging the gap
                between academia and industry, providing a unique platform where
                businesses meet the brilliant minds of tomorrow. We are not just
                a consulting firm; we are a vibrant community where the leaders
                of the future are nurtured and where companies gain access to
                fresh, dynamic, and meticulously trained talent. From our
                inception to our recent expansion, our journey has been driven
                by a commitment to unlocking the potential of university talents
                and providing them with a platform to shine, while
                simultaneously offering businesses high-quality, competitively
                priced technical and business services.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Providing you Higher Value with Younger Minds
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Dive into a pool of diverse services tailored to meet your
                business needs, all while championing the next generation of
                professionals. Our offerings span across web and mobile
                development, data science, business planning, benchmarking, and
                strategic services, to name a few. We've had the privilege of
                developing MVPs for early-stage startups, propelling them into
                the market, and assisting larger corporations in market research
                and strategic planning for their future products. Our unique
                model allows us to provide services at highly competitive
                prices, yet maintaining a quality that aligns with industry
                standards. By choosing us, you’re not just getting a service;
                you’re investing in the future of passionate students and
                gaining access to innovative solutions that are meticulously
                supervised by our experienced main team.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-green-600 text-left font-alliance">
              Company values
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
              Empowering Tomorrow's Leaders
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                For students, [Your Company Name] is more than just a job; it’s
                a stepping stone to a bright and promising future. Engaging in
                real-world projects as consultants, our students gain invaluable
                industry exposure and an opportunity to apply their academic
                knowledge in a practical context. The experiences we provide go
                beyond mere employment; they are a rich blend of learning,
                networking, and skill enhancement, where both hard and soft
                skills are polished. The feedback from our student consultants
                has been overwhelmingly positive, citing immense learning and
                enjoyment from their time working with us. We are not just
                offering a job; we are crafting experiences that shape careers
                and futures.
              </p>
            </div>
          </div>

          <div className="hidden sm:block lg:pr-4 " style={{ height: "100%" }}>
            <div
              ref={editorRef}
              className="sticky top-[25vh] m-4 sm:m-10  shadow-lg rounded-lg overflow-hidden"
              style={{
                backgroundColor: "#1E1E1E",
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
              <div className="pt-3 bg-black">
                <Editor
                  height="390px"
                  language="javascript"
                  value={code}
                  options={{
                    inlineSuggest: true,
                    fontSize: "16px",
                    formatOnType: true,
                    theme: "hc-black",
                    autoClosingBrackets: true,
                    minimap: {
                      enabled: false,
                      scale: 0,
                    },
                    scrollbar: {
                      vertical: "hidden",
                      horizontal: "hidden",
                    },
                    scrollBeyondLastLine: false,
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
