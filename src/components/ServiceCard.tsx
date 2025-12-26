import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, DollarSignIcon } from 'lucide-react';
import { Card } from './ui/Card';
interface ServiceCardProps {
  name: string;
  price: string;
  duration: string;
  description: string;
  image?: string;
}
export function ServiceCard({
  name,
  price,
  duration,
  description,
  image
}: ServiceCardProps) {
  return <Card>
      {image && <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>}
      <h3 className="text-2xl font-serif font-bold mb-2 text-accent">{name}</h3>
      <p className="text-text-secondary mb-4">{description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-text-secondary">
          <ClockIcon className="w-5 h-5 text-accent" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-accent font-bold text-xl">
          <DollarSignIcon className="w-5 h-5" />
          <span>{price}</span>
        </div>
      </div>
    </Card>;
}