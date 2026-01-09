import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Tag } from 'lucide-react';
import api from '../api';
import { useAuth } from '../context/AuthContext';

const Contact = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        requirement: '',
        budget: '',
        couponCode: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [couponStatus, setCouponStatus] = useState({ valid: false, msg: '', discount: 0 });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateCoupon = async () => {
        if (!formData.couponCode) return;
        try {
            const clientType = user?.clientType || 'individual';
            const res = await api.post('/api/coupons/validate', {
                code: formData.couponCode,
                clientType
            });
            setCouponStatus({ valid: true, msg: 'Coupon Applied!', discount: res.data.discountPercent });
        } catch (err) {
            setCouponStatus({ valid: false, msg: err.response?.data?.msg || 'Invalid Coupon', discount: 0 });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await api.post('/api/contact', { ...formData, discountApplied: couponStatus.discount });
            setStatus('success');
            setFormData({ name: '', email: '', company: '', requirement: '', budget: '', couponCode: '' });
            setCouponStatus({ valid: false, msg: '', discount: 0 });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error submitting form', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Get in Touch</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Let's Discuss Your Project
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                    <a href="mailto:mohd.kamran3264@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">mohd.kamran3264@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                                    <p className="text-gray-600 dark:text-gray-400">+91 8601622253</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                                    <p className="text-gray-600 dark:text-gray-400">Available Remote (Worldwide)<br />Based in PST Timezone</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-blue-50 dark:bg-gray-800 rounded-lg">
                            <p className="text-blue-800 dark:text-blue-200 font-medium">
                                "I am currently available for new projects and long-term contracts. Let's build something great together."
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white sm:text-sm p-3 border"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white sm:text-sm p-3 border"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white sm:text-sm p-3 border"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Budget Range</label>
                                    <select
                                        name="budget"
                                        id="budget"
                                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white sm:text-sm p-3 border"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="<1k">&lt; $1,000</option>
                                        <option value="1k-5k">$1k - $5k</option>
                                        <option value="5k-10k">$5k - $10k</option>
                                        <option value="10k+">$10k+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Coupon Field */}
                            <div>
                                <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Promo Code</label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <div className="relative flex-grow focus-within:z-10">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Tag className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="text"
                                            name="couponCode"
                                            id="couponCode"
                                            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white p-3 border"
                                            placeholder="Enter code (e.g. WELCOME20)"
                                            value={formData.couponCode}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={validateCoupon}
                                        className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-r-md text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        Apply
                                    </button>
                                </div>
                                {couponStatus.valid && (
                                    <p className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center">
                                        <CheckCircle className="w-4 h-4 mr-1" /> {couponStatus.msg} ({couponStatus.discount}% Off)
                                    </p>
                                )}
                                {!couponStatus.valid && couponStatus.msg && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" /> {couponStatus.msg}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Details</label>
                                <textarea
                                    name="requirement"
                                    id="requirement"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-800 dark:text-white sm:text-sm p-3 border"
                                    value={formData.requirement}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Send Message'}
                                    {status === 'idle' && <Send className="ml-2 h-4 w-4" />}
                                </button>
                            </div>

                            {status === 'success' && (
                                <div className="rounded-md bg-green-50 dark:bg-green-900 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Message sent!</h3>
                                            <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                                                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="rounded-md bg-red-50 dark:bg-red-900 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Submission Failed</h3>
                                            <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                                                <p>Something went wrong. Please try again later or email directly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
