import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'About',
      items: ['About Humana', 'Careers', 'Corporate Information', 'Newsroom'],
    },
    {
      title: 'Member Resources',
      items: ['Member Rights', 'Privacy Practices', 'Forms Library', 'Fraud Policy'],
    },
    {
      title: 'Insurance Plans',
      items: ['Medicare Plans', 'Medicaid Plans', 'Dental Insurance', 'Vision Insurance'],
    },
    {
      title: 'Support',
      items: ['Contact Us', 'FAQs', 'Find a Doctor', 'Find a Pharmacy'],
    },
  ];

  return (
    <footer className="bg-[#00437B] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>

            <div className="text-sm text-gray-300">
              <div className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Legal Notices</a>
                <a href="#" className="hover:text-white">Accessibility</a>
              </div>
              <p>© {new Date().getFullYear()} Humana Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;