const timeline = [
  {
    name: "Birmingham Innovation Studio",
    description:
      "After completing several summer internships and recognizing the gap between theoretical knowledge gained at university and the practical skills demanded in the industry, we launched our first Innovation Studio at the University of Birmingham.",
    date: "Aug 2022",
    dateTime: "2022-08",
  },
  {
    name: "Services and Client Satisfaction",
    description:
      "In under a year, we've made significant strides by successfully completing 10 projects in collaboration with 8 companies, assisting them in launching their MVPs or improving their opperations. ",
    date: "Jul 2023",
    dateTime: "2023-01",
  },
  {
    name: "Warwick Innovation Studio",
    description:
      "Our new Innovation Studio at the University of Warwick highlights our commitment to connecting academia and industry. Staffed by Warwick students, the studio offers them hands-on experience while giving businesses access to emerging talent, fostering a win-win partnership.",
    date: "Aug 2023",
    dateTime: "2023-07",
  },
  {
    name: "Software Launch",
    description:
      "We're gearing up to release our new software, streamlining everything from lead generation to project management, boosting our team's efficiency",
    date: "Oct 2023",
    dateTime: "2023-10",
  },
];

export default function Timeline() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-green-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 text-left">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600 text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
