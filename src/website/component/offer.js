export default function Offer({ steps }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <h1 className="text-4xl font-bold text-center mb-8 font-alliance font-bold">
          This Services Provides
        </h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3 mt-20">
          {steps.map((step) => (
            <div
              key={step.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img
                    className="mx-auto h-16 w-1-"
                    src={step.imageSrc}
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                <h3 className="text-sm font-bold text-gray-900 font-alliance">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-alliance font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
