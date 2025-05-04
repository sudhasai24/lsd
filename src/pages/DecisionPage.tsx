import React from 'react';
import DecisionForm from '../components/DecisionForm';

const DecisionPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Consult the Cosmic Forces
        </h1>
        <p className="text-xl text-space-300 max-w-2xl mx-auto">
          Share your dilemma with the universe and receive guidance aligned with your cosmic path
        </p>
      </div>
      
      <DecisionForm />
    </div>
  );
};

export default DecisionPage;