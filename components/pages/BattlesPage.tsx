import React from 'react';

const BattlesPage: React.FC = () => {
    return (
        <div className="space-y-8 flex flex-col items-center text-center">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Battles</h1>
                <p className="text-cyber-text-secondary">Challenge other users and climb the ranks to win exclusive rewards.</p>
            </div>

            <div className="cyber-panel p-8 w-full max-w-4xl">
                <div className="flex justify-around items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-full bg-cyber-surface-secondary border-2 border-cyber-primary flex items-center justify-center">
                             <i className="fas fa-user-astronaut text-4xl text-cyber-primary"></i>
                        </div>
                        <p className="font-bold text-lg text-cyber-text-primary">Player 1</p>
                    </div>

                    <div className="text-center">
                        <i className="fas fa-bolt text-6xl text-cyber-secondary text-glow-secondary animate-pulse"></i>
                        <p className="font-orbitron text-4xl font-bold text-cyber-text-primary mt-4">VS</p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                         <div className="w-24 h-24 rounded-full bg-cyber-surface-secondary border-2 border-cyber-secondary flex items-center justify-center">
                             <i className="fas fa-question text-4xl text-cyber-secondary"></i>
                        </div>
                        <p className="font-bold text-lg text-cyber-text-primary">Opponent</p>
                    </div>
                </div>
            </div>

             <div className="text-center mt-8 cyber-panel p-8 w-full max-w-4xl bg-cyber-secondary/10 border-cyber-secondary/50">
                <h2 className="text-3xl font-bold text-cyber-secondary font-orbitron mb-4">Under Construction</h2>
                <p className="text-cyber-text-secondary max-w-2xl mx-auto">
                    The battle arena is being forged! Soon you'll be able to create or join battles, wager your earnings, and prove you're the ultimate Earner. Stay tuned for updates!
                </p>
                 <button className="mt-6 cyber-button-secondary" disabled>
                    Find Match (Coming Soon)
                </button>
            </div>
        </div>
    );
};

export default BattlesPage;
