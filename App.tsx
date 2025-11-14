import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LoggedOutHeader from './components/LoggedOutHeader';
import HomePageContent from './components/pages/HomePage';
import SurveysPage from './components/pages/SurveysPage';
import DashboardPage from './components/pages/DashboardPage';
import WalletModal from './components/WalletModal';
import LiveEarningFeed from './components/LiveEarningFeed';
import Footer from './components/Footer';
import { MOCK_USER } from './constants';
import type { User } from './types';
import OfferPage from './components/pages/OfferPage';
import TasksPage from './components/pages/TasksPage';
import LoggedInHomePage from './components/pages/LoggedInHomePage';
import LoggedOutSidebar from './components/LoggedOutSidebar';
import ReferralsPage from './components/pages/ReferralsPage';
import LeaderboardPage from './components/pages/LeaderboardPage';
import DailyBonusPage from './components/pages/DailyBonusPage';
import AchievementsPage from './components/pages/AchievementsPage';
import ChatPage from './components/pages/ChatPage';
import SigninModal from './components/SigninModal';
import SignupModal from './components/SignupModal';
// Survey Pages
import PrimeSurveysPage from './components/pages/survey/prime';
import CpxResearchPage from './components/pages/survey/cpx';
import AdscendMediaSurveysPage from './components/pages/survey/adscendmedia';
import BitLabsSurveysPage from './components/pages/survey/bitlabs';
import InBrainPage from './components/pages/survey/inbrain';
import TheoremReachPage from './components/pages/survey/theoremreach';
// Offer Pages
import ToroxOffersPage from './components/pages/offers/torox';
import AdscendMediaOffersPage from './components/pages/offers/adscendmedia';
import AdToWallOffersPage from './components/pages/offers/adtowall';
import RevUOffersPage from './components/pages/offers/revu';
import AdGateMediaOffersPage from './components/pages/offers/adgatemedia';
import MyChipsOffersPage from './components/pages/offers/mychips';
import MMWallOffersPage from './components/pages/offers/mmwall';
import AyeTStudiosOffersPage from './components/pages/offers/ayetstudios';
import MonlixOffersPage from './components/pages/offers/monlix';
import HangMyAdsOffersPage from './components/pages/offers/hangmyads';
import LootablyOffersPage from './components/pages/offers/lootably';
import TimeWallOffersPage from './components/pages/offers/timewall';
import AdGemOffersPage from './components/pages/offers/adgem';
import NotikOffersPage from './components/pages/offers/notik';
import WannadsOffersPage from './components/pages/offers/wannads';
import OfferToroOffersPage from './components/pages/offers/offertoro';

