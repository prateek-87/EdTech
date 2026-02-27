import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 flex flex-col">
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex flex-1 relative isolate">
                <Sidebar
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                    isMobile={isMobile}
                />

                <main className="flex-1 w-full flex flex-col min-w-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
