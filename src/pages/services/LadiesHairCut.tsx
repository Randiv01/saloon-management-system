import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function LadiesHairCut() {
    return (
        <div className="pt-20">
            <SEO
                title="Ladies Hair Cut Kandy | Trending Styles & Cuts - Salon Cut & Curl"
                description="Revamp your style with a chic ladies hair cut in Kandy. Expert stylists at Salon Cut & Curl Katugastota for layers, bobs, and trims."
                canonical="/services/ladies-hair-cut"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-accent">
                        Trendy Ladies Hair Cut Services in Kandy
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Whether you want a bold new bob, cascading layers, or a simple trim, <strong>Salon Cut & Curl</strong> is your go-to <strong>ladies salon in Kandy</strong>. Our stylists stay updated with the latest international hair trends to deliver cuts that frame your face and suit your lifestyle. Located in <strong>Katugastota</strong>, we provide a relaxing environment where every haircut includes a consultation, wash, and professional blow-dry finish.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-12 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Our Services</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Style Consulting & Face Framing</li>
                                <li className="flex items-center gap-2">✓ Layered Cuts & Bobs</li>
                                <li className="flex items-center gap-2">✓ Trims & Maintenance</li>
                                <li className="flex items-center gap-2">✓ Wash & Blow-Dry Finish</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Experience Luxury</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Personal Consultation</li>
                                <li className="flex items-center gap-2">✓ Relaxing Head Massage</li>
                                <li className="flex items-center gap-2">✓ Premium Hair Products</li>
                                <li className="flex items-center gap-2">✓ Expert Styling Advice</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/booking">
                            <Button size="lg" className="min-w-[200px]">Book Hair Cut</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
