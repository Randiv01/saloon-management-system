import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DataTable } from '../../components/admin/DataTable';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { mockData, Service } from '../../utils/mockData';
export function ServicesManagement() {
  const [services, setServices] = useState<Service[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    duration: '',
    description: '',
    image: '',
    category: ''
  });
  useEffect(() => {
    loadServices();
  }, []);
  const loadServices = () => {
    let data = mockData.getServices();
    if (data.length === 0) {
      data = getDefaultServices();
      mockData.saveServices(data);
    }
    setServices(data);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      const updated = services.map(s => s.id === editingService.id ? {
        ...editingService,
        ...formData,
        price: parseFloat(formData.price)
      } : s);
      mockData.saveServices(updated);
      setServices(updated);
    } else {
      const newService: Service = {
        id: `service-${Date.now()}`,
        ...formData,
        price: parseFloat(formData.price)
      };
      const updated = [...services, newService];
      mockData.saveServices(updated);
      setServices(updated);
    }
    closeModal();
  };
  const deleteService = (id: string) => {
    const updated = services.filter(s => s.id !== id);
    mockData.saveServices(updated);
    setServices(updated);
  };
  const openModal = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setFormData({
        name: service.name,
        price: service.price.toString(),
        duration: service.duration,
        description: service.description,
        image: service.image,
        category: service.category
      });
    } else {
      setEditingService(null);
      setFormData({
        name: '',
        price: '',
        duration: '',
        description: '',
        image: '',
        category: ''
      });
    }
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };
  const columns = [{
    key: 'name',
    label: 'Service Name',
    sortable: true
  }, {
    key: 'category',
    label: 'Category',
    sortable: true
  }, {
    key: 'price',
    label: 'Price',
    sortable: true,
    render: (service: Service) => `$${service.price}`
  }, {
    key: 'duration',
    label: 'Duration',
    sortable: true
  }, {
    key: 'actions',
    label: 'Actions',
    render: (service: Service) => <div className="flex gap-2">
          <button onClick={e => {
        e.stopPropagation();
        openModal(service);
      }} className="p-2 rounded-lg hover:bg-accent transition-colors">
            <EditIcon className="w-4 h-4" />
          </button>
          <button onClick={e => {
        e.stopPropagation();
        if (confirm('Delete this service?')) deleteService(service.id);
      }} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <TrashIcon className="w-4 h-4" />
          </button>
        </div>
  }];
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Services Management
            </h1>
            <p className="text-text-secondary">
              Manage your salon services and pricing
            </p>
          </div>
          <Button onClick={() => openModal()}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Service
          </Button>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-card border border-border rounded-xl p-6">
          <DataTable data={services} columns={columns} searchable searchPlaceholder="Search services..." />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold mb-6">
            {editingService ? 'Edit Service' : 'Add New Service'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Service Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required />
            <Input label="Category" value={formData.category} onChange={e => setFormData({
            ...formData,
            category: e.target.value
          })} placeholder="e.g., Hair, Makeup, Spa" required />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Price ($)" type="number" value={formData.price} onChange={e => setFormData({
              ...formData,
              price: e.target.value
            })} required />
              <Input label="Duration" value={formData.duration} onChange={e => setFormData({
              ...formData,
              duration: e.target.value
            })} placeholder="e.g., 60 min" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Description
              </label>
              <textarea value={formData.description} onChange={e => setFormData({
              ...formData,
              description: e.target.value
            })} rows={3} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
            <Input label="Image URL" value={formData.image} onChange={e => setFormData({
            ...formData,
            image: e.target.value
          })} placeholder="https://..." />
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingService ? 'Update' : 'Create'} Service
              </Button>
              <Button type="button" variant="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </AdminLayout>;
}
function getDefaultServices(): Service[] {
  return [{
    id: '1',
    name: 'Hair Cut & Styling',
    price: 80,
    duration: '60 min',
    description: 'Professional haircut and styling',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
    category: 'Hair'
  }, {
    id: '2',
    name: 'Hair Coloring',
    price: 150,
    duration: '120 min',
    description: 'Expert color treatments',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
    category: 'Hair'
  }, {
    id: '3',
    name: 'Bridal Makeup',
    price: 200,
    duration: '90 min',
    description: 'Complete bridal makeup package',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600',
    category: 'Makeup'
  }];
}