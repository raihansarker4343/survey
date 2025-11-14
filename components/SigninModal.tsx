import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

interface SigninModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToSignup: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
    const { setIsLoggedIn } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        }
    }, [isOpen]);

    const handleTransitionEnd = () => {
        if (!isOpen) {
            setIsRendered(false);
        }
    };

    const handleLoginSuccess = () => {
        // In a real app, this would be an API call
        // For demo, just log in
        setIsLoggedIn(true);
        onClose();
    };

    if (!isRendered) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
            onTransitionEnd={handleTransitionEnd}
            aria-modal="true"
            role="dialog"
        >
            <div className="absolute inset-0 bg-cyber-bg/80 backdrop-blur-sm"></div>
            <div 
                className={`bg-cyber-surface text-white p-8 rounded-xl shadow-2xl border border-cyber-primary/50 shadow-cyber-primary/20 max-w-sm w-full m-4 transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="relative text-center mb-6">
                    <h2 className="text-3xl font-bold font-orbitron text-glow-primary">Sign In</h2>
                    <button 
                        onClick={onClose} 
                        className="absolute -top-4 -right-4 text-cyber-text-secondary hover:text-white bg-cyber-surface-secondary/80 hover:bg-cyber-surface-secondary w-8 h-8 rounded-full flex items-center justify-center"
                        aria-label="Close modal"
                    >
                        &times;
                    </button>
                </div>

                <div className="space-y-3 mb-6">
                    <button onClick={handleLoginSuccess} className="w-full bg-slate-800 text-cyber-text-primary font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors border border-slate-600">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" /> Sign in with Google
                    </button>
                    <button onClick={handleLoginSuccess} className="w-full bg-[#1b2838] text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-3 hover:bg-[#2a475e] transition-colors border border-slate-600">
                        <i className="fab fa-steam-symbol text-xl"></i> Sign In with Steam
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-cyber-primary/30" />
                    <span className="mx-4 text-cyber-text-secondary text-sm font-semibold">OR</span>
                    <hr className="flex-grow border-cyber-primary/30" />
                </div>
                
                <form onSubmit={(e) => { e.preventDefault(); handleLoginSuccess(); }} className="space-y-4">
                    <div>
                        <label htmlFor="modal-signin-email" className="block text-sm font-medium text-cyber-text-secondary mb-2">Email</label>
                        <div className="relative">
                            <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-cyber-text-secondary"></i>
                            <input 
                                type="email" 
                                id="modal-signin-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Connection established..."
                                required
                                className="w-full bg-cyber-bg text-white p-3 pl-12 rounded-lg border border-cyber-primary/50 focus:outline-none focus:ring-2 focus:ring-cyber-primary placeholder:text-cyber-text-secondary/70"
                            />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="modal-signin-password" className="block text-sm font-medium text-cyber-text-secondary mb-2">Password</label>
                         <div className="relative">
                            <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-cyber-text-secondary"></i>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                id="modal-signin-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Awaiting credentials..."
                                required
                                className="w-full bg-cyber-bg text-white p-3 pl-12 rounded-lg border border-cyber-primary/50 focus:outline-none focus:ring-2 focus:ring-cyber-primary placeholder:text-cyber-text-secondary/70"
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-cyber-text-secondary hover:text-white">
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>
                    
                    <a href="#" className="text-sm text-cyber-text-secondary hover:text-cyber-primary text-right block !-mt-2">Forgot Password?</a>
                    
                    <button 
                        type="submit"
                        className="w-full cyber-button-primary py-3 transition-colors !mt-6"
                    >
                        Sign In
                    </button>

                    <p className="text-sm text-cyber-text-secondary text-center !mt-4">
                        No account? <button type="button" onClick={onSwitchToSignup} className="text-cyber-primary hover:underline font-semibold">Create one</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SigninModal;