import { Zap, Clock, TrendingDown, TrendingUp } from 'lucide-react';

const specsData = [
  { label: 'Machine Size', value: 'W-930 × D-830 × H1950mm (±10mm)' },
  { label: 'Power', value: '35/40/460W (heating 500W)' },
  { label: 'Capacity', value: '240 Pcs Product (50 Slots)' },
  { label: 'Spring', value: 'Single (7×7.5×20cm) & Double (7×15×18cm)' },
  { label: 'Display Size', value: '10-inch Android Tab' },
  { label: 'Front Glass', value: 'Tempered Glass' },
  { label: 'Payment Method', value: 'Digital Payment Only (Cashless)' },
  { label: 'Machine Weight', value: '290 kg (with wood packing)' },
  { label: 'Network Method', value: 'Wi-Fi + 4G' },
  { label: 'Chiller Temperature', value: '4–25°C (cooling + heating)' },
  { label: 'Gas', value: 'R290' },
  { label: 'Wheel', value: 'Yes' },
  { label: 'Voltage', value: '110V–220V' },
  { label: 'Material', value: 'Metal + Glass + PVC' },
];

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
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

        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Technical <span className="font-normal">Specifications</span>
            </h3>
            <p className="text-gray-600 text-lg font-light">Complete machine details and features</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-3 py-2 text-left font-medium text-xs">Specification</th>
                    <th className="px-3 py-2 text-left font-medium text-xs">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {specsData.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={`border-t border-gray-100 hover:bg-blue-50 transition-colors duration-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-3 py-2 font-medium text-gray-900 text-sm">{spec.label}</td>
                      <td className="px-3 py-2 text-gray-700 text-sm">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h4 className="text-xl font-medium text-gray-900 mb-4">What You Get</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Full machine ownership – no lease or rental</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Free installation and setup</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Basic inventory management (Lifetime FREE)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>bKash/Nagad payment integration (FREE)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>1-year warranty on machine</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
