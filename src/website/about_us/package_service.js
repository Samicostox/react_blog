const NumberLine = () => {
  const data = [
    { number: 1, title: "Title 1", paragraph: "", url: "" },
    { number: 2, title: "Title 2", paragraph: "", url: "" },
    { number: 3, title: "Title 3", paragraph: "", url: "" },
    { number: 4, title: "Title 3", paragraph: "", url: "" },
  ];

  const data2 = [
    {
      number: 1,
      subtitle: "First Meeting",
      title: "Inception",
      paragraph:
        "Embarking on a journey with us begins with a comprehensive meeting or call, where mutual introductions pave the way for a collaborative partnership. Our initial conversations are meticulously designed to delve into the core of your organization, understanding not just what you do, but how you do it, and identifying the specific needs we can assist with, be it website development, MVP creation, or specialized research. The creation of our tailored technical documents, which precisely outline the proposed project, is a collaborative effort. We invite you to review, revise, and refine these documents with us, ensuring that every detail is aligned with your expectations and objectives. This phase is not just about planning; it’s about forging a partnership where your needs and goals are at the forefront of all decisions",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699613947/website-images/image-inception.jpg",
    },
    {
      number: 2,
      subtitle: "Development",
      title: "Development",
      paragraph:
        "Once the project is officially underway, our team, comprising astute student consultants and experienced project managers, becomes an extension of your own. With a development period typically spanning 2-3 weeks for websites, 1-2 months for business projects, and over 3 months for software projects, we ensure a seamless blend of quality and timeliness by incorporating a risk buffer into our schedule. This allows us to navigate through unexpected challenges without compromising on the deliverables. Weekly meetings provide you with insights into each step of the process, and your feedback becomes an integral part of our development cycle. Should the scope of the project evolve, we maintain transparency and fairness by discussing additional investments for out-of-scope work, ensuring that the project adapts to your evolving needs without any hidden surprises.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699613929/website-images/image-development.jpg",
    },
    {
      number: 3,
      title: "Delivery",
      subtitle: "End of Project",
      paragraph:
        "The culmination of our journey together is marked by a meticulous delivery process. For business projects, we present our findings and documents, ensuring every detail is communicated and understood. For technical projects, we manage the deployment onto your servers, ensuring a smooth transition from development to live environment. Following delivery, our commitment to your success continues with a maintenance period, typically lasting between 2 weeks to 1 month. This period is dedicated to addressing any technical adjustments, bug fixes, or deeper dives into business documents as needed. But our relationship doesn’t end at project completion. We welcome feedback, and after a period of reflection on your end, we eagerly anticipate reconnecting to discuss the impacts of our collaboration and explore future opportunities to support your ongoing journey.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699613932/website-images/image-delivery.jpg",
    },
  ];

  return (
    <div className="relative h-[2000px] pb-96 ">
      {/* Number Line */}
      <div className="flex justify-center h-[1580px] z-2 hidden lg:flex">
        <div className="relative flex justify-center items-start">
          <div className="absolute left-1/2 h-full w-0.5 bg-black"></div>
          {data.map((item, index) => (
            <div
              key={item.number}
              className="sticky left-1/2 transform -translate-x-1/2 flex items-center"
              style={{ top: "25vh", marginTop: `${index * 750}px` }}
            >
              <div className="bg-white rounded-full border-4 border-black text-black flex items-center justify-center h-20 w-20 text-4xl">
                {item.number}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text on the right side */}
      <div
        className="absolute top-0 right-0 left-0 z-1 justify-center"
        style={{ paddingBottom: "1.5%", marginRight: "1%" }}
      >
        <div className="mx-auto max-w-[1800px]">
          {data2.map((item, index) => (
            <div
              key={item.number}
              className="mx-auto grid grid-cols-1 lg:grid-cols-[2.4fr,2fr] items-start gap-x-2 gap-y-4 sm:gap-y-6 lg:mx-0 mb-5"
            >
              <div
                className={`text-base leading-7 text-gray-700 lg:max-w-full ${
                  index % 2 === 0 ? "" : "md:order-last"
                }  md:px-0 sm:pl-[0%] md:pl-[13%] md:pr-[4%] md:mr-[9%] pb-[15%]`}
              >
                <p className="mt-3 text-base font-semibold leading-7 text-teal-800 text-left font-alliance">
                  {item.subtitle}
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
                  {item.title}
                </h1>
                <div className="max-w-xl">
                  <p className="mt-2 mb-2 text-left font-alliance font-light">
                    {item.paragraph}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-0 md:pl-[13%] md:pr-[16%] pb-[15%]">
                <img
                  className="hidden lg:block w-full h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                  src={item.imageUrl}
                  alt={`Illustration for ${item.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberLine;
