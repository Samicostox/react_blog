import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Footer from "./footer";
import Navbar from "../navbar";

import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';


import { useState, useEffect } from "react";
import Navbarv2 from "../navbarv2";

export function PastProjects({ title, description, imageUrl }) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname + window.location.search
    });
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      title: "Safequeen",
      link: "https://safequeen.herokuapp.com/",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "SafeQueen is a UK-based web app that promotes venue safety through community reviews and reports. Users can share experiences, while administrators validate feedback. Registered venues access a dashboard for performance analysis, fostering transparency, accountability, and continuous safety improvements.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582742/2_gigwzc.png",
    },
    {
      title: "Uplist",
      link: "https://uplist.uk/",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },

        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Azure",
          color: "bg-blue-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322583/microsoft-azure_mm7l4o.svg"
              alt="Azure Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "UPlist is a central platform for music artists to display their work, boost online visibility, and offer services. Artists can embed videos and stream tracks, engage fans, and manage bookings with an integrated Stripe system. Listeners can easily search and filter to find top industry artists.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582741/4_iyqcel.png",
    },
    {
      title: "Nuzones",
      link: "https://nuzones.herokuapp.com/",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "React",
          color: "bg-blue-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Django",
          color: "bg-green-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg"
              alt="Django Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "NuZones is a web app that guides cyclists to prime biking spots in their area. Users join a community, contribute by listing new locations, and access a detailed UK-wide biking directory. By fostering collaboration, the platform elevates the cycling experience for everyone involved.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582741/3_apm9xl.png",
    },
    {
      title: "VDBCOOK",
      link: "https://vdbcook.com/#/home",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Flutter",
          color: "bg-cyan-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696255935/flutter_wz2bg3.svg"
              alt="Flutter Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "VDBCook is a dedicated web app for a renowned personal chef, offering users the opportunity to book bespoke culinary services. Browse through curated menus, set appointments, and indulge in a unique dining experience right at home. Its gourmet cuisine, personalized to your taste.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582741/5_mmavil.png",
    },
    {
      title: "Vanguard",
      link: "https://google.com",
      tags: [
        {
          text: "Strategy",
          color: "bg-pink-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583592/strategy_b6dcym.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "Vanguard sought expert services to craft precise technical documents tailored to their specific domain. With meticulous attention to detail, comprehensive guides, manuals, and schematics were delivered, ensuring clarity and accuracy for their operational needs.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582979/UoBjuniorsolutions.weblow.io_1080_x_700_px_fp29em.png",
    },
    {
      title: "WeebExpress",
      link: "https://weebexpress.com/",
      tags: [
        {
          text: "Data Engineering",
          color: "bg-purple-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583655/data-management_1_vnmv5o.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Python",
          color: "bg-green-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583207/python_wfr9jn.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
      ],
      description:
        "Weeb Express required a sophisticated automation tool tailored to their business operations. Through a custom solution, repetitive tasks were streamlined, efficiency was enhanced, and the company could focus on core objectives. It's automation precision, driving Webb Express's business forward.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1695582979/UoBjuniorsolutions.weblow.io_1080_x_700_px_fp29em.png",
    },

    {
      title: "Manta",
      link: "https://samis-wondrous-site-25db6b.webflow.io/events2",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        
        
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },

        {
          text: "Webflow",
          color: "bg-grey-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1705520929/webflow_yofobf.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        
      ],
      description:
        "Manta is a sleek and user-friendly website that presents a vibrant team of young chefs renowned for their culinary expertise. The site delves into the essence of Manta, highlighting the team's collective experience in the culinary world and showcasing their past events to illustrate their versatility and creativity in catering. ",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1705519985/Announce_Website_Launch_1080_x_500_px_1080_x_700_px_mrcx20.png",
    },

    {
      title: "Qodly",
      link: "https://v2software-a96756d889f0.herokuapp.com/",
      tags: [
        {
          text: "Strategy",
          color: "bg-pink-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583592/strategy_b6dcym.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Data Engineering",
          color: "bg-purple-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583655/data-management_1_vnmv5o.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Python",
          color: "bg-green-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583207/python_wfr9jn.svg"
              alt="React Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Heroku",
          color: "bg-purple-200",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg"
              alt="Heroku Icon"
              className="h-4 w-4"
            />
          ),
        },
         {
              text: "React",
              color: "bg-blue-100",
              icon: (
                <img
                  src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg"
                  alt="React Icon"
                  className="h-4 w-4"
                />
              ),
            },
            {
              text: "AI",
              color: "bg-red-200",
              icon: (
                <img
                  src="https://res.cloudinary.com/dl2adjye7/image/upload/v1705520435/artificial-intelligence-ai-icon_scn1gn.svg"
                  alt="React Icon"
                  className="h-4 w-4"
                />
              ),
            },
      ],
      description:
        "The project focused on developing a streamlined MVP for integrating AI features into Qodly's platform. This strategy was concise yet effective, involving thorough research and the implementation of key AI functionalities that align with Qodly's objectives. The MVP served as a critical testbed for the AI integration, ensuring usability and market relevance, and setting the stage for future enhancements and broader AI adoption within the platform.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1705520712/Announce_Website_Launch_1080_x_500_px_1080_x_700_px_1_fgcirp.png",
    },
    
    {
      title: "Sen Noods",
      link: "https://www.sennoods.co.uk/",
      tags: [
        {
          text: "Web App",
          color: "bg-red-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1695583481/monitor_ewewup.png"
              alt="Web App Icon"
              className="h-4 w-4"
            />
          ),
        },
        
        
        {
          text: "Figma",
          color: "bg-orange-100",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        {
          text: "Webflow",
          color: "bg-grey-300",
          icon: (
            <img
              src="https://res.cloudinary.com/dl2adjye7/image/upload/v1705520929/webflow_yofobf.svg"
              alt="Figma Icon"
              className="h-4 w-4"
            />
          ),
        },
        
      ],
      description:
        "The enhancement of the Sen Noods website, achieved through Webflow, involved adding two strategically designed pages, seamlessly integrated with a CRM system. This update aimed to enhance user engagement and streamline customer management, blending new functionalities with the site's existing design. ",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1705521339/Announce_Website_Launch_1080_x_500_px_1080_x_700_px_2_hkdyqy.png",
    },

   

    // More cards...
  ];
  return (
    <div className="bg-whites">
      <Helmet>
        <title>Past Projects | Innovation Studios</title>
        <meta
          name="description"
          content="Explore Innovation Studios' past projects showcasing diverse projects in software development and data engineering. Discover our excellence and innovative solutions across industries."
        />
      </Helmet>

      <Navbarv2></Navbarv2>
      <div className="container mx-auto py-12">
        <h1 className="text-center text-4xl font-alliance font-bold mb-12">
          Past Projects
        </h1>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, index) => (
            <li
              key={index}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1">
                    <Card className="w-full">
                      <CardHeader color="blue-gray" className="relative h-90">
                        <img src={card.imageUrl} alt="card-image" />
                      </CardHeader>
                      <CardBody>
                        <div className="text-left">
                          <div>
                            {" "}
                            {/* No m-2 here */}
                            {card.tags.map((tag, idx) => (
                              <div
                                key={idx}
                                className={`${tag.color} border border-black rounded px-2 py-1 mb-2 mr-4 text-sm font-medium text-gray-600 hover:bg-gray-100 inline-block`}
                              >
                                <div className="flex items-center">
                                  <span className="mr-1">{tag.icon}</span>
                                  <span className="font-alliance">
                                    {tag.text}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 mt-2 font-alliance font-bold"
                          >
                            {card.title}
                          </Typography>
                          <Typography className="font-alliance">
                            {card.description}
                          </Typography>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Footer></Footer>
    </div>
  );
}
