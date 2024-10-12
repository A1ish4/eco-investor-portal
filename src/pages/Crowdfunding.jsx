import React from 'react';
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const startups = [
  { id: 1, name: "GreenLeaf Technologies", sector: "Renewable Energy", fundingGoal: 500000, currentFunding: 350000, esgScore: 92 },
  { id: 2, name: "OceanClean Solutions", sector: "Waste Management", fundingGoal: 250000, currentFunding: 180000, esgScore: 88 },
  { id: 3, name: "EcoFashion", sector: "Sustainable Textiles", fundingGoal: 300000, currentFunding: 120000, esgScore: 85 },
  { id: 4, name: "UrbanFarm", sector: "Sustainable Agriculture", fundingGoal: 400000, currentFunding: 280000, esgScore: 90 },
];

const Crowdfunding = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Green Startups Crowdfunding</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <Link key={startup.id} to={`/startup/${startup.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{startup.name}</h2>
            <p className="text-gray-600 mb-2">Sector: {startup.sector}</p>
            <p className="text-gray-600 mb-2">ESG Score: {startup.esgScore}</p>
            <Progress value={(startup.currentFunding / startup.fundingGoal) * 100} className="mb-2" />
            <p className="text-sm text-gray-500">${startup.currentFunding.toLocaleString()} raised of ${startup.fundingGoal.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Crowdfunding;