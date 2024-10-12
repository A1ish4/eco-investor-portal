import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Progress } from "@/components/ui/progress"

const Dashboard = () => {
  const portfolioData = [
    { name: 'Renewable Energy', value: 4000, impact: 2400, esgPoints: 85 },
    { name: 'Recycling', value: 3000, impact: 1398, esgPoints: 78 },
    { name: 'Sustainable Tech', value: 2000, impact: 9800, esgPoints: 92 },
    { name: 'Green Transport', value: 2780, impact: 3908, esgPoints: 80 },
    { name: 'Circular Products', value: 1890, impact: 4800, esgPoints: 75 },
  ];

  const esgScores = [
    { name: 'Environmental', value: 85 },
    { name: 'Social', value: 75 },
    { name: 'Governance', value: 80 },
  ];

  const esgTrendData = [
    { month: 'Jan', esgScore: 70 },
    { month: 'Feb', esgScore: 72 },
    { month: 'Mar', esgScore: 75 },
    { month: 'Apr', esgScore: 78 },
    { month: 'May', esgScore: 80 },
    { month: 'Jun', esgScore: 85 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const totalESGPoints = 1250;
  const currentTier = 'Silver';
  const nextTier = 'Gold';
  const pointsToNextTier = 1001 - totalESGPoints;
  const tierProgress = (totalESGPoints / 1001) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <div className="space-y-2">
            <p className="text-gray-600">Total Value: <span className="font-bold text-green-600">$24,670</span></p>
            <p className="text-gray-600">Total Return: <span className="font-bold text-green-600">+12.5%</span></p>
            <p className="text-gray-600">CO2 Emissions Saved: <span className="font-bold text-green-600">1,250 kg</span></p>
            <p className="text-gray-600">Waste Reduction: <span className="font-bold text-green-600">500 kg</span></p>
            <p className="text-gray-600">Total ESG Points: <span className="font-bold text-blue-600">{totalESGPoints}</span></p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">ESG Scores</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={esgScores}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {esgScores.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
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

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Tier Progress</h2>
        <p className="text-gray-600 mb-2">Current Tier: <span className="font-bold text-blue-600">{currentTier}</span></p>
        <p className="text-gray-600 mb-4">{pointsToNextTier} points to {nextTier} tier</p>
        <Progress value={tierProgress} className="w-full" />
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Invested in Solar Co.</span>
            <span className="font-semibold text-green-600">+$1,000 | +25 ESG Points</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Dividend from Eco Tech Inc.</span>
            <span className="font-semibold text-green-600">+$50 | +5 ESG Points</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Sold shares of Old Energy Corp.</span>
            <span className="font-semibold text-red-600">-$500 | -10 ESG Points</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;