import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from "../../../test/bento-grid.tsx";
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
import { BorderBeam } from '../BorderBeam/border-beam.tsx';

export function BentoGridDemo() {
    const [animationData, setAnimationData] = useState(null);
    const [secondAnimationData, setSecondAnimationData] = useState(null); // New state for the second animation
    const [thirdAnimationData, setthirdAnimationData] = useState(null); // New state for the second animation
    const [forthAnimationData, setforthAnimationData] = useState(null);
    const [fifthAnimationData, setfifthAnimationData] = useState(null);
    const [sixthAnimationData, setsixthAnimationData] = useState(null);
    useEffect(() => {
        fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708265899/Animation_-_1708265878925_sllzpd.json')
          .then(response => response.json())
          .then(data => setAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708265497/Animation_-_1708265473074_j2idr6.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setSecondAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708267231/Animation_-_1708267123983_xuwkfs.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setthirdAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708266336/Animation_-_1708266114186_mvrqry.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setforthAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708028370/Animation_-_1708028091112_rhw9x3.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setfifthAnimationData(data));

          fetch('https://res.cloudinary.com/dl2adjye7/raw/upload/v1708267496/Animation_-_1708267425533_bgiqqy.json') // Fetching the second animation
          .then(response => response.json())
          .then(data => setsixthAnimationData(data));
      }, []);

      const defaultOptions = (animationData, alignLeft = false) => ({
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: alignLeft ? 'xMinYMid meet' : 'xMidYMid slice'
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
            header: sixthAnimationData ? <Lottie options={defaultOptions(sixthAnimationData)} height={300} width={350} /> : <Skeleton />,
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
      <div>
          <div
          className="absolute inset-x-0 top-800 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100 "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#008080] to-[#008080] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      
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
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
