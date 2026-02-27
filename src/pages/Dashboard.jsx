import React from 'react';
import { CourseGrid } from '../components/CourseGrid';

const mockCourses = [
    {
        id: '1',
        title: 'Advanced React Patterns & Performance Tuning',
        category: 'Engineering',
        duration: '4h 15m',
        progress: 75,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '2',
        title: 'UI/UX Principles for Developers',
        category: 'Design',
        duration: '2h 30m',
        progress: 0,
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '3',
        title: 'Framer Motion: Interactive Animation',
        category: 'Design Engineering',
        duration: '1h 45m',
        progress: 100,
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: '4',
        title: 'System Design Interview Prep',
        category: 'Career',
        duration: '6h 20m',
        progress: 12,
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
];

export const Dashboard = () => {
    return (
        <div className="px-4 py-8 md:px-8 max-w-7xl mx-auto w-full">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    Welcome back, Alex 👋
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    You're doing great. Keep up the momentum!
                </p>
            </div>

            <CourseGrid
                courses={mockCourses.filter(c => c.progress > 0 && c.progress < 100)}
                title="Continue Learning"
            />

            <CourseGrid
                courses={mockCourses.filter(c => c.progress === 0)}
                title="Recommended For You"
                subtitle="Based on your interests in Design and Engineering."
            />
        </div>
    );
};
