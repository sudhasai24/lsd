import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types
export interface DecisionData {
  question: string;
  context: string;
  options: string[];
  chosenOptionIndex: number;
  reasons: string[];
}

interface DecisionContextType {
  decisionData: DecisionData | null;
  setDecisionData: (data: DecisionData) => void;
}

// Create context
const DecisionContext = createContext<DecisionContextType | undefined>(undefined);

// Create provider component
export const DecisionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [decisionData, setDecisionData] = useState<DecisionData | null>(null);

  return (
    <DecisionContext.Provider value={{ decisionData, setDecisionData }}>
      {children}
    </DecisionContext.Provider>
  );
};

// Create hook for using the context
export const useDecision = (): DecisionContextType => {
  const context = useContext(DecisionContext);
  if (context === undefined) {
    throw new Error('useDecision must be used within a DecisionProvider');
  }
  return context;
};