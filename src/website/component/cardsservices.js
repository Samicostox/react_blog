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
        "At Innovation Studios, we're at the forefront of mobile application innovation. Our expertise in crafting bespoke iOS and Android applications integrates cutting-edge technology with a user-first approach. We ensure your mobile presence is not just visible but remarkable in the ever-evolving app marketplace.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641816/website-images/image-service-mobile.jpg",
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
        "Revolutionise your online identity with Innovation Studios' web development services. Our team excels in creating responsive, visually appealing websites that are not just aesthetically pleasing but also SEO-optimized. We focus on elevating your brand's digital narrative to engage and captivate a global audience.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641969/website-images/image-service-web.jpg",
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
        "Our data engineering services are designed to turn complex datasets into valuable insights. We leverage advanced analytics to empower your decision-making, ensuring your business stays data-driven and ahead of the curve.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641940/website-images/image-service-data.jpg",
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
        "Navigate the complexities of market trends with our strategic business development services. At Innovation Studios, we blend market analysis with innovative strategies to foster growth and resilience in your business. Our approach is tailored to help you thrive in today's dynamic business environment.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641865/website-images/image-service-business-plan.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
        "modelcanva_ecyq0v",
      ],
      link: "/service-businessplan",
    },
    {
      title: "Strategies",
      description:
        "Craft the blueprint for success with our strategic planning services. Innovation Studios specializes in dissecting market dynamics and formulating strategies that ensure your business stays relevant and ahead. From market positioning to competitive analysis, we are your partners in strategic excellence.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641888/website-images/image-service-strategy.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
      ],
      link: "/service-strategy",
    },
    {
      title: "Benchmarking",
      description:
        "Set new industry standards with Innovation Studios' benchmarking services. We provide comprehensive analysis to measure your performance against the best, offering insights that drive competitive advantage. Our goal is to position your business not just to compete, but to lead in your industry.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1699641919/website-images/image-service-benchmarking.jpg",
      icons: [
        "swot3_hxgd7t",
        "canva",
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
