import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MessageSquareIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
          Get In <span className="text-accent">Touch</span>
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
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </motion.p>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3
        }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required />

              <Input label="Email Address" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />

              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea name="message" rows={5} placeholder="Tell us how we can help you..." value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-text placeholder-text-secondary resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.4
        }} className="space-y-8">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 border-2 border-accent">
                  <MapPinIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-text-secondary">
                    483/1a Madawala Rd,
                    <br />
                    Katugastota
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 border-2 border-accent">
                  <PhoneIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-text-secondary">+1 (234) 567-890</p>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 mt-1">
                    <MessageSquareIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 border-2 border-accent">
                  <MailIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-text-secondary">info@saloncutandcurl.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 border-2 border-accent">
                  <ClockIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-text-secondary">
                    Monday - Saturday: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-64">
            <iframe
              src="https://maps.google.com/maps?q=483%2F1a%20Madawala%20Rd%2C%20Katugastota&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Salon Location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  </div>;
}