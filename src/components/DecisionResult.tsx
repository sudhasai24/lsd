import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDecision } from '../contexts/DecisionContext';
import { Sparkles, ArrowLeft } from 'lucide-react';

const DecisionResult: React.FC = () => {
  const navigate = useNavigate();
  const { decisionData } = useDecision();
  const [isRevealing, setIsRevealing] = useState(true);
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  
  // If no decision data, redirect to decision page
  useEffect(() => {
    if (!decisionData?.question) {
      navigate('/decision');
    }
  }, [decisionData, navigate]);
  
  // Animate the reasons appearing one by one
  useEffect(() => {
    if (!decisionData?.reasons || !isRevealing) return;
    
    const timer = setTimeout(() => {
      setIsRevealing(false);
    }, 3000);
    
    // Reveal each reason with a delay
    decisionData.reasons.forEach((_, index) => {
      setTimeout(() => {
        setVisibleReasons(prev => [...prev, index]);
      }, 1000 + index * 800);
    });
    
    return () => clearTimeout(timer);
  }, [decisionData, isRevealing]);
  
  if (!decisionData?.question) return null;
  
  const { question, context, options, chosenOptionIndex, reasons } = decisionData;
  const chosenOption = options[chosenOptionIndex];
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="cosmic-card p-6 md:p-8 mb-6 relative overflow-hidden">
        {/* Cosmic glow behind the chosen option */}
        <div className="absolute -inset-10 bg-nebula-500/10 blur-[60px] rounded-full"></div>
        
        <h2 className="text-xl md:text-2xl mb-6 text-space-200">
          You asked the cosmos:
        </h2>
        
        <p className="text-2xl md:text-3xl font-medium mb-6 text-white">
          {question}
        </p>

        <div className="mb-8">
          <h3 className="text-xl mb-3 text-space-200">Your situation:</h3>
          <p className="text-lg text-space-100 bg-space-800/40 p-4 rounded-lg border border-space-700/50">
            {context}
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl mb-4 text-space-200">Your options were:</h3>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  index === chosenOptionIndex
                    ? "border-nebula-500 bg-nebula-900/30 text-white"
                    : "border-space-700 bg-space-800/30 text-space-300"
                }`}
              >
                {option}
                {index === chosenOptionIndex && (
                  <span className="ml-2 inline-flex items-center">
                    <Sparkles className="w-4 h-4 text-nebula-400 animate-pulse" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-medium mb-4 text-white flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-nebula-400" />
            The cosmos has chosen:
          </h3>
          <div className="p-5 border-2 border-nebula-500 bg-nebula-900/20 rounded-lg text-2xl font-medium text-white text-center">
            {chosenOption}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl mb-4 text-space-200">The universe reveals why:</h3>
          <ul className="space-y-3">
            {reasons.map((reason, index) => (
              <li 
                key={index}
                className={`flex items-start p-3 border border-space-700 rounded-lg bg-space-800/40 transition-opacity duration-500 ${
                  visibleReasons.includes(index) ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="inline-block w-6 h-6 mr-3 rounded-full bg-nebula-500/20 border border-nebula-500/50 flex-shrink-0 flex items-center justify-center text-sm font-medium text-nebula-300">
                  {index + 1}
                </span>
                <span className="text-space-100">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/decision')}
          className="cosmic-button-secondary flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Seek Another Decision
        </button>
      </div>
    </div>
  );
};

export default DecisionResult;