import React, { useEffect, useState } from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'One-Click Generation',
      description:
        'Generate high-quality leads with just a single click. Our advanced algorithms do the heavy lifting, so you don’t have to.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Email Verified',
      description:
        'Rest easy knowing that all the email addresses you receive are verified and validated, reducing bounce rates and increasing engagement.',
      icon: LockClosedIcon,
    },
    {
      name: 'LinkedIn Accounts',
      description:
        'Get leads that are not just email addresses but also LinkedIn profiles. This allows for more personalized and targeted outreach.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Strategy',
      description:
        'Our platform provides actionable insights and strategies to help you close deals faster and more efficiently.',
      icon: FingerPrintIcon,
    },
  ]

export default function Scale() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }
        );

        const element = document.getElementById('feature-grid');

        if (element) {
        observer.observe(element);
        }

        return () => {
        if (element) {
            observer.unobserve(element);
        }
        };
    }, []);

  return (
    <div className="bg-white py-24 sm:py-32 mx-auto" style={{ maxWidth: "1200px" }}>
      <div className="mx-auto px-6 lg:px-8 w-full">
        <div className="mx-auto lg:text-center w-full">
          <h2 className="text-base font-semibold leading-7 text-green-600">Scale Faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to upgrade your business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto" style={{ maxWidth: "700px" }}>
            From lead generation to B2B tutorials, this software will easily allow you to scale your business to the next level.
          </p>
        </div>
        <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24">
        <dl
          id="feature-grid"
          className={`grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16 w-full transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 w-full">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
