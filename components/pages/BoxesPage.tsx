import React from 'react';

const Box: React.FC = () => (
    <div className="aspect-square cyber-panel flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-cyber-secondary hover:shadow-cyber-glow-secondary group">
        <i className="fas fa-question text-6xl text-cyber-secondary text-glow-secondary opacity-50 group-hover:opacity-100 transition-opacity"></i>
    </div>
);

const BoxesPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Boxes</h1>
                <p className="text-cyber-text-secondary">Open mystery boxes for a chance to win amazing prizes!</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 10 }).map((_, index) => (
                    <Box key={index} />
                ))}
            </div>

            <div className="text-center mt-12 cyber-panel p-8">
                <h2 className="text-2xl font-bold text-cyber-secondary font-orbitron mb-4">More Box Types Coming Soon!</h2>
                <p className="text-cyber-text-secondary max-w-2xl mx-auto">
                    Get ready for an expanded selection of boxes, including rare, epic, and legendary tiers, each with unique prize pools. Special event boxes with exclusive rewards are also on the way!
                </p>
            </div>
        </div>
    );
};

export default BoxesPage;
