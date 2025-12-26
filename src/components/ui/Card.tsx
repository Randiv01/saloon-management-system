import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
export function Card({
  children,
  className = '',
  hover = true
}: CardProps) {
  return <motion.div whileHover={hover ? {
    y: -8,
    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)'
  } : {}} className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 ${className}`}>
      {children}
    </motion.div>;
}