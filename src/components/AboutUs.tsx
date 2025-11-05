import { Target, Zap, CreditCard, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
            About <span className="font-normal">SOHUB</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
            Pioneering the future of automated retail in Bangladesh
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We provide advanced vending machine solutions designed for entrepreneurs and 
              businesses looking to enter or expand in the automated retail industry. Our 
              machines offer a modern, efficient, and fully automated way to sell a wide range 
              of products in high-traffic areas—operating 24/7.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Equipped with advanced technology and multiple payment options—including 
              Mobile Banking (bKash, Nagad, Rocket), credit cards, and net banking—our 
              vending systems ensure a seamless, cashless experience for customers. We 
              continue to innovate with smart vending solutions that maximize profitability, 
              reduce operational costs, and adapt to the evolving market needs.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900/20 dark:to-gray-800/20 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <Target className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Advanced Technology</h4>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <Zap className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">24/7 Operations</h4>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <CreditCard className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Multiple Payments</h4>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Smart Solutions</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900/20 dark:to-gray-800/20 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To revolutionize the retail landscape in Bangladesh by providing cutting-edge vending 
              machine solutions that empower entrepreneurs, enhance customer convenience, and drive 
              business growth through innovative automated retail technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}