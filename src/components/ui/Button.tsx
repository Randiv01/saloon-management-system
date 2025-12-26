import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 gold-shimmer';
  const variants = {
    primary: 'bg-accent hover:bg-accent-light text-black shadow-lg hover:shadow-accent/50',
    secondary: 'bg-secondary hover:bg-red-700 text-white shadow-lg hover:shadow-secondary/50',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-black'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return <motion.button whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      {children}
    </motion.button>;
}