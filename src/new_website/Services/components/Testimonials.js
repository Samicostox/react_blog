import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className="bg-teal-900 py-12">
      <div className="mb-8 px-4">
        <h3 className="text-slate-50 text-5xl font-semibold text-center text-left font-alliance">
          They Trusted Us
        </h3>
        <p className="text-center text-slate-300 text-sm mt-2 max-w-lg mx-auto font-alliance">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
       

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-44 object-cover" />
            <div className="bg-slate-900 text-slate-50 p-4">
              <span className="block font-semibold text-lg mb-1 text-left text-white font-alliance">{t.name}</span>
              <span className="block mb-3 text-sm font-medium text-left text-white font-alliance">{t.title}</span>
              <span className="block text-sm text-slate-300 text-left text-white font-alliance">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709287053/SQ_ICON_-_BLACK_500X500_xgqn31_cmwiog.png",
      name: "Roxy",
      title: "Founder of SafeQueen",
      info: "Amazing work!",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709288499/Announce_End_Of_Project_pzt3n4.png",
      name: "Alex Watkins",
      title: "CEO, NuZones",
      info: "It has been a pleasure working with Innovation Studios. They really helped bring my idea to life and construct something that passionates me!",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709288264/eric-teissandier_f3bxvz_rdfnj9.jpg",
      name: "Eric Teissandier",
      title: "CEO, 4D",
      info: "We recently collaborated with the Innovation Studios, our seamless experience with them has led to engage with them on a regular basis.",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709288584/Announce_End_Of_Project_1_eh3hwi.png",
      name: "Ross Derick",
      title: "CEO, Uplist",
      info: "The team at Birmingham Innovation Studio are not only skilled software engineers, but also valuable tech consultants with a clear understanding of commercial realities and supporting product strategy. ",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709288263/1682583212519_qwfwo5_kfugmc.jpg",
      name: "Hugo Biais",
      title: "Student at the University of Birmingham",
      info: "Working at Innovation Studios as a software engineer gives me the opportunity to tackle real world project. This enhances my practical skills and experience, adding great value to my professional profile.",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1709288633/65bcb923b4a92c0f155ea513_Screenshot_2024-02-02_at_09.42.15_mxbiei.png",
      name: "Tristan Vandenberghe.",
      title: "Founder of Manta",
      info: "I had an amazing experience with Innovation Studios, they created amazing designs for us!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "xxx",
      title: "Sen Nood",
      info: "hugo fill",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Clement D.",
      title: "Orion",
      info: "In 2 weeks they did the designs and developed our website without anny issue! we were truly impressed by the quality of the service!",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "xxx",
      title: "Zmartly",
      info: "hugo fill",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "xxx",
      title: "WeebExpress",
      info: "I asked them to develop for me an automation tool for my business, and it went extremly smootlhy!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "xxx",
      title: "Vanguard",
      info: "I worked with innovation Studios multiple times, They did an amazing job!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Emmanuel k.",
      title: "Software Engineer at JP Morgan",
      info: "Working with innovation studios allowed me to get practical experience during my studies and crush my interview!",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Danny G.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Ian D.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
      name: "Ben S.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Matthew I.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Garrett P.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      name: "Xavier C.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
    },
  ],
};

export default ScrollingTestimonials;