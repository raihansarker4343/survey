import React, { useContext } from 'react';
import { SURVEY_PROVIDERS } from '../../constants';
import type { SurveyProvider } from '../../types';
import { StarIcon, LockIcon } from '../icons/SurveyIcons';
import { AppContext } from '../../App';

const SurveysPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Surveys</h1>
                    <p className="text-cyber-text-secondary">Explore hundreds of surveys to complete from all providers</p>
                </div>
                <div>
                    <select className="cyber-panel border-none bg-cyber-surface-secondary px-4 py-2 text-cyber-text-primary focus:outline-none focus:ring-2 focus:ring-cyber-primary">
                        <option>Recommended</option>
                        <option>Highest Paying</option>
                        <option>Newest</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="cyber-panel p-6 text-center flex flex-col items-center justify-center">
                    <div className="bg-cyber-primary/10 text-cyber-primary w-20 h-20 rounded-full flex items-center justify-center mb-4">
                         <i className="fas fa-clipboard-list text-4xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-cyber-text-primary">Qualification</h3>
                    <p className="text-cyber-text-secondary text-sm">1 minute</p>
                    <div className="mt-4"><StarIcon /></div>
                </div>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-cyber-text-primary font-orbitron mb-2">Survey Walls</h2>
                <p className="text-cyber-text-secondary mb-6">Each survey wall contains hundreds of surveys to complete</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {SURVEY_PROVIDERS.map((provider) => (
                        <SurveyProviderCard key={provider.name} provider={provider} />
                    ))}
                </div>
            </div>

        </div>
    );
};

const SurveyProviderCard: React.FC<{provider: SurveyProvider}> = ({ provider }) => {
    const handleClick = () => {
        if (!provider.isLocked && provider.pageName) {
            window.open(`${window.location.origin}/#/survey/${encodeURIComponent(provider.pageName)}`, '_blank');
        }
    };

    const CardContent = (
        <>
            {provider.isLocked && <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>}
            
            <div className={`relative z-10 flex flex-col items-center justify-center ${provider.isLocked ? 'opacity-30' : ''}`}>
                <div className="text-2xl font-bold text-cyber-primary text-glow-primary mb-2">{provider.type}</div>
                <p className="font-semibold text-cyber-text-primary">{provider.name}</p>
            </div>
            
            {provider.isLocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-center z-20 p-2 text-white">
                    <LockIcon />
                    {provider.unlockRequirement && <p className="mt-2 font-semibold">{provider.unlockRequirement}</p>}
                    {provider.unlocksAt && <p className="mt-1">{provider.unlocksAt}</p>}
                </div>
            )}
        </>
    );
    
    const commonClasses = "cyber-panel p-4 text-center flex flex-col items-center justify-center h-40 relative overflow-hidden transition-all duration-300";

    if (provider.isLocked) {
        return <div className={commonClasses}>{CardContent}</div>;
    }

    return (
        <button 
            onClick={handleClick}
            className={`${commonClasses} hover:bg-cyber-primary/10 cursor-pointer hover:-translate-y-1 hover:border-cyber-primary`}
        >
            {CardContent}
        </button>
    );
}

export default SurveysPage;