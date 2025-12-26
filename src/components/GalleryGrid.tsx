import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './ui/Modal';
const galleryImages = [{
  id: 1,
  url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
  alt: 'Hair styling'
}, {
  id: 2,
  url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
  alt: 'Makeup'
}, {
  id: 3,
  url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
  alt: 'Spa treatment'
}, {
  id: 4,
  url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
  alt: 'Bridal makeup'
}, {
  id: 5,
  url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
  alt: 'Hair coloring'
}, {
  id: 6,
  url: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800',
  alt: 'Facial treatment'
}, {
  id: 7,
  url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800',
  alt: 'Nail art'
}, {
  id: 8,
  url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800',
  alt: 'Salon interior'
}];
export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => <motion.div key={image.id} initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.05,
        duration: 0.4
      }} whileHover={{
        scale: 1.05
      }} className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image.url)}>
            <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">{image.alt}</p>
            </div>
          </motion.div>)}
      </div>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && <div className="p-4">
            <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" />
          </div>}
      </Modal>
    </>;
}