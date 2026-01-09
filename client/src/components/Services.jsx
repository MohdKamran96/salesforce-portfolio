import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Users, ShieldCheck, Box, BarChart } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Salesforce Development",
            description: "Custom Apex, Visualforce, and Lightning Web Components (LWC) tailored to your specific business needs.",
            icon: <CodeIcon />
        },
        {
            title: "Administration",
            description: "User management, security configuration, reports & dashboards, and ongoing platform maintenance.",
            icon: <UserIcon />
        },
        {
            title: "Process Automation",
            description: "Streamline workflows using Flows, Process Builder, and Approval Processes to save time and reduce errors.",
            icon: <ZapIcon />
        },
        {
            title: "Integration Services",
            description: "Seamlessly connect Salesforce with ERPs, Marketing platforms, and other 3rd party APIs.",
            icon: <LinkIcon />
        },
        {
            title: "Data Migration",
            description: "Secure and accurate transfer of legacy data into Salesforce using modern ETL tools.",
            icon: <DatabaseIcon />
        },
        {
            title: "Consulting & Support",
            description: "Strategic advice on platform scalability and ongoing support packages.",
            icon: <SupportIcon />
        }
    ];

    return (
        <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Expertise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Services I Offer
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper Icons
const CodeIcon = () => <Wrench className="w-6 h-6" />;
const UserIcon = () => <Users className="w-6 h-6" />;
const ZapIcon = () => <Zap className="w-6 h-6" />;
const LinkIcon = () => <Box className="w-6 h-6" />;
const DatabaseIcon = () => <ShieldCheck className="w-6 h-6" />;
const SupportIcon = () => <BarChart className="w-6 h-6" />;

export default Services;
