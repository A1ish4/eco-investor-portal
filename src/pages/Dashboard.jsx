import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Progress } from "@/components/ui/progress"

const Dashboard = () => {
  const portfolioData = [
    { name: 'Renewable Energy', value: 4000, impact: 2400, esgPoints: 85 },
    { name: 'Recycling', value: 3000, impact: 1398, esgPoints: 78 },
    { name: 'Sustainable Tech', value: 2000, impact: 9800, esgPoints: 92 },
    { name: 'Green Transport', value: 2780, impact: 3908, esgPoints: 80 },
    { name: 'Circular Products', value: 1890, impact: 4800, esgPoints: 75 },
  ];

  const esgTrendData = [
    { month: 'Jan', esgScore: 70 },
    { month: 'Feb', esgScore: 72 },
    { month: 'Mar', esgScore: 75 },
    { month: 'Apr', esgScore: 78 },
    { month: 'May', esgScore: 80 },
    { month: 'Jun', esgScore: 85 },
  ];

  const totalESGPoints = 1250;
  const currentTier = 'Silver';
  const nextTier = 'Gold';
  const pointsToNextTier = 1001 - totalESGPoints;
  const tierProgress = (totalESGPoints / 1001) * 100;

  const impactData = [
    { month: 'Jan', co2Saved: 50, wasteReduction: 20, esgPoints: 100 },
    { month: 'Feb', co2Saved: 70, wasteReduction: 25, esgPoints: 150 },
    { month: 'Mar', co2Saved: 90, wasteReduction: 30, esgPoints: 200 },
    { month: 'Apr', co2Saved: 120, wasteReduction: 40, esgPoints: 280 },
    { month: 'May', co2Saved: 150, wasteReduction: 50, esgPoints: 350 },
    { month: 'Jun', co2Saved: 200, wasteReduction: 70, esgPoints: 450 },
  ];

  const totalCO2Saved = impactData.reduce((sum, data) => sum + data.co2Saved, 0);
  const totalWasteReduction = impactData.reduce((sum, data) => sum + data.wasteReduction, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Personal Dashboard & Portfolio</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Tier Progress</h2>
        <p className="text-gray-600 mb-2">Current Tier: <span className="font-bold text-blue-600">{currentTier}</span></p>
        <p className="text-gray-600 mb-4">{pointsToNextTier} points to {nextTier} tier</p>
        <Progress value={tierProgress} className="w-full" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
        <div className="space-y-2">
          <p className="text-gray-600">Total Value: <span className="font-bold text-green-600">$24,670</span></p>
          <p className="text-gray-600">Total Return: <span className="font-bold text-green-600">+12.5%</span></p>
          <p className="text-gray-600">CO2 Emissions Saved: <span className="font-bold text-green-600">{totalCO2Saved} kg</span></p>
          <p className="text-gray-600">Waste Reduction: <span className="font-bold text-green-600">{totalWasteReduction} kg</span></p>
          <p className="text-gray-600">Total ESG Points: <span className="font-bold text-blue-600">{totalESGPoints}</span></p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Impact History</h2>
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

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Investment Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="value" fill="#8884d8" name="Investment Value ($)" />
            <Bar yAxisId="right" dataKey="esgPoints" fill="#82ca9d" name="ESG Points" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">ESG Score Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={esgTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="esgScore" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;