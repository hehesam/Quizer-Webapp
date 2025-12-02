import React from 'react';
import { Microscope, Cpu, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
    Microscope: Microscope,
    Cpu: Cpu,
    Globe: Globe,
};

const CourseList = ({ courses, onSelectCourse }) => {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Study Master</h1>
                <p className="text-lg text-slate-600">Select a course to begin your journey</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => {
                    const Icon = iconMap[course.icon] || Globe;
                    return (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            onClick={() => onSelectCourse(course)}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 p-6 cursor-pointer transition-shadow duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">{course.description}</p>
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                <span className="text-slate-400 text-sm font-medium">{course.chapters.length} Chapters</span>
                                <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                    <span>Start</span>
                                    <ChevronRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourseList;
