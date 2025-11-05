import { Zap, Clock, TrendingDown, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Automated Operations',
    description: 'Streamline inventory management and sales with smart, automated systems that work 24/7.',
  },
  {
    icon: Clock,
    title: 'Customer Convenience',
    description: 'Provide round-the-clock accessibility for products, enhancing customer satisfaction.',
  },
  {
    icon: TrendingDown,
    title: 'Low Overhead Costs',
    description: 'Reduce labor costs and operational hassles by integrating intelligent vending solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Easily expand your business by adding vending machines to new locations.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-6">
            How Vending Machines Can{' '}
            <span className="font-normal">Help Your Business Grow</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Discover the transformative impact of automated retail on your operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
