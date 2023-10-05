import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Slider() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Small Companies",
      value: "html",
      component: (
        <div className="flex h-screen bg-white">
          <div className="flex flex-col justify-start items-center w-1/2  p-8">
            <h1 className="text-4xl font-bold mb-4">Your Title</h1>
            <p className="text-base font-semibold leading-7 text-indigo-600 text-left">
              Deploy faster
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
              A better workflow
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700 text-left">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696280564/dylann-hendricks-mtSq1ekJPdg-unsplash_tjkpoq.jpg"
              alt="Descriptive alt text"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      label: "Bigger Companies",
      value: "react",
      component: (
        <div className="flex h-screen">
          <div className="w-1/2">
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696280564/dylann-hendricks-mtSq1ekJPdg-unsplash_tjkpoq.jpg"
              alt="Descriptive alt text"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-4">Your Title</h1>
            <p className="text-base font-semibold leading-7 text-indigo-600 text-left">
              Deploy faster
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
              A better workflow
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700 text-left">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
        style={{ display: "flex", justifyContent: "space-around" }} // Added style here
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
            style={{ flex: 1, textAlign: "center" }} // Added style here
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
