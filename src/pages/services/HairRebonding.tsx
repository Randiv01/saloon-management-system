import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function HairRebonding() {
    return (
        <div className="pt-20">
            <SEO
                title="Rebonding Hair Kandy | Permanent Straightening - Salon Cut & Curl"
                description="Get perfectly straight hair with expert hair rebonding in Kandy. Safe, effective permanent straightening at Salon Cut & Curl Katugastota."
                canonical="/services/hair-rebonding-kandy"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-accent">
                        Expert Hair Rebonding Services in Kandy
                    </h1>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Achieve the sleek, straight look you desire with our professional <strong>rebonding hair Kandy</strong> services. <strong>Salon Cut & Curl</strong> utilizes advanced rebonding techniques that straighten even the most stubborn curls while maintaining hair health. Our <strong>Katugastota</strong> salon experts assess your hair type to apply the precise strength of relaxers needed, ensuring a poker-straight finish without compromising texture. Experience the freedom of wash-and-wear straight hair today.
                    </p>

                    <div className="bg-card p-8 rounded-2xl border border-border mt-12">
                        <h2 className="text-2xl font-serif font-bold mb-4 text-white">Why Choose Our Rebonding?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-2">Safe & Effective</h3>
                                <p className="text-text-secondary">We use premium straightening products that protect your hair bonds while restructuring them, ensuring minimal damage and maximum straightness.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-accent mb-2">Long-Lasting Results</h3>
                                <p className="text-text-secondary">Enjoy permanently straight hair that stays sleek. Only your new growth needs touching up after 6-8 months.</p>
                            </div>
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
