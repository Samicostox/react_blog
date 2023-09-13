import { GlobeAmericasIcon, KeyIcon, LockClosedIcon, ClipboardIcon, BriefcaseIcon, ArrowRightIcon, DocumentIcon, DocumentArrowDownIcon,InformationCircleIcon } from '@heroicons/react/20/solid';
import AlertBox from './alert'; 

import TextWithImage from './textwithimage';
import ProgressComponent from './progresspage';
const timeline = [
    {
      id: 1,
      content: 'Visit the Google Cloud Console: Go to the ' ,
      target: '',
      href: 'https://console.cloud.google.com/apis/dashboard?project=neural-water-391008',
      datetime: '1 min',
      icon: GlobeAmericasIcon,
      iconBackground: 'bg-green-200',
    },
    {
      id: 2,
      content: 'Create a New Project: Click on the "Select a project" dropdown at the top right, then click on "New Project" and follow the prompts.',
      target: '',
      href: '#',
      datetime: '2 min',
      icon: BriefcaseIcon,
      iconBackground: 'bg-green-300',
    },
    {
      id: 3,
      content: 'Enable Google Maps API: Navigate to "APIs & Services" > "Dashboard", then click on "+ ENABLE APIS AND SERVICES". Search for "Google Maps JavaScript API" and enable it.',
      target: '',
      href: '#',
      datetime: '3 min',
      icon: KeyIcon,
      iconBackground: 'bg-green-400',
    },
    {
      id: 4,
      content: 'Generate API Key: After enabling the API, go to "Credentials" and click on "Create credentials". Choose "API Key" from the dropdown.',
      target: '',
      href: '#',
      datetime: '1 min',
      icon: KeyIcon,
      iconBackground: 'bg-green-500',
    },
    {
      id: 5,
      content: 'Restrict API Key: It\'s a good practice to restrict your API key to specific services and IP addresses. You can do this under "API restrictions" in the "Credentials" tab.',
      target: '',
      href: '#',
      datetime: '2 min',
      icon: LockClosedIcon,
      iconBackground: 'bg-green-600',
    },
    {
      id: 6,
      content: 'Copy API Key: Once generated, copy the API key for use in the Venue Fetcher application.',
      target: '',
      href: '#',
      datetime: '1 min',
      icon: ClipboardIcon,
      iconBackground: 'bg-green-700',
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Doc2({setTocold,setToDoc1, setToDoc2 ,setToDoc3}) {
  const imageSrc = "https://res.cloudinary.com/dl2adjye7/image/upload/v1694524153/radiant-gradient_erbmo7.png";
  const text = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.";
  const title = "Venues Fetcher"

  return (
    <div className="w-full min-w-full">
    <TextWithImage imageSrc={imageSrc} text={text} title={title} />
  <div className="bg-white px-6 py-32 lg:px-8">
    
    <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p className="text-left text-base font-semibold leading-7 text-green-700">Venues Fetcher</p>
      <h1 className="text-left mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Introduction</h1>
      <p className="text-left mt-6">
            Welcome to Venues Fetcher, a comprehensive tool designed to help you find and gather information about various venues. Whether you're looking for restaurants, cafes, or other types of establishments, this guide will walk you through the process.
          </p>


          <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">1. How to Obtain a Google Maps API Key</h2>
          <p className="text-left mt-6">
            Obtaining a Google Maps API key is the first crucial step in using the Venue Fetcher application. This key allows you to access Google's extensive database of geographical information, which is essential for finding venues. Follow the steps below to obtain your API key:
          </p>
          <div className="flow-root mt-10 text-left">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                          )}
                        >
                          <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        {event.content}{' '}
                        {event.id === 1 && <a href={event.href} className="font-medium text-green-700">Google Cloud Console</a>} {/* Making Google Cloud Console a green clickable link */}
                      </p>
                    </div>
                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                          <time dateTime={event.datetime}>{event.datetime}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <AlertBox 
  title="Caution: Keep Your API Key Private" 
  content="Be extremely careful not to share your Google Maps API key with anyone. Exposing your API key publicly can lead to unauthorized usage and potential billing charges." 
/>

        <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">2. How to Use the Venue Fetcher</h2>
        <p className="text-left mt-6">
            Once you have your Google Maps API key, you're ready to start using <a onClick={() => setTocold()} className="text-green-500" target="_blank" rel="noopener noreferrer">cold outreach generator</a>. This section will guide you through the steps to effectively use the application to find venues based on your criteria.
          </p>
          <div className="text-left">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <KeyIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Login to the Application:</strong> Use your credentials to log in to the Venue Fetcher application.
              </span>
            </li>
            <li className="flex gap-x-3">
              <BriefcaseIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Navigate to the Venue Fetcher Tool:</strong> Once logged in, find the Venue Fetcher section on the dashboard or menu.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ArrowRightIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Enter API Key:</strong> Paste your Google Maps API key in the "API Key" input field.
              </span>
            </li>
            <li className="flex gap-x-3">
              <DocumentIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Enter City Name:</strong> Type the name of the city where you want to find venues in the "City Name" input field.
              </span>
            </li>
            <li className="flex gap-x-3">
              <ClipboardIcon className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Enter Keyword:</strong> Type a keyword to search for the types of venues you are interested in (e.g., "restaurant", "cafe").
              </span>
            </li>
            <li className="flex gap-x-3">
              <DocumentArrowDownIcon  className="mt-1 h-5 w-5 flex-none fill-green-800" aria-hidden="true" />
              <span>
                <strong className="text-left font-semibold text-green-800">Download CSV:</strong> After the tool has finished running, you'll have the option to download a CSV file containing the fetched venue details.
              </span>
            </li>
          </ul>
        </div>
        <div className="text-left">

        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694514707/leads_1_bufgyu.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="text-left mt-0.5 h-5 w-8 flex-none text-gray-300" aria-hidden="true" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>

</div>


        
        <h2 className="text-left mt-16 text-2xl font-bold tracking-tight text-green-900">3. Understanding the Output</h2>
        <p className="text-left mt-6">
            After you've successfully fetched data, you'll receive a CSV file with various details about the venues. This section will help you understand what each column in the output file represents.
          </p>
          <ol className="list-decimal list-inside mt-6 text-left space-y-4">
  <li><span className="text-green-800 font-bold">Name:</span> The name of the venue.</li>
  <li><span className="text-green-800 font-bold">Address:</span> The address of the venue.</li>
  <li><span className="text-green-800 font-bold">Phone Number:</span> The phone number of the venue (if available).</li>
  <li><span className="text-green-800 font-bold">Website:</span> The website of the venue (if available).</li>
  <li><span className="text-green-800 font-bold">Type:</span> The main type or category of the venue.</li>
  <li><span className="text-green-800 font-bold">Opening Hours:</span> Opening hours for each day of the week.</li>
</ol>
        
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1694456944/csvvvv_kzy03m.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="text-left mt-0.5 h-5 w-8 flex-none text-gray-300" aria-hidden="true" />
            Faucibus commodo massa rhoncus, volutpat.
          </figcaption>
        </figure>
        




   
        
    </div>
    <div className="mt-10">
    <ProgressComponent setTocold={setTocold} setToDoc1 = {setToDoc1} setToDoc2 = {setToDoc2} setToDoc3 = {setToDoc3} currentPage={1} />
    </div>
  </div>
 
  </div>
)
}
