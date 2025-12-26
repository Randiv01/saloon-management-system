import React from 'react';
import { motion } from 'framer-motion';
import { ScissorsIcon, SparklesIcon, HeartIcon, StarIcon } from 'lucide-react';
import { Card } from './ui/Card';
const services = [{
  icon: ScissorsIcon,
  title: 'Hair Styling',
  description: 'Expert cuts, colors, and treatments for your perfect look.'
}, {
  icon: SparklesIcon,
  title: 'Makeup & Beauty',
  description: 'Professional makeup for any occasion, from natural to glamorous.'
}, {
  icon: HeartIcon,
  title: 'Spa & Wellness',
  description: 'Relax and rejuvenate with our luxurious spa treatments.'
}, {
  icon: StarIcon,
  title: 'Bridal Packages',
  description: 'Complete bridal beauty services for your special day.'
}];
export function ServiceHighlights() {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }} className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
          Our <span className="text-accent">Services</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Discover our range of premium beauty services designed to make you
          look and feel your best.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => <motion.div key={service.title} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.1,
        duration: 0.6
      }}>
            <Card className="text-center h-full">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10 border-2 border-accent">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary">{service.description}</p>
            </Card>
          </motion.div>)}
      </div>
    </section>;
}