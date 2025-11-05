import { Phone, Mail, MapPin, Clock, MessageCircle, Wrench } from 'lucide-react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        
        <main className="pt-16">
          <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6">
                  Support <span className="font-normal">Center</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
                  Get help with your SOHUB VM-X1 vending machine
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-900/20 dark:to-gray-800/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-4 sm:mb-6">Contact Information</h2>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Phone Support</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">+88 09678-076482</p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Available 24/7 for emergencies</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">Email Support</h3>
                          <p className="text-gray-600 dark:text-gray-300">hello@sohub.com.bd</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">Office Address</h3>
                          <p className="text-gray-600 dark:text-gray-300">Flat #C2, House #29, Kaderabad, Katasur, Mohammadpur, Dhaka-1207</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white mb-4 sm:mb-6">Support Services</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Wrench className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-700 dark:text-gray-300">Emergency repair services</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">Technical troubleshooting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 dark:text-gray-300">Software updates & maintenance</span>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">Warranty Coverage</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        1-year warranty on machine (parts not included). Premium SaaS subscribers get priority support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Need Immediate Help?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  For urgent technical issues or machine malfunctions, contact our support team immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button 
                    onClick={() => window.open('tel:+8809678076482', '_self')}
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    Call Support Now
                  </button>
                  <button 
                    onClick={() => window.open('mailto:hello@sohub.com.bd?subject=Urgent Support Request', '_self')}
                    className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm sm:text-base"
                  >
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}