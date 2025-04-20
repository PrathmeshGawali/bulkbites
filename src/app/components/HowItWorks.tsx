// HowItWorks.tsx
import Image from "next/image";

const HowItWorks = () => (
  <section id="how" className="py-24 px-4 bg-white">
    <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center gap-12 bg-[#f3ede5] p-10 rounded-2xl">
      
      {/* Left Side: Text */}
      <div className="flex-1">
        <h2 className="text-6xl md:text-8xl font-extrabold mb-6 text-black">How does BulkBites work?</h2>
        <p className="text-gray-700 text-xl leading-relaxed">
        When you take a picture with BulkBites, our sophisticated AI springs into action. Using advanced computer vision trained on millions of food images, 
        it instantly recognizes each component of your meal - whether it is grilled chicken, roasted vegetables, or complex dishes. 
        The system analyzes visual characteristics like color, texture, and arrangement to determine accurate portion sizes. 
        Finally, our proprietary nutrition engine cross-references this with comprehensive food databases to deliver precise macros and calories - all within seconds, just from your photo
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1">
        <Image 
          src="/i1.jpg" 
          alt="Stack of pancakes with nutritional labels" 
          className="rounded-3xl "
          width={600} height={300}
        />
      </div>
    </div>
  </section>
);

export default HowItWorks;
