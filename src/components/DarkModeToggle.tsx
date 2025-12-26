import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
export function DarkModeToggle() {
  const {
    isDark,
    toggle
  } = useDarkMode();
  return <motion.button whileHover={{
    scale: 1.1
  }} whileTap={{
    scale: 0.9
  }} onClick={toggle} className="p-2 rounded-full bg-bg-secondary hover:bg-accent transition-colors duration-300" aria-label="Toggle dark mode">
      {isDark ? <SunIcon className="w-5 h-5 text-accent" /> : <MoonIcon className="w-5 h-5 text-secondary" />}
    </motion.button>;
}