import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

const ClientSatisfaction = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, TechFlow Solutions",
            content: "Mohd Kamran delivered our complex Salesforce integration two weeks ahead of schedule. His understanding of Apex and LWC is top-notch. Highly recommended!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Operations Manager, Global Logistics",
            content: "We needed a complete overhaul of our Service Cloud. Kamran's expertise in Flows and automation saved us hours of manual work every week.",
            rating: 5
        },
        {
            name: "Emily Davis",
            role: "Director of Sales, NorthStar Corp",
            content: "Professional, communicative, and technically brilliant. He solved a legacy code issue that had been plaguing us for months.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-blue-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <MessageSquare className="w-12 h-12 text-blue-500" />
                    </div>
                    <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Client Satisfaction
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        What my clients say about my work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg relative"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                    {testimonial.name[0]}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSatisfaction;
