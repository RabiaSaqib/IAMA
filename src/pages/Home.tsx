import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Financial Analyst",
      content: "IAMA's CMA program transformed my career. The comprehensive curriculum and expert support helped me pass both parts on my first attempt.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Chen",
      role: "Management Accountant",
      content: "The flexibility of IAMA's program allowed me to study while working full-time. Their resources are unmatched in the industry.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emily Rodriguez",
      role: "CFO",
      content: "As a CMA professional, I continue to rely on IAMA for CPD and staying current with industry trends. Exceptional organization.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Content",
      description: "All our materials are certified and aligned with the latest CMA exam requirements."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals and certified CMA holders with years of experience."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Complete coverage of both CMA Part 1 and Part 2 with detailed study materials."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "High Success Rate",
      description: "Our students consistently achieve above-average pass rates on CMA examinations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Master Your <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">CMA</span> Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              The premier institute exclusively dedicated to Certified Management Accountant education and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-fuchsia-500/25"
              >
                Explore Courses
              </Link>
              <Link
                to="/about"
                className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-fuchsia-400 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">10,000+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">95%</div>
              <div className="text-gray-300">Pass Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-fuchsia-400">50+</div>
              <div className="text-gray-300">Expert Instructors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose IAMA?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're committed to providing the highest quality CMA education with proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/10"
              >
                <div className="text-fuchsia-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from our graduates who have achieved their CMA certification with IAMA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 rounded-2xl p-12 border border-fuchsia-500/20">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your CMA Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with IAMA's comprehensive CMA program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Courses
              </Link>
              <Link
                to="/contact"
                className="border-2 border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400 hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;