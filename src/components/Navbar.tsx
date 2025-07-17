import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMembersDropdown, setShowMembersDropdown] = useState(false);
  const [showMobileMembersDropdown, setShowMobileMembersDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-gray-950 text-white';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-white text-gray-900';
    }
  }, [isDarkMode]);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    navbar: isDarkMode 
      ? 'bg-gray-950/95 border-gray-800' 
      : 'bg-white/95 border-gray-200 shadow-sm',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textHover: isDarkMode ? 'hover:text-fuchsia-400' : 'hover:text-fuchsia-600',
    activeText: isDarkMode ? 'text-fuchsia-400' : 'text-fuchsia-600',
    mobileButton: isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
    sidebar: isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200',
    dropdown: isDarkMode 
      ? 'bg-gray-900 border-gray-700' 
      : 'bg-white border-gray-200 shadow-lg',
    dropdownHover: isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
    mobileBorder: isDarkMode ? 'border-gray-700' : 'border-gray-200',
  };

  return (
    <>
      <nav className={`${themeClasses.navbar} backdrop-blur-md border-b fixed top-8 w-full z-40`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="IAMA Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
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
                  className={`relative py-2 px-1 transition-colors duration-200 ${themeClasses.textHover} ${
                    isActive(item.path) ? themeClasses.activeText : themeClasses.text
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
                  className={`flex items-center space-x-1 py-2 px-1 ${themeClasses.text} ${themeClasses.textHover} transition-colors duration-200`}
                >
                  <span>Members</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMembersDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showMembersDropdown && (
                  <div className={`absolute top-full left-0 mt-1 w-56 ${themeClasses.dropdown} rounded-lg shadow-xl py-2`}>
                    {memberItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setShowMembersDropdown(false)}
                        className={`block px-4 py-2 text-sm ${themeClasses.text} ${themeClasses.textHover} ${themeClasses.dropdownHover} transition-colors duration-200`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`relative py-2 px-1 transition-colors duration-200 ${themeClasses.textHover} ${
                  isActive('/contact') ? themeClasses.activeText : themeClasses.text
                }`}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-fuchsia-400 rounded-full" />
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.mobileButton} transition-colors duration-200`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              <Link
                to="/contact"
                className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.mobileButton} transition-colors duration-200`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg ${themeClasses.mobileButton} transition-colors duration-200 z-50 relative`}
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
      <div className={`fixed top-0 right-0 h-full w-1/2 ${themeClasses.sidebar} border-l z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header with Close Button */}
        <div className={`flex items-center justify-between p-4 border-b ${themeClasses.mobileBorder}`}>
          <div className="flex items-center space-x-2">
            <img
              src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="IAMA Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              IAMA
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className={`p-2 rounded-lg ${themeClasses.mobileButton} transition-colors duration-200`}
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
                className={`py-3 text-lg font-medium transition-colors duration-200 ${themeClasses.textHover} ${
                  isActive(item.path) ? themeClasses.activeText : themeClasses.text
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Members Dropdown */}
            <div className={`border-t ${themeClasses.mobileBorder} pt-4`}>
              <button
                onClick={() => setShowMobileMembersDropdown(!showMobileMembersDropdown)}
                className={`flex items-center justify-between w-full py-3 text-lg font-medium ${themeClasses.text} ${themeClasses.textHover} transition-colors duration-200`}
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
                      className={`block py-2 ${themeClasses.text} ${themeClasses.textHover} transition-colors duration-200`}
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
              className={`py-3 text-lg font-medium transition-colors duration-200 ${themeClasses.textHover} ${
                isActive('/contact') ? themeClasses.activeText : themeClasses.text
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