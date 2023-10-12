const NumberLine = () => {
  const data = [
    { number: 1, title: "Title 1", paragraph: "", url: "" },
    { number: 2, title: "Title 2", paragraph: "", url: "" },
    { number: 3, title: "Title 3", paragraph: "", url: "" },
    { number: 4, title: "Title 3", paragraph: "", url: "" },
  ];

  return (
    <div className="relative pb-64">
      {/* Number Line */}
      <div className="flex justify-center h-[1580px] z-2">
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
      <div className="absolute top-0 right-0 left-0 mr-10 z-1 justify-center">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696091538/aecrzwotrjfnvxzabxpb.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg pl-32 pb-80">
                <p className="text-base font-semibold leading-7 text-green-600 text-left font-alliance">
                  Company values
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
                  On a mission to empower remote teams
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6 text-left font-alliance font-light">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg pl-32 pb-80">
                <p className="text-base font-semibold leading-7 text-green-600 text-left font-alliance">
                  Company values
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
                  On a mission to empower remote teams
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6 text-left font-alliance font-light">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:pr-4 pl-32">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696091538/aecrzwotrjfnvxzabxpb.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696091538/aecrzwotrjfnvxzabxpb.jpg"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg pl-32">
                <p className="text-base font-semibold leading-7 text-green-600 text-left font-alliance">
                  Company values
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left font-alliance">
                  On a mission to empower remote teams
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6 text-left font-alliance font-light">
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                    risus enim. Mattis mauris semper sed amet vitae sed turpis
                    id. Id dolor praesent donec est. Odio penatibus risus
                    viverra tellus varius sit neque erat velit. Faucibus commodo
                    massa rhoncus, volutpat. Dignissim sed eget risus enim.
                    Mattis mauris semper sed amet vitae sed turpis id.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberLine;
