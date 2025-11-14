import React from 'react';

// Mock data for the new sections
const featuredTasks = [
  { image: 'https://i.imgur.com/r6355M8.png', title: 'Hero Castle War: T...', description: 'Open the app, registe...' },
  { image: 'https://i.imgur.com/2Y44g63.png', title: 'Wild Fish - Android...', description: 'Be the best fisherman...' },
  { image: 'https://i.imgur.com/wI4aB9a.png', title: 'CortalyCash', description: 'Complete all steps list...' },
  { image: 'https://i.imgur.com/Y8H4yT6.png', title: 'WW Click Box - Mu...', description: 'Answer the survey qu...' },
  { image: 'https://i.imgur.com/lO7qD52.png', title: 'Treehouse Fishing ...', description: 'Climb into your treeho...' },
  { image: 'https://i.imgur.com/wZ68tB3.png', title: 'Money Quiz', description: 'Register using full vali...' },
];

const featuredSurveys = [
  { title: 'Qualification', duration: '1 minute' },
];

const offerWalls = [
    { name: 'Torox', logo: 'https://i.imgur.com/Y17wQmd.png', bonus: '+80%' },
    { name: 'Adscend Media', logo: 'https://i.imgur.com/iY9g04E.png', bonus: '+50%' },
    { name: 'AdToWall', logo: 'https://i.imgur.com/x0iP1C9.png' },
    { name: 'RevU', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlockRequirement: 'Earn $2.50 to unlock', bonus: '+50%' },
    { name: 'AdGate Media', logo: 'https://i.imgur.com/Q2yG7nS.png' },
    { name: 'MyChips', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlockRequirement: 'Earn $2.50 to unlock', bonus: '+50%' },
    { name: 'MM Wall', logo: 'https://i.imgur.com/6XzWfP1.png' },
    { name: 'Aye-T Studios', logo: 'https://i.imgur.com/J3t5e6E.png' },
    { name: 'Monlix', logo: 'https://i.imgur.com/ePFr12w.png' },
    { name: 'Hang My Ads', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlockRequirement: 'Earn $1.00 to unlock' },
    { name: 'Lootably', logo: 'https://i.imgur.com/i9nO27d.png' },
    { name: 'Time Wall', logo: 'https://i.imgur.com/nJgq1t7.png' },
    { name: 'AdGem', logo: 'https://i.imgur.com/r9f5k2Z.png' },
];

const surveyWalls = [
    { name: 'Prime Surveys', logo: 'https://i.imgur.com/N8lqs65.png' },
    { name: 'CPX Research', logo: 'https://i.imgur.com/bKj926D.png' },
    { name: 'Adscend Media Surveys', logo: 'https://i.imgur.com/iY9g04E.png' },
    { name: 'BitLabs Surveys', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlockRequirement: 'Earn $2.50 to unlock' },
    { name: 'InBrain', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlockRequirement: 'Earn $2.50 to unlock' },
    { name: 'TheoremReach', logo: 'https://i.imgur.com/yvC5YyW.png', isLocked: true, unlocksAt: 'Unlocks 12/2/2025, 12:16 PM' },
];

const SectionHeader: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-2xl font-bold text-cyber-text-primary font-orbitron">{title}</h2>
            <p className="text-cyber-text-secondary">{description}</p>
        </div>
        <a href="#" className="text-cyber-primary hover:underline flex-shrink-0 text-glow-primary">View All</a>
    </div>
);

const LockIcon: React.FC = () => (
    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
);

