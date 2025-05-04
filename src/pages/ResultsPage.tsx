import React from 'react';
import DecisionResult from '../components/DecisionResult';

const ResultsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          The Universe Has Spoken
        </h1>
        <p className="text-xl text-space-300 max-w-2xl mx-auto">
          The cosmic forces have analyzed your options and chosen the path most aligned with your destiny
        </p>
      </div>
      
      <DecisionResult />
    </div>
  );
};

export default ResultsPage;