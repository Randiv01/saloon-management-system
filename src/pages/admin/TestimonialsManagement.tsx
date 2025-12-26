import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon, StarIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DataTable } from '../../components/admin/DataTable';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { mockData, Testimonial } from '../../utils/mockData';
export function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    loadTestimonials();
  }, []);
  const loadTestimonials = () => {
    let data = mockData.getTestimonials();
    if (data.length === 0) {
      data = getDefaultTestimonials();
      mockData.saveTestimonials(data);
    }
    setTestimonials(data);
  };
  const updateStatus = (id: string, status: 'approved' | 'pending') => {
    const updated = testimonials.map(t => t.id === id ? {
      ...t,
      status
    } : t);
    mockData.saveTestimonials(updated);
    setTestimonials(updated);
    setIsModalOpen(false);
  };
  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    mockData.saveTestimonials(updated);
    setTestimonials(updated);
    setIsModalOpen(false);
  };
  const columns = [{
    key: 'name',
    label: 'Customer',
    sortable: true
  }, {
    key: 'service',
    label: 'Service',
    sortable: true
  }, {
    key: 'rating',
    label: 'Rating',
    sortable: true,
    render: (testimonial: Testimonial) => <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-accent fill-accent" />)}
        </div>
  }, {
    key: 'date',
    label: 'Date',
    sortable: true
  }, {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (testimonial: Testimonial) => <span className={`px-3 py-1 rounded-full text-xs font-medium ${testimonial.status === 'approved' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
          {testimonial.status}
        </span>
  }];
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Testimonials Management
            </h1>
            <p className="text-text-secondary">
              Review and manage customer testimonials
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Total</p>
            <p className="text-2xl font-bold">{testimonials.length}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Pending</p>
            <p className="text-2xl font-bold text-yellow-500">
              {testimonials.filter(t => t.status === 'pending').length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Approved</p>
            <p className="text-2xl font-bold text-green-500">
              {testimonials.filter(t => t.status === 'approved').length}
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
          <DataTable data={testimonials} columns={columns} searchable searchPlaceholder="Search testimonials..." onRowClick={testimonial => {
          setSelectedTestimonial(testimonial);
          setIsModalOpen(true);
        }} />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedTestimonial && <div className="p-6">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Testimonial Details
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-text-secondary">Customer Name</p>
                <p className="font-medium">{selectedTestimonial.name}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Service</p>
                <p className="font-medium">{selectedTestimonial.service}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Rating</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-accent fill-accent" />)}
                </div>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Review</p>
                <p className="mt-1 p-4 bg-bg-secondary rounded-lg italic">
                  "{selectedTestimonial.text}"
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${selectedTestimonial.status === 'approved' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                  {selectedTestimonial.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {selectedTestimonial.status === 'pending' && <Button variant="primary" onClick={() => updateStatus(selectedTestimonial.id, 'approved')}>
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Approve
                </Button>}
              <Button variant="secondary" onClick={() => deleteTestimonial(selectedTestimonial.id)}>
                <XIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>}
      </Modal>
    </AdminLayout>;
}
function getDefaultTestimonials(): Testimonial[] {
  return [{
    id: '1',
    name: 'Sarah Johnson',
    text: 'Absolutely amazing experience! The staff is professional and the results exceeded my expectations.',
    rating: 5,
    service: 'Hair Styling',
    status: 'approved',
    date: '2024-01-15'
  }, {
    id: '2',
    name: 'Emily Davis',
    text: 'The bridal package was perfect for my wedding day. I felt like a princess!',
    rating: 5,
    service: 'Bridal Package',
    status: 'approved',
    date: '2024-01-10'
  }, {
    id: '3',
    name: 'Michael Chen',
    text: 'Great atmosphere and top-notch service. Will definitely be coming back!',
    rating: 5,
    service: 'Spa Treatment',
    status: 'pending',
    date: '2024-01-20'
  }];
}