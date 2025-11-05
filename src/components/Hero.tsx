import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSpecsClick: () => void;
}

export default function Hero({ onSpecsClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden pt-16 transition-colors duration-300">
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
            <p className="text-blue-600 font-medium tracking-wide text-sm sm:text-base">INTRODUCING SOHUB VM-X1</p>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light text-gray-900 dark:text-white leading-tight tracking-tight">
              Revolutionizing Business Operations, One Vending Machine at a Time
            </h1>
          </div>

          <div className="relative flex justify-center py-12">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute inset-0 opacity-20">
                <div className="flow-animation"></div>
              </div>
            </div>

            <div className="relative z-20 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <img
                src="/Adobe Express - file.png"
                alt="SOHUB VM-X1 Vending Machine"
                className="h-full object-contain drop-shadow-xl hover:drop-shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl px-4 sm:px-8 py-6 sm:py-8 inline-block mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-300 font-light text-base sm:text-lg mb-6">
              <span className="text-blue-600 font-medium">Automated retail innovation.</span>{' '}
              <span className="text-red-500 font-medium">Why are we still thinking traditional?</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('tel:+8809678076482', '_self')}
                className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
              >
                Buy Now
              </button>

              <button
                onClick={onSpecsClick}
                className="w-full sm:w-auto bg-transparent text-gray-900 dark:text-white border border-gray-900 dark:border-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
              >
                Specs
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-6 font-light">
              From <span className="font-semibold">৳390,500</span> • FREE Installation • World-class technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
