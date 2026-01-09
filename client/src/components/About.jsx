import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Award, CheckCircle } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Apex & SOQL', icon: <Code className="w-6 h-6 text-blue-500" /> },
        { name: 'LWC & Aura', icon: <Globe className="w-6 h-6 text-green-500" /> },
        { name: 'Flows & Process Builder', icon: <Layers className="w-6 h-6 text-purple-500" /> },
        { name: 'Data Migration', icon: <Database className="w-6 h-6 text-yellow-500" /> },
    ];

    const certifications = [
        "Salesforce Administrator",
        "Platform App Builder",
        "Platform Developer I",
        "Salesforce AI Specialist",
        "Salesforce AI Associates"
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Reliable Salesforce Expertise
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                        I help businesses streamline operations and maximize their Salesforce ROI through custom development and smart automation.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I am a certified Salesforce Developer & Administrator with over 3.5 years of hands-on experience in the Salesforce ecosystem. I have successfully delivered 45+ projects ranging from small implementations to complex enterprise solutions for clients in North America and beyond.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                My expertise bridges the gap between technical complexity and business logic. Whether you need a complex Apex trigger, a custom Lightning Web Component, or a seamless 3rd-party integration, I deliver clean, scalable, and secure code.
                            </p>

                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                                {certifications.map((cert, index) => (
                                    <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        <Award className="w-4 h-4 mr-1" />
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {skills.map((skill, index) => (
                                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col h-full">
                                        <div className="mb-4 bg-white dark:bg-gray-700 p-3 rounded-lg w-fit">
                                            {skill.icon}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
