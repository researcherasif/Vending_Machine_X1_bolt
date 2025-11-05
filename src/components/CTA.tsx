import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-6xl font-light text-white tracking-tight">
            Let's Normalize Vending Machines{' '}
            <span className="font-normal">Together</span>
          </h2>

          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Join the movement to transform business operations across Bangladesh with smart,
            automated vending solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => window.open('mailto:hello@sohub.com.bd?subject=SOHUB VM-X1 Inquiry', '_self')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              See How We Can Help
            </button>
          </div>
        </div>
      </div>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
