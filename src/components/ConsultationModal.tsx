import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    locationType: '',
    details: ''
  });

  const locationTypes = [
    'University/School',
    'Corporate Office',
    'Shopping Mall/Center',
    'Residential Area/Apartments',
    'Shop/Convenience Store',
    'Hospital/Clinic',
    'Bus/Train Station',
    'Others'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create mailto link with form data
    const subject = 'SOHUB VM-X1 Consultation Request';
    const body = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Installation Location Type: ${formData.locationType}
Additional Details: ${formData.details}

Please contact me to discuss the SOHUB VM-X1 vending machine opportunity.
    `.trim();
    
    window.open(`mailto:hello@sohub.com.bd?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
    
    setIsLoading(false);
    onClose();
    setFormData({ fullName: '', email: '', phone: '', locationType: '', details: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 scale-100 opacity-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <h2 className="text-2xl font-light text-gray-900">Request a Consultation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100/50 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <select
              name="locationType"
              required
              value={formData.locationType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Installation Location Type</option>
              {locationTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              name="details"
              placeholder="Additional Details (Optional)"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}