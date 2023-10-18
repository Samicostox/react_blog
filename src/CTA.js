export default function CTA() {
  return (
    <div className="max-w-none w-full bg-green-200">
      <div className="mx-auto max-w-screen-xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to dive in?
          <br />
          Start using our software today!.
        </h2>
        <div className="mt-10 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:mt-0 lg:flex-shrink-0">
          <a
            href="/newhome"
            className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 mb-4 lg:mb-0 lg:mr-4" // Added lg:mr-4 here
          >
            Get started
          </a>
          <a href="/newhome" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
