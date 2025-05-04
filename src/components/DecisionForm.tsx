import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Plus, Trash2 } from 'lucide-react';
import { useDecision } from '../contexts/DecisionContext';

const DecisionForm: React.FC = () => {
  const navigate = useNavigate();
  const { setDecisionData } = useDecision();
  
  const [question, setQuestion] = useState('');
  const [context, setContext] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) {
      setError('You need at least two options for a decision.');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!question.trim()) {
      setError('Please enter your question.');
      return;
    }

    if (!context.trim()) {
      setError('Please provide some context for your decision.');
      return;
    }
    
    const validOptions = options.filter(opt => opt.trim() !== '');
    if (validOptions.length < 2) {
      setError('Please enter at least two options.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Calculate the chosen option (in a real app, this would be done by AI)
      const chosenIndex = Math.floor(Math.random() * validOptions.length);
      
      // Generate reasons (in a real app, these would come from AI)
      const reasons = [
        `Based on your context: "${context}", this path aligns with your current situation`,
        "The cosmic energies indicate strong potential for growth in this direction",
        "This choice resonates with the universal patterns surrounding your query",
        "The celestial alignments suggest this option will lead to optimal outcomes",
        "Your decision context reveals hidden synergies with this particular path"
      ];
      
      // Set the decision data in context
      setDecisionData({
        question,
        context,
        options: validOptions,
        chosenOptionIndex: chosenIndex,
        reasons
      });
      
      // Navigate to results page
      navigate('/results');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cosmic-card p-6 md:p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label htmlFor="question" className="block mb-2 text-lg font-medium text-nebula-100">
            What decision are you seeking guidance on?
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Should I change my career path?"
            className="cosmic-input"
            disabled={isSubmitting}
          />
          <p className="mt-2 text-space-400 text-sm flex items-center">
            <HelpCircle className="w-4 h-4 mr-1 inline" /> 
            Be specific for better cosmic insights
          </p>
        </div>

        <div className="mb-8">
          <label htmlFor="context" className="block mb-2 text-lg font-medium text-nebula-100">
            What's the context behind this decision?
          </label>
          <textarea
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g., I've been in my current role for 5 years, feeling stagnant, and recently got an offer in a different industry..."
            className="cosmic-input min-h-[100px]"
            disabled={isSubmitting}
          />
          <p className="mt-2 text-space-400 text-sm flex items-center">
            <HelpCircle className="w-4 h-4 mr-1 inline" /> 
            Share relevant details to receive more accurate guidance
          </p>
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-lg font-medium text-nebula-100">
            What are your options?
          </label>
          <div className="space-y-3">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="cosmic-input"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="p-2 text-space-400 hover:text-nebula-300 transition-colors"
                  disabled={isSubmitting}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          
          <button
            type="button"
            onClick={addOption}
            className="mt-3 cosmic-button-secondary flex items-center gap-2 text-sm"
            disabled={isSubmitting}
          >
            <Plus className="w-4 h-4" /> Add Another Option
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="cosmic-button-primary px-8 py-3 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Consulting the cosmos...
              </span>
            ) : (
              "Seek Cosmic Guidance"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DecisionForm;