import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string | number;
  icon: BoxIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'accent' | 'secondary' | 'blue' | 'green';
}
export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'accent'
}: StatCardProps) {
  const colorClasses = {
    accent: 'bg-accent/10 text-accent border-accent',
    secondary: 'bg-secondary/10 text-secondary border-secondary',
    blue: 'bg-blue-500/10 text-blue-500 border-blue-500',
    green: 'bg-green-500/10 text-green-500 border-green-500'
  };
  return <motion.div whileHover={{
    y: -4
  }} className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg border-2 ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && <div className={`text-sm font-medium ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.isPositive ? '+' : ''}
            {trend.value}%
          </div>}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-text-secondary text-sm">{title}</p>
    </motion.div>;
}