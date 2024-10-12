import React from 'react';
import AIRecommendationEngine from '../components/AIRecommendationEngine';

const Recommendations = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">AI-Driven Stock Recommendations</h1>
      <AIRecommendationEngine />
    </div>
  );
};

export default Recommendations;