const StarIcon: React.FC = () => (
    <svg className="w-5 h-5 text-cyber-secondary text-glow-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const LoggedInHomePage: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* Top Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <img src="https://i.imgur.com/kP4dmA8.png" alt="Earn Money" className="rounded-lg w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity border-2 border-cyber-primary/50 hover:border-cyber-primary" />
                <img src="https://i.imgur.com/s6n5s7H.png" alt="Monthly Race" className="rounded-lg w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity border-2 border-cyber-secondary/50 hover:border-cyber-secondary" />
                <img src="https://i.imgur.com/uN83F9y.png" alt="Rewards" className="rounded-lg w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity" />
            </div>

            {/* Featured Tasks */}
            <section>
                <SectionHeader title="Featured Tasks" description="Featured tasks are the best tasks to complete, with the highest rewards" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {featuredTasks.map((task, index) => (
                        <div key={index} className="cyber-panel overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform hover:border-cyber-primary">
                            <img src={task.image} alt={task.title} className="w-full aspect-[4/3] object-cover" />
                            <div className="p-3">
                                <h3 className="font-semibold text-cyber-text-primary truncate group-hover:text-cyber-primary">{task.title}</h3>
                                <p className="text-sm text-cyber-text-secondary truncate">{task.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Surveys */}
            <section>
                <SectionHeader title="Featured Surveys" description="Explore our handpicked selection of surveys just for you" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                    {featuredSurveys.map((survey, index) => (
                         <div key={index} className="cyber-panel p-4 flex flex-col items-start group cursor-pointer hover:-translate-y-1 transition-transform hover:border-cyber-primary">
                             <div className="w-full aspect-square bg-cyber-surface rounded-lg flex items-center justify-center mb-3">
                                 <i className="fas fa-clipboard-list text-4xl text-cyber-primary text-glow-primary"></i>
                             </div>
                             <h3 className="font-semibold text-cyber-text-primary group-hover:text-cyber-primary">{survey.title}</h3>
                             <p className="text-sm text-cyber-text-secondary">{survey.duration}</p>
                             <div className="self-end mt-auto pt-2"><StarIcon /></div>
                         </div>
                    ))}
                </div>
            </section>
            
            {/* Offer Walls */}
            <section>
                <SectionHeader title="Offer Walls" description="Each offer wall contains hundreds of offers to complete" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                     {offerWalls.map((wall, index) => (
                        <div key={index} className={`cyber-panel p-4 flex flex-col items-center justify-center text-center h-36 relative overflow-hidden transition-all duration-300 ${!wall.isLocked && 'hover:bg-cyber-primary/10 cursor-pointer hover:-translate-y-1 hover:border-cyber-primary'}`}>
                            {wall.isLocked && <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>}
                            {wall.bonus && <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full z-20 ${wall.isLocked ? 'bg-gray-500/30 text-gray-300' : 'bg-cyber-accent/20 text-cyber-accent'}`}>{wall.bonus}</div>}
                            
                            <div className={`relative flex flex-col items-center justify-center flex-1 ${wall.isLocked ? 'opacity-30' : ''}`}>
                                <img src={wall.logo} alt={wall.name} className="h-10 max-w-full object-contain mb-2 invert-[.85] saturate-0 contrast-200" />
                                <p className="font-semibold text-cyber-text-primary text-sm mt-auto">{wall.name}</p>
                            </div>
                             
                            {wall.isLocked && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-center z-20 p-2 text-white">
                                    <LockIcon />
                                    {wall.unlockRequirement && <p className="mt-1 font-semibold">{wall.unlockRequirement}</p>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

             {/* Survey Walls */}
            <section>
                <SectionHeader title="Survey Walls" description="Each survey wall contains hundreds of surveys to complete" />
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                     {surveyWalls.map((wall, index) => (
                        <div key={index} className={`cyber-panel p-4 flex flex-col items-center justify-center text-center h-32 relative overflow-hidden transition-all duration-300 ${!wall.isLocked && 'hover:bg-cyber-primary/10 cursor-pointer hover:-translate-y-1 hover:border-cyber-primary'}`}>
                             {wall.isLocked && <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10"></div>}
                             
                             <div className={`relative flex flex-col items-center justify-center flex-1 ${wall.isLocked ? 'opacity-30' : ''}`}>
                                 <img src={wall.logo} alt={wall.name} className="h-8 max-w-full object-contain mb-2 invert-[.85] saturate-0 contrast-200" />
                                 <p className="font-semibold text-cyber-text-primary text-sm mt-auto">{wall.name}</p>
                             </div>
                             
                             {wall.isLocked && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-center z-20 p-2 text-white">
                                     <LockIcon />
                                     {wall.unlockRequirement && <p className="mt-1 font-semibold">{wall.unlockRequirement}</p>}
                                     {wall.unlocksAt && <p className="mt-1">{wall.unlocksAt}</p>}
                                </div>
                             )}
                         </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default LoggedInHomePage;
