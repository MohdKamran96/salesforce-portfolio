import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Clock, BarChart4 } from 'lucide-react';

const ClientAssurity = () => {
    const assurances = [
        {
            title: "Data Security",
            desc: "Enterprise-grade encryption and role-based access control (RBAC) implementation standard.",
            icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
            color: "border-blue-500"
        },
        {
            title: "99.9% Uptime",
            desc: "Robust architecture design ensuring high availability and zero-downtime deployments.",
            icon: <Server className="w-12 h-12 text-green-500" />,
            color: "border-green-500"
        },
        {
            title: "24/7 Support",
            desc: "Round-the-clock monitoring and rapid incident response for critical issues.",
            icon: <Clock className="w-12 h-12 text-purple-500" />,
            color: "border-purple-500"
        },
        {
            title: "Scalability",
            desc: "Future-proof solutions built to grow with your business volume and complexity.",
            icon: <BarChart4 className="w-12 h-12 text-orange-500" />,
            color: "border-orange-500"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900 perspective-1000 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
                        Your Success, <span className="text-blue-600">Guaranteed</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        I don't just write code; I provide the peace of mind that your business runs securely and effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {assurances.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 15,
                                z: 50,
                                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-b-4 ${item.color} flex flex-col items-center text-center group cursor-pointer`}
                        >
                            <motion.div
                                className="mb-6 p-4 bg-white dark:bg-gray-700 rounded-full shadow-md"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientAssurity;
