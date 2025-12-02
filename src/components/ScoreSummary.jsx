import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Home } from 'lucide-react';

const ScoreSummary = ({ score, total, onRestart, onHome }) => {
    const percentage = Math.round((score / total) * 100);

    let message = "Good effort!";
    let color = "text-slate-900";

    if (percentage === 100) {
        message = "Perfect Score!";
        color = "text-yellow-600";
    } else if (percentage >= 80) {
        message = "Excellent!";
        color = "text-indigo-600";
    } else if (percentage >= 60) {
        message = "Well done!";
        color = "text-blue-600";
    } else {
        message = "Keep practicing!";
        color = "text-slate-600";
    }

    return (
        <div className="max-w-md mx-auto p-8 text-center pt-12">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg border-4 border-white"
            >
                <Trophy size={64} className="text-amber-500" />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-4xl font-bold mb-3 ${color}`}
            >
                {message}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 text-lg mb-10"
            >
                You scored <span className="font-bold text-slate-900">{score}</span> out of <span className="font-bold text-slate-900">{total}</span> questions
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-6xl font-black text-slate-900 mb-12 tracking-tighter"
            >
                {percentage}<span className="text-4xl text-slate-400">%</span>
            </motion.div>

            <div className="space-y-4">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={onRestart}
                    className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-1 flex items-center justify-center"
                >
                    <RotateCcw size={20} className="mr-2" />
                    Try Again
                </motion.button>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={onHome}
                    className="w-full bg-white text-slate-700 border-2 border-slate-200 py-4 rounded-2xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                    <Home size={20} className="mr-2" />
                    Back to Home
                </motion.button>
            </div>
        </div>
    );
};

export default ScoreSummary;
