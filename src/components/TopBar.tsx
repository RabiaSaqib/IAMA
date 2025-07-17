import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-900 border-b border-gray-800 py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-fuchsia-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-fuchsia-400" />
              <span>info@iama-cma.org</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Clock className="w-4 h-4 text-fuchsia-400" />
            <span>Mon-Fri: 9AM-6PM EST</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;