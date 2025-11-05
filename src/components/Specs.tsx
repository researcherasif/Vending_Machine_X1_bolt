import React from 'react';

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

export default function Specs() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="specs-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Technical <span className="font-bold">Specifications</span>
          </h2>
          <p className="text-gray-600 text-lg font-light">Complete machine details and features</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left font-medium text-sm">Specification</th>
                  <th className="px-6 py-4 text-left font-medium text-sm">Details</th>
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
                    <td className="px-6 py-4 font-medium text-gray-900">{spec.label}</td>
                    <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-medium text-gray-900 mb-4">What You Get</h3>
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
    </section>
  );
}
