import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const portfolioData = [
    { name: 'Renewable Energy', value: 4000, impact: 2400 },
    { name: 'Recycling', value: 3000, impact: 1398 },
    { name: 'Sustainable Tech', value: 2000, impact: 9800 },
    { name: 'Green Transport', value: 2780, impact: 3908 },
    { name: 'Circular Products', value: 1890, impact: 4800 },
  ];

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
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Investment Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#4ade80" name="Investment Value ($)" />
              <Bar dataKey="impact" fill="#22c55e" name="Environmental Impact Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Invested in Solar Co.</span>
            <span className="font-semibold text-green-600">+$1,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Dividend from Eco Tech Inc.</span>
            <span className="font-semibold text-green-600">+$50</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-gray-600">Sold shares of Old Energy Corp.</span>
            <span className="font-semibold text-red-600">-$500</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;