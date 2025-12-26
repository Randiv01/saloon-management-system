import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSignIcon, CalendarIcon, UsersIcon, TrendingUpIcon, ClockIcon, CheckCircleIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { StatCard } from '../../components/admin/StatCard';
import { mockData, Booking } from '../../utils/mockData';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  useEffect(() => {
    // Initialize with demo data if empty
    let storedBookings = mockData.getBookings();
    if (storedBookings.length === 0) {
      storedBookings = generateDemoBookings();
      mockData.saveBookings(storedBookings);
    }
    setBookings(storedBookings);
  }, []);
  const stats = {
    totalRevenue: bookings.filter(b => b.status === 'completed').reduce((sum, b) => sum + getServicePrice(b.service), 0),
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    completedBookings: bookings.filter(b => b.status === 'completed').length
  };
  // Revenue trend data (last 7 days)
  const revenueTrend = generateRevenueTrend(bookings);
  // Service popularity
  const servicePopularity = generateServicePopularity(bookings);
  // Booking status distribution
  const statusData = [{
    name: 'Pending',
    value: bookings.filter(b => b.status === 'pending').length,
    color: '#FFD700'
  }, {
    name: 'Confirmed',
    value: bookings.filter(b => b.status === 'confirmed').length,
    color: '#4CAF50'
  }, {
    name: 'Completed',
    value: bookings.filter(b => b.status === 'completed').length,
    color: '#2196F3'
  }, {
    name: 'Cancelled',
    value: bookings.filter(b => b.status === 'cancelled').length,
    color: '#8B0000'
  }];
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-serif font-bold mb-2">Dashboard</h1>
          <p className="text-text-secondary">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} icon={DollarSignIcon} trend={{
          value: 12.5,
          isPositive: true
        }} color="green" />
          <StatCard title="Total Bookings" value={stats.totalBookings} icon={CalendarIcon} trend={{
          value: 8.2,
          isPositive: true
        }} color="blue" />
          <StatCard title="Pending" value={stats.pendingBookings} icon={ClockIcon} color="accent" />
          <StatCard title="Completed" value={stats.completedBookings} icon={CheckCircleIcon} color="green" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-serif font-bold mb-4">
              Revenue Trend (Last 7 Days)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="date" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-text-secondary)" />
                <Tooltip contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px'
              }} />
                <Line type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Service Popularity */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-serif font-bold mb-4">
              Popular Services
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={servicePopularity}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-text-secondary)" />
                <Tooltip contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px'
              }} />
                <Bar dataKey="bookings" fill="#D4AF37" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Booking Status Distribution */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-serif font-bold mb-4">
              Booking Status
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" labelLine={false} label={({
                name,
                percent
              }) => `${name}: ${(percent * 100).toFixed(0)}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                  {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Recent Bookings */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-serif font-bold mb-4">
              Recent Bookings
            </h2>
            <div className="space-y-3">
              {bookings.slice(0, 5).map(booking => <div key={booking.id} className="flex items-center justify-between p-3 rounded-lg bg-bg-secondary">
                  <div>
                    <p className="font-medium">{booking.customerName}</p>
                    <p className="text-sm text-text-secondary">
                      {booking.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{booking.date}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>
                </div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>;
}
// Helper functions
function generateDemoBookings(): Booking[] {
  const services = ['Hair Cut & Styling', 'Hair Coloring', 'Bridal Makeup', 'Facial Treatment', 'Spa Massage'];
  const statuses: Array<'pending' | 'confirmed' | 'completed' | 'cancelled'> = ['pending', 'confirmed', 'completed', 'cancelled'];
  const names = ['Sarah Johnson', 'Emily Davis', 'Michael Chen', 'Jessica Williams', 'David Brown'];
  return Array.from({
    length: 20
  }, (_, i) => ({
    id: `booking-${i + 1}`,
    customerName: names[Math.floor(Math.random() * names.length)],
    phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    service: services[Math.floor(Math.random() * services.length)],
    date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: `${Math.floor(Math.random() * 8) + 9}:00 AM`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
  }));
}
function getServicePrice(service: string): number {
  const prices: Record<string, number> = {
    'Hair Cut & Styling': 80,
    'Hair Coloring': 150,
    'Bridal Makeup': 200,
    'Party Makeup': 100,
    'Facial Treatment': 120,
    'Spa Massage': 140,
    'Manicure & Pedicure': 70,
    'Waxing Services': 50,
    'Bridal Package': 500
  };
  return prices[service] || 100;
}
function generateRevenueTrend(bookings: Booking[]) {
  const last7Days = Array.from({
    length: 7
  }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().split('T')[0];
  });
  return last7Days.map(date => ({
    date: new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    }),
    revenue: bookings.filter(b => b.date === date && b.status === 'completed').reduce((sum, b) => sum + getServicePrice(b.service), 0)
  }));
}
function generateServicePopularity(bookings: Booking[]) {
  const serviceCounts: Record<string, number> = {};
  bookings.forEach(b => {
    serviceCounts[b.service] = (serviceCounts[b.service] || 0) + 1;
  });
  return Object.entries(serviceCounts).map(([name, bookings]) => ({
    name: name.split(' ')[0],
    bookings
  })).sort((a, b) => b.bookings - a.bookings).slice(0, 5);
}
function getStatusColor(status: string): string {
  const colors = {
    pending: 'bg-yellow-500/20 text-yellow-500',
    confirmed: 'bg-green-500/20 text-green-500',
    completed: 'bg-blue-500/20 text-blue-500',
    cancelled: 'bg-red-500/20 text-red-500'
  };
  return colors[status as keyof typeof colors] || '';
}