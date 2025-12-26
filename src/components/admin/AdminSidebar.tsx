import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboardIcon, ScissorsIcon, CalendarIcon, ImageIcon, UsersIcon, MessageSquareIcon, StarIcon, XIcon } from 'lucide-react';
interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export function AdminSidebar({
  isOpen,
  onClose
}: AdminSidebarProps) {
  const location = useLocation();
  const navItems = [{
    path: '/admin/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboardIcon
  }, {
    path: '/admin/services',
    label: 'Services',
    icon: ScissorsIcon
  }, {
    path: '/admin/bookings',
    label: 'Bookings',
    icon: CalendarIcon
  }, {
    path: '/admin/gallery',
    label: 'Gallery',
    icon: ImageIcon
  }, {
    path: '/admin/team',
    label: 'Team',
    icon: UsersIcon
  }, {
    path: '/admin/testimonials',
    label: 'Testimonials',
    icon: StarIcon
  }, {
    path: '/admin/messages',
    label: 'Messages',
    icon: MessageSquareIcon
  }];
  const isActive = (path: string) => location.pathname === path;
  return <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 bottom-0 w-[280px] bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Logo & Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link to="/admin/dashboard" className="flex items-center gap-3" onClick={onClose}>
              <div className="p-2 rounded-lg bg-accent/10 border border-accent">
                <ScissorsIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold">LuxeSalon</h2>
                <p className="text-xs text-text-secondary">Admin Panel</p>
              </div>
            </Link>
            <button onClick={onClose} className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={onClose} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 relative ${isActive(item.path) ? 'bg-accent text-black shadow-lg shadow-accent/20' : 'text-text hover:bg-bg-secondary'}`}>
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.label}</span>
                {isActive(item.path) && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-black" />}
              </Link>)}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="p-3 rounded-lg bg-bg-secondary">
              <p className="text-xs text-text-secondary mb-1">Quick Access</p>
              <Link to="/" target="_blank" className="text-sm text-accent hover:underline">
                View Website →
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>;
}