import React, { useContext } from 'react';
import { AppContext } from '../App';
import type { SidebarMenuItem } from '../types';
import { HomeIcon, BlogIcon, GuideIcon, SupportIcon } from './icons/SidebarIcons';

const SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Blog', icon: <BlogIcon /> },
  { name: 'Guides', icon: <GuideIcon /> },
  { name: 'Live Support', icon: <SupportIcon /> },
];

const LoggedOutSidebar: React.FC = () => {
    const { currentPage, isSidebarCollapsed, setIsSidebarCollapsed, isMobileSidebarOpen, setIsMobileSidebarOpen } = useContext(AppContext);

    const handleClose = () => {
        setIsSidebarCollapsed(true);
        setIsMobileSidebarOpen(false);
    };

    const handleLinkClick = () => {
        // Logged out links don't change pages in this context
        setIsMobileSidebarOpen(false);
    };

    const renderMenuItem = (item: SidebarMenuItem) => {
        const isActive = currentPage === item.name;
        const baseClasses = `w-full flex items-center justify-between text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium`;
        const stateClasses = isActive
            ? 'bg-cyber-primary/20 text-cyber-primary'
            : 'text-cyber-text-secondary hover:bg-cyber-primary/10 hover:text-cyber-primary';

        return (
            <li key={item.name}>
                <button
                    onClick={handleLinkClick}
                    className={`${baseClasses} ${stateClasses}`}
                >
                    <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                </button>
            </li>
        );
    };

  return (
    <>
        {/* Mobile Overlay */}
        <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMobileSidebarOpen(false)}
            aria-hidden="true"
        ></div>

        <aside className={`bg-cyber-surface flex flex-col transition-all duration-300 ease-in-out border-r border-cyber-primary/20 overflow-hidden
            fixed lg:sticky top-0 h-screen z-50 
            lg:w-64 ${isSidebarCollapsed ? 'lg:w-0 lg:p-0' : ''}
            ${isMobileSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:translate-x-0'}
        `}>
            <div className="p-4 flex flex-col flex-1 min-w-[16rem] h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-cyber-primary text-glow-primary font-orbitron">EarnLab</h1>
                    <button onClick={handleClose} className="p-2 rounded-lg bg-cyber-surface-secondary text-cyber-text-secondary hover:bg-cyber-primary/20 hover:text-cyber-primary">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <nav className="flex-1 flex flex-col">
                    <ul className="space-y-1">
                        {SIDEBAR_MENU_ITEMS.map(renderMenuItem)}
                    </ul>
                </nav>
            </div>
        </aside>
    </>
  );
};

export default LoggedOutSidebar;
