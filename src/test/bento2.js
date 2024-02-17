import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from "./bento-grid.tsx";
import Lottie from 'react-lottie';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
} from "@tabler/icons-react";

export function BentoGridDemo() {
    const [animationData, setAnimationData] = useState(null);
    const [secondAnimationData, setSecondAnimationData] = useState(null); // New state for the second animation
    const [thirdAnimationData, setthirdAnimationData] = useState(null); // New state for the second animation
    const [forthAnimationData, setforthAnimationData] = useState(null);
    const [fifthAnimationData, setfifthAnimationData] = useState(null);
    const [sixthAnimationData, setsixthAnimationData] = useState(null);
    useEffect(() => {
        fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708026439/vexfiqVuEA_mmzckx.json')
          .then(response => response.json())
          .then(data => setAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708027142/Animation_-_1705311877993_rp1ayq.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setSecondAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708027333/Animation_-_1708026982226_wurmfv.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setthirdAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708027877/Animation_-_1708027682754_xgkjdv.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setforthAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708028370/Animation_-_1708028091112_rhw9x3.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setfifthAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708028615/Animation_-_1708028503822_vlxqql.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setsixthAnimationData(data));
      }, []);

      const defaultOptions = animationData => ({ // Modified to accept animationData as a parameter
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    });

    const items = [
        {
          title: "Web Development",
          description: "Explore the birth of groundbreaking ideas and inventions.",
          header: secondAnimationData ? <Lottie options={defaultOptions(secondAnimationData)} height={300} width={300} /> : <Skeleton />,
          icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "Mobile Development",
          description: "Dive into the transformative power of technology.",
          header: animationData ? <Lottie options={defaultOptions(animationData)} height={300} width={300} /> : <Skeleton />,
          icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "UI/UX design",
          description: "Discover the beauty of thoughtful and functional design.",
          header: forthAnimationData ? <Lottie options={defaultOptions(forthAnimationData)} height={300} width={300} /> : <Skeleton />,
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Data Engineering & Science",
            description: "Understand the impact of effective communication in our lives.",
            header: fifthAnimationData && sixthAnimationData ? (
              <div className="flex justify-around"> {/* This div will contain both animations */}
                <Lottie options={defaultOptions(fifthAnimationData)} height={250} width={250} />
                <Lottie options={defaultOptions(sixthAnimationData)} height={250} width={250} />
              </div>
            ) : <Skeleton />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
          },
        {
          title: "AI & Machine Learning",
          description: "Join the quest for understanding and enlightenment.",
          header: thirdAnimationData ? <Lottie options={defaultOptions(thirdAnimationData)} height={200} width={200} /> : <Skeleton />,
          icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        
       
      ];

    return (
        <BentoGrid className="max-w-6xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} shadow-lg`}
                />
            ))}
        </BentoGrid>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
