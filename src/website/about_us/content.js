import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Content() {
  const initialCode =
    "function WorkWithUs() {\n" +
    "  return (\n" +
    "    <div className='work-with-us'>\n" +
    "      <h2>Our Motto</h2>\n" +
    "      <p>Bridging the gap between academia and industry.</p>\n" +
    "      <ul>\n" +
    "        {['Web Development',\n " +
    "          'Data Science',\n " +
    "          'Business Plan'].map((service, index) =>\n" +
    "               <li key={index}>{service}</li>)}\n" +
    "      </ul>\n" +
    "      <blockquote>\n" +
    "        <p>Experiences at Innovation Studios transformed my career.</p>\n" +
    "      </blockquote>\n" +
    "    </div>\n" +
    "  );\n" +
    "}";

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
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8 lg:pl-14 pt-10   mt-10">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-[2fr,2fr] items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0">
          <div
            className="text-base leading-7 text-gray-700 lg:max-w-full pl-4 md:pl-12 lg:pl-48"
            style={{
              paddingLeft: "2%",
              paddingRight: "2%",
            }}
          >
            <p className="mt-12 text-base font-semibold leading-7 text-teal-600 text-left font-alliance">
              Company values
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance max-w-xl">
              Bridging The Gap Between University and Industry
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                We are a pioneering student-led consulting firm with teams of
                students at the Universities of Birmingham and Warwick. Our
                mission follows our motto which aims to bridge the gap between
                academia and industry. We want to provide a unique platform
                where businesses get a chance to meet and work with the
                brilliant minds of tomorrow. We are not just a consulting firm;
                we are a vibrant community where the next generation of workers
                are nurtured and formed with real work experience. Where
                companies gain access to young, dynamic, and meticulously
                trained talents. Since the start, our journey has been driven by
                a commitment to unlock the potential of university talents and
                provide them with the tools and resources to express their
                skills. While simultaneously offering businesses high-quality,
                competitively priced technical and business services.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-teal-600 text-left font-alliance">
              Company vision
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance max-w-xl">
              Providing Higher Value with Younger Minds
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                Dive into a pool of diverse services tailored to meet your
                business needs while working together with the next generation
                of professionals. Our offerings are broad and span across : web
                and mobile development, data science, business planning,
                benchmarking, and strategic services… Over the last year, we
                have had the privilege of developing MVPs for early-stage
                startups to launch them into the market and working with larger
                corporations in market research and strategic planning for their
                future products. Our unique model allows us to provide services
                at highly competitive prices whilst maintaining a quality that
                aligns with industry standards. By choosing us you do not only
                get a low-cost service, but you also choose to invest in the
                future. Today’s student is tomorrow’s employee; we represent
                ambitious, passionate students thriving to provide innovative
                solutions for your company.
              </p>
            </div>
            <p className="mt-12 text-base font-semibold leading-7 text-teal-600 text-left font-alliance">
              Company meaning
            </p>
            <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance max-w-xl">
              Empowering Tomorrow's Leaders
            </h1>
            <div className="max-w-xl">
              <p className="mt-8 mb-8 text-left font-alliance font-light">
                For students, Innovation Studios is more than just a job; it
                represents a stepping stone to a bright and promising career. By
                engaging in real-world projects as consultants, our students
                gain invaluable industry exposure and an opportunity to apply
                their academic knowledge in a practical context. The experiences
                we provide go beyond the limits of employees; they are a rich
                blend of learning, networking, and skill enhancement, where both
                hard and soft skills are polished. The feedback from our student
                consultants has been overwhelmingly positive. Not only has our
                company prepared them better for their career, but they have
                expressed a thrill and joy to be part of a community, working
                together and helping each other become the better version of
                themselves. We are not just offering a job; we are crafting
                experiences that shape careers and futures.
              </p>
            </div>
          </div>

          <div className="hidden sm:block lg:pr-4 " style={{ height: "100%" }}>
            <div
              ref={editorRef}
              className="sticky top-[25vh]  shadow-lg rounded-lg overflow-hidden"
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
