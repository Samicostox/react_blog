
import Navbarv2 from "../../navbarv2"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Footer from "../footer";
import LatestPost from "./LatestPost";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga4';
const posts = [
  {
    id: 3,
    title: 'Understanding REST APIs: The Backbone of Modern Web Applications',
    href: '/Blogs/REST-APIs',
    description:
    "In today's digital world, REST APIs have become a cornerstone in the development of web applications. But what exactly are REST APIs, and why are they so important? Let's dive in.",
    imageUrl:
      'https://res.cloudinary.com/dl2adjye7/image/upload/v1701185083/documenting_web_apis_sn6nr1.png',
    date: 'November 28, 2023',
    datetime: '2020-03-16',
    category: { title: 'Tech', href: '/Blogs/REST-APIs' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/Blogs/REST-APIs',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  
  {
    id: 2,
    title: 'Why Businesses Should Start with an MVP Rather Than a Full App',
    href: '/Blogs/MVP',
    description:
    "If you don't know where to start with your project of creating an application, this blog will guide you!",
    imageUrl:
      'https://res.cloudinary.com/dl2adjye7/image/upload/v1700837219/mvp1_s7zxwu.webp',
    date: 'November 24, 2023',
    datetime: '2020-03-16',
    category: { title: 'Tech', href: '/Blogs/MVP' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '/Blogs/MVP',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  
    {
      id: 1,
      title: 'Everything you need to know about software development',
      href: '/Blogs/Software-Development',
      description:
      "If you're new to the field and looking to get a grip on the basics of software engineering, this article is just for you.",
      imageUrl:
        'https://res.cloudinary.com/dl2adjye7/image/upload/v1700754933/sami8694_Isometric_software_engineering_illustrationcentered_on_8596c65a-bc9c-4caf-89f8-e17152301d1c_2_hzd5e8.png',
      date: 'November 23, 2023',
      datetime: '2020-03-16',
      category: { title: 'Tech', href: '/Blogs/Software-Development' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '/Blogs/Software-Development',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    
    // More posts...
  ]
  
  export default function Blogs() {
    const latestPost = posts.reduce((max, post) => (post.id > max.id ? post : max), posts[0]);

    useEffect(() => {

        ReactGA.send({
          hitType: "pageview", 
          page: window.location.pathname + window.location.search
        });
        
        window.scrollTo(0, 0);
      }, []);
    
    
    const navigate = useNavigate();  // Initialize useNavigate
    return (
        
        <div>
            <Helmet>
        <title>Computer Science Blog: Software Engineering, Data Science & Tech Insights</title>
        <meta
          name="description"
          content="Dive deep into software development with our blog. From basics to advanced concepts, we cover everything you need to know for success in the tech world."
        />
      </Helmet>
            <Navbarv2></Navbarv2>
        
      <div className="bg-white py-24 sm:py-32">

        <LatestPost post={latestPost}></LatestPost>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div style={{ height: "0.5px", backgroundColor: "black" }}></div>
          <div className="mx-auto max-w-2xl text-center mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All our Blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn more about the computer science world!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                    
                    
                <a href={post.category.href} class="block">
                    <img
                        src={post.imageUrl}
                        alt="Image Description"
                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] hover:brightness-50"
                    />
                    </a>
                  
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-left">
                      <a href={post.href}>
                        <span className="absolute inset-0 " />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600  text-left">{post.description}</p>
                  </div>
                  <div className="relative mt-4 flex items-center gap-x-4">

                  <style>
        {`
          .underline-animation::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: teal;
            transition: width 0.25s ease-in-out;
          }

          .underline-animation:hover::after {
            width: 100%;
          }
        `}
      </style>

                    

      <a
        href={post.category.href}
        className="text-sm font-semibold leading-6 text-black hover:text-teal-700 underline-animation"
      >
        Learn more 
        <span className="text-black hover:text-gray-500" aria-hidden="true">
          →
        </span>
      </a>
                    
                  
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
      </div>
    )
  }
  