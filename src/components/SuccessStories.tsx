const stories = [
  {
    business: 'Tech Campus',
    type: 'Educational Institution',
    impact: '+40%',
    metric: 'Customer Satisfaction',
    reduction: '-25%',
    reductionMetric: 'Overhead Costs',
    quote: 'The vending machine transformed our campus experience. Students love the 24/7 access.',
  },
  {
    business: 'Corporate Office',
    type: 'Technology Company',
    impact: '+60%',
    metric: 'Revenue Growth',
    reduction: '-35%',
    reductionMetric: 'Operational Time',
    quote: 'We saw immediate returns. The automated solution freed up our staff for more important tasks.',
  },
  {
    business: 'Shopping Complex',
    type: 'Retail Center',
    impact: '+50%',
    metric: 'Foot Traffic',
    reduction: '-30%',
    reductionMetric: 'Wait Times',
    quote: 'Our customers appreciate the convenience. It enhanced the overall shopping experience.',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight mb-6">
            How Businesses Have{' '}
            <span className="font-normal">Transformed with Vending Machines</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Real results from businesses across Bangladesh
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.business}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-2">{story.type}</p>
                  <h3 className="text-2xl font-medium text-gray-900">{story.business}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-2xl p-4">
                    <div className="text-3xl font-light text-green-600 mb-1">{story.impact}</div>
                    <div className="text-sm text-gray-600">{story.metric}</div>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4">
                    <div className="text-3xl font-light text-blue-600 mb-1">{story.reduction}</div>
                    <div className="text-sm text-gray-600">{story.reductionMetric}</div>
                  </div>
                </div>

                <blockquote className="text-gray-600 leading-relaxed italic">
                  "{story.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
