import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomerImg01 from './images/customer-01.svg'
import CustomerBg01 from './images//customer-bg-01.png'
import CustomerImg02 from './images/customer-02.svg'
import CustomerBg02 from './images/customer-bg-02.png'
import CustomerImg03 from './images/customer-03.svg'
import CustomerBg03 from './images/customer-bg-03.png'
import CustomerImg04 from './images/customer-04.svg'
import CustomerBg04 from './images/customer-bg-04.png'
import CustomerImg05 from './images/customer-05.svg'
import CustomerBg05 from './images/customer-bg-05.png'
import CustomerImg06 from './images/customer-06.svg'
import CustomerBg06 from './images/customer-bg-06.png'
import CustomerImg07 from './images/customer-07.svg'
import CustomerBg07 from './images/customer-bg-07.png'
import CustomerImg08 from './images/customer-08.svg'
import CustomerBg08 from './images/customer-bg-08.png'
import CustomerImg09 from './images/customer-09.svg'
import CustomerBg09 from './images/customer-bg-09.png'
import CustomerImg10 from './images/customer-10.svg'
import CustomerBg10 from './images/customer-bg-10.png'
import CustomerAvatar01 from './images/customer-avatar-01.jpg'
import CustomerAvatar02 from './images/customer-avatar-02.jpg'
import Particles from './particles.tsx'
import Highlighter, { HighlighterItem02 } from './highlighter.tsx'

export default function CustomersList() {

  const items = [
    {
      name: 'toto',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1695503515/react_y3ribl.svg",
      bg: CustomerBg01,
     
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1697187882/vue_ez1vlf.svg",
      bg: CustomerBg02,
    },
    {
      name: 'Customer name',
      img:"https://res.cloudinary.com/dl2adjye7/image/upload/v1696322208/heroku-icon_t8pyfm.svg",
      bg: CustomerBg03,

    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1696322228/figma_joejhn.svg",
      bg: CustomerBg04,
    
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708360738/tailwind-css-icon-512x307-1v56l8ed_m5ttxl.png",
      bg: CustomerBg05,
    
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1708360784/flutter-icon-1651x2048-ojswpayr_hkl5rw.png",
      bg: CustomerBg06,
      
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1705520929/webflow_yofobf.svg",
      bg: CustomerBg07,
     
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1695503536/spring-icon_w5s3uf.svg",
      bg: CustomerBg08,
     
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1695503370/django-icon_rxmwzx.svg",
      bg: CustomerBg09,
    
    },
    {
      name: 'Customer name',
      img: "https://res.cloudinary.com/dl2adjye7/image/upload/v1697188455/postgresql_1_rxgttx.svg",
      bg: CustomerBg10,
     
    },
  ]

  return (
    <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20 mt-20">
      <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">
        {items.map((item, index) => (
          <div key={index}>
            <HighlighterItem02>
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                <Particles className="absolute inset-0 -z-10" quantity={3} />
                <div className="flex items-center justify-center">
                  <img className="w-full h-full aspect-video object-cover" src={item.bg} alt="Customer Background" />
                  <img className="absolute" src={item.img} alt={item.name} style={{ width: '20%', transform: 'translate(-50%, -50%)', position: 'absolute', top: '50%', left: '50%' }} />
                </div>
              </div>
            </HighlighterItem02>
          </div>
        ))}

        {/* Testimonial #01 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
            <span className="line-clamp-4 text-white">
              “Working at Innovation Studios as a software engineer gives me the opportunity to tackle real world project. ”
            </span>
          </p>
          <div className="inline-flex mb-2">
            <img className="rounded-full" src="https://res.cloudinary.com/dptyvjqcf/image/upload/v1697625769/1682583212519_qwfwo5.jpg" width="32" height="32" alt="Customer Avatar 01" />
          </div>
          <div className="text-sm font-medium text-slate-300">
            Hugo Biais <span className="text-slate-700">-</span> UoB
          </div>
        </div>

        {/* Testimonial #02 */}
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
            <span className="line-clamp-4 text-white">
              “One of my best decision was to join innovation studios! It was a huge workload but I managed to gain so much experience thanks to them!”
            </span>
          </p>
          <div className="inline-flex mb-2">
            <img className="rounded-full" src="https://res.cloudinary.com/dl2adjye7/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1699613520/website-images/photo-elliot.jpg" width="32" height="32" alt="Customer Avatar 02" />
          </div>
          <div className="text-sm font-medium text-slate-300">
            Elliot Teissandier <span className="text-slate-700">-</span> UOW
          </div>
        </div>
      </Highlighter>
    </div>
  );
};


