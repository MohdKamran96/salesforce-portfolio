import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 perspective-1000">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="max-w-md w-full text-center space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl relative"
            >
                <div className="flex justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="h-24 w-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center"
                    >
                        <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                    </motion.div>
                </div>

                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                        Welcome Aboard!
                    </h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Thank you for joining. Your account has been successfully created.
                    </p>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        You can now access exclusive offers, including special coupons for our services.
                    </p>
                </div>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
                    >
                        Go to Homepage <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
