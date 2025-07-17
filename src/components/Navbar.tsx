import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const [showMobileMembersDropdown, setShowMobileMembersDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMembersDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
  ];

  const memberItems = [
    { name: 'Members Portal', path: '/members' },
    { name: 'My CPD', path: '/my-cpd' },
    { name: 'Member Services', path: '/member-services' },
    { name: 'Member Societies', path: '/member-societies' },
    { name: 'Useful Links', path: '/useful-links' },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setShowMobileMembersDropdown(false);
  };

  return (
    <>
      <nav className="bg-gray-950/95 border-gray-800 backdrop-blur-md border-b fixed top-8 w-full z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo-mobile.png"
                alt="IAMA Logo"
                className="h-14 w-auto object-contain"
              />
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
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowMembersDropdown(!showMembersDropdown)}
                  className="flex items-center space-x-1 py-2 px-1 text-white hover:text-fuchsia-400 transition-colors duration-200"
                >
                  <span>Members</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMembersDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showMembersDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border-gray-700 rounded-lg shadow-xl py-2">
                    {memberItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setShowMembersDropdown(false)}
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
                className={`relative py-2 px-1 transition-colors duration-200 hover:text-fuchsia-400 ${
                  isActive('/contact') ? 'text-fuchsia-400' : 'text-white'
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-400 rounded-full" />
                )}
              </Link>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 z-50 relative"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-1/2 bg-gray-950 border-gray-800 border-l z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src="/logo-mobile.png"
              alt="IAMA Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="px-4 py-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMobileMenu}
                className={`py-3 text-lg font-medium transition-colors duration-200 hover:text-fuchsia-400 ${
                  isActive(item.path) ? 'text-fuchsia-400' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Members Dropdown */}
            <div className="border-t border-gray-700 pt-4">
              <button
                onClick={() => setShowMobileMembersDropdown(!showMobileMembersDropdown)}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-white hover:text-fuchsia-400 transition-colors duration-200"
              >
                <span>Members</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showMobileMembersDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showMobileMembersDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  {memberItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block py-2 text-white hover:text-fuchsia-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`py-3 text-lg font-medium transition-colors duration-200 hover:text-fuchsia-400 ${
                isActive('/contact') ? 'text-fuchsia-400' : 'text-white'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white px-6 py-3 rounded-lg text-center text-lg font-semibold transition-all duration-200 mt-6"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;