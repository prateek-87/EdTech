import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, Transition } from '../styles/animations';

export const CourseCard = ({ course }) => {
    return (
        <motion.article
            variants={FadeInUp}
            whileHover={{ y: -4, transition: Transition.spring }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft border border-slate-100 dark:border-slate-800 overflow-hidden group cursor-pointer focus-within:ring-2 focus-within:ring-brand-700 focus-within:ring-offset-2 outline-none flex flex-col h-full"
            tabIndex={0}
        >
            <div className="aspect-video overflow-hidden bg-slate-200 relative">
                <motion.img
                    src={course.thumbnail}
                    alt="" aria-hidden="true"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {course.progress > 0 && course.progress < 100 && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-700 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                        In Progress
                    </div>
                )}
                {course.progress === 100 && (
                    <div className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Completed
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                        {course.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{course.duration}</span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 mb-4 leading-tight">
                    {/* A simulated link to the course detail */}
                    <a href={`/course/${course.id}`} className="focus:outline-none after:absolute after:inset-0">
                        {course.title}
                    </a>
                </h3>

                <div className="mt-auto">
                    <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                            {course.progress > 0 ? `${course.progress}% Complete` : 'Not started'}
                        </span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden ring-1 ring-inset ring-slate-900/5" role="progressbar" aria-valuenow={course.progress} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${course.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="bg-brand-600 h-1.5 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </motion.article>
    );
};
