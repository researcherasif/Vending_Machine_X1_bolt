import { Check } from 'lucide-react';

const features = [
  'Full machine ownership',
  'Free installation & setup',
  'Basic inventory management (Lifetime)',
  'bKash/Nagad payment integration',
  '240-piece capacity (50 slots)',
  'Wi-Fi + 4G connectivity',
  '10-inch Android display',
  '1-year warranty',
  'Digital payment only (cashless)',
  'Temperature control (4-25°C)',
];

const revenueStreams = [
  { name: 'Product Sales', earning: 'Variable', split: '100% to you' },
  { name: 'Advertising', earning: 'Up to ৳5,000', split: '80% to you' },
  { name: 'Brand Sponsorships', earning: 'Up to ৳3,000', split: '80% to you' },
  { name: 'Machine Branding', earning: 'Up to ৳2,000', split: '80% to you' },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-6">
            A <span className="font-normal">Cost-Effective Solution</span> for Your Business
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We're here to help your business succeed, not just sell a product. That's why we provide
            vending machines at cost price, allowing you to benefit from this powerful tool without breaking the bank.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-12 text-white">
              <h3 className="text-3xl font-light mb-2">SOHUB VM-X1</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-light">৳390,500</span>
              </div>
              <p className="text-blue-100 font-light">
                Complete vending solution at cost price
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.open('mailto:hello@sohub.com.bd?subject=SOHUB VM-X1 Pricing Inquiry&body=Hi, I am interested in learning more about the SOHUB VM-X1 vending machine. Please provide more details about pricing and availability.', '_self')}
                className="w-full bg-gray-900 text-white py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Get in Touch to Learn More
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl" style={{padding: '.85rem'}}>
              <h3 className="text-2xl font-medium text-gray-900 mb-5">
                Multiple Revenue Streams
              </h3>
              <div className="space-y-4">
                {revenueStreams.map((stream) => (
                  <div
                    key={stream.name}
                    className="bg-white rounded-2xl p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{stream.name}</h4>
                      <span className="text-green-600 font-medium text-sm">{stream.split}</span>
                    </div>
                    <p className="text-sm text-gray-600">{stream.earning}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-light mb-4">Premium SaaS (Optional)</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-light">৳5,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Software updates & troubleshooting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Detailed analytics & reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
