import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Navbar from '../navbar';

  
   
  export function PastProjects({ title, description, imageUrl }) {
    const cards = [
        {
          title: 'Safequeen',
          link: 'https://google.com',
          tags: [{ text: 'Web App', color: 'bg-red-100' },{ text: 'React', color: 'bg-blue-100' },{ text: 'Django', color: 'bg-green-100' }],
          description:
            'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
        },
        {
            title: 'Uplist',
            link: 'https://google.com',
            tags: [{ text: 'Web App', color: 'bg-red-100' },{ text: 'Django', color: 'bg-green-100' }],
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'Nuzones',
            link: 'https://google.com',
            tags: [{ text: 'Web App', color: 'bg-red-100' }],
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'VDBCOOK',
            link: 'https://google.com',
            tags: [{ text: 'Web App', color: 'bg-red-100' },{ text: 'Springboot', color: 'bg-orange-100' }],
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in BarcelonaThe place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona..',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'Vanguard',
            link: 'https://google.com',
            tags: [{ text: 'Web App', color: 'bg-red-100' },{ text: 'React', color: 'bg-blue-100' }],
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'WebExpress',
            link: 'https://google.com',
            tags: [{ text: 'Web App', color: 'bg-blue-100' },{ text: 'React', color: 'bg-blue-100' }],
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
        // More cards...
      ];
      return (
        <div className="container mx-auto py-12 mt-32">
           <Navbar></Navbar>
          <h1 className="text-center text-4xl font-bold mb-12">Past Projects</h1>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
  <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <a href={card.link} target="_blank" rel="noopener noreferrer"> {/* Added anchor tag here */}
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1">
          <Card className="w-full">
            <CardHeader color="blue-gray" className="relative h-90">
              <img src={card.imageUrl} alt="card-image" />
            </CardHeader>
            <CardBody>
              <div className="text-left">
                {card.tags.map((tag, idx) => (
                  <div key={idx} className={`${tag.color} border border-black rounded px-2 py-1 m-2 text-sm font-medium text-gray-600 hover:bg-gray-100 inline-block`}>
                    {tag.text}
                  </div>
                ))}
                <Typography variant="h5" color="blue-gray" className="mb-2 mt-2">
                  {card.title}
                </Typography>
                <Typography>{card.description}</Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </a> {/* Close anchor tag here */}
  </li>
))}
          </ul>
        </div>
      );
            }