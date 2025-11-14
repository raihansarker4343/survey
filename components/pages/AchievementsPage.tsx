import React from 'react';
import { ACHIEVEMENTS_DATA } from '../../constants';
import type { Achievement } from '../../types';

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
    const isCompleted = achievement.progress >= achievement.goal;
    const percentage = isCompleted ? 100 : Math.round((achievement.progress / achievement.goal) * 100);

    return (
        <div className={`cyber-panel p-6 flex flex-col items-start gap-4 transition-all ${isCompleted ? 'opacity-40' : 'hover:-translate-y-1 hover:border-cyber-primary'}`}>
            <div className={`text-3xl ${isCompleted ? 'text-cyber-accent text-glow-accent' : 'text-cyber-primary text-glow-primary'}`}>
                <i className={achievement.icon}></i>
            </div>
            <div className="flex-1 w-full">
                <h3 className="text-lg font-bold text-cyber-text-primary font-orbitron">{achievement.title}</h3>
                <p className="text-sm text-cyber-text-secondary mt-1">{achievement.description}</p>
                <div className="mt-4">
                    <div className="flex justify-between items-center text-xs text-cyber-text-secondary mb-1">
                        <span>Progress</span>
                        <span>{achievement.progress.toLocaleString()} / {achievement.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-cyber-surface rounded-full h-2">
                        <div className={`h-2 rounded-full ${isCompleted ? 'bg-cyber-accent' : 'bg-cyber-primary'}`} style={{ width: `${percentage}%`, boxShadow: `0 0 8px ${isCompleted ? 'var(--tw-color-cyber-accent)' : 'var(--tw-color-cyber-primary)'}` }}></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
                <span className="text-sm font-semibold text-cyber-secondary text-glow-secondary">+{achievement.xp} XP</span>
                 {isCompleted && (
                    <span className="text-sm font-semibold bg-cyber-accent/20 text-cyber-accent px-2 py-1 rounded-md">Completed</span>
                )}
            </div>
        </div>
    );
};


const AchievementsPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Achievements</h1>
                <p className="text-cyber-text-secondary">Complete achievements to earn XP and level up your account.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {ACHIEVEMENTS_DATA.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
            </div>
        </div>
    );
};

export default AchievementsPage;
