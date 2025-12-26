import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Booking } from './pages/Booking';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
// Admin imports
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { ServicesManagement } from './pages/admin/ServicesManagement';
import { BookingsManagement } from './pages/admin/BookingsManagement';
import { GalleryManagement } from './pages/admin/GalleryManagement';
import { TeamManagement } from './pages/admin/TeamManagement';
import { TestimonialsManagement } from './pages/admin/TestimonialsManagement';
import { ContactMessages } from './pages/admin/ContactMessages';

// Service Pages
import { BridalDressing } from './pages/services/BridalDressing';
import { KeratinTreatment } from './pages/services/KeratinTreatment';
import { HairRebonding } from './pages/services/HairRebonding';
import { LadiesHairCut } from './pages/services/LadiesHairCut';
import { GentsHairCut } from './pages/services/GentsHairCut';
function AnimatedRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  // Don't show customer navbar/footer on admin pages
  if (isAdminRoute) {
    return <Routes location={location} key={location.pathname}>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>} />
      <Route path="/admin/services" element={<ProtectedRoute>
        <ServicesManagement />
      </ProtectedRoute>} />
      <Route path="/admin/bookings" element={<ProtectedRoute>
        <BookingsManagement />
      </ProtectedRoute>} />
      <Route path="/admin/gallery" element={<ProtectedRoute>
        <GalleryManagement />
      </ProtectedRoute>} />
      <Route path="/admin/team" element={<ProtectedRoute>
        <TeamManagement />
      </ProtectedRoute>} />
      <Route path="/admin/testimonials" element={<ProtectedRoute>
        <TestimonialsManagement />
      </ProtectedRoute>} />
      <Route path="/admin/messages" element={<ProtectedRoute>
        <ContactMessages />
      </ProtectedRoute>} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>;
  }
  return <>
    <Navbar />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <Home />
        </motion.div>} />
        <Route path="/about" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <About />
        </motion.div>} />
        <Route path="/services" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <Services />
        </motion.div>} />
        <Route path="/booking" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <Booking />
        </motion.div>} />
        <Route path="/gallery" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <Gallery />
        </motion.div>} />
        <Route path="/contact" element={<motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.3
        }}>
          <Contact />
        </motion.div>} />

        {/* Service Pages */}
        <Route path="/services/bridal-dressing-kandy" element={<BridalDressing />} />
        <Route path="/services/keratin-treatment-kandy" element={<KeratinTreatment />} />
        <Route path="/services/hair-rebonding-kandy" element={<HairRebonding />} />
        <Route path="/services/ladies-hair-cut" element={<LadiesHairCut />} />
        <Route path="/services/gents-hair-cut" element={<GentsHairCut />} />
      </Routes>
    </AnimatePresence>
    <Footer />
  </>;
}
export function App() {
  return <HelmetProvider>
    <BrowserRouter>
      <div className="min-h-screen w-full bg-bg">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  </HelmetProvider>;
}