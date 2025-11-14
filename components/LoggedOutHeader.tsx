import React, { useContext } from 'react';
import { AppContext } from '../App';
import { MenuIcon } from './icons/HeaderIcons';

const LoggedOutHeader: React.FC = () => {
    const { isSidebarCollapsed, setIsSidebarCollapsed, setIsMobileSidebarOpen, setIsSigninModalOpen, openSignupModal } = useContext(AppContext);

    return (
        <header className="bg-cyber-surface/80 backdrop-blur-md p-4 flex justify-between items-center border-b border-cyber-primary/20">
            <div className="flex items-center gap-4">
                 <button 
                    onClick={() => setIsMobileSidebarOpen(true)}
                    className="p-2 rounded-md text-cyber-text-secondary hover:bg-cyber-primary/20 hover:text-cyber-primary lg:hidden"
                    aria-label="Open menu"
                >
                    <MenuIcon />
                </button>
                {isSidebarCollapsed && (
                    <button 
                        onClick={() => setIsSidebarCollapsed(false)} 
                        className="p-2 rounded-md text-cyber-text-secondary hover:bg-cyber-primary/20 hover:text-cyber-primary hidden lg:block"
                        aria-label="Open sidebar"
                    >
                        <MenuIcon />
                    </button>
                )}
                 <h1 className="text-2xl font-bold text-cyber-primary text-glow-primary font-orbitron">EarnLab</h1>
            </div>
             <div className="flex items-center gap-2">
                <button onClick={() => setIsSigninModalOpen(true)} className="border border-cyber-primary text-cyber-primary font-semibold py-2 px-4 rounded-md hover:bg-cyber-primary/20">Sign In</button>
                <button onClick={() => openSignupModal()} className="cyber-button-primary">Sign Up</button>
            </div>
        </header>
    );
};

export default LoggedOutHeader;
