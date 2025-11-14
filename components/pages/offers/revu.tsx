import React, { useContext } from 'react';
import { AppContext } from '../../../App';

const RevUOffersPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                 <button onClick={() => window.close()} className="cyber-button-primary !py-2 !px-3">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">RevU</h1>
                    <p className="text-cyber-text-secondary">Complete offers from RevU to earn rewards.</p>
                </div>
            </div>

            <div className="cyber-panel p-6 text-center">
                <p className="text-cyber-text-secondary">
                    API integration for RevU would be placed here. This area would display available offers dynamically.
                </p>
                <div className="mt-8 w-full h-96 bg-cyber-surface flex items-center justify-center rounded-lg border-2 border-dashed border-cyber-primary/30">
                    <p className="text-cyber-text-secondary">Offer Wall Iframe Placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default RevUOffersPage;