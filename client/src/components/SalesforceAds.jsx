import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const SalesforceAds = () => {
    const scenarios = [
        {
            problem: "Sales Reps wasting 10 hours/week manually entering data.",
            solution: "Automated data capture via Einstein Activity Capture and custom Flows.",
            impact: "Saved 400+ hours annually & increased data accuracy by 95%.",
            color: "from-red-500 to-orange-500",
            solutionColor: "from-green-500 to-emerald-500"
        },
        {
            problem: "Marketing team disconnected from Sales pipeline visibility.",
            solution: "Integrated Pardot (MCAE) with Sales Cloud for bi-directional sync.",
            impact: "25% increase in lead conversion rate within 3 months.",
            color: "from-purple-500 to-pink-500",
            solutionColor: "from-blue-500 to-cyan-500"
        },
        {
            problem: "Complex quoting process causing delays in contract signing.",
            solution: "Implemented Salesforce CPQ with guided selling & auto-approvals.",
            impact: "Reduced quote generation time from 2 days to 15 minutes.",
            color: "from-yellow-500 to-amber-600",
            solutionColor: "from-indigo-500 to-violet-500"
        }
    ];

    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-900 perspective-1000 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">
                        Real Problems, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Real Solutions</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Flip the cards to see how I transform business challenges into Salesforce success stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scenarios.map((item, index) => (
                        <FlipCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FlipCard = ({ item }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-96 w-full cursor-pointer group perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-all duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side - Problem */}
                <div className={`absolute inset-0 w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center backface-hidden border-2 border-red-100 dark:border-red-900/30`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <AlertTriangle className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">The Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed">
                        "{item.problem}"
                    </p>
                    <div className="mt-8 text-sm text-gray-400 flex items-center animate-pulse">
                        Hover to solve <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                </div>

                {/* Back Side - Solution */}
                <div
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br ${item.solutionColor} rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center backface-hidden`}
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                        <CheckCircle className="text-white w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center mb-4">My Solution</h3>
                    <p className="text-white/90 text-center text-lg font-medium mb-4">
                        {item.solution}
                    </p>
                    <div className="bg-white/10 rounded-lg p-3 mt-2 backdrop-blur-sm">
                        <p className="text-white text-sm font-bold text-center">
                            Impact: {item.impact}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SalesforceAds;
