import React from 'react';
// Assuming VisibilitySensor and CountUp are external dependencies
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
// Include any necessary CSS imports if your project uses CSS modules or similar
// import './Analytic.css';

function Analytic({ stats }) {
  return (
    <div className="mt-10">
      <div className="relative pb-36 z-10 bg-white w-full ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full bg-white h-20 relative z-10">
            {/* Content of the container goes here */}
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-alliance font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Year In Results
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col bg-teal-900 p-8"
                >
                  <dt className="text-sm font-semibold leading-6 text-white font-alliance">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white font-alliance font-bold">
                    <VisibilitySensor partialVisibility={true}>
                      {({ isVisible }) => (
                        <CountUp
                          className="order-first text-3xl font-semibold tracking-tight text-white font-alliance font-bold"
                          start={0}
                          end={isVisible ? stat.value : 0}
                          duration={3.0}
                          suffix={stat.plussign === true ? "+" : ""}
                        />
                      )}
                    </VisibilitySensor>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytic;
