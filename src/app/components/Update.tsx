import Image from 'next/image';
const Update = () => {
    return (
        <section className="w-full py-20 px-4 flex justify-center bg-white">
          <div className="bg-black text-white rounded-2xl shadow-xl max-w-3xl w-full px-6 py-12 text-center flex flex-col items-center">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
              Updates
            </h2>


            {/* Playstore Image */}
            <a
              className="inline-block mb-6"
              href="https://play.google.com/store/apps/details?id=com.tensorbuilds.bulkbites"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-[350px] h-[100px] sm:w-[350px] sm:h-[100px]">
                <Image
                  src="/playstore.png"
                  alt="Google Play Store"
                  layout="fill"
                  className="object-contain"
                  sizes="(max-width: 1024px) 150vw, 75vw"
                  priority
                />
              </div>
            </a>

            {/* CTA Button */}
            <a
              className="inline-block mb-6"
              href="https://play.google.com/store/apps/details?id=com.tensorbuilds.bulkbites"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
                Download Here
              </button>
            </a>

            {/* iOS Text */}
            <p className="text-base sm:text-lg text-gray-300">
              For iOS: Coming Soon...
            </p>
          </div>
        </section>

    );
  };
  
  export default Update;