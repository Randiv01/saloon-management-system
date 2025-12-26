import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { GiftIcon, PercentIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function PromoBanner() {
  const navigate = useNavigate();
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Offer */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-red-900 p-8 md:p-12 text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <PercentIcon className="w-8 h-8 text-accent" />
                <span className="text-accent font-bold text-lg">
                  LIMITED OFFER
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                20% Off First Visit
              </h3>
              <p className="text-lg mb-6 text-gray-200">
                New clients get 20% off their first service. Experience luxury
                at an exclusive rate.
              </p>
              <Button variant="primary" onClick={() => navigate('/booking')}>
                Book Now
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Second Offer */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-gray-900 p-8 md:p-12 text-white border-2 border-accent">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <GiftIcon className="w-8 h-8 text-accent" />
                <span className="text-accent font-bold text-lg">
                  SPECIAL PACKAGE
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Bridal Package Deal
              </h3>
              <p className="text-lg mb-6 text-gray-200">
                Complete bridal beauty package including hair, makeup, and spa
                treatment.
              </p>
              <Button variant="outline" onClick={() => navigate('/services')}>
                Learn More
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
}