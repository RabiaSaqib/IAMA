import React from 'react';
import { MapPin, Users, Calendar, Globe, ExternalLink, Phone, Mail } from 'lucide-react';

const MemberSocieties: React.FC = () => {
  const societies = [
    {
      name: "IAMA New York Chapter",
      location: "New York, NY",
      members: 2500,
      meetingFrequency: "Monthly",
      description: "The largest IAMA chapter serving the Greater New York area with regular networking events and professional development workshops.",
      contact: {
        phone: "+1 (212) 555-0123",
        email: "ny@iama-chapters.org"
      },
      nextEvent: "Advanced Cost Analysis Workshop - Feb 15, 2025",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "IAMA California Chapter",
      location: "Los Angeles, CA",
      members: 1800,
      meetingFrequency: "Bi-monthly",
      description: "Serving CMA professionals across California with a focus on technology and innovation in management accounting.",
      contact: {
        phone: "+1 (213) 555-0456",
        email: "ca@iama-chapters.org"
      },
      nextEvent: "Tech in Finance Summit - Feb 22, 2025",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "IAMA London Chapter",
      location: "London, UK",
      members: 1200,
      meetingFrequency: "Monthly",
      description: "European headquarters chapter connecting CMA professionals across the UK and European markets.",
      contact: {
        phone: "+44 20 7555 0789",
        email: "london@iama-chapters.org"
      },
      nextEvent: "Brexit Impact on Management Accounting - Feb 28, 2025",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "IAMA Toronto Chapter",
      location: "Toronto, ON",
      members: 950,
      meetingFrequency: "Monthly",
      description: "Canada's premier CMA chapter offering bilingual services and cross-border professional networking.",
      contact: {
        phone: "+1 (416) 555-0321",
        email: "toronto@iama-chapters.org"
      },
      nextEvent: "Canadian Tax Implications Workshop - Mar 8, 2025",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "IAMA Singapore Chapter",
      location: "Singapore",
      members: 800,
      meetingFrequency: "Quarterly",
      description: "Asia-Pacific hub serving CMA professionals across Southeast Asia with focus on emerging markets.",
      contact: {
        phone: "+65 6555 0654",
        email: "singapore@iama-chapters.org"
      },
      nextEvent: "ASEAN Market Analysis Seminar - Mar 15, 2025",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "IAMA Sydney Chapter",
      location: "Sydney, AU",
      members: 650,
      meetingFrequency: "Bi-monthly",
      description: "Serving Australia and New Zealand with specialized focus on mining and resources sector accounting.",
      contact: {
        phone: "+61 2 9555 0987",
        email: "sydney@iama-chapters.org"
      },
      nextEvent: "Resources Sector Financial Planning - Mar 22, 2025",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking Opportunities",
      description: "Connect with local CMA professionals and expand your professional network."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Regular Events",
      description: "Attend workshops, seminars, and social events tailored to your region."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Be part of a worldwide network of CMA professionals and experts."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Expertise",
      description: "Access region-specific knowledge and regulatory insights."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Member <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Societies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Connect with IAMA chapters and local CMA communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Join a Local Chapter?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Local chapters provide unique opportunities for professional growth and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center"
              >
                <div className="text-fuchsia-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Global IAMA Community</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">120+</div>
              <div className="text-gray-300">Local Chapters</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">25,000+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">500+</div>
              <div className="text-gray-300">Annual Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Directory */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Chapters</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore some of our most active chapters around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {societies.map((society, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={society.image}
                  alt={society.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{society.name}</h3>
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{society.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{society.members.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{society.meetingFrequency}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {society.description}
                  </p>
                  
                  <div className="bg-gray-700/50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-400 mb-1">Next Event:</p>
                    <p className="text-sm text-fuchsia-400 font-semibold">{society.nextEvent}</p>
                  </div>

                  <div className="space-y-2 text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Phone className="w-3 h-3 mr-2" />
                      <span>{society.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-3 h-3 mr-2" />
                      <span>{society.contact.email}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300">
                      Join Chapter
                    </button>
                    <button className="border border-gray-600 hover:border-fuchsia-400 text-gray-300 hover:text-fuchsia-400 p-2 rounded-lg transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">How to Join a Chapter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Find Your Chapter</h3>
                <p className="text-gray-400 text-sm">
                  Browse our directory to find the chapter nearest to your location.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-400 text-sm">
                  Complete the online membership application for your chosen chapter.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Start Participating</h3>
                <p className="text-gray-400 text-sm">
                  Attend events, network with professionals, and grow your career.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Chapter Application
            </button>
          </div>
        </div>
      </section>

      {/* Start a Chapter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 rounded-2xl p-12 border border-fuchsia-500/20">
            <h2 className="text-4xl font-bold mb-4">Don't See a Chapter Near You?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Help us grow the IAMA community by starting a new chapter in your area. We provide full support and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start a New Chapter
              </button>
              <button className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberSocieties;