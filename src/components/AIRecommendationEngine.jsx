import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIRecommendationEngine = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement actual API call to GPT-powered backend
    const mockRecommendations = [
      { name: 'Solar Power Inc.', ticker: 'SPI', esgScore: 85, co2Saved: 1000, wasteReduction: 500 },
      { name: 'Wind Energy Corp', ticker: 'WEC', esgScore: 80, co2Saved: 1200, wasteReduction: 300 },
      { name: 'Recycling Technologies', ticker: 'RCT', esgScore: 75, co2Saved: 800, wasteReduction: 1000 },
    ];
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI-Driven Stock Recommendations</h2>
      <form onSubmit={handleQuerySubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your investment query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
        />
        <Button type="submit">Get Recommendations</Button>
      </form>
      {recommendations.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((stock) => (
              <div key={stock.ticker} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold">{stock.name} ({stock.ticker})</h4>
                <p>ESG Score: {stock.esgScore}</p>
                <p>CO2 Saved: {stock.co2Saved} tons</p>
                <p>Waste Reduction: {stock.wasteReduction} kg</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRecommendationEngine;