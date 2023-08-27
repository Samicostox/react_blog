import Navbar from './navbar';
import MembershipCard from './cm';  // import the new component

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
  // ...
];

const includedFeatures2 = [
    'Private forum access2',
    'Member resources2',
    'Entry to annual conference2',
    'Official member t-shirt2',
    // ...
  ];

export default function Product() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Navbar></Navbar>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          {/* Header content here */}
        </div>

        <MembershipCard 
          title="Lifetime membership"
          description="Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
          features={includedFeatures}
          price={349}
        />
        
        {/* Duplicate the MembershipCard as many times as you want */}
        <MembershipCard 
          title="Yealry membership"
          description="Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
          features={includedFeatures2}
          price={200}
        />

        <MembershipCard 
          title="Monthly membership"
          description="Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
          features={includedFeatures2}
          price={29}
        />  

      </div>
    </div>
  );
}
