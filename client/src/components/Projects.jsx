import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Rostrachnostic Enterprise CRM",
            description: "Developed a custom CRM solution for a North American diagnostic firm. Automated patient data entry, result tracking, and billing integration using Apex and LWC.",
            tags: ["Apex", "LWC", "Health Cloud", "Integration"],
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
            link: "#"
        },
        {
            title: "Automated Lead Scoring System",
            description: "Implemented a complex Flow-based lead scoring engine that reduced manual qualification time by 40%. Integrated with Marketing Cloud for automated nurturing.",
            tags: ["Flows", "Sales Cloud", "Marketing Cloud"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
            link: "#"
        },
        {
            title: "Inventory Management App",
            description: "Built a mobile-ready inventory tracking app for field agents using LWC and Salesforce Mobile App. Enabled offline access and barcode scanning.",
            tags: ["LWC", "Mobile", "Offline"],
            image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=600",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 perspective-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">My Work</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Featured Projects
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        A small selection of the 45+ projects I've delivered.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.03,
                                rotateX: 5,
                                rotateY: 5,
                                z: 50,
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.2)"
                            }}
                            viewport={{ once: true }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-transparent dark:border-gray-700 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium text-sm">View Case Study</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium text-sm transition-colors">
                                    View Details <ExternalLink className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
