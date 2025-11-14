import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-cyber-surface/80 backdrop-blur-sm border-t border-cyber-primary/20 py-12 text-cyber-text-secondary">
            <div className="container mx-auto px-8">
                <div className="flex flex-wrap justify-between items-start gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold font-orbitron text-2xl text-glow-primary text-cyber-primary">EarnLab</h3>
                         <div className="flex items-center space-x-2">
                            <button className="px-3 py-2 rounded-md bg-cyber-surface-secondary border border-cyber-primary/20 text-cyber-text-primary flex items-center space-x-2 hover:bg-cyber-primary/20">
                                <span className="font-serif text-lg">A</span>
                                <span>English</span>
                            </button>
                        </div>
                        <div className="p-3 bg-cyber-surface-secondary rounded-md flex items-center justify-between text-sm w-full max-w-xs border border-cyber-primary/20">
                            <span className="text-cyber-text-primary">Average</span>
                            <div className="flex items-center ml-2">
                                {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star text-cyber-accent"></i>)}
                                <i className="fas fa-star text-cyber-text-secondary/30"></i>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
                        <div>
                            <h4 className="font-semibold font-orbitron text-cyber-primary mb-4">Menu</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-cyber-primary">Home</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Offer</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Tasks</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Surveys</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Affiliates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold font-orbitron text-cyber-primary mb-4">Games</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-cyber-primary">Boxes</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Battles</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold font-orbitron text-cyber-primary mb-4">About</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-cyber-primary">Blog</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Guides</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Cookie Policy</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">AML & KYC Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold font-orbitron text-cyber-primary mb-4">Help</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-cyber-primary">Frequently Asked</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Help Desk</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Support</a></li>
                                <li><a href="#" className="hover:text-cyber-primary">Fairness</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-cyber-primary/20 flex flex-col sm:flex-row justify-between items-center text-cyber-text-secondary text-sm">
                    <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} EarnLab &bull; All rights reserved.</p>
                    <div className="flex space-x-4 text-lg">
                        <a href="#" className="hover:text-cyber-primary text-glow-primary"><i className="fab fa-discord"></i></a>
                        <a href="#" className="hover:text-cyber-primary text-glow-primary"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-cyber-primary text-glow-primary"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
