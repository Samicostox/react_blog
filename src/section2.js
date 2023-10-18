import {
  DocumentTextIcon,
  CogIcon,
  ServerIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "AI-Powered.",
    description:
      "Leverage machine learning algorithms for smarter and faster document generation.",
    icon: ServerIcon,
  },
  {
    name: "Document Templates.",
    description:
      "Choose from a variety of industry-standard technical document templates.",
    icon: DocumentTextIcon,
  },
  {
    name: "Customizable.",
    description:
      "Easily customize document structure and content to suit your project’s requirements.",
    icon: CogIcon,
  },
  {
    name: "Secure Data.",
    description: "Your data is safe with industry-leading security protocols.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Real-Time Collaboration.",
    description: "Collaborate in real-time with team members.",
    icon: LifebuoyIcon,
  },
  {
    name: "Data Integration.",
    description:
      "Import data directly from your databases to populate your technical documents.",
    icon: CpuChipIcon,
  },
];

export default function Section2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-700 font-alliance">
            Create Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-alliance">
            Technical Documents Generator.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-alliance font-light">
            Simplify your documentation process with our AI-powered,
            customizable technical document generator.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1693728545/Untitled_design_4_pkyns9.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 font-alliance"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 font-alliance text-left">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-green-900 font-alliance text-left">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-green-800 font-alliance"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline font-alliance font-light ">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
