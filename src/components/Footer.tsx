import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-bg-secondary border-t border-border mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-serif font-bold text-accent mb-4">
            Salon Cut & curl
          </h3>
          <p className="text-text-secondary mb-4">
            Premium beauty services for the modern you. Experience luxury and
            elegance.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card hover:bg-accent transition-colors">
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-text-secondary hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-text-secondary hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-text-secondary hover:text-accent transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-text-secondary hover:text-accent transition-colors">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-text-secondary">
            <li>Hair Styling</li>
            <li>Makeup & Beauty</li>
            <li>Spa & Massage</li>
            <li>Bridal Packages</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-serif font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-text-secondary">
              <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <span>483/1a Madawala Rd, Katugastota</span>
            </li>
            <li className="flex items-center gap-2 text-text-secondary">
              <PhoneIcon className="w-5 h-5 text-accent" />
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center gap-2 text-text-secondary">
              <MailIcon className="w-5 h-5 text-accent" />
              <a href="mailto:info@luxesalon.com" className="hover:text-accent transition-colors">
                info@saloncutandcurl.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center text-text-secondary">
        <p>
          &copy; {new Date().getFullYear()} Salon Cut & curl. All rights reserved.
        </p>
      </div>
    </div>
  </footer>;
}