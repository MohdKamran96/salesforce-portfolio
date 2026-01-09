import React from 'react';
import { Github, Linkedin, Mail, Mountain } from 'lucide-react'; // Mountain as Trailhead placeholder

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Mohd Kamran</span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            Salesforce Developer & Administrator<br />
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/mohd-kamran-0ab3721b6" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/MohdKamran96" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://trailblazer.me/mkamran32/mohdkamran" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors" aria-label="Trailhead">
                            <Mountain size={24} />
                        </a>
                        <a href="mailto:mohd.kamran3264@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
