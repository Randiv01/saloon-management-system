import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function BridalDressing() {
    return (
        <div className="pt-20">
            <SEO
                title="Bridal Dressing Kandy | Professional Bridal Makeup - Salon Cut & Curl"
                description="Look breathtaking on your big day with expert bridal dressing in Kandy by Salon Cut & Curl. Custom bridal makeup, hair, and saree draping services."
                canonical="/services/bridal-dressing-kandy"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-accent">
                        Exclusive Bridal Dressing Services in Kandy
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Your wedding day is prestigious, and at <strong>Salon Cut & Curl</strong>, we ensure you look flawless. As a top destination for <strong>bridal dressing in Kandy</strong>, we offer comprehensive packages including professional makeup, elegant hair styling, and traditional saree draping. Our specialists understand the nuances of Kandyan and modern bridal styles, ensuring you shine with confidence. We use long-lasting, premium makeup brands to keep you radiant throughout your ceremony. Visit us in <strong>Katugastota</strong> for a bridal consultation today.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-12 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Our Bridal Makeup Packages</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Kandyan Bridal Dressing</li>
                                <li className="flex items-center gap-2">✓ Western Bridal Styles</li>
                                <li className="flex items-center gap-2">✓ Homecoming & Preshoot Looks</li>
                                <li className="flex items-center gap-2">✓ Bridesmaids & Flower Girls</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Why Choose Us?</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Experienced & Certified Artists</li>
                                <li className="flex items-center gap-2">✓ Premium International Brands</li>
                                <li className="flex items-center gap-2">✓ Customized Pre-Bridal Care</li>
                                <li className="flex items-center gap-2">✓ Private Dressing Suite</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/booking">
                            <Button size="lg" className="min-w-[200px]">Book Consultation</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
