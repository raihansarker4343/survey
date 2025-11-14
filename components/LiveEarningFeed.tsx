import React from 'react';
import { EARNING_FEED_ITEMS } from '../constants';

const LiveEarningFeed: React.FC = () => {
    const duplicatedItems = [...EARNING_FEED_ITEMS, ...EARNING_FEED_ITEMS];

  return (
    <div className="bg-cyber-surface/50 border-b border-cyber-primary/20 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex items-center p-2 mx-4 flex-shrink-0">
            <img src={item.avatar} alt={item.user} className="w-6 h-6 rounded-full mr-2 border border-cyber-primary/30" />
            <div className="text-sm">
                <span className="font-bold text-cyber-text-primary">{item.task}</span>
                <span className="text-cyber-text-secondary"> - {item.provider}</span>
            </div>
            <span className="ml-2 text-cyber-accent font-bold text-glow-accent">${item.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveEarningFeed;
