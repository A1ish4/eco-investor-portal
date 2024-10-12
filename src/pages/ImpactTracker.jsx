import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const impactData = [
  { month: 'Jan', co2Saved: 50, wasteReduction: 20, esgPoints: 100 },
  { month: 'Feb', co2Saved: 70, wasteReduction: 25, esgPoints: 150 },
  { month: 'Mar', co2Saved: 90, wasteReduction: 30, esgPoints: 200 },
  { month: 'Apr', co2Saved: 120, wasteReduction: 40, esgPoints: 280 },
  { month: 'May', co2Saved: 150, wasteReduction: 50, esgPoints: 350 },
  { month: 'Jun', co2Saved: 200, wasteReduction: 70, esgPoints: 450 },
];

const ImpactTracker = () => {
  const totalCO2Saved = impactData.reduce((sum, data) => sum + data.co2Saved, 0);
  const totalWasteReduction = impactData.reduce((sum, data) => sum + data.wasteReduction, 0);
  const totalESGPoints = impactData.reduce((sum, data) => sum + data.esgPoints, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Impact Tracker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">CO2 Saved</h2>
          <p className="text-3xl font-bold text-green-600">{totalCO2Saved} tons</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Waste Reduction</h2>
          <p className="text-3xl font-bold text-blue-600">{totalWasteReduction} tons</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total ESG Points</h2>
          <p className="text-3xl font-bold text-purple-600">{totalESGPoints} points</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Impact History</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="co2Saved" stroke="#82ca9d" name="CO2 Saved (tons)" />
            <Line yAxisId="left" type="monotone" dataKey="wasteReduction" stroke="#8884d8" name="Waste Reduction (tons)" />
            <Line yAxisId="right" type="monotone" dataKey="esgPoints" stroke="#ffc658" name="ESG Points" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ImpactTracker;