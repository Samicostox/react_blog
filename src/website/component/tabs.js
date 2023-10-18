import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Tab1, Tab2, Tab3, Tab4, Tab5 } from "./tabs_component/tab1";
import { CardDefault } from "./cardsservices";

export function TabsWithIcon() {
  const [activeTab, setActiveTab] = useState("We Train");
  const data = [
    {
      label: "1. Recruiting",
      value: "We Train",
      component: <Tab1 />,
    },
    {
      label: "2. Trainings",
      value: "react",
      component: <Tab2 />,
    },
    {
      label: "3. Projects",
      value: "vue",
      component: <CardDefault title2 = "Projects You Can Work On" />,
    },
    {
      label: "4. Employement",
      value: "angular",
      component: <Tab4 />,
    },
    {
      label: "5. Benefits",
      value: "svelte",
      component: <Tab5 />,
    },
  ];
  const currentTabIndex = data.findIndex((item) => item.value === activeTab);

  return (
    <div className=" -mb-28">
      <div className="text-left">
        <h1 className="text-4xl font-alliance font-bold tracking-tight text-gray-900">
          Getting Involved as a Uni Student
        </h1>
      </div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-20"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-teal-700 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`text-xs md:text-base ${
                activeTab === value ? "text-gray-900" : ""
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTabIndex * 100}%)` }}
          >
            {data.map(({ value, component }) => (
              <div className="flex-none w-full">
                <TabPanel key={value} value={value}>
                  {component}
                </TabPanel>
              </div>
            ))}
          </div>
        </TabsBody>
      </Tabs>
    </div>
  );
}
