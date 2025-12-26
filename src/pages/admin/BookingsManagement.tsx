import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon, EyeIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DataTable } from '../../components/admin/DataTable';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { mockData, Booking } from '../../utils/mockData';
export function BookingsManagement() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    loadBookings();
  }, []);
  const loadBookings = () => {
    const data = mockData.getBookings();
    setBookings(data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  };
  const updateBookingStatus = (id: string, status: Booking['status']) => {
    const updated = bookings.map(b => b.id === id ? {
      ...b,
      status
    } : b);
    mockData.saveBookings(updated);
    setBookings(updated);
    setIsModalOpen(false);
  };
  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    mockData.saveBookings(updated);
    setBookings(updated);
    setIsModalOpen(false);
  };
  const columns = [{
    key: 'customerName',
    label: 'Customer',
    sortable: true
  }, {
    key: 'phone',
    label: 'Phone',
    sortable: true
  }, {
    key: 'service',
    label: 'Service',
    sortable: true
  }, {
    key: 'date',
    label: 'Date',
    sortable: true
  }, {
    key: 'time',
    label: 'Time',
    sortable: true
  }, {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (booking: Booking) => <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
          {booking.status}
        </span>
  }, {
    key: 'actions',
    label: 'Actions',
    render: (booking: Booking) => <button onClick={e => {
      e.stopPropagation();
      setSelectedBooking(booking);
      setIsModalOpen(true);
    }} className="p-2 rounded-lg hover:bg-accent transition-colors">
          <EyeIcon className="w-4 h-4" />
        </button>
  }];
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Bookings Management
            </h1>
            <p className="text-text-secondary">
              Manage customer appointments and bookings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Total</p>
            <p className="text-2xl font-bold">{bookings.length}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-500">
              {bookings.filter(b => b.status === 'pending').length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Confirmed</p>
            <p className="text-2xl font-bold text-green-500">
              {bookings.filter(b => b.status === 'confirmed').length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Completed</p>
            <p className="text-2xl font-bold text-blue-500">
              {bookings.filter(b => b.status === 'completed').length}
            </p>
          </div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-card border border-border rounded-xl p-6">
          <DataTable data={bookings} columns={columns} searchable searchPlaceholder="Search bookings..." />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedBooking && <div className="p-6">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Booking Details
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-text-secondary">Customer Name</p>
                <p className="font-medium">{selectedBooking.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Phone</p>
                <p className="font-medium">{selectedBooking.phone}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Service</p>
                <p className="font-medium">{selectedBooking.service}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-text-secondary">Date</p>
                  <p className="font-medium">{selectedBooking.date}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Time</p>
                  <p className="font-medium">{selectedBooking.time}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedBooking.status)}`}>
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {selectedBooking.status === 'pending' && <Button variant="primary" onClick={() => updateBookingStatus(selectedBooking.id, 'confirmed')}>
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Confirm
                </Button>}
              {selectedBooking.status === 'confirmed' && <Button variant="primary" onClick={() => updateBookingStatus(selectedBooking.id, 'completed')}>
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Mark Complete
                </Button>}
              <Button variant="secondary" onClick={() => updateBookingStatus(selectedBooking.id, 'cancelled')}>
                <XIcon className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button variant="outline" onClick={() => deleteBooking(selectedBooking.id)}>
                Delete
              </Button>
            </div>
          </div>}
      </Modal>
    </AdminLayout>;
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