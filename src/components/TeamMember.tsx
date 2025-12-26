import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/Card';
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
}
export function TeamMember({
  name,
  role,
  image,
  bio
}: TeamMemberProps) {
  return <Card>
      <div className="w-full h-64 mb-4 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-serif font-bold mb-1">{name}</h3>
      <p className="text-accent font-medium mb-2">{role}</p>
      {bio && <p className="text-text-secondary text-sm">{bio}</p>}
    </Card>;
}