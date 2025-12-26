import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceHighlights } from '../components/ServiceHighlights';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { PromoBanner } from '../components/PromoBanner';
import { SEO } from '../components/SEO';

export function Home() {
  return <div className="pt-20">
    <SEO
      title="Salon Cut & Curl | Best Hair & Beauty Salon in Katugastota"
      description="Expert hair styling, bridal dressing, and beauty treatments at Salon Cut & Curl, Katugastota. The #1 rated ladies & gents salon in Kandy. Book your visit today!"
      canonical="/"
    />
    <Hero />
    <section className="py-16 px-4 bg-bg text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-6 text-accent">Why Choose Salon Cut & Curl?</h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          Welcome to <strong>Salon Cut & Curl</strong>, the leading <strong>hair salon in Katugastota</strong> dedicated to transforming your look with style and elegance. Conveniently located on Madawala Rd, we specialize in modern hair cutting, coloring, and professional <strong>bridal dressing in Kandy</strong>. Whether you are looking for a keratin treatment to revitalize your hair or a precision cut, our expert team provides personalized care using top-tier international products. Step into luxury at the most trusted <strong>beauty salon in Katugastota</strong> and experience world-class grooming services tailored just for you.
        </p>
      </div>
    </section>
    <ServiceHighlights />
    <PromoBanner />
    <TestimonialCarousel />
  </div>;
}