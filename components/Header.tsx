import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
import { BellIcon, ChevronDownIcon, WalletIcon, LogoutIcon, MenuIcon } from './icons/HeaderIcons';

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    const { user, balance, setIsWalletModalOpen, isSidebarCollapsed, setIsSidebarCollapsed, setCurrentPage, setIsMobileSidebarOpen } = useContext(AppContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (!user) return null;

  return (
    <header className="bg-cyber-surface/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-cyber-primary/20">
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
            <h1 className="text-2xl font-bold text-cyber-primary text-glow-primary hidden lg:block font-orbitron">EarnLab</h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-cyber-accent text-glow-accent font-bold">
                <i className="fas fa-dollar-sign"></i>
                <span>{balance.toFixed(2)}</span>
            </div>
            <button onClick={() => setIsWalletModalOpen(true)} className="cyber-button-primary text-sm sm:text-base flex items-center gap-2">
                <WalletIcon />
                <span className="hidden sm:inline">Wallet</span>
            </button>
            <button className="text-cyber-text-secondary hover:text-cyber-primary">
                <BellIcon />
            </button>
            <div className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2">
                    <img src={user.avatarUrl} alt={user.username} className="w-8 h-8 rounded-full border-2 border-cyber-primary/50" />
                    <span className="font-semibold text-cyber-text-primary hidden sm:block">{user.username}</span>
                    <ChevronDownIcon />
                </button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-cyber-surface-secondary rounded-md shadow-lg py-1 z-10 border border-cyber-primary/20">
                        <button 
                            onClick={() => {
                                setCurrentPage('Profile');
                                setIsDropdownOpen(false);
                            }} 
                            className="w-full text-left block px-4 py-2 text-sm text-cyber-text-secondary hover:bg-cyber-primary/20 hover:text-cyber-primary">
                            Profile
                        </button>
                        <a href="#" className="block px-4 py-2 text-sm text-cyber-text-secondary hover:bg-cyber-primary/20 hover:text-cyber-primary">Settings</a>
                        <button onClick={onLogout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-cyber-secondary hover:bg-cyber-secondary/20 hover:text-cyber-secondary">
                            <LogoutIcon />
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </header>
  );
};

export default Header;
