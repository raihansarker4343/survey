import React, { useContext } from 'react';
import { AppContext } from '../App';
import type { SidebarMenuItem } from '../types';
import { HomeIcon, EarnIcon, TaskIcon, SurveyIcon, RewardIcon, AffiliateIcon, BlogIcon, GuideIcon, SupportIcon, LeaderboardIcon, DailyBonusIcon, AchievementIcon, ChatIcon, BoxIcon, SwordIcon } from './icons/SidebarIcons';

const SIDEBAR_MENU_ITEMS_TOP: SidebarMenuItem[] = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Offer', icon: <EarnIcon /> },
  { name: 'Tasks', icon: <TaskIcon /> },
  { name: 'Surveys', icon: <SurveyIcon /> },
];

const SIDEBAR_MENU_ITEMS_GAMES: SidebarMenuItem[] = [
  { name: 'Boxes', icon: <BoxIcon /> },
  { name: 'Battles', icon: <SwordIcon /> },
];

const SIDEBAR_MENU_ITEMS_COMMUNITY: SidebarMenuItem[] = [
  { name: 'Leaderboard', icon: <LeaderboardIcon /> },
  { name: 'Achievements', icon: <AchievementIcon /> },
  { name: 'Daily Bonus', icon: <DailyBonusIcon />, isSpecial: true },
  { name: 'Chat', icon: <ChatIcon /> },
];

const SIDEBAR_MENU_ITEMS_BOTTOM: SidebarMenuItem[] = [
  { name: 'Rewards', icon: <RewardIcon /> },
  { name: 'Referrals', icon: <AffiliateIcon /> },
  { name: 'Blog', icon: <BlogIcon /> },
  { name: 'Guides', icon: <GuideIcon /> },
  { name: 'Live Support', icon: <SupportIcon /> },
];

const Sidebar: React.FC = () => {
    const { currentPage, setCurrentPage, isSidebarCollapsed, setIsSidebarCollapsed, isMobileSidebarOpen, setIsMobileSidebarOpen } = useContext(AppContext);

    const handleClose = () => {
        setIsSidebarCollapsed(true);
        setIsMobileSidebarOpen(false);
    };
    
    const handleLinkClick = (pageName: string) => {
        setCurrentPage(pageName);
        setIsMobileSidebarOpen(false);
    };


    const renderMenuItem = (item: SidebarMenuItem) => {
        const isActive = currentPage === item.name;
        const baseClasses = `w-full flex items-center justify-between text-left px-4 py-3 rounded-md transition-colors duration-200 font-medium relative`;
        
        let stateClasses = 'text-cyber-text-secondary hover:bg-cyber-primary/10 hover:text-cyber-primary';

        if (item.isSpecial) {
            stateClasses = 'bg-cyber-secondary/10 text-cyber-secondary border border-cyber-secondary/50 hover:bg-cyber-secondary/20';
        } else if (isActive) {
            stateClasses = 'bg-cyber-primary/20 text-cyber-primary font-semibold';
        }

        return (
            <li key={item.name}>
                <button
                    onClick={() => handleLinkClick(item.name)}
                    className={`${baseClasses} ${stateClasses}`}
                >
                    {isActive && !item.isSpecial && <div className="absolute left-0 top-0 h-full w-1 bg-cyber-primary rounded-r-full shadow-cyber-glow-primary"></div>}
                    {item.isSpecial && <div className="absolute left-0 top-0 h-full w-1 bg-cyber-secondary rounded-r-full shadow-cyber-glow-secondary"></div>}
                    <div className="flex items-center space-x-3">
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                    {item.isHot && <span className="text-xs bg-red-500 text-white font-bold px-2 py-0.5 rounded-full">Hot</span>}
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

              <nav className="flex-1 flex flex-col space-y-4">
                  <ul className="space-y-1">
                      {SIDEBAR_MENU_ITEMS_TOP.map(renderMenuItem)}
                  </ul>
                  
                  <div>
                      <h3 className="px-4 text-xs font-semibold text-cyber-text-secondary/60 uppercase tracking-wider mb-2">Games</h3>
                      <ul className="space-y-1">
                          {SIDEBAR_MENU_ITEMS_GAMES.map(renderMenuItem)}
                      </ul>
                  </div>

                  <div>
                      <h3 className="px-4 text-xs font-semibold text-cyber-text-secondary/60 uppercase tracking-wider mb-2">Community</h3>
                      <ul className="space-y-1">
                          {SIDEBAR_MENU_ITEMS_COMMUNITY.map(renderMenuItem)}
                      </ul>
                  </div>
                  
                  <div className="flex-1"></div>
                  
                  <ul className="space-y-1">
                      {SIDEBAR_MENU_ITEMS_BOTTOM.map(renderMenuItem)}
                  </ul>
              </nav>
          </div>
      </aside>
    </>
  );
};

export default Sidebar;
