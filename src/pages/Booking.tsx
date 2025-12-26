import React, { useState, Component } from 'react';
import { motion } from 'framer-motion';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, MessageSquareIcon } from 'lucide-react';
export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });
  const services = ['Hair Cut & Styling', 'Hair Coloring', 'Bridal Makeup', 'Party Makeup', 'Facial Treatment', 'Spa Massage', 'Manicure & Pedicure', 'Waxing Services', 'Bridal Package'];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'd like to book an appointment:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            Book Your <span className="text-accent">Appointment</span>
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
            Reserve your spot for a luxurious beauty experience. We'll confirm
            your appointment shortly.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <UserIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
                <Input label="Full Name" name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="pl-10" />
              </div>

              <div className="relative">
                <PhoneIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
                <Input label="Phone Number" name="phone" type="tel" placeholder="+1 (234) 567-890" value={formData.phone} onChange={handleChange} required className="pl-10" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Select Service <span className="text-secondary">*</span>
              </label>
              <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 text-text">
                <option value="">Choose a service...</option>
                {services.map(service => <option key={service} value={service}>
                    {service}
                  </option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
                <Input label="Preferred Date" name="date" type="date" value={formData.date} onChange={handleChange} required className="pl-10" />
              </div>

              <div className="relative">
                <ClockIcon className="absolute left-3 top-11 w-5 h-5 text-accent" />
                <Input label="Preferred Time" name="time" type="time" value={formData.time} onChange={handleChange} required className="pl-10" />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">
                <MessageSquareIcon className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </Button>
              <p className="text-center text-text-secondary text-sm mt-4">
                You'll be redirected to WhatsApp to confirm your booking
              </p>
            </div>
          </form>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-center p-6 bg-card border border-border rounded-xl">
            <CalendarIcon className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-serif font-bold mb-2">Flexible Scheduling</h3>
            <p className="text-text-secondary text-sm">
              Choose your preferred date and time
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="text-center p-6 bg-card border border-border rounded-xl">
            <MessageSquareIcon className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-serif font-bold mb-2">Instant Confirmation</h3>
            <p className="text-text-secondary text-sm">
              Get quick confirmation via WhatsApp
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="text-center p-6 bg-card border border-border rounded-xl">
            <PhoneIcon className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="font-serif font-bold mb-2">24/7 Support</h3>
            <p className="text-text-secondary text-sm">
              We're here to help anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>;
}