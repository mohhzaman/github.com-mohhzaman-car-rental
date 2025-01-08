import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' }
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ],
  hosting: [
    { label: 'List Your Car', href: '#' },
    { label: 'Host Guide', href: '#' },
    { label: 'Insurance', href: '#' },
    { label: 'Host Tools', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-luxury-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Bar */}
        <div className="py-8 border-b border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 text-gold mr-3" />
              <div>
                <p className="text-sm text-gray-400">24/7 Concierge</p>
                <p className="text-luxury-cream">+1 (888) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-gold mr-3" />
              <div>
                <p className="text-sm text-gray-400">Main Location</p>
                <p className="text-luxury-cream">Beverly Hills, CA 90210</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="h-5 w-5 text-gold mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email Us</p>
                <p className="text-luxury-cream">concierge@luxeride.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-gold" />
              <span className="ml-2 text-2xl font-bold text-luxury-cream">LUXERIDE</span>
            </div>
            <p className="text-gray-400 mb-6">Experience automotive excellence with our premium luxury car rental service.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-sm bg-luxury-dark hover:bg-gold/10 text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-sm bg-luxury-dark hover:bg-gold/10 text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-sm bg-luxury-dark hover:bg-gold/10 text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-sm bg-luxury-dark hover:bg-gold/10 text-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-luxury-cream">Company</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-luxury-cream">Support</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-luxury-cream">Host With Us</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.hosting.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 LuxeRide. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
