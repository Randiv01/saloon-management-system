import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../components/TeamMember';
import { AwardIcon, UsersIcon, HeartIcon } from 'lucide-react';
export function About() {
  const team = [{
    name: 'Sophia Martinez',
    role: 'Master Stylist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: '15+ years of experience in luxury hair styling and color.'
  }, {
    name: 'Isabella Chen',
    role: 'Makeup Artist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'Certified makeup artist specializing in bridal and editorial looks.'
  }, {
    name: 'Emma Johnson',
    role: 'Spa Specialist',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
    bio: 'Expert in holistic wellness and therapeutic spa treatments.'
  }, {
    name: 'Olivia Williams',
    role: 'Nail Technician',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
    bio: 'Specialized in nail art and premium manicure services.'
  }];
  const stats = [{
    icon: UsersIcon,
    value: '10,000+',
    label: 'Happy Clients'
  }, {
    icon: AwardIcon,
    value: '15+',
    label: 'Years Experience'
  }, {
    icon: HeartIcon,
    value: '50+',
    label: 'Services Offered'
  }];
  return <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-secondary/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-5xl sm:text-6xl font-serif font-bold mb-6 text-white">
            About <span className="text-accent">LuxeSalon</span>
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
            Where luxury meets expertise. We've been transforming beauty
            standards for over 15 years.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-accent/10 border-2 border-accent">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <p className="text-4xl font-serif font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-text-secondary">{stat.label}</p>
            </motion.div>)}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl font-serif font-bold mb-6">
              Our <span className="text-accent">Mission</span>
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              At LuxeSalon, we believe that beauty is an art form. Our mission
              is to provide exceptional, personalized beauty services that
              enhance your natural elegance and boost your confidence.
            </p>
            <p className="text-lg text-text-secondary mb-4">
              We combine cutting-edge techniques with timeless traditions, using
              only premium products and maintaining the highest standards of
              hygiene and professionalism.
            </p>
            <p className="text-lg text-text-secondary">
              Every client is unique, and we take pride in creating customized
              beauty experiences that reflect your individual style and
              personality.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800" alt="Salon interior" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Our talented professionals are passionate about making you look and
            feel amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => <motion.div key={member.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <TeamMember {...member} />
            </motion.div>)}
        </div>
      </section>
    </div>;
}