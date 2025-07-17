import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Globe } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "10,000+", label: "Graduates" },
    { number: "95%", label: "Pass Rate" },
    { number: "50+", label: "Countries Served" }
  ];

  const teamMembers = [
    {
      name: "Dr. Patricia Williams",
      role: "President & CEO",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "CMA, PhD in Accounting, 20+ years in management accounting education"
    },
    {
      name: "Robert Chen",
      role: "Academic Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "CMA, Former Senior Vice President at Fortune 500 company"
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Head of Curriculum",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "CMA, PhD in Finance, Expert in management accounting standards"
    },
    {
      name: "James Thompson",
      role: "Student Services Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "CMA, Specialist in student support and career development"
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
              About <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">IAMA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              The Institute of Advanced Management Accountants - Setting the gold standard in CMA education since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-fuchsia-400 mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To provide world-class education and comprehensive support for aspiring and practicing Certified Management Accountants, 
                  empowering them to excel in their careers and contribute meaningfully to their organizations' success.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-fuchsia-400 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the globally recognized leader in CMA education, known for our innovative teaching methods, 
                  exceptional student outcomes, and unwavering commitment to professional excellence.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional meeting"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why IAMA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why IAMA is Your Best Choice</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We've built our reputation on delivering exceptional results for CMA candidates worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <Award className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-gray-400">
                With over 15 years of experience and a 95% pass rate, we have the proven expertise to guide you to success.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <Users className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
              <p className="text-gray-400">
                Learn from certified CMA professionals with real-world experience in management accounting and finance.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Comprehensive Resources</h3>
              <p className="text-gray-400">
                Access to the most up-to-date study materials, practice tests, and interactive learning tools.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <Globe className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-400">
                Serving students across 50+ countries with flexible online and hybrid learning options.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <Target className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personalized Support</h3>
              <p className="text-gray-400">
                Individual mentoring, career guidance, and ongoing support throughout your CMA journey.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300">
              <Eye className="w-12 h-12 text-fuchsia-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-gray-400">
                Constantly updating our curriculum and methods to reflect the latest industry standards and practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence in CMA education.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-fuchsia-400 mb-2">{achievement.number}</div>
                <div className="text-gray-300 text-lg">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the experts who lead IAMA's mission to deliver world-class CMA education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-fuchsia-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our History</h2>
              <p className="text-xl text-gray-400">
                A journey of excellence in CMA education since 2009.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Founded in 2009 by a group of passionate CMA professionals, the Institute of Advanced Management Accountants (IAMA) 
                  began with a simple yet powerful vision: to provide the highest quality education and support for aspiring and 
                  practicing Certified Management Accountants.
                </p>
                <p>
                  Over the years, we have grown from a small educational initiative to a globally recognized institution, serving 
                  thousands of students across more than 50 countries. Our commitment to excellence has remained unwavering, 
                  constantly evolving our curriculum and teaching methods to meet the changing demands of the management accounting profession.
                </p>
                <p>
                  Today, IAMA stands as a testament to what can be achieved when passion, expertise, and dedication come together 
                  in service of professional education. Our graduates hold leadership positions in organizations worldwide, 
                  contributing to the advancement of management accounting practices and business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;