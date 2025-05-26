import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const mainLinks = [
    { title: 'Medicare', items: ['Medicare Advantage', 'Medicare Supplement', 'Prescription Drug Plans'] },
    { title: 'Medicaid', items: ['Medicaid Plans', 'Dual Eligible Plans'] },
    { title: 'Insurance', items: ['Health Insurance', 'Dental Insurance', 'Vision Insurance'] },
    { title: 'Pharmacy', items: ['Find a Pharmacy', 'Drug Lists', 'Mail Delivery'] },
    { title: 'Provider', items: ['Find a Doctor', 'Find a Facility', 'Provider Resources'] },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#00437B] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end space-x-4 text-sm">
            <a href="#" className="hover:underline">Sign In</a>
            <a href="#" className="hover:underline">Register Now</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#00437B]">
            Humana
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Humana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00437B]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#00437B]"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#00437B]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex mt-4 space-x-8">
          {mainLinks.map((link) => (
            <div key={link.title} className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00437B]">
                <span>{link.title}</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white border shadow-lg rounded-md mt-2 py-2">
                {link.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00437B]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Humana"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00437B]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#00437B]"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {mainLinks.map((link) => (
                <div key={link.title} className="space-y-2">
                  <div className="font-medium text-gray-900">{link.title}</div>
                  <div className="pl-4 space-y-2">
                    {link.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-gray-700 hover:text-[#00437B]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;