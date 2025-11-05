export default function Vision() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-gray-900 tracking-tight">
            Our Vision: Normalizing Vending Machines for a{' '}
            <span className="font-normal">Smarter Bangladesh</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            We believe that vending machines can be a key part of business transformation in Bangladesh.
            By offering easy-to-use, cost-effective, and automated solutions, we aim to make vending
            machines an integral part of daily business operations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center space-y-2 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-lg sm:text-2xl">💼</span>
            </div>
            <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-gray-900">24/7 Operations</h3>
            <p className="text-xs sm:text-sm text-gray-600">Automated sales without staff</p>
          </div>

          <div className="text-center space-y-2 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-lg sm:text-2xl">⚡</span>
            </div>
            <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-gray-900">Smart Payments</h3>
            <p className="text-xs sm:text-sm text-gray-600">bKash, Nagad, Rocket, cards, Banks and net banking payments</p>
          </div>

          <div className="text-center space-y-2 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-lg sm:text-2xl">📍</span>
            </div>
            <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-gray-900">Any Location</h3>
            <p className="text-xs sm:text-sm text-gray-600">Office, mall, campus, hospital, factory, apartment</p>
          </div>

          <div className="text-center space-y-2 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-lg sm:text-2xl">📊</span>
            </div>
            <h3 className="text-sm sm:text-lg lg:text-xl font-medium text-gray-900">Real-time Analytics</h3>
            <p className="text-xs sm:text-sm text-gray-600">Sales tracking & inventory management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
