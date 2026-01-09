import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Cloud } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative perspective-1000">
            {/* Background Decorative Elements - 3D Parallax */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                {/* Floating 3D Clouds */}
                <motion.div style={{ y: y1, x: -50 }} className="absolute top-20 left-10 opacity-10 dark:opacity-5">
                    <Cloud size={120} />
                </motion.div>
                <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-40 right-10 opacity-10 dark:opacity-5">
                    <Cloud size={160} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-4 shadow-sm">
                        Salesforce Developer & Administrator
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 drop-shadow-sm">
                        Building Logic <br className="hidden md:block" /> That Drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Business Success</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                        3.5+ Years Exp • 5 Salesforce Certifications • 45+ Projects Delivered
                        <br />
                        Specializing in LWC, Apex, Flows, and Complex Integrations.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, rotateZ: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg shadow-lg shadow-blue-500/30 ring-offset-2 focus:ring-2 focus:ring-blue-500"
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, rotateZ: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg shadow-lg"
                        >
                            Hire Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
