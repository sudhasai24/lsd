import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, Search, Lightbulb } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute -inset-14 bg-nebula-500/10 blur-[40px] rounded-full"></div>
            <Star className="w-16 h-16 text-nebula-400 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-300 to-nebula-500">Life Saving Decisions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-space-200 mb-8 leading-relaxed">
          Let the wisdom of the cosmos guide your most important life choices
        </p>
        
        <button 
          onClick={() => navigate('/decision')}
          className="cosmic-button-primary text-lg px-8 py-4"
        >
          Begin Your Cosmic Journey
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
        <FeatureCard 
          icon={<Search />}
          title="Ask the Universe"
          description="Frame your question clearly to receive the most illuminating cosmic insights"
        />
        <FeatureCard 
          icon={<Lightbulb />}
          title="Explore Options"
          description="Present your possible paths and let the universe analyze each possibility"
        />
        <FeatureCard 
          icon={<Sparkles />}
          title="Receive Guidance"
          description="Discover which path aligns with your cosmic destiny and understand why"
        />
      </div>
      
      <div className="cosmic-card p-6 md:p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">How the Cosmic Decision Process Works</h2>
        
        <div className="space-y-6">
          <Step 
            number={1} 
            title="Frame Your Question" 
            description="Begin by clearly articulating the decision you're facing. The more specific your question, the more focused the cosmic insight will be."
          />
          
          <Step 
            number={2} 
            title="List Your Options" 
            description="Present all possible paths you're considering. Each option will be analyzed against the fabric of universal patterns."
          />
          
          <Step 
            number={3} 
            title="Cosmic Analysis" 
            description="Our system taps into the collective wisdom of the universe, using powerful AI to process and interpret the cosmic signals around your decision."
          />
          
          <Step 
            number={4} 
            title="Receive Guidance" 
            description="The universe will highlight the path most aligned with your cosmic destiny, providing five key insights explaining the recommendation."
          />
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/decision')}
            className="cosmic-button-primary"
          >
            Make Your First Decision
          </button>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="cosmic-card p-6 flex flex-col items-center text-center h-full">
      <div className="w-12 h-12 rounded-full bg-nebula-900/60 border border-nebula-700/50 flex items-center justify-center mb-4 text-nebula-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-space-300">{description}</p>
    </div>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-nebula-900/60 border border-nebula-700/50 flex-shrink-0 flex items-center justify-center mr-4 text-nebula-300 font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
        <p className="text-space-300">{description}</p>
      </div>
    </div>
  );
};

export default HomePage;