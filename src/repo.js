import React, { useState, useEffect, Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon, TrashIcon, BarsArrowUpIcon, MagnifyingGlassIcon, ChevronDownIcon  } from '@heroicons/react/20/solid'
const posts = [
    {
      id: 1,
      title: 'Technical Document Template',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        'https://res.cloudinary.com/dl2adjye7/image/upload/v1693728545/Untitled_design_4_pkyns9.png',
      date: 'Sept 7, 2023',
      datetime: '2023-09-7',
      category: { title: 'UOB', href: '#' },
      linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'

    },
    {
        id: 2,
        title: 'Proposal Template',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114196/proposal2_ci92l7.png',
        date: 'Sept 7, 2023',
        datetime: '2023-09-7',
        category: { title: 'UOB', href: '#', },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },
      {
        id: 3,
        title: 'Pitchbook UOB',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114503/Pitchbook_uob_r0lbjt.png',
          date: 'Sept 7, 2023',
          datetime: '2023-09-7',
        category: { title: 'UOB', href: '#' },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },
      {
        id: 4,
        title: 'Brand Guideline UOB',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114929/Brand_guideline_UoB_sami_1_rxu0j2.png',
        date: 'Sept 7, 2023',
        datetime: '2023-09-7',
        category: { title: 'UOB', href: '#' },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },
      {
        id: 5,
        title: 'Logo',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://res.cloudinary.com/dl2adjye7/image/upload/v1693928140/Icon-maskable-192_2_btjfe8.png',
        date: 'Sept 7, 2023',
        datetime: '2023-09-7',
        category: { title: 'UOB', href: '#' },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },
      {
        id: 6,
        title: 'Boost your conversion rate warwick',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Sept 7, 2023',
        datetime: '2023-09-7',
        category: { title: 'WIS', href: '#' },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },

      {
        id: 7,
        title: 'Technical Document Template warwick',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          'https://res.cloudinary.com/dl2adjye7/image/upload/v1693728545/Untitled_design_4_pkyns9.png',
        date: 'Sept 7, 2023',
        datetime: '2023-09-7',
        category: { title: 'WIS', href: '#' },
        linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
  
      },
      {
          id: 8,
          title: 'Proposal Template warwick',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114196/proposal2_ci92l7.png',
          date: 'Sept 7, 2023',
          datetime: '2023-09-7',
          category: { title: 'WIS', href: '#', },
          linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
    
        },
        {
          id: 9,
          title: 'Pitchbook UOB warwick',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114503/Pitchbook_uob_r0lbjt.png',
            date: 'Sept 7, 2023',
            datetime: '2023-09-7',
          category: { title: 'WIS', href: '#' },
          linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
    
        },
        {
          id: 10,
          title: 'Brand Guideline UOB',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1694114929/Brand_guideline_UoB_sami_1_rxu0j2.png',
          date: 'Sept 7, 2023',
          datetime: '2023-09-7',
          category: { title: 'WIS', href: '#' },
          linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
    
        },
        {
          id: 11,
          title: 'Logo',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1693928140/Icon-maskable-192_2_btjfe8.png',
          date: 'Sept 7, 2023',
          datetime: '2023-09-7',
          category: { title: 'UOB', href: '#' },
          linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
    
        },
        {
          id: 12,
          title: 'Boost your conversion rate',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
          imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
          date: 'Sept 7, 2023',
          datetime: '2023-09-7',
          category: { title: 'UOB', href: '#' },
          linkdownload : 'https://djangoback-705982cd1fda.herokuapp.com/media/user_csvs/Warwick_v7Gu3Yk.csv'
    
        },

  ]

  const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'WIS' },
    { id: 3, name: 'UOB' },
  ];
  
  export default function Repo() {

    const [showSortMenu, setShowSortMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
 
   
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Templates
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Use those tailored templates to help you!
            </p>
          </div>
          
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <a href={post.linkdownload} download>
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      />
                    </a>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
                  </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                          {post.date}
                        </time>
                        <a
                          className="text-left relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.category.title}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="text-left mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <span className="text-left absolute inset-0" />
                          {post.title}
                        </h3>
                        <p className="text-left mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                      
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
        </div>
      );
    }