import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 text-center text-space-400 border-t border-space-700/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 text-sm">
          <p>Made with</p>
          <Heart className="w-4 h-4 text-nebula-400 inline-block animate-pulse" />
          <p>by the cosmic forces of the universe</p>
        </div>
        <p className="mt-2 text-xs">LSD: Life Saving Decisions © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;