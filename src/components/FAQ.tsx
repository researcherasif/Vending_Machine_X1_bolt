import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What do I need to start a vending business with SOHUB?',
    answer: 'Just purchase a vending machine, decide what products to sell, and place it in a high traffic area! We handle the setup.'
  },
  {
    question: 'What is the total cost to start?',
    answer: 'BDT 390,500 for the machine. Installation & basic SaaS is free.'
  },
  {
    question: 'Who owns the vending machine?',
    answer: 'You do! It\'s fully yours after purchase.'
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No! The only optional costs are for SaaS upgrades, maintenance, and branding.'
  },
  {
    question: 'What does the free SaaS include?',
    answer: 'Basic tracking, manual stock management, machine status alerts, and Bkash/Nagad integration.'
  },
  {
    question: 'What is the warranty period?',
    answer: 'The machine has a 1-year warranty period. Parts are not included.'
  },
  {
    question: 'What if my machine stops working?',
    answer: 'We provide emergency repair services (charges apply).'
  },
  {
    question: 'Who pays for electricity & internet?',
    answer: 'You do! The machine requires Wi-Fi/4G and 110V–220V power.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Frequently Asked <span className="font-normal">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg font-light">Everything you need to know about starting your vending business</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {faqs.slice(4, 8).map((faq, index) => (
              <div
                key={index + 4}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index + 4 ? null : index + 4)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index + 4 ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index + 4 && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}