import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const QuizView = ({ chapter, onBack, onFinish }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);

    const question = chapter.questions[currentQuestionIndex];
    const totalQuestions = chapter.questions.length;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        if (index === question.correctAnswerIndex) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            onFinish(score);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button onClick={onBack} className="text-slate-400 hover:text-slate-800 transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100">
                    <ArrowLeft size={24} />
                </button>
                <div className="text-sm font-bold text-slate-400 tracking-wide uppercase">
                    Question {currentQuestionIndex + 1} / {totalQuestions}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-10 overflow-hidden">
                <motion.div
                    className="bg-indigo-600 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                        {question.questionText}
                    </h2>

                    <div className="space-y-4">
                        {question.options.map((option, index) => {
                            const isSelected = selectedOption === index;
                            const isCorrect = index === question.correctAnswerIndex;

                            let buttonStyle = "border-slate-200 hover:border-indigo-400 hover:bg-slate-50";
                            let icon = null;

                            if (isAnswered) {
                                if (isCorrect) {
                                    buttonStyle = "border-green-500 bg-green-50 text-green-800 ring-1 ring-green-500";
                                    icon = <CheckCircle size={20} className="text-green-600 flex-shrink-0 ml-3" />;
                                } else if (isSelected) {
                                    buttonStyle = "border-red-500 bg-red-50 text-red-800 ring-1 ring-red-500";
                                    icon = <XCircle size={20} className="text-red-600 flex-shrink-0 ml-3" />;
                                } else {
                                    buttonStyle = "border-slate-100 text-slate-400 opacity-60";
                                }
                            } else if (isSelected) {
                                buttonStyle = "border-indigo-600 bg-indigo-50 text-indigo-700";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={isAnswered}
                                    className={clsx(
                                        "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 font-semibold text-lg flex items-center justify-between group",
                                        buttonStyle
                                    )}
                                >
                                    <span className="flex-grow">{option}</span>
                                    {icon}
                                </button>
                            );
                        })}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Explanation & Next Button */}
            <div className="min-h-[120px]">
                <AnimatePresence>
                    {isAnswered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-6"
                        >
                            <h3 className="font-bold text-indigo-900 mb-2 flex items-center text-sm uppercase tracking-wider">
                                <span className="mr-2 text-xl">💡</span> Explanation
                            </h3>
                            <p className="text-indigo-800 leading-relaxed">{question.explanation}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex justify-end mt-4">
                <button
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className={clsx(
                        "flex items-center px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all transform",
                        isAnswered
                            ? "bg-indigo-600 hover:bg-indigo-700 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            : "bg-slate-200 text-slate-400 cursor-not-allowed"
                    )}
                >
                    {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
                    <ArrowRight size={24} className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default QuizView;
