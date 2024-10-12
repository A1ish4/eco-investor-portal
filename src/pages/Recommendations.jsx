import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const companies = [
  { name: 'Tesla', ticker: 'TSLA', esgScore: 87, sector: 'Electric Vehicles & Clean Energy' },
  { name: 'Schneider Electric', ticker: 'SU.PA', esgScore: 92, sector: 'Energy Management & Automation' },
  { name: 'Shell', ticker: 'SHEL', esgScore: 71, sector: 'Oil & Gas' },
  { name: 'Vestas Wind Systems', ticker: 'VWS.CO', esgScore: 89, sector: 'Wind Turbines' },
  { name: 'Beyond Meat', ticker: 'BYND', esgScore: 83, sector: 'Plant-based Meat' },
  { name: 'First Solar', ticker: 'FSLR', esgScore: 85, sector: 'Solar Panels' },
];

const generateStockData = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    price: Math.random() * 100 + 50,
  }));
};

const Recommendations = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    // Simulating AI recommendation based on query
    const filteredCompanies = companies.filter(company => 
      company.name.toLowerCase().includes(query.toLowerCase()) ||
      company.sector.toLowerCase().includes(query.toLowerCase())
    );
    setRecommendations(filteredCompanies.map(company => ({
      ...company,
      stockData: generateStockData(),
    })));
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((company) => (
              <div key={company.ticker} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-lg">{company.name} ({company.ticker})</h4>
                <p>ESG Score: {company.esgScore}</p>
                <p>Sector: {company.sector}</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={company.stockData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;