import React from 'react';
import { BookOpen, Clock, Users, Award, Download, Calendar, CheckCircle } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$1,299",
      duration: "6 months",
      features: [
        "Complete Part 1 & 2 materials",
        "Online video lectures",
        "Practice questions",
        "Basic support",
        "Digital textbooks"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,899",
      duration: "12 months",
      features: [
        "Everything in Basic",
        "Live instructor sessions",
        "Personal study advisor",
        "Mock exams",
        "Mobile app access",
        "Progress tracking"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$2,499",
      duration: "18 months",
      features: [
        "Everything in Professional",
        "1-on-1 tutoring sessions",
        "Unlimited practice tests",
        "Career guidance",
        "Job placement assistance",
        "Lifetime access to updates"
      ],
      popular: false
    }
  ];

  const examDates = [
    { window: "January/February 2025", part1: "Jan 1 - Feb 28", part2: "Jan 1 - Feb 28" },
    { window: "May/June 2025", part1: "May 1 - Jun 30", part2: "May 1 - Jun 30" },
    { window: "September/October 2025", part1: "Sep 1 - Oct 31", part2: "Sep 1 - Oct 31" }
  ];

  const part1Topics = [
    "Financial Planning, Performance, and Analytics",
    "Technology and Analytics",
    "Financial Statement Analysis",
    "Cost Management",
    "Budgeting and Forecasting",
    "Performance Management"
  ];

  const part2Topics = [
    "Strategic Financial Management",
    "Financial Decision Making",
    "Investment Decisions",
    "Risk Management",
    "Professional Ethics",
    "Decision Analysis"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              CMA <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Certification</span> Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Master the art of management accounting with our comprehensive CMA preparation program.
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Course Overview</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our CMA certification program is designed to provide you with comprehensive knowledge and practical skills 
                needed to excel in management accounting. With IAMA's structured approach, you'll master both theoretical 
                concepts and real-world applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <Clock className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-gray-400">6-18 months</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <Users className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <h3 className="font-semibold mb-2">Class Size</h3>
                  <p className="text-gray-400">Limited to 25</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <BookOpen className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <h3 className="font-semibold mb-2">Format</h3>
                  <p className="text-gray-400">Online & Hybrid</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                  <Award className="w-8 h-8 text-fuchsia-400 mb-3" />
                  <h3 className="font-semibold mb-2">Certification</h3>
                  <p className="text-gray-400">CMA Certified</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CMA Study"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CMA Course Structure</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our comprehensive curriculum covers both parts of the CMA exam with detailed study materials and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Part 1 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-fuchsia-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold">Part 1: Financial Planning & Analytics</h3>
              </div>
              <ul className="space-y-3">
                {part1Topics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Part 2 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold">Part 2: Strategic Financial Management</h3>
              </div>
              <ul className="space-y-3">
                {part2Topics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the plan that best fits your learning style and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border ${
                  plan.popular ? 'border-fuchsia-500 scale-105' : 'border-gray-700'
                } transition-all duration-300 hover:border-fuchsia-500/50`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.duration} access</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-fuchsia-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white'
                    : 'border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black'
                }`}>
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Dates */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Exam Dates</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Plan your CMA exam schedule with our upcoming testing windows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-fuchsia-500 to-purple-600">
                      <th className="px-6 py-4 text-left font-semibold">Testing Window</th>
                      <th className="px-6 py-4 text-left font-semibold">Part 1</th>
                      <th className="px-6 py-4 text-left font-semibold">Part 2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {examDates.map((date, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
                        <td className="px-6 py-4 font-semibold text-fuchsia-400">{date.window}</td>
                        <td className="px-6 py-4 text-gray-300">{date.part1}</td>
                        <td className="px-6 py-4 text-gray-300">{date.part2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Detailed Syllabus</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all CMA exam topics with detailed learning objectives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <Calendar className="w-16 h-16 text-fuchsia-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Complete CMA Syllabus</h3>
                <p className="text-gray-400 mb-6">
                  Download our comprehensive syllabus covering all topics, learning objectives, and study timeline.
                </p>
                <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download Syllabus
                </button>
              </div>
              <div className="text-gray-300 text-center">
                <p>The syllabus includes detailed breakdown of:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-left max-w-2xl mx-auto">
                  <li>Learning objectives for each topic</li>
                  <li>Recommended study hours</li>
                  <li>Practice question guidelines</li>
                  <li>Assessment criteria</li>
                  <li>Reference materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 rounded-2xl p-12 border border-fuchsia-500/20">
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your CMA Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful CMA professionals who started their journey with IAMA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Enroll Now
              </button>
              <button className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;