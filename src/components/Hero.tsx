import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSpecsClick: () => void;
}

export default function Hero({ onSpecsClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 1200" preserveAspectRatio="none">
          <defs>
            <pattern id="lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="1200" fill="url(#lines)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <p className="text-blue-600 font-medium tracking-wide">INTRODUCING SOHUB VM-X1</p>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Revolutionizing Business Operations, One Vending Machine at a Time
            </h1>
          </div>

          <div className="relative flex justify-center py-12">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="relative z-20 h-96 flex items-center justify-center">
              <img
                src="/Adobe Express - file.png"
                alt="SOHUB VM-X1 Vending Machine"
                className="h-full object-contain drop-shadow-xl hover:drop-shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="bg-white border-2 border-red-500 rounded-3xl px-8 py-8 inline-block mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 font-light text-lg mb-6">
              <span className="text-blue-600 font-medium">Automated retail innovation.</span>{' '}
              <span className="text-red-500 font-medium">Why are we still thinking traditional?</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
                Buy Now
              </button>

              <button
                onClick={onSpecsClick}
                className="bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Specs
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-6 font-light">
              From <span className="font-semibold">৳390,500</span> • FREE Installation • World-class technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
