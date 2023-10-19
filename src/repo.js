import React, { useState, useEffect, Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon, TrashIcon, BarsArrowUpIcon, MagnifyingGlassIcon, ChevronDownIcon  } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react';
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
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function Repo() {
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const filteredPosts = posts.filter(post => {
      if (selectedCategory !== 'All' && post.category.title !== selectedCategory) {
        return false;
      }
      if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  
   
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
          
          <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between mt-20">
  <h3 className="text-base font-semibold leading-6 text-gray-900">Filter Templates</h3>
  <div className="relative mt-3 sm:ml-4 sm:mt-0 flex items-center gap-4">
          {/* Search Box */}
          <div className="flex rounded-md shadow-sm">
      <div className="relative flex-grow focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search-candidate"
                id="search-candidate"
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-700"
                placeholder="Search templates"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Dropdown for Sort */}
          
          <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Sort
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {["All", "UOB", "WIS"].map((option) => (
                  <Menu.Item key={option}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedCategory(option)}
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        {option}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <a href={post.linkdownload} download>
                      <img
                        src={post.imageUrl}
                        alt="Templates Innovation Studios"
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