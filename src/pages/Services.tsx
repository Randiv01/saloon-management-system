import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
export function Services() {
  const services = [{
    name: 'Bridal Dressing',
    price: 'Call for Quote',
    duration: 'Custom',
    description: 'Expert bridal dressing in Kandy. Kandyan, Western, and Modern styles.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
    link: '/services/bridal-dressing-kandy'
  }, {
    name: 'Keratin Treatment',
    price: 'From $100',
    duration: '180 min',
    description: 'Best Keratin treatment in Kandy for smooth, silky, frizz-free hair.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
    link: '/services/keratin-treatment-kandy'
  }, {
    name: 'Hair Rebonding',
    price: 'From $120',
    duration: '240 min',
    description: 'Permanent hair straightening / rebonding services in Kandy.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
    link: '/services/hair-rebonding-kandy'
  }, {
    name: 'Ladies Hair Cut',
    price: '$25',
    duration: '45 min',
    description: 'Trending ladies haircuts, layers, bobs, and trims.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
    link: '/services/ladies-hair-cut'
  }, {
    name: 'Gents Hair Cut',
    price: '$15',
    duration: '30 min',
    description: 'Professional gents haircuts and grooming in Katugastota.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    link: '/services/gents-hair-cut'
  }, {
    name: 'Spa Massage',
    price: '140',
    duration: '90 min',
    description: 'Relaxing full body massage with aromatherapy oils.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
    link: '/booking'
  }, {
    name: 'Manicure & Pedicure',
    price: '70',
    duration: '60 min',
    description: 'Premium nail care with polish and nail art options.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600',
    link: '/booking'
  }, {
    name: 'Facial Treatment',
    price: '120',
    duration: '75 min',
    description: 'Deep cleansing facial with customized treatment for your skin type.',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600',
    link: '/booking'
  }];
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
          Our <span className="text-accent">Services</span>
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
          Discover our comprehensive range of premium beauty services designed
          to make you look and feel extraordinary.
        </motion.p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <motion.div key={service.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.05
        }}>
          <Link to={service.link}>
            <ServiceCard {...service} />
          </Link>
        </motion.div>)}
      </div>
    </section>
  </div>;
}