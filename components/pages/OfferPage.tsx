import React, { useContext } from 'react';
import { OFFER_WALL_PROVIDERS } from '../../constants';
import type { OfferProvider } from '../../types';
import { AppContext } from '../../App';

const SectionHeader: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-2xl font-bold text-cyber-primary text-glow-primary font-orbitron">{title}</h2>
            <p className="text-cyber-text-secondary">{description}</p>
        </div>
        <a href="#" className="text-cyber-primary hover:underline flex-shrink-0">View All</a>
    </div>
);

const LockIcon: React.FC = () => (
    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
);

const OfferProviderCard: React.FC<{ provider: OfferProvider }> = ({ provider }) => {
    const handleClick = () => {
        if (!provider.isLocked && provider.pageName) {
            window.open(`${window.location.origin}/offers/${encodeURIComponent(provider.pageName)}`, '_blank');
        }
    };

    const CardContent = (
        <>
            {provider.isLocked && <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>}
            {provider.bonus && <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full z-20 ${provider.isLocked ? 'bg-gray-500/30 text-gray-300' : 'bg-cyber-accent/20 text-cyber-accent'}`}>{provider.bonus}</div>}
            
            <div className={`relative flex flex-col items-center justify-center w-full h-full ${provider.isLocked ? 'opacity-30' : ''}`}>
                <img src={provider.logo} alt={provider.name} className="h-12 max-w-[90%] object-contain invert-[.85] saturate-0 contrast-200" />
                <p className="font-semibold text-cyber-text-primary text-sm mt-3">{provider.name}</p>
            </div>
                
            {provider.isLocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-center z-20 p-2 text-white">
                    <LockIcon />
                    {provider.unlockRequirement && <p className="mt-1 font-semibold">{provider.unlockRequirement}</p>}
                </div>
            )}
        </>
    );

    const commonClasses = "cyber-panel p-4 flex flex-col items-center justify-center text-center h-40 relative overflow-hidden transition-all duration-300";

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
};

const OfferPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <section>
                <SectionHeader title="Offer Walls" description="Each offer wall contains hundreds of offers to complete" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                     {OFFER_WALL_PROVIDERS.map((wall, index) => (
                        <OfferProviderCard key={index} provider={wall} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OfferPage;