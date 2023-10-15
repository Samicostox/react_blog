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
        "Dive into the mobile-centric world with our top-tier mobile app solutions. From idea to launch, our team ensures your app not only looks great but also resonates with your target audience for maximum engagement.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696257551/mobile_ghadoy.png",
      icons: [
        "react_y3ribl",
        "django-icon_rxmwzx",
        "spring-icon_w5s3uf",
        "apple_czgnk8",
        "android-icon_l1eebj",
        "flutter_wz2bg3",
      ],
      link: "/#service-mobile",
    },
    {
      title: "Web Development",
      description:
        "Elevate your online presence with our bespoke web development services. We craft beautiful, user-friendly websites that captivate and convert, ensuring your brand stands out in the digital landscape.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696258003/computer_svt21c.png",
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
      link: "/#service-web",
    },
    {
      title: "Data Engineering",
      description:
        "Unlock the power of your data with our cutting-edge data science services. We transform raw data into actionable insights, helping you make informed decisions and stay ahead in your industry.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696257232/datata_gl2sns.png",
      icons: [
        "python_bmp5vb",
        "pytorch-icon_qqdkjv",
        "tensorflow_jtai3p",
        "postgresql_1_rxgttx",
        "icons8-excel_cndh13",
      ],
      link: "/#service-data",
    },
    {
      title: "Business Plan",
      description:
        "Future-proof your business with our expert strategic planning. We dive deep into market analytics and trends to craft strategies that position you for lasting success and growth.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696325241/11_ndpclf.png",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
        "modelcanva_ecyq0v",
      ],
      link: "/#service-businessplan",
    },
    {
      title: "Strategies",
      description:
        "Stay ahead of the curve with our comprehensive benchmarking services. We will help you gauge where you stand in the market, unveiling opportunities and strategies to outperform competitors and set industry standards.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696325244/12_soms8p.png",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
      ],
      link: "/#service-strategy",
    },
    {
      title: "Benchmarking",
      description:
        "Turn your vision into a tangible roadmap with our tailored business plan services. Whether you are a startup or an established entity, our team crafts plans that attract investors and steer your business towards unparalleled success.",
      imageUrl:
        "https://res.cloudinary.com/dl2adjye7/image/upload/v1696325237/10_hoa8by.png",
      icons: [
        "swot3_hxgd7t",
        "canva_mvtfow",
        "notion-logo-svgrepo-com_m5vflg",
        "ologo_square_colour_light_bg_w5keat",
        "python_bmp5vb",
      ],
      link: "/#service-benchmarking",
    },
    // More cards...
  ];
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-center text-4xl text-black mb-12 font-alliance font-bold">
        {title2}
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
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1">
                <Card className="w-full ">
                  <CardHeader color="blue-gray" className="relative h-90">
                    <img src={card.imageUrl} alt="card-image" />
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
                          alt={icon}
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
