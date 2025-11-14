import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';

const DashboardPage: React.FC = () => {
    const { user } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('Tasks');

    if (!user) return <div>Loading...</div>;

    const xpPercentage = (user.xp / user.xpToNextLevel) * 100;
    
    const renderTabContent = () => {
        return (
             <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left text-cyber-text-secondary">
                     <thead className="text-xs uppercase bg-cyber-primary/10 text-cyber-primary">
                         <tr>
                             <th scope="col" className="px-6 py-3">{activeTab}</th>
                             <th scope="col" className="px-6 py-3">ID</th>
                             <th scope="col" className="px-6 py-3">Category</th>
                             <th scope="col" className="px-6 py-3">Provider</th>
                             <th scope="col" className="px-6 py-3">Status</th>
                             <th scope="col" className="px-6 py-3">Total</th>
                             <th scope="col" className="px-6 py-3">Date</th>
                         </tr>
                     </thead>
                     <tbody>
                        <tr className="border-t border-cyber-primary/20">
                            <td colSpan={7} className="text-center py-12">
                                No items.
                            </td>
                        </tr>
                     </tbody>
                 </table>
                 <div className="flex justify-center items-center p-4">
                     <button className="text-cyber-text-secondary/50 mx-2" disabled>&lt;</button>
                     <button className="text-cyber-text-secondary/50 mx-2" disabled>&gt;</button>
                 </div>
             </div>
        )
    }

    return (
        <div className="space-y-8">
            {/* User Profile Section */}
            <div className="cyber-panel p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <img src={user.avatarUrl} alt={user.username} className="w-24 h-24 rounded-lg border-2 border-cyber-primary" />
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-cyber-text-primary">{user.username}</h2>
                            <span className="bg-cyber-secondary/20 text-cyber-secondary px-3 py-1 rounded-full text-sm font-semibold">{user.rank}</span>
                        </div>
                        <p className="text-cyber-text-secondary text-sm">Joined {user.joinedDate}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-cyber-text-secondary mt-2">
                            <span className="bg-cyber-surface px-2 py-1 rounded">ID: {user.id}</span>
                            <span className="bg-cyber-surface px-2 py-1 rounded">Earn ID: {user.earnId}</span>
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-cyber-text-secondary">0 XP</span>
                                <span className="text-cyber-text-primary">{user.xpToNextLevel.toLocaleString()} XP to next level</span>
                            </div>
                            <div className="w-full bg-cyber-surface rounded-full h-2.5">
                                <div className="bg-cyber-primary h-2.5 rounded-full" style={{ width: `${xpPercentage}%`, boxShadow: '0 0 8px var(--tw-color-cyber-primary)' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Total Earned" value={`$${user.totalEarned.toFixed(2)}`} icon="fas fa-dollar-sign" />
                <StatCard title="Last 30 Days Earned" value={`$${user.last30DaysEarned.toFixed(2)}`} icon="fas fa-calendar-alt" />
                <StatCard title="Completed Tasks" value={user.completedTasks.toString()} icon="fas fa-check-circle" />
                <StatCard title="Total Wagered" value={`$${user.totalWagered.toFixed(2)}`} icon="fas fa-dice" />
                <StatCard title="Total Profit" value={`$${user.totalProfit.toFixed(2)}`} icon="fas fa-chart-line" />
                <StatCard title="Total Withdrawn" value={`$${user.totalWithdrawn.toFixed(2)}`} icon="fas fa-university" />
            </div>

            {/* Activity Tabs Section */}
             <div className="cyber-panel">
                 <div className="p-2 border-b border-cyber-primary/20">
                     <div className="flex items-center space-x-2 overflow-x-auto">
                        {['Tasks', 'Settings', 'Transactions', 'Deposits', 'Withdrawals', 'Openings', 'Battles'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${activeTab === tab ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-cyber-text-secondary hover:bg-cyber-surface-secondary'}`}>
                                {tab}
                            </button>
                        ))}
                     </div>
                 </div>
                 {renderTabContent()}
             </div>
        </div>
    );
};


interface StatCardProps {
    title: string;
    value: string;
    icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
    return (
        <div className="cyber-panel p-6 flex items-center gap-4">
            <div className="bg-cyber-primary/10 text-cyber-primary w-12 h-12 rounded-full flex items-center justify-center">
                <i className={`${icon} text-xl`}></i>
            </div>
            <div>
                <p className="text-cyber-text-secondary text-sm">{title}</p>
                <p className="text-xl font-bold text-cyber-text-primary">{value}</p>
            </div>
        </div>
    )
}

export default DashboardPage;
