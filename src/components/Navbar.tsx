import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ScissorsIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DarkModeToggle } from './DarkModeToggle';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/booking',
    label: 'Book Now'
  }, {
    path: '/gallery',
    label: 'Gallery'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-40 bg-bg/95 backdrop-blur-md border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <ScissorsIcon className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-2xl font-serif font-bold text-accent">
            Salon Cut & curl
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => <Link key={link.path} to={link.path} className={`relative font-medium transition-colors duration-300 ${isActive(link.path) ? 'text-accent' : 'text-text hover:text-accent'}`}>
            {link.label}
            {isActive(link.path) && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent" />}
          </Link>)}
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-bg-secondary transition-colors">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden border-t border-border bg-bg">
        <div className="px-4 py-4 space-y-2">
          {links.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.path) ? 'bg-accent text-black' : 'text-text hover:bg-bg-secondary'}`}>
            {link.label}
          </Link>)}
        </div>
      </motion.div>}
    </AnimatePresence>
  </nav>;
}