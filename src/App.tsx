import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DecisionPage from './pages/DecisionPage';
import ResultsPage from './pages/ResultsPage';
import Layout from './components/Layout';
import { DecisionProvider } from './contexts/DecisionContext';

function App() {
  return (
    <DecisionProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/decision" element={<DecisionPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Layout>
      </Router>
    </DecisionProvider>
  );
}

export default App;