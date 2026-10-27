import React from 'react';
import {
  Wallet,
  Hammer,
  Sparkles,
  TrendingUp,
  Search,
  Crown,
  Coins,
  Flame,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  Compass,
  Lightbulb,
  MapPin,
  HelpCircle,
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Hammer':
      return <Hammer className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Crown':
      return <Crown className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Rocket':
      return <Rocket className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};
