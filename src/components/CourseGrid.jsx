import React from 'react';
import { motion } from 'framer-motion';
import { CourseCard } from './CourseCard';
import { StaggerContainer } from '../styles/animations';

export const CourseGrid = ({ courses, title, subtitle }) => {
    return (
        <section className="py-8">
            {(title || subtitle) && (
                <header className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        {title && <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>}
                        {subtitle && <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{subtitle}</p>}
                    </div>
                    <button className="text-brand-700 font-medium hover:text-brand-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 rounded px-2 py-1 -mx-2 hover:bg-brand-50">
                        View All Library &rarr;
                    </button>
                </header>
            )}

            {/* Grid shifts from 1 col on mobile, 2 on tablet, 3 on desktop */}
            <motion.div
                variants={StaggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </motion.div>
        </section>
    );
};
