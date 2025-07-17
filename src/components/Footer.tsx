import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-fuchsia-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                IAMA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The premier organization dedicated to providing world-class education and support for CMA professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">About</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Courses</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Member Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Member Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/members" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Members Portal</Link></li>
              <li><Link to="/my-cpd" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">CPD Tracking</Link></li>
              <li><Link to="/member-services" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Member Services</Link></li>
              <li><Link to="/useful-links" className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200">Useful Links</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm">info@iama-cma.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-fuchsia-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5" />
                <span className="text-sm">123 Education Street<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 IAMA - Institute of Advanced Management Accountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;