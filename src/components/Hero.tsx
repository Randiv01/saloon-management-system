import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useNavigate } from 'react-router-dom';
const heroImages = [{
  url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
  alt: 'Luxury salon interior'
}, {
  url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80',
  alt: 'Professional makeup artistry'
}, {
  url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
  alt: 'Relaxing spa treatment'
}, {
  url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80',
  alt: 'Bridal beauty services'
}, {
  url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80',
  alt: 'Hair coloring expertise'
}];
export function Hero() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image Carousel */}
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div key={currentImageIndex} initial={{
          opacity: 0,
          scale: 1.1
        }} animate={{
          opacity: 1,
          scale: 1
        }} exit={{
          opacity: 0,
          scale: 1.05
        }} transition={{
          duration: 1.5,
          ease: 'easeInOut'
        }} className="absolute inset-0">
          <img src={heroImages[currentImageIndex].url} alt={heroImages[currentImageIndex].alt} className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-transparent to-accent/20"></div>
    </div>

    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
        <motion.h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }}>
          <span className="text-white">Welcome to</span>{' '}
          <span className="text-accent">Salon Cut & Curl</span>
          <br />
          <span className="text-2xl sm:text-4xl block mt-4 text-white font-sans font-light">
            Katugastota’s Premier Hair & Beauty Salon
          </span>
        </motion.h1>

        <motion.p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }}>
          Where elegance meets expertise. Transform your look with our premium
          beauty services.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }}>
          <Button size="lg" onClick={() => navigate('/booking')}>
            Book Appointment
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate('/services')}>
            View Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <motion.div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }}>
        {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`transition-all duration-300 rounded-full ${index === currentImageIndex ? 'w-8 h-2 bg-accent' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`} aria-label={`Go to image ${index + 1}`} />)}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  </div>;
}