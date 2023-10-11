const NumberLine = () => {
  const data = [
    { number: 1, title: "Title 1" },
    { number: 2, title: "Title 2" },
    { number: 3, title: "Title 3" },
    { number: 4, title: "Title 3" },
  ];

  const data2 = [
    { title: "Title 1", paragraph: "This is paragraph 1" },
    { title: "Title 2", paragraph: "This is paragraph 2" },
    { title: "Title 3", paragraph: "This is paragraph 3" },
    { title: "Title 4", paragraph: "This is paragraph 4" },
  ];

  return (
    <div>
      <div className="flex justify-center h-[1580px]">
        <div className="relative flex justify-center items-start pt-20">
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
      <div className="flex justify-center h-[1580px] bg-white z-100">
        <div className="relative flex justify-center items-start pt-20">
          {data2.map((item, index) => (
            <div
              key={item.title}
              className="sticky left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-white"
              style={{ top: "25vh", marginTop: `${index * 750}px` }}
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-base leading-7 text-gray-700 text-center">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberLine;
