import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Book, Award, Settings, LogOut, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: Book, label: 'My Learning', path: '/learning' },
    { icon: Award, label: 'Achievements', path: '/achievements' },
];

export const Sidebar = ({ isOpen, setIsOpen, isMobile }) => {

    const sidebarContent = (
        <div className="flex flex-col h-full bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 w-64">
            {isMobile && (
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-bold text-lg text-brand-700 dark:text-brand-500">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-700",
                            isActive
                                ? "bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400"
                                : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                        )}
                        onClick={() => isMobile && setIsOpen(false)}
                    >
                        <item.icon className={cn("w-5 h-5")} />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-700">
                    <Settings className="w-5 h-5" />
                    Settings
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-red-600">
                    <LogOut className="w-5 h-5" />
                    Log out
                </button>
            </div>
        </div>
    );

    if (isMobile) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden"
                        >
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        );
    }

    return (
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)]">
            {sidebarContent}
        </aside>
    );
};
