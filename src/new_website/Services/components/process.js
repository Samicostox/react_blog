import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Process = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-4">
      <div className="mx-auto max-w-6xl">
        <Tabs selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          {FEATURES.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
              >
                <tab.Feature />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="flex overflow-x-hidden rounded-md">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100 md:flex-col"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-teal-800 from-10% to-teal-500 p-3 text-2xl text-white shadow-teal-400 transition-all duration-300 ${
            selected
              ? "scale-100 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-slate-600 transition-opacity md:text-center text-sm ${
            selected ? "opacity-100" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-teal-600"
        />
      )}
    </div>
  );
};

const ExampleFeature = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8 relative ">
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-2 p-2 z-20 relative">
        <p className="font-mono text-2xl sm:text-3xl text-teal-500 text-left ">
          <span className="text-green-300 text-left">~</span> 1. Understanding your Idea! 🚀
        </p>
        <p className="font-mono text-md text-slate-200 text-left">
            <span className="text-green-300 text-left"></span> In the Discovery Phase, we'll embark on a journey to deeply understand your vision and goals. It's all about ensuring a perfect synergy between your project and our expertise. The following roadmap is to be expected:
          </p>
        <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 1.1 Discovery Meeting 🕵
          </p>
         
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 1.2 Scope Definition 🔬
          </p>
          
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 1.3 Creating the Team 💪🏼
          </p>
          
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700 z-10">
        <Icon />
      </span>
    </div>
  </div>
);

const ExampleFeature2 = ({ Icon }) => (
    <div className="w-full px-0 py-8 md:px-8 relative">
      <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2 p-2 relative z-20">
          <p className="font-mono text-2xl sm:text-3xl text-teal-500 text-left">
            <span className="text-green-300 text-left">~</span> 2. Working together! 👨‍💻
          </p>
          <p className="font-mono text-md text-slate-200 text-left">
            <span className="text-green-300 text-left"></span> Our collaboration takes shape in the Working Together phase. From laying the groundwork with meticulous planning to the hands-on development and iterative testing, we're in this together every step of the way. The following roadmap is to be expected:
          </p>
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 2.1 Project Planning 📋
          </p>
         
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 2.2 Project Development 🛠️
          </p>
          
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 2.3 Testing 📝
          </p>
          
        </div>
  
        <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
          <Icon />
        </span>
      </div>
    </div>
  );

  const ExampleFeature3 = ({ Icon }) => (
    <div className="w-full px-0 py-8 md:px-8 relative ">
      <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
        <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2 p-2 relative z-10">
          <p className="font-mono text-2xl sm:text-3xl text-teal-500 text-left">
            <span className="text-green-300 text-left">~</span> 3. Delivery! 📦
          </p>
          <p className="font-mono text-md text-slate-200 text-left">
            <span className="text-green-300 text-left"></span> The grand finale, the Delivery phase, is where we cross the finish line. But it's not a goodbye; it's the beginning of a new chapter where your project thrives, supported by our continued assistance. The following roadmap is to be expected:
          </p>
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 3.1 Handover 🤝
          </p>
         
          <p className="font-mono text-xl text-slate-200 text-left">
            <span className="text-green-300 text-left">~</span> 3.2 Maintenance ⚙️
          </p>
        </div>
  
        <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
          <Icon />
        </span>
      </div>
    </div>
  );

export default Process;

const FEATURES = [
  {
    title: "Understanding your Idea! 🚀",
    Icon: FiSearch,
    Feature: () => <ExampleFeature Icon={FiSearch} />,
  },
  {
    title: "2. Working together! 👨‍💻",
    Icon: FiSave,
    Feature: () => <ExampleFeature2 Icon={FiSave} />,
  },
  {
    title: "3. Delivery! 📦",
    Icon: FiMonitor,
    Feature: () => <ExampleFeature3 Icon={FiMonitor} />,
  },
];