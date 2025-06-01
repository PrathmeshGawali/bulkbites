import Image from 'next/image';
import React from 'react';

interface Promoter {
  id: string;
  name: string;
  avatar: string;
  link: string;
}

interface PromoterShowcaseProps {
  title: string;
  promoters: Promoter[];
}

const PromoterShowcase: React.FC<PromoterShowcaseProps> = ({ title, promoters }) => {
  return (
    <div className="flex flex-col items-center w-full mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10 text-center px-4">
        {title}
      </h2>
      
      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {promoters.map((promoter) => (
          <a
            key={promoter.id}
            href={promoter.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-32 sm:w-36 transition-transform hover:scale-105"
          >
            <div className="relative">
              {/* Gradient Avatar Container */}
              <div className="rounded-full p-[3px] bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">
                <div className="bg-white rounded-full p-1">
                  <div className="rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 relative">
                    <Image
                      src={promoter.avatar}
                      alt={promoter.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Larger Verification Badge */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                <div className="bg-sky-600 rounded-full p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Larger Name */}
            <p className="mt-4 text-center font-bold text-black text-base sm:text-lg truncate w-full">
              {promoter.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

const Promoter = () => {
  const promotersData: Promoter[] = [
    {
      id: '1',
      name: 'Piyush Bagul',
      avatar: '/PB1.jpg',
      link: 'https://www.instagram.com/piyush.muscleverse?igsh=MWQ1MGdnZ29tZDk5Ng=='
    },
    {
      id: '2',
      name: 'Dhananjay Sonawane',
      avatar: '/DS.jpeg',
      link: 'https://www.instagram.com/supremo_god?igsh=MXNuZ255d3JmeG5jaw=='
    },
  ];

  return (
    <section className="w-full py-24 px-4 flex justify-center bg-white">
      <div className="bg-none text-black rounded-2xl shadow-xl max-w-4xl w-full px-8 py-14 text-center flex flex-col items-center">
        <PromoterShowcase 
          title="Used by these Amazing People !!"
          promoters={promotersData}
        />
      </div>
    </section>
  );
};

export default Promoter;