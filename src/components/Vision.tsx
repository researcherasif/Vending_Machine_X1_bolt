export default function Vision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">
            Our Vision: Normalizing Vending Machines for a{' '}
            <span className="font-normal">Smarter Bangladesh</span>
          </h2>

          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We believe that vending machines can be a key part of business transformation in Bangladesh.
            By offering easy-to-use, cost-effective, and automated solutions, we aim to make vending
            machines an integral part of daily business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900">Business Transformation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your business operations with automated retail solutions that work around the clock,
                increasing efficiency and revenue without increasing overhead.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-medium text-gray-900">Smart Automation</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leverage cutting-edge technology with multiple payment options including bKash, Nagad,
                and card payments for seamless customer experiences.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {['Office', 'Mall', 'Campus', 'Hospital'].map((location, i) => (
                    <div
                      key={location}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="text-center space-y-2">
                        <div className="text-4xl">{['🏢', '🛍️', '🎓', '🏥'][i]}</div>
                        <p className="font-medium text-gray-900">{location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
