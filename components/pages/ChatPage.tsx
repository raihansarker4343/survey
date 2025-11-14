import React, { useState, useRef, useEffect, useContext } from 'react';
import { CHAT_MESSAGES } from '../../constants';
import type { ChatMessage } from '../../types';
import { AppContext } from '../../App';

const ChatPage: React.FC = () => {
    const { user } = useContext(AppContext);
    const [messages, setMessages] = useState<ChatMessage[]>(CHAT_MESSAGES);
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '' || !user) return;

        const message: ChatMessage = {
            id: messages.length + 1,
            user: user.username,
            avatar: user.avatarUrl,
            message: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSelf: true,
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-cyber-primary text-glow-primary mb-2">Community Chat</h1>
                <p className="text-cyber-text-secondary">Talk with other EarnLab users in real-time.</p>
            </div>
            
            <div className="cyber-panel h-[60vh] flex flex-col">
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex items-start gap-3 ${msg.isSelf ? 'flex-row-reverse' : ''}`}>
                            <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full border-2 border-cyber-primary/30" />
                            <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${msg.isSelf ? 'bg-cyber-primary text-cyber-bg' : 'bg-cyber-surface-secondary text-cyber-text-primary'}`}>
                                <div className="flex items-baseline gap-2">
                                    <p className={`font-bold text-sm ${msg.isSelf ? 'text-cyber-bg' : 'text-cyber-primary'}`}>{msg.user}</p>
                                    <p className={`text-xs ${msg.isSelf ? 'text-cyber-primary/70' : 'text-cyber-text-secondary'}`}>{msg.timestamp}</p>
                                </div>
                                <p className="text-sm mt-1">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
                
                <div className="p-4 border-t border-cyber-primary/20">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-cyber-surface border border-cyber-primary/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyber-primary text-cyber-text-primary placeholder:text-cyber-text-secondary/70"
                        />
                        <button type="submit" className="cyber-button-primary flex items-center gap-2">
                            <span>Send</span>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
