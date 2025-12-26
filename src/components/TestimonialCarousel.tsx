import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import { Card } from './ui/Card';
const testimonials = [{
  name: 'Sarah Johnson',
  text: 'Absolutely amazing experience! The staff is professional and the results exceeded my expectations. My hair has never looked better!',
  rating: 5,
  service: 'Hair Styling'
}, {
  name: 'Emily Davis',
  text: 'The bridal package was perfect for my wedding day. I felt like a princess! Highly recommend LuxeSalon for any special occasion.',
  rating: 5,
  service: 'Bridal Package'
}, {
  name: 'Michael Chen',
  text: 'Great atmosphere and top-notch service. The spa treatment was incredibly relaxing. Will definitely be coming back!',
  rating: 5,
  service: 'Spa Treatment'
}, {
  name: 'Jessica Williams',
  text: 'The makeup artist understood exactly what I wanted. Professional, friendly, and the results were stunning. Love this place!',
  rating: 5,
  service: 'Makeup'
}];
export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
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
          What Our <span className="text-accent">Clients Say</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Don't just take our word for it. Hear from our satisfied clients.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{
          opacity: 0,
          x: 100
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -100
        }} transition={{
          duration: 0.5
        }}>
            <Card hover={false} className="text-center p-8 md:p-12">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => <StarIcon key={i} className="w-6 h-6 text-accent fill-accent" />)}
              </div>
              <p className="text-lg md:text-xl text-text mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-serif font-bold text-xl text-accent">
                  {testimonials[current].name}
                </p>
                <p className="text-text-secondary">
                  {testimonials[current].service}
                </p>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors">
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition-all ${index === current ? 'bg-accent w-8' : 'bg-border'}`} />)}
        </div>
      </div>
    </section>;
}