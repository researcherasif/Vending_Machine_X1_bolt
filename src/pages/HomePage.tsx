import { useRef } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation 
          onHomeClick={() => scrollToSection(heroRef)}
          onSpecsClick={() => scrollToSection(specsRef)}
          onPricingClick={() => scrollToSection(pricingRef)}
          onFAQClick={() => scrollToSection(faqRef)}
        />
        <div ref={heroRef}>
          <Hero onSpecsClick={() => scrollToSection(specsRef)} />
        </div>
        <Vision />
        <div ref={specsRef}>
          <HowItWorks />
        </div>
        <div ref={pricingRef}>
          <Pricing />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}