import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function KeratinTreatment() {
    return (
        <div className="pt-20">
            <SEO
                title="Keratin Treatment Kandy | Smooth & Silky Hair - Salon Cut & Curl"
                description="Transform frizzy hair with the best Keratin treatment in Kandy. Restore shine and smoothness at Salon Cut & Curl, Katugastota. Book now!"
                canonical="/services/keratin-treatment-kandy"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-accent">
                        Professional Keratin Treatment in Kandy
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Say goodbye to frizz and hello to silky, manageable hair with our signature <strong>Keratin treatment in Kandy</strong>. At <strong>Salon Cut & Curl</strong>, we use high-quality, formaldehyde-free keratin formulas that deeply penetrate the hair shaft to repair damage and restore shine. Perfect for the humid Sri Lankan climate, our treatment significantly reduces styling time and keeps your hair looking salon-fresh for months. Trust our certified stylists in <strong>Katugastota</strong> to give your hair the ultimate rejuvenation it deserves.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-12 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Benefits of Keratin Therapy</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Eliminates Frizz up to 100%</li>
                                <li className="flex items-center gap-2">✓ Cuts Styling Time in Half</li>
                                <li className="flex items-center gap-2">✓ Adds Vivid Shine</li>
                                <li className="flex items-center gap-2">✓ Repairs Damaged Hair Cuticles</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Aftercare Tips</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Use Sulfate-Free Shampoo</li>
                                <li className="flex items-center gap-2">✓ Wait 72 Hours Before Washing</li>
                                <li className="flex items-center gap-2">✓ Avoid Salt & Chlorine Water</li>
                                <li className="flex items-center gap-2">✓ Use Silk Pillowcases</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/booking">
                            <Button size="lg" className="min-w-[200px]">Book Treatment</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
