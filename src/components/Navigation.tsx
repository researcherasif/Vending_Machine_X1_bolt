import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  onHomeClick?: () => void;
  onSpecsClick?: () => void;
  onPricingClick?: () => void;
  onFAQClick?: () => void;
}

export default function Navigation({ onHomeClick, onSpecsClick, onPricingClick, onFAQClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'SOHUB VM-X1', onClick: onHomeClick, featured: true, showOnHome: true },
    { name: 'About Us', href: '/about', showOnHome: true },
    { name: 'Specs', onClick: onSpecsClick, showOnHome: true },
    { name: 'FAQ', onClick: onFAQClick, showOnHome: true },
    { name: 'Support', href: '/support', showOnHome: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white hidden sm:block">SOHUB</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                      item.featured 
                        ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-600" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search products, specs, FAQ..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      item.featured
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}