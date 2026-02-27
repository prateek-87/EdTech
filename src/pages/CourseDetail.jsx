import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Clock, Video, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mock course data just for demonstration
const mockCoursesInfos = {
    '1': {
        title: 'Advanced React Patterns & Performance Tuning',
        desc: 'Master the inner workings of React. Learn how to diagnose and fix performance bottlenecks in complex applications.',
        instructor: 'Dan Abramov',
        lessons: [
            { id: 1, title: 'Understanding Re-renders', duration: '12:45', completed: true },
            { id: 2, title: 'Memoization Strategies', duration: '18:20', completed: true },
            { id: 3, title: 'Context API Optimization', duration: '15:10', completed: false },
            { id: 4, title: 'Concurrent Rendering', duration: '22:30', completed: false }
        ]
    }
};

export const CourseDetail = () => {
    const { id } = useParams();
    const course = mockCoursesInfos[id] || mockCoursesInfos['1'];

    return (
        <div className="flex-1 flex flex-col pt-0">
            {/* Video Player Placeholder Area */}
            <div className="w-full bg-slate-900 aspect-video max-h-[60vh] relative group flex items-center justify-center border-b border-slate-800">
                <Link to="/" className="absolute top-4 left-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-md transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <button className="h-16 w-16 bg-brand-600 hover:bg-brand-500 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
                    <PlayCircle className="w-8 h-8 ml-1" />
                </button>
            </div>

            <div className="px-4 py-8 md:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                            {course.title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                            {course.desc}
                        </p>
                        <div className="mt-6 flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                            <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`} alt="" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900 dark:text-white">{course.instructor}</p>
                                <p className="text-xs text-slate-500">Senior Staff Engineer</p>
                            </div>
                            <Button className="ml-auto" variant="secondary" size="md">Follow</Button>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar Curriculum */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden h-fit sticky top-24 lg:top-8"
                >
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                        <h3 className="font-semibold text-slate-900 dark:text-white">Course Content</h3>
                        <p className="text-xs text-slate-500 mt-1">4 lessons • 1h 8m total</p>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {course.lessons.map((lesson, idx) => (
                            <button key={lesson.id} className="w-full flex gap-3 p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus:outline-none focus-visible:bg-slate-50">
                                <div className="mt-0.5">
                                    {lesson.completed ? (
                                        <CheckCircle2 className="w-5 h-5 text-brand-500" />
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center text-[10px] font-bold text-slate-500">{idx + 1}</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-sm font-medium ${lesson.completed ? 'text-slate-600 dark:text-slate-400' : 'text-slate-900 dark:text-slate-200'}`}>{lesson.title}</h4>
                                    <div className="flex items-center gap-2 mt-1.5 text-xs text-slate-500">
                                        <Video className="w-3 h-3" />
                                        <span>{lesson.duration}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
