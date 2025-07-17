import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Toll-free: 1-800-IAMA-CMA"],
      color: "from-fuchsia-500 to-purple-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@iama-cma.org", "admissions@iama-cma.org"],
      color: "from-blue-500 to-teal-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["123 Education Street", "New York, NY 10001"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM EST", "Sat: 10AM-2PM EST"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const departments = [
    "General Information",
    "Admissions",
    "Student Support",
    "Technical Support",
    "Billing",
    "Chapter Services",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/30 to-fuchsia-950/20" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Contact <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Get in touch with our team. We're here to help you succeed in your CMA journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-fuchsia-500/50 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-fuchsia-400 mr-3" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white transition-colors duration-200"
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-white placeholder-gray-400 transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden">
                <div className="h-64 bg-gray-700 flex items-center justify-center relative">
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=800')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="relative text-center">
                    <MapPin className="w-12 h-12 text-fuchsia-400 mx-auto mb-2" />
                    <p className="text-gray-300 font-semibold">IAMA Headquarters</p>
                    <p className="text-gray-400 text-sm">New York, NY</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Located in the heart of Manhattan, our headquarters welcomes visitors by appointment. 
                    Contact us to schedule a meeting with our admissions team.
                  </p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">Quick Contact Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-fuchsia-500 rounded-lg flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Urgent Support</p>
                      <p className="text-gray-400 text-xs">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Live Chat</p>
                      <p className="text-gray-400 text-xs">Online now - Average wait: 2 min</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Email Support</p>
                      <p className="text-gray-400 text-xs">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-fuchsia-400">How do I enroll in CMA courses?</h3>
              <p className="text-gray-400 text-sm">
                Visit our Courses page, select your preferred plan, and complete the online enrollment process. 
                Our admissions team will contact you within 24 hours.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-fuchsia-400">What are the CMA exam requirements?</h3>
              <p className="text-gray-400 text-sm">
                You need a bachelor's degree or equivalent, and 2 years of professional experience. 
                Check our detailed requirements on the courses page.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-fuchsia-400">Do you offer payment plans?</h3>
              <p className="text-gray-400 text-sm">
                Yes, we offer flexible payment plans for all our courses. Contact our billing department 
                to discuss options that work for your budget.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-semibold mb-2 text-fuchsia-400">Is technical support available?</h3>
              <p className="text-gray-400 text-sm">
                Yes, we provide 24/7 technical support for all enrolled students. Contact us via phone, 
                email, or live chat for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;