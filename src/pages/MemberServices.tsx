import React from 'react';
import { Book, Users, Phone, Download, Video, MessageCircle, Award, Briefcase } from 'lucide-react';

const MemberServices: React.FC = () => {
  const services = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Study Resources",
      description: "Access comprehensive study materials, practice tests, and exam guides.",
      features: [
        "Digital textbooks and materials",
        "Practice question banks",
        "Mock examinations",
        "Study guides and summaries"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Program",
      description: "Connect with experienced CMA professionals for guidance and support.",
      features: [
        "One-on-one mentoring sessions",
        "Career guidance counseling",
        "Industry insights and networking",
        "Professional development advice"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Live Sessions",
      description: "Join interactive webinars and live instruction sessions.",
      features: [
        "Weekly live lectures",
        "Q&A sessions with experts",
        "Exam strategy workshops",
        "Technical update sessions"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock support.",
      features: [
        "Technical support hotline",
        "Academic advisory services",
        "Live chat assistance",
        "Email support"
      ],
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Support",
      description: "Complete assistance with your CMA certification journey.",
      features: [
        "Application guidance",
        "Exam registration help",
        "Study plan creation",
        "Progress tracking tools"
      ],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Services",
      description: "Professional development and career advancement support.",
      features: [
        "Job placement assistance",
        "Resume review and optimization",
        "Interview preparation",
        "Salary negotiation guidance"
      ],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const tools = [
    {
      name: "Study Planner",
      description: "Personalized study schedules based on your exam date and goals.",
      icon: <Download className="w-6 h-6" />
    },
    {
      name: "Progress Tracker",
      description: "Monitor your learning progress and identify areas for improvement.",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Mobile App",
      description: "Study on-the-go with our comprehensive mobile application.",
      icon: <Phone className="w-6 h-6" />
    },
    {
      name: "Discussion Forums",
      description: "Connect with fellow students and share knowledge.",
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Member <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive support services designed exclusively for IAMA members to ensure your CMA success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Exclusive Member Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access a comprehensive suite of services designed to support you throughout your CMA journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Digital Tools & Resources</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage our advanced digital platform to enhance your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-fuchsia-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Support Levels</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the level of support that matches your needs and study style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Basic Support</h3>
                <p className="text-gray-400">Essential resources and assistance</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  <span className="text-gray-300">Email support (48h response)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  <span className="text-gray-300">Access to study materials</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  <span className="text-gray-300">Monthly group webinars</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-sm text-gray-400">Included with Basic membership</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border-2 border-fuchsia-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-fuchsia-400">Priority Support</h3>
                <p className="text-gray-400">Enhanced guidance and resources</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3" />
                  <span className="text-gray-300">Live chat support (24h response)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3" />
                  <span className="text-gray-300">Personal study advisor</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3" />
                  <span className="text-gray-300">Bi-weekly progress reviews</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3" />
                  <span className="text-gray-300">Priority booking for sessions</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-sm text-fuchsia-400">Professional membership</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium Support</h3>
                <p className="text-gray-400">Comprehensive personalized assistance</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-gray-300">Phone support (4h response)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-gray-300">Dedicated mentor</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-gray-300">Weekly 1-on-1 sessions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-gray-300">Custom study plans</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                  <span className="text-gray-300">Career coaching</span>
                </li>
              </ul>
              <div className="text-center">
                <span className="text-sm text-gray-400">Premium membership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our support team is here to assist you with any questions or concerns.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <Phone className="w-8 h-8 text-fuchsia-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-400 text-sm mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-xs">Mon-Fri: 9AM-6PM EST</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <MessageCircle className="w-8 h-8 text-fuchsia-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-400 text-sm mb-2">Available 24/7</p>
                <button className="text-fuchsia-400 hover:text-fuchsia-300 text-xs">Start Chat</button>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <Book className="w-8 h-8 text-fuchsia-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-gray-400 text-sm mb-2">Self-service resources</p>
                <button className="text-fuchsia-400 hover:text-fuchsia-300 text-xs">Browse Articles</button>
              </div>
            </div>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Support Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberServices;