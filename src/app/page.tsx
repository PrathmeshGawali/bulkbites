import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Update from './components/Update';
import Recipe from './components/Recipe';
import Promoter from './components/Promoters';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16 scroll-smooth">
        <Hero />
        <Features />
        <HowItWorks />
        <Recipe />
        <Promoter/>
        <Update />
        <Contact />
      </main>
    </>
  );
}