import React, { useState, useContext } from 'react';
import { LEADERBOARD_USERS } from '../../constants';
import { AppContext } from '../../App';
import type { LeaderboardUser } from '../../types';

const LeaderboardPage: React.FC = () => {
    const { user } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('Weekly');
    
    const currentUserData = LEADERBOARD_USERS.find(u => u.user === user?.username);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Leaderboard</h1>
                <p className="text-cyber-text-secondary">See who's at the top and compete for exclusive prizes.</p>
            </div>

            <div className="cyber-panel">
                <div className="p-4 border-b border-cyber-primary/20 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {['Daily', 'Weekly', 'Monthly'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === tab ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-cyber-text-secondary hover:bg-cyber-surface-secondary'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm text-cyber-text-secondary">
                        Resets in 3d 14h 22m
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-cyber-primary uppercase bg-cyber-primary/10">
                            <tr>
                                <th scope="col" className="px-6 py-3">Rank</th>
                                <th scope="col" className="px-6 py-3">User</th>
                                <th scope="col" className="px-6 py-3 text-right">Earned</th>
                            </tr>
                        </thead>
                        <tbody className="text-cyber-text-primary">
                            {LEADERBOARD_USERS.map((leader, index) => (
                                <tr key={index} className={`border-t border-cyber-primary/20 ${leader.user === user?.username ? 'bg-cyber-primary/10' : ''}`}>
                                    <td className="px-6 py-4 font-bold text-lg w-16 text-center">
                                        {leader.rank === 1 && <i className="fas fa-trophy text-yellow-400 text-glow-primary"></i>}
                                        {leader.rank === 2 && <i className="fas fa-trophy text-gray-400"></i>}
                                        {leader.rank === 3 && <i className="fas fa-trophy text-orange-400"></i>}
                                        {leader.rank > 3 && leader.rank}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={leader.avatar} alt={leader.user} className="w-8 h-8 rounded-full border-2 border-cyber-primary/50" />
                                            <div>
                                                <div className="font-bold text-cyber-text-primary">{leader.user}</div>
                                                <div className="text-xs text-cyber-text-secondary">Level {leader.level}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-cyber-accent text-glow-accent">
                                        ${leader.earned.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {currentUserData && (
                     <div className="p-4 border-t-2 border-cyber-primary bg-cyber-primary/10 sticky bottom-0">
                         <div className="flex items-center justify-between text-sm font-bold">
                            <div className="flex items-center gap-4">
                               <span className="text-cyber-text-primary">#{currentUserData.rank}</span>
                                <div className="flex items-center gap-2">
                                    <img src={currentUserData.avatar} alt={currentUserData.user} className="w-6 h-6 rounded-full" />
                                    <span className="text-cyber-text-primary">{currentUserData.user}</span>
                               </div>
                            </div>
                             <span className="text-cyber-accent text-glow-accent">${currentUserData.earned.toFixed(2)}</span>
                         </div>
                     </div>
                )}
            </div>
        </div>
    );
};

export default LeaderboardPage;
