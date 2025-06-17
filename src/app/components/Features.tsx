'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollStep = 400;
  
  // New features (8-13)
  const newFeatures = [
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
  ];
  
  // Existing features (1-7)
  const existingFeatures = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
  ];
  
  // Combine with new features first
  const carouselImages = [...newFeatures, ...existingFeatures];
  const fullList = [...carouselImages, ...carouselImages];
  
  // Track new features
  const [isNewFeature] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    newFeatures.forEach(img => {
      initialState[img] = true;
    });
    return initialState;
  });

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const middle = (container.scrollWidth / 2) - container.offsetWidth / 2;
    container.scrollLeft = middle;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = middle;
      } else if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollLeft = middle;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-5xl sm:text-8xl font-extrabold text-gray-900 mb-4">
          Features
        </h2>
        <div className="w-24 h-1 mx-auto bg-orange-600 rounded-full mb-6"></div>

        <p className="text-xl text-gray-500 mb-14 max-w-3xl mx-auto">
          AI-powered calorie tracking, meal planning, barcode scanning, and more — all in your pocket.
        </p>
        <p className="text-xl text-gray-500 mb-14 max-w-2xl mx-auto">
          Scroll horizontally.
        </p>
        
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-orange-600 shadow-md rounded-full hidden sm:block"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-orange-600 shadow-md rounded-full hidden sm:block"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        <div
          ref={carouselRef}
          className="overflow-x-auto snap-x snap-mandatory flex space-x-6 px-4 pb-6 scrollbar-hide scroll-smooth"
        >
          {fullList.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[9/16] w-[300px] sm:w-[360px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Enhanced Ribbon-style "New" tag */}
              {isNewFeature[img] && (
                <div className="absolute -top-1 -right-6 z-10 w-40 h-8 bg-orange-600 flex items-center justify-center transform rotate-45 shadow-lg">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    ..........New 
                  </span>
                </div>
              )}
              
              <Image
                src={`/carousel/${img}`}
                alt={`Feature ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 300px, 360px"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Features;