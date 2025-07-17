import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const memberItems = [
    { name: 'Members Portal', path: '/members' },
    { name: 'My CPD', path: '/my-cpd' },
    { name: 'Member Services', path: '/member-services' },
    { name: 'Member Societies', path: '/member-societies' },
    { name: 'Useful Links', path: '/useful-links' },
  ];

  return (
    <nav className="bg-gray-950/95 backdrop-blur-md border-b border-gray-800 fixed top-8 w-full z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-fuchsia-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              IAMA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 px-1 transition-colors duration-200 hover:text-fuchsia-400 ${
                  isActive(item.path) ? 'text-fuchsia-400' : 'text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-400 rounded-full" />
                )}
              </Link>
            ))}

            {/* Members Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowMembersDropdown(true)}
              onMouseLeave={() => setShowMembersDropdown(false)}
            >
              <button className="flex items-center space-x-1 py-2 px-1 text-white hover:text-fuchsia-400 transition-colors duration-200">
                <span>Members</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showMembersDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                  {memberItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-white hover:text-fuchsia-400 hover:bg-gray-800 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 transition-colors duration-200 hover:text-fuchsia-400 ${
                    isActive(item.path) ? 'text-fuchsia-400' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm mb-2">Members</p>
                {memberItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-4 text-white hover:text-fuchsia-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-6 py-2 rounded-lg text-center transition-all duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;