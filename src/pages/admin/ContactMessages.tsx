import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, CheckIcon, TrashIcon } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { DataTable } from '../../components/admin/DataTable';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { mockData, ContactMessage } from '../../utils/mockData';
export function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    loadMessages();
  }, []);
  const loadMessages = () => {
    let data = mockData.getMessages();
    if (data.length === 0) {
      data = getDefaultMessages();
      mockData.saveMessages(data);
    }
    setMessages(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };
  const updateStatus = (id: string, status: ContactMessage['status']) => {
    const updated = messages.map(m => m.id === id ? {
      ...m,
      status
    } : m);
    mockData.saveMessages(updated);
    setMessages(updated);
  };
  const deleteMessage = (id: string) => {
    const updated = messages.filter(m => m.id !== id);
    mockData.saveMessages(updated);
    setMessages(updated);
    setIsModalOpen(false);
  };
  const columns = [{
    key: 'name',
    label: 'Name',
    sortable: true
  }, {
    key: 'email',
    label: 'Email',
    sortable: true
  }, {
    key: 'message',
    label: 'Message',
    render: (msg: ContactMessage) => <span className="truncate max-w-xs block">{msg.message}</span>
  }, {
    key: 'date',
    label: 'Date',
    sortable: true
  }, {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (msg: ContactMessage) => <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(msg.status)}`}>
          {msg.status}
        </span>
  }];
  return <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2">
              Contact Messages
            </h1>
            <p className="text-text-secondary">
              View and manage customer inquiries
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">New</p>
            <p className="text-2xl font-bold text-accent">
              {messages.filter(m => m.status === 'new').length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Read</p>
            <p className="text-2xl font-bold text-blue-500">
              {messages.filter(m => m.status === 'read').length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-text-secondary text-sm mb-1">Responded</p>
            <p className="text-2xl font-bold text-green-500">
              {messages.filter(m => m.status === 'responded').length}
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
          <DataTable data={messages} columns={columns} searchable searchPlaceholder="Search messages..." onRowClick={message => {
          setSelectedMessage(message);
          setIsModalOpen(true);
          if (message.status === 'new') {
            updateStatus(message.id, 'read');
          }
        }} />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedMessage && <div className="p-6">
            <h2 className="text-2xl font-serif font-bold mb-6">
              Message Details
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-text-secondary">From</p>
                <p className="font-medium">{selectedMessage.name}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Email</p>
                <a href={`mailto:${selectedMessage.email}`} className="font-medium text-accent hover:underline">
                  {selectedMessage.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Date</p>
                <p className="font-medium">{selectedMessage.date}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Message</p>
                <p className="mt-2 p-4 bg-bg-secondary rounded-lg">
                  {selectedMessage.message}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${getStatusColor(selectedMessage.status)}`}>
                  {selectedMessage.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="primary" onClick={() => {
            window.location.href = `mailto:${selectedMessage.email}`;
            updateStatus(selectedMessage.id, 'responded');
          }}>
                <MailIcon className="w-4 h-4 mr-2" />
                Reply via Email
              </Button>
              {selectedMessage.status !== 'responded' && <Button variant="outline" onClick={() => updateStatus(selectedMessage.id, 'responded')}>
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Mark Responded
                </Button>}
              <Button variant="secondary" onClick={() => deleteMessage(selectedMessage.id)}>
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>}
      </Modal>
    </AdminLayout>;
}
function getStatusColor(status: string): string {
  const colors = {
    new: 'bg-accent/20 text-accent',
    read: 'bg-blue-500/20 text-blue-500',
    responded: 'bg-green-500/20 text-green-500'
  };
  return colors[status as keyof typeof colors] || '';
}
function getDefaultMessages(): ContactMessage[] {
  return [{
    id: '1',
    name: 'Jennifer Smith',
    email: 'jennifer@example.com',
    message: 'Hi, I would like to inquire about your bridal packages. Do you offer trial sessions?',
    date: '2024-01-20',
    status: 'new'
  }, {
    id: '2',
    name: 'Robert Johnson',
    email: 'robert@example.com',
    message: 'Can I book an appointment for hair coloring this weekend?',
    date: '2024-01-19',
    status: 'read'
  }, {
    id: '3',
    name: 'Amanda Lee',
    email: 'amanda@example.com',
    message: 'Thank you for the wonderful service! I loved my new hairstyle.',
    date: '2024-01-18',
    status: 'responded'
  }];
}