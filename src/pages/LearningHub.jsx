import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
  { id: 1, title: 'Introduction to Sustainable Investing', description: 'Learn the basics of ESG investing and its importance in today\'s world.' },
  { id: 2, title: 'Understanding ESG Metrics', description: 'Dive deep into Environmental, Social, and Governance metrics and how they affect investment decisions.' },
  { id: 3, title: 'Green Bonds and Impact Investing', description: 'Explore the world of green bonds and how to make investments that create positive environmental impact.' },
  { id: 4, title: 'Circular Economy Investments', description: 'Understand the principles of circular economy and identify investment opportunities in this growing sector.' },
];

const LearningHub = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Learning Hub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link key={module.id} to={`/learning-hub/${module.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{module.title}</h2>
            <p className="text-gray-600">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearningHub;