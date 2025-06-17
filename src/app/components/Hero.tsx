import Image from 'next/image';

const Hero = () => (
  <section id="hero" className="min-h-screen bg-white flex items-center py-24 px-6 sm:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
      {/* Text Content */}
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight text-gray-900">
          Snap. Scan. Track.
          <span className="block bg-gradient-to-r from-red-600 to-orange-300 bg-clip-text text-transparent">
            Effortless Calorie Counting
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          Snap a photo of any meal and watch as our AI delivers instant, accurate nutrition facts – calories, macros, and micronutrients broken down in seconds.
          Because hitting your targets should feel effortless, not like guesswork.
        </p>
      </div>

      {/* Image Container - Adjusted for i5.png */}
      <div className="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:mx-0">
        <div className="relative w-full h-auto max-h-[80vh] rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src="/i5.png"
            alt="App Interface Showcasing Calorie Tracking"
            width={375}
            height={666}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
        
        {/* Floating Animation Effect - Adjusted position */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100/30 to-green-100/30 rounded-[40px] transform translate-x-6 translate-y-6" />
      </div>
    </div>
  </section>
);

export default Hero;