import { GlobeAmericasIcon, KeyIcon, LockClosedIcon, ClipboardIcon, BriefcaseIcon, ArrowRightIcon, DocumentIcon, DocumentArrowDownIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import LottiePlayer from 'react-lottie-player';
import animationData from './animation_lmf6j0mp.json';
import TextWithImage from './textwithimage';
import ProgressComponent from './progresspage';

// Add this to your CSS or inline styles
const flexContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
};

const flexItemStyle = {
  flex: '1 1 auto',
};

const lottieStyle = {
  flex: 'none', // This will prevent the Lottie animation from growing or shrinking
  width: 400,
  height: 400,
};

export default function Doc3({setToCSV, setTocold,setToDoc1, setToDoc2 ,setToDoc3}) {
  const imageSrc = "https://res.cloudinary.com/dl2adjye7/image/upload/v1694524253/flat-mountains_cptgfh.png";
  const text = "This documentation provides a step-by-step guide on how to gather raw data, use the Lead Generation Tool, and understand the output.";
  const title = "Email Generation Guide";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="w-full min-w-full">
      <TextWithImage imageSrc={imageSrc} text={text} title={title} />
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-left text-base font-semibold leading-7 text-green-700">Email Generator</p>
        <h1 className="text-left mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Introduction</h1>
        <p className="text-left mt-6 text-xl leading-8">
        add paragrapgh here 
        </p>
          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900 ">Step 1: Gather Raw Data</h2>
          <p className="text-left mt-6 ">
            Begin by generating a specific Google search query using the Google search generator tool. This will help you gather raw lead data effectively.
          </p>

          <ol className="list-decimal list-inside mt-6 text-left space-y-4">
            <li><span className="text-green-800 font-bold">Generating Google Search Query:</span> Use the <a href="https://recruitin.net/?country=uk&job-title=Founder&include-keywords=London&exclude-keywords=&education=all&company=&network=LinkedIn&savedSearchLabel=&submit=true" className="text-green-500" target="_blank" rel="noopener noreferrer">Google search generator</a> to create a specific query.</li>
            <li><span className="text-green-800 font-bold">Perform the Search:</span> Copy and paste this search query into Google.</li>
            <li><span className="text-green-800 font-bold">Gather the data:</span> Copy all the data from the Google search results.</li>
          </ol>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694600143/xaxxax_bpyvmz.png"
              alt="Google Search Data"
            />
          </figure>

          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">Step 2: Use the Tool</h2>
          <p className="text-left mt-6">
            Once you have gathered the raw data, navigate to the <a onClick={() => setToCSV()} className="text-green-500" target="_blank" rel="noopener noreferrer">Email Generator Tool</a>. Here's how to use the tool effectively:
          </p>

          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <KeyIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Login:</strong> Use your credentials to log in.
              </span>
            </li>
            <li className="flex gap-x-3">
              <DocumentIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Input Area:</strong> Paste the raw data from Google in the provided text area.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ClipboardIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Personalization:</strong> Opt for email personalization if desired.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ArrowRightIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Submit:</strong> Click the "Process" button to begin analysis.
              </span>
            </li>
          </ul>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694599601/doc3_2_yybj6j.png"
              alt="Lead Generation Tool Interface"
            />
          </figure>

          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">Step 3: Understanding the Output</h2>
          <p className="text-left mt-6">
            After processing, the tool provides an output CSV file. This file contains detailed information about the leads. Here's what to expect in the output:
          </p>

          <ol className="list-decimal list-inside mt-6 text-left space-y-4">
            <li><span className="text-green-800 font-bold">Mixed:</span> Contains miscellaneous information gathered.</li>
            <li><span className="text-green-800 font-bold">Email:</span> Email addresses of the leads.</li>
            <li><span className="text-green-800 font-bold">Companies:</span> Companies where these individuals work.</li>
            <li><span className="text-green-800 font-bold">PersonNames:</span> Names of the individuals.</li>
            <li><span className="text-green-800 font-bold">Mail:</span> Contains personalized email text if chosen.</li>
          </ol>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694599604/doc3_3_rxdd6m.png"
              alt="Output CSV File"
            />
          </figure>
          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">Step 4: Cold Outreach</h2>
          <p className="text-left mt-6 ">
          Congratulations on successfully gathering your lead data and understanding the output! Now that you have all the essential information, it's time to reach out to your leads effectively. To learn the best practices for cold outreach, don't miss our comprehensive <a onClick={() => setTocold()} className="text-green-500" target="_blank" rel="noopener noreferrer">Cold Outreach Tutorial</a>. It will guide you through crafting compelling messages, timing your outreach, and much more!
          </p>
        </div>
        <div className="mt-10">
    <ProgressComponent setTocold={setTocold} setToDoc1 = {setToDoc1} setToDoc2 = {setToDoc2} setToDoc3 = {setToDoc3} currentPage={2 } />
    </div>
      </div>
    </div>
  )
}
