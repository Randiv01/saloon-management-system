import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOutIcon, MenuIcon, UserIcon } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { DarkModeToggle } from '../DarkModeToggle';
interface AdminNavbarProps {
  onMenuClick: () => void;
}
export function AdminNavbar({
  onMenuClick
}: AdminNavbarProps) {
  const navigate = useNavigate();
  const {
    user,
    logout
  } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };
  return <header className="sticky top-0 z-20 bg-card border-b border-border backdrop-blur-md bg-card/95">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Mobile Menu Button */}
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors">
          <MenuIcon className="w-6 h-6" />
        </button>

        {/* Spacer for desktop */}
        <div className="hidden lg:block"></div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* User Info */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg bg-bg-secondary">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent flex items-center justify-center">
              <UserIcon className="w-4 h-4 text-accent" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs text-text-secondary mt-0.5">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-red-700 text-white transition-colors" title="Logout">
            <LogOutIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>;
}