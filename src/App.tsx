import { useRef } from 'react';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Vision from './components/Vision';
import HowItWorks from './components/HowItWorks';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const specsRef = useRef<HTMLDivElement>(null);

  const handleSpecsClick = () => {
    specsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onSpecsClick={handleSpecsClick} />
      <div ref={specsRef}>
        <Specs />
      </div>
      <Vision />
      <HowItWorks />
      <SuccessStories />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
