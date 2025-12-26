import React from 'react';
import { motion } from 'framer-motion';
import { GalleryGrid } from '../components/GalleryGrid';
export function Gallery() {
  return <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-secondary/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-white">
            Our <span className="text-accent">Gallery</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of stunning transformations and beauty work.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <GalleryGrid />
      </section>
    </div>;
}