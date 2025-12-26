// Mock data store for admin panel demo
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  category: string;
}
export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}
export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
  status: 'pending' | 'approved';
  date: string;
}
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'responded';
}
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
  uploadDate: string;
}

// Initialize mock data
const STORAGE_KEYS = {
  services: 'admin_services',
  bookings: 'admin_bookings',
  team: 'admin_team',
  testimonials: 'admin_testimonials',
  messages: 'admin_messages',
  gallery: 'admin_gallery'
};
export const mockData = {
  getServices: (): Service[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.services);
    return stored ? JSON.parse(stored) : [];
  },
  saveServices: (services: Service[]) => {
    localStorage.setItem(STORAGE_KEYS.services, JSON.stringify(services));
  },
  getBookings: (): Booking[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.bookings);
    return stored ? JSON.parse(stored) : [];
  },
  saveBookings: (bookings: Booking[]) => {
    localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(bookings));
  },
  getTeam: (): TeamMember[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.team);
    return stored ? JSON.parse(stored) : [];
  },
  saveTeam: (team: TeamMember[]) => {
    localStorage.setItem(STORAGE_KEYS.team, JSON.stringify(team));
  },
  getTestimonials: (): Testimonial[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.testimonials);
    return stored ? JSON.parse(stored) : [];
  },
  saveTestimonials: (testimonials: Testimonial[]) => {
    localStorage.setItem(STORAGE_KEYS.testimonials, JSON.stringify(testimonials));
  },
  getMessages: (): ContactMessage[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.messages);
    return stored ? JSON.parse(stored) : [];
  },
  saveMessages: (messages: ContactMessage[]) => {
    localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(messages));
  },
  getGallery: (): GalleryImage[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.gallery);
    return stored ? JSON.parse(stored) : [];
  },
  saveGallery: (gallery: GalleryImage[]) => {
    localStorage.setItem(STORAGE_KEYS.gallery, JSON.stringify(gallery));
  }
};