export const AppContext = React.createContext<{
  isLoggedIn: boolean;
  user: User | null;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isWalletModalOpen: boolean;
  setIsWalletModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSigninModalOpen: boolean;
  setIsSigninModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSignupModalOpen: boolean;
  openSignupModal: (email?: string) => void;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isLoggedIn: false,
  user: null,
  balance: 0,
  setBalance: () => {},
  setIsLoggedIn: () => {},
  isWalletModalOpen: false,
  setIsWalletModalOpen: () => {},
  isSigninModalOpen: false,
  setIsSigninModalOpen: () => {},
  isSignupModalOpen: false,
  openSignupModal: () => {},
  currentPage: 'Home',
  setCurrentPage: () => {},
  isSidebarCollapsed: false,
  setIsSidebarCollapsed: () => {},
  isMobileSidebarOpen: false,
  setIsMobileSidebarOpen: () => {},
});

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [user] = useState<User | null>(MOCK_USER);
  const [balance, setBalance] = useState(125.50);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [signupInitialEmail, setSignupInitialEmail] = useState('');
  
  const [currentPage, setCurrentPage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'Home';
  });

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        localStorage.removeItem('isLoggedIn');
    }
  }, [isLoggedIn]);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentPage('Home');
    setIsSigninModalOpen(false);
    setIsSignupModalOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentPage('Home'); // Reset to home on logout
  }, []);

  const openSignupModal = (email = '') => {
      setSignupInitialEmail(email);
      setIsSignupModalOpen(true);
  };

  const switchToSignup = () => {
      setIsSigninModalOpen(false);
      setIsSignupModalOpen(true);
  };

  const switchToSignin = () => {
      setIsSignupModalOpen(false);
      setIsSigninModalOpen(true);
  };
  
  const renderPage = () => {
    const pagePadding = "p-4 sm:p-6 lg:p-8";
    switch (currentPage) {
      case 'Home':
        return <div className={pagePadding}><LoggedInHomePage /></div>;
      case 'Profile':
        return <div className={pagePadding}><DashboardPage /></div>;
      case 'Offer':
        return <div className={pagePadding}><OfferPage /></div>;
      case 'Tasks':
        return <div className={pagePadding}><TasksPage /></div>;
      case 'Surveys':
        return <div className={pagePadding}><SurveysPage /></div>;
      case 'Referrals':
        return <div className={pagePadding}><ReferralsPage /></div>;
      case 'Leaderboard':
        return <div className={pagePadding}><LeaderboardPage /></div>;
      case 'Daily Bonus':
        return <div className={pagePadding}><DailyBonusPage /></div>;
      case 'Achievements':
        return <div className={pagePadding}><AchievementsPage /></div>;
      case 'Chat':
        return <div className={pagePadding}><ChatPage /></div>;
      // Survey Pages
      case 'Prime':
        return <div className={pagePadding}><PrimeSurveysPage /></div>;
      case 'CPX':
        return <div className={pagePadding}><CpxResearchPage /></div>;
      case 'AdscendSurveys':
        return <div className={pagePadding}><AdscendMediaSurveysPage /></div>;
      case 'BitLabs':
        return <div className={pagePadding}><BitLabsSurveysPage /></div>;
      case 'inBrain':
        return <div className={pagePadding}><InBrainPage /></div>;
      case 'TheoremReach':
        return <div className={pagePadding}><TheoremReachPage /></div>;
      // Offer Pages
      case 'Torox':
        return <div className={pagePadding}><ToroxOffersPage /></div>;
      case 'AdscendOffers':
        return <div className={pagePadding}><AdscendMediaOffersPage /></div>;
      case 'AdToWall':
        return <div className={pagePadding}><AdToWallOffersPage /></div>;
      case 'RevU':
        return <div className={pagePadding}><RevUOffersPage /></div>;
      case 'AdGateMedia':
        return <div className={pagePadding}><AdGateMediaOffersPage /></div>;
      case 'MyChips':
        return <div className={pagePadding}><MyChipsOffersPage /></div>;
      case 'MMWall':
        return <div className={pagePadding}><MMWallOffersPage /></div>;
      case 'AyeTStudios':
        return <div className={pagePadding}><AyeTStudiosOffersPage /></div>;
      case 'Monlix':
        return <div className={pagePadding}><MonlixOffersPage /></div>;
      case 'HangMyAds':
        return <div className={pagePadding}><HangMyAdsOffersPage /></div>;
      case 'Lootably':
        return <div className={pagePadding}><LootablyOffersPage /></div>;
      case 'TimeWall':
        return <div className={pagePadding}><TimeWallOffersPage /></div>;
      case 'AdGem':
        return <div className={pagePadding}><AdGemOffersPage /></div>;
      case 'Notik':
        return <div className={pagePadding}><NotikOffersPage /></div>;
      case 'Wannads':
        return <div className={pagePadding}><WannadsOffersPage /></div>;
      case 'OfferToro':
        return <div className={pagePadding}><OfferToroOffersPage /></div>;
      case 'Boxes':
      case 'Battles':
        // Placeholder for new pages
        return <div className={`text-cyber-text-primary text-3xl font-bold ${pagePadding}`}>{currentPage} Page</div>;
      default:
        return <div className={pagePadding}><LoggedInHomePage /></div>;
    }
  };
  
  const headerContent = isLoggedIn ? <Header onLogout={handleLogout} /> : <LoggedOutHeader />;
  const mainContent = isLoggedIn ? renderPage() : <HomePageContent />;

  return (
    <AppContext.Provider value={{ isLoggedIn, user, balance, setBalance, setIsLoggedIn, isWalletModalOpen, setIsWalletModalOpen, isSigninModalOpen, setIsSigninModalOpen, isSignupModalOpen, openSignupModal, currentPage, setCurrentPage, isSidebarCollapsed, setIsSidebarCollapsed, isMobileSidebarOpen, setIsMobileSidebarOpen }}>
      <div className="flex h-screen bg-cyber-bg text-cyber-text-primary">
        {isLoggedIn ? <Sidebar /> : <LoggedOutSidebar />}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto scanlines">
            <header className="sticky top-0 z-20 shrink-0">
                {headerContent}
                <LiveEarningFeed />
            </header>
            <div className="flex-1 flex flex-col">
              <main className="flex-1">
                  {mainContent}
              </main>
              <Footer />
            </div>
        </div>
        {isLoggedIn && <WalletModal />}
        {!isLoggedIn && (
            <>
                <SigninModal
                    isOpen={isSigninModalOpen}
                    onClose={() => setIsSigninModalOpen(false)}
                    onSwitchToSignup={switchToSignup}
                />
                <SignupModal
                    isOpen={isSignupModalOpen}
                    onClose={() => setIsSignupModalOpen(false)}
                    initialEmail={signupInitialEmail}
                    onSignupSuccess={handleLogin}
                    onSwitchToSignin={switchToSignin}
                />
            </>
        )}
      </div>
    </AppContext.Provider>
  );
};

export default App;