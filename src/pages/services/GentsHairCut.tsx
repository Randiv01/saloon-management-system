import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function GentsHairCut() {
    return (
        <div className="pt-20">
            <SEO
                title="Gents Hair Cut Katugastota | Men's Grooming - Salon Cut & Curl"
                description="Sharp looks for modern men. Best gents hair cut in Katugastota. Beard trims, styling, and grooming at Salon Cut & Curl."
                canonical="/services/gents-hair-cut"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-accent">
                        Premium Gents Hair Cut & Grooming in Katugastota
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Look sharp and professional with a top-tier <strong>gents hair cut in Katugastota</strong> at <strong>Salon Cut & Curl</strong>. We blend classic barbering techniques with modern styling to give you a clean, sophisticated look. From fades to scissor cuts and beard grooming, our team ensures every detail is perfect. Stop by our salon on <strong>Madawala Road</strong> for a quick, high-quality grooming experience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mt-12 bg-card p-8 rounded-2xl border border-border">
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Men's Services</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Classic & Modern Cuts</li>
                                <li className="flex items-center gap-2">✓ Fades & Undercuts</li>
                                <li className="flex items-center gap-2">✓ Beard Styling & Trimming</li>
                                <li className="flex items-center gap-2">✓ Hair Coloring for Men</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-4 text-white">Why Visit Us?</h2>
                            <ul className="space-y-3 text-text-secondary">
                                <li className="flex items-center gap-2">✓ Experienced Barbers</li>
                                <li className="flex items-center gap-2">✓ Clean & Hygienic Equipment</li>
                                <li className="flex items-center gap-2">✓ Quick & Efficient Service</li>
                                <li className="flex items-center gap-2">✓ Modern Salon Environment</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/booking">
                            <Button size="lg" className="min-w-[200px]">Book Appointment</Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
