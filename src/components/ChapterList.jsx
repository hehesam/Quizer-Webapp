import React from 'react';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ChapterList = ({ course, onBack, onSelectChapter }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <button
                onClick={onBack}
                className="flex items-center text-slate-500 hover:text-slate-800 mb-8 transition-colors font-medium"
            >
                <ArrowLeft size={20} className="mr-2" />
                Back to Courses
            </button>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 ${course.color.replace('text-', 'bg-').replace('bg-', 'text-opacity-20 ')} bg-opacity-20`}>
                    {course.title}
                </span>
                <h1 className="text-4xl font-bold text-slate-900 mb-3">{course.title} Chapters</h1>
                <p className="text-lg text-slate-600">{course.description}</p>
            </motion.div>

            <div className="space-y-4">
                {course.chapters.map((chapter, index) => (
                    <motion.div
                        key={chapter.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onSelectChapter(chapter)}
                        className="bg-white rounded-xl border border-slate-200 p-6 cursor-pointer hover:border-indigo-500 hover:shadow-lg transition-all group flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mr-5 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-1">{chapter.title}</h3>
                                <p className="text-slate-500 text-sm">{chapter.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center text-slate-400 group-hover:text-indigo-600 transition-colors">
                            <span className="mr-3 text-sm font-medium">{chapter.questions.length} Questions</span>
                            <ChevronRight size={20} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ChapterList;
