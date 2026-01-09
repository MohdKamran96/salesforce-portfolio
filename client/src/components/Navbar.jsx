import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Sun, Moon, Cloud, LogIn, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Services', href: '/#services' },
        { name: 'Clients', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center">
                        <Cloud className="h-8 w-8 text-blue-500 mr-2" />
                        <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
                            SFDC Dev
                        </span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {user ? (
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 flex items-center">
                                        <User size={16} className="mr-1" /> {user.name}
                                        {user.clientType === 'regular' && <span className="ml-1 text-xs bg-yellow-100 text-yellow-800 px-1 rounded">VIP</span>}
                                    </span>
                                    <button onClick={logout} className="text-gray-500 hover:text-red-500 transition-colors">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                                    <LogIn size={16} className="mr-2" /> Login
                                </Link>
                            )}

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        {user ? (
                            <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                                <div className="text-gray-900 dark:text-white font-medium flex items-center">
                                    <User size={16} className="mr-2" /> {user.name}
                                </div>
                                <button onClick={() => { logout(); setIsOpen(false); }} className="mt-2 w-full text-left text-red-500 hover:text-red-600 font-medium text-sm">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 mt-4">
                                Login
                            </Link>
                        )}
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="w-full text-left flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium mt-2"
                        >
                            {theme === 'light' ? (
                                <>
                                    <Moon size={18} className="mr-2" /> Dark Mode
                                </>
                            ) : (
                                <>
                                    <Sun size={18} className="mr-2" /> Light Mode
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
