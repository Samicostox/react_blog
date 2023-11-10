import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({ title2, description, imageUrl }) {
  function handleReadMoreClick(link) {
    window.location.href = link;
    window.scrollTo(0, 0);
  }
  const cards = [
    {
      title: "Mobile Development",
      description:
        "Explore cutting-edge custom mobile app development at Innovation Studios. We specialise in iOS and Android apps, focusing on user-centric design and engagement, ensuring your app stands out in the competitive mobile market.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615280/website-images/image-service-mobile.jpg",
      icons: [
        "react_y3ribl",
        "django-icon_rxmwzx",
        "spring-icon_w5s3uf",
        "apple_czgnk8",
        "android-icon_l1eebj",
        "flutter_wz2bg3",
      ],
      link: "/service-mobile",
    },
    {
      title: "Web Development",
      description:
        "Elevate your digital footprint with our responsive web design and custom website development services. Our team crafts stunning, user-friendly websites, tailored to captivate your audience and enhance your online presence.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615258/website-images/image-service-web.jpg",
      icons: [
        "react_y3ribl",
        "django-icon_rxmwzx",
        "spring-icon_w5s3uf",
        "wix_kcymgx",
        "flutter_wz2bg3",
        "wordpress-icon-alt_zvugtj",
        "webflow_pstet1",
        "vue_ez1vlf",
        "framer_xrpm7x",
        "html-5_wst3nk",
      ],
      link: "/service-web",
    },
    {
      title: "Data Engineering",
      description:
        "Unlock insights and drive decisions with our advanced data analysis and big data analytics services. At Innovation Studios, we transform complex data into actionable intelligence, propelling your business forward.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615261/website-images/image-service-data.jpg",
      icons: [
        "python_bmp5vb",
        "pytorch-icon_qqdkjv",
        "tensorflow_jtai3p",
        "postgresql_1_rxgttx",
        "icons8-excel_cndh13",
      ],
      link: "/service-data",
    },
    {
      title: "Business Plan",
      description:
        "Foster growth and innovation with our strategic business planning and market analysis services. We provide comprehensive business development consulting to navigate market trends and achieve sustainable success.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615273/website-images/image-service-business-plan.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
        "modelcanva_ecyq0v",
      ],
      link: "/service-businessplan",
    },
    {
      title: "Strategies",
      description:
        "Shape the future of your business with our strategic planning services. From competitive strategy analysis to market positioning, we help you develop robust strategies to stay ahead in your dynamic industry.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615270/website-images/image-service-strategy.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
      ],
      link: "/service-strategy",
    },
    {
      title: "Benchmarking",
      description:
        "Gain a competitive edge with our performance benchmarking services. We offer in-depth market and business benchmarking solutions, helping you set industry standards and outperform competitors.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699615265/website-images/image-service-benchmarking.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
        "python_bmp5vb",
      ],
      link: "/service-benchmarking",
    },
    // More cards...
  ];
  return (
    <div className="container mx-auto py-12">
      <h3 className="text-center text-4xl text-black mb-12 font-alliance font-bold">
        {title2}
      </h3>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1">
                <Card className="w-full ">
                  <CardHeader color="blue-gray" className="relative h-90">
                    <img
                      src={card.imageUrl}
                      alt="Services - Innovation Studios"
                    />
                  </CardHeader>
                  <CardBody className="lg:h-[300px] md:h-[330px] overflow-auto">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-2 text-left font-alliance font-bold"
                    >
                      {card.title}
                    </Typography>
                    <div className="flex space-x-3 mb-2 mt-4">
                      {" "}
                      {/* This div will contain the tech icons. */}
                      {card.icons.map((icon, iconIndex) => (
                        <img
                          key={iconIndex}
                          src={`https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/${icon}.svg`}
                          alt={card.title}
                          className="w-5 h-5" // Adjust the size as needed.
                        />
                      ))}
                    </div>
                    <Typography className="text-left mt-4 font-alliance">
                      {card.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0 text-left text-green-800 font-alliance font-bold">
                    <Button onClick={() => handleReadMoreClick(card.link)}>
                      Read More{" "}
                      <span className="ml-1 text-white" aria-hidden="true">
                        →
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
