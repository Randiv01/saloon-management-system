import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, TrashIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { mockData, GalleryImage } from '../../utils/mockData';
export function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    url: '',
    alt: '',
    category: ''
  });
  useEffect(() => {
    loadGallery();
  }, []);
  const loadGallery = () => {
    let data = mockData.getGallery();
    if (data.length === 0) {
      data = getDefaultGallery();
      mockData.saveGallery(data);
    }
    setImages(data);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newImage: GalleryImage = {
      id: `img-${Date.now()}`,
      ...formData,
      uploadDate: new Date().toISOString()
    };
    const updated = [newImage, ...images];
    mockData.saveGallery(updated);
    setImages(updated);
    setIsModalOpen(false);
    setFormData({
      url: '',
      alt: '',
      category: ''
    });
  };
  const deleteImage = (id: string) => {
    const updated = images.filter(img => img.id !== id);
    mockData.saveGallery(updated);
    setImages(updated);
  };
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Gallery Management
            </h1>
            <p className="text-text-secondary">
              Manage your salon portfolio images
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Image
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: index * 0.05
        }} className="relative group aspect-square rounded-lg overflow-hidden bg-card border border-border">
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button onClick={() => {
              if (confirm('Delete this image?')) deleteImage(image.id);
            }} className="p-3 rounded-full bg-secondary hover:bg-red-700 transition-colors">
                  <TrashIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium truncate">
                  {image.alt}
                </p>
                <p className="text-gray-300 text-xs">{image.category}</p>
              </div>
            </motion.div>)}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold mb-6">Add New Image</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Image URL" value={formData.url} onChange={e => setFormData({
            ...formData,
            url: e.target.value
          })} placeholder="https://..." required />
            <Input label="Description" value={formData.alt} onChange={e => setFormData({
            ...formData,
            alt: e.target.value
          })} placeholder="e.g., Hair styling transformation" required />
            <Input label="Category" value={formData.category} onChange={e => setFormData({
            ...formData,
            category: e.target.value
          })} placeholder="e.g., Hair, Makeup, Spa" required />
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Add Image
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </AdminLayout>;
}
function getDefaultGallery(): GalleryImage[] {
  return [{
    id: '1',
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    alt: 'Hair styling',
    category: 'Hair',
    uploadDate: new Date().toISOString()
  }, {
    id: '2',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    alt: 'Makeup',
    category: 'Makeup',
    uploadDate: new Date().toISOString()
  }, {
    id: '3',
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    alt: 'Spa treatment',
    category: 'Spa',
    uploadDate: new Date().toISOString()
  }, {
    id: '4',
    url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    alt: 'Bridal makeup',
    category: 'Bridal',
    uploadDate: new Date().toISOString()
  }];
}