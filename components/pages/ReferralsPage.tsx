import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';

const StatCard: React.FC<{ title: string; value: string; icon: string }> = ({ title, value, icon }) => (
    <div className="cyber-panel p-6 flex items-center gap-4">
        <div className="bg-cyber-primary/10 text-cyber-primary w-12 h-12 rounded-full flex items-center justify-center">
            <i className={`${icon} text-xl`}></i>
        </div>
        <div>
            <p className="text-cyber-text-secondary text-sm">{title}</p>
            <p className="text-xl font-bold text-cyber-text-primary">{value}</p>
        </div>
    </div>
);

const ReferralsPage: React.FC = () => {
    const { user } = useContext(AppContext);
    const [copyButtonText, setCopyButtonText] = useState('Copy Link');

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(user.referralLink).then(() => {
            setCopyButtonText('Copied!');
            setTimeout(() => setCopyButtonText('Copy Link'), 2000);
        });
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Referrals</h1>
                <p className="text-cyber-text-secondary">Invite your friends and earn rewards when they sign up and complete tasks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard title="Total Referrals" value={user.totalReferrals.toString()} icon="fas fa-users" />
                <StatCard title="Referral Earnings" value={`$${user.referralEarnings.toFixed(2)}`} icon="fas fa-dollar-sign" />
            </div>

            <div className="cyber-panel p-6">
                <h2 className="text-2xl font-bold text-cyber-text-primary mb-4 font-orbitron">Invite your friends</h2>
                <p className="text-cyber-text-secondary mb-6">Share your unique referral link with friends. You'll earn a <span className="font-bold text-cyber-accent text-glow-accent">5% commission</span> on their earnings for life!</p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        readOnly
                        value={user.referralLink}
                        className="w-full bg-cyber-surface border border-cyber-primary/30 rounded-lg px-4 py-3 text-cyber-text-secondary focus:outline-none"
                    />
                    <button
                        onClick={handleCopyLink}
                        className="w-full sm:w-auto cyber-button-primary py-3 px-6 flex-shrink-0"
                    >
                        {copyButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReferralsPage;
