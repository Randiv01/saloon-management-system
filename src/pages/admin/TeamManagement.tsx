import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Modal } from '../../components/ui/Modal';
import { Card } from '../../components/ui/Card';
import { mockData, TeamMember } from '../../utils/mockData';
export function TeamManagement() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    bio: '',
    image: ''
  });
  useEffect(() => {
    loadTeam();
  }, []);
  const loadTeam = () => {
    let data = mockData.getTeam();
    if (data.length === 0) {
      data = getDefaultTeam();
      mockData.saveTeam(data);
    }
    setTeam(data);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      const updated = team.map(m => m.id === editingMember.id ? {
        ...editingMember,
        ...formData
      } : m);
      mockData.saveTeam(updated);
      setTeam(updated);
    } else {
      const newMember: TeamMember = {
        id: `member-${Date.now()}`,
        ...formData
      };
      const updated = [...team, newMember];
      mockData.saveTeam(updated);
      setTeam(updated);
    }
    closeModal();
  };
  const deleteMember = (id: string) => {
    const updated = team.filter(m => m.id !== id);
    mockData.saveTeam(updated);
    setTeam(updated);
  };
  const openModal = (member?: TeamMember) => {
    if (member) {
      setEditingMember(member);
      setFormData({
        name: member.name,
        role: member.role,
        email: member.email,
        bio: member.bio,
        image: member.image
      });
    } else {
      setEditingMember(null);
      setFormData({
        name: '',
        role: '',
        email: '',
        bio: '',
        image: ''
      });
    }
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingMember(null);
  };
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Team Management
            </h1>
            <p className="text-text-secondary">
              Manage your salon staff members
            </p>
          </div>
          <Button onClick={() => openModal()}>
            <PlusIcon className="w-5 h-5 mr-2" />
            Add Member
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => <motion.div key={member.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }}>
              <Card>
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button onClick={() => openModal(member)} className="p-2 rounded-full bg-card hover:bg-accent transition-colors">
                      <EditIcon className="w-4 h-4" />
                    </button>
                    <button onClick={() => {
                  if (confirm('Delete this team member?')) deleteMember(member.id);
                }} className="p-2 rounded-full bg-card hover:bg-secondary transition-colors">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-text-secondary text-sm mb-2">
                  {member.email}
                </p>
                <p className="text-text-secondary text-sm">{member.bio}</p>
              </Card>
            </motion.div>)}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <h2 className="text-2xl font-serif font-bold mb-6">
            {editingMember ? 'Edit Team Member' : 'Add Team Member'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} required />
            <Input label="Role" value={formData.role} onChange={e => setFormData({
            ...formData,
            role: e.target.value
          })} placeholder="e.g., Master Stylist" required />
            <Input label="Email" type="email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} required />
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Bio
              </label>
              <textarea value={formData.bio} onChange={e => setFormData({
              ...formData,
              bio: e.target.value
            })} rows={3} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" required />
            </div>
            <Input label="Image URL" value={formData.image} onChange={e => setFormData({
            ...formData,
            image: e.target.value
          })} placeholder="https://..." required />
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                {editingMember ? 'Update' : 'Add'} Member
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
function getDefaultTeam(): TeamMember[] {
  return [{
    id: '1',
    name: 'Sophia Martinez',
    role: 'Master Stylist',
    email: 'sophia@luxesalon.com',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    bio: '15+ years of experience in luxury hair styling and color.'
  }, {
    id: '2',
    name: 'Isabella Chen',
    role: 'Makeup Artist',
    email: 'isabella@luxesalon.com',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    bio: 'Certified makeup artist specializing in bridal and editorial looks.'
  }];
}