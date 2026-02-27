import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bell, User, Search, BookOpen } from 'lucide-react';

export const Navbar = ({ toggleSidebar }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="flex h-16 items-center px-4 md:px-6">

                {/* Mobile menu toggle & Desktop Sidebar toggle */}
                <button
                    onClick={toggleSidebar}
                    className="mr-4 lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5" />
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-brand-700 dark:text-brand-500 mr-6">
                    <BookOpen className="h-6 w-6" />
                    <span>Edulight</span>
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 max-w-md relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-brand-600 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search courses, skills, or mentors..."
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-700 transition-all dark:text-white placeholder:text-slate-500"
                    />
                </div>

                {/* Right actions */}
                <div className="ml-auto flex items-center space-x-4">
                    <button className="relative p-2 text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-accent ring-2 ring-surface-light dark:ring-surface-dark"></span>
                    </button>
                    <button className="h-8 w-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center border border-brand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">
                        <User className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </header>
    );
};
