import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  
   
  export function CardDefault({ title, description, imageUrl }) {
    const cards = [
        {
          title: 'UI/UX Review Check',
          description:
            'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          imageUrl:
            'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
        },
        {
            title: 'UI/UX Review Check',
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'UI/UX Review Check',
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'UI/UX Review Check',
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in BarcelonaThe place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona..',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'UI/UX Review Check',
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
          {
            title: 'UI/UX Review Check',
            description:
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
            imageUrl:
              'https://res.cloudinary.com/dl2adjye7/image/upload/v1694955843/Apple_new-covid-19-app-macbook-pro-iphone-11-pro_03272020_big.jpg.large_inxrzr.jpg',
          },
        // More cards...
      ];
      return (
        <div className="container mx-auto py-12 mt-20">
             <h1 className="text-center text-4xl font-bold mb-12">OUR SERVICES</h1>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1">
                  <Card className="w-full">
                    <CardHeader color="blue-gray" className="relative h-90">
                      <img src={card.imageUrl} alt="card-image" />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                        {card.title}
                      </Typography>
                      <Typography className=" text-left">{card.description}</Typography>
                    </CardBody>
                    <CardFooter className="pt-0 text-left text-green-800">
                      <Button >Read More</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }