import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="h-screen w-screen relative">
        <Carousel
          activeIndex={activeIndex}
          className="rounded-xl h-full w-full"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="flex h-full w-full">
            <div className="w-1/2 flex items-center justify-center p-4">
              <p>
                Your text content goes here. You can add any information or
                description you'd like to share.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex h-full w-full">
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-1/2 flex items-center justify-center p-4">
              <p>
                Your text content goes here. You can add any information or
                description you'd like to share.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
