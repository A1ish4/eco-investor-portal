import React from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

const startups = [
  { id: 1, name: "GreenLeaf Technologies", sector: "Renewable Energy", fundingGoal: 500000, currentFunding: 350000, esgScore: 92, description: "GreenLeaf Technologies is pioneering advanced solar panel technology that increases energy conversion efficiency by 30%, making solar power more accessible and affordable for homeowners and businesses alike." },
  { id: 2, name: "OceanClean Solutions", sector: "Waste Management", fundingGoal: 250000, currentFunding: 180000, esgScore: 88, description: "OceanClean Solutions is developing autonomous robots that can collect and process plastic waste in oceans, helping to clean up our waters and protect marine ecosystems." },
  { id: 3, name: "EcoFashion", sector: "Sustainable Textiles", fundingGoal: 300000, currentFunding: 120000, esgScore: 85, description: "EcoFashion is revolutionizing the textile industry with their innovative fabric made from recycled plastic bottles and organic cotton, reducing water usage and carbon emissions in clothing production." },
  { id: 4, name: "UrbanFarm", sector: "Sustainable Agriculture", fundingGoal: 400000, currentFunding: 280000, esgScore: 90, description: "UrbanFarm is creating vertical farming solutions for cities, using hydroponic systems and AI-controlled environments to grow fresh produce with 90% less water and land use compared to traditional farming." },
];

const StartupDetails = () => {
  const { id } = useParams();
  const startup = startups.find(s => s.id === parseInt(id));

  if (!startup) {
    return <div>Startup not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{startup.name}</h1>
      <p className="text-gray-600 mb-4">Sector: {startup.sector}</p>
      <p className="text-gray-600 mb-4">ESG Score: {startup.esgScore}</p>
      <Progress value={(startup.currentFunding / startup.fundingGoal) * 100} className="mb-2" />
      <p className="text-sm text-gray-500 mb-4">${startup.currentFunding.toLocaleString()} raised of ${startup.fundingGoal.toLocaleString()}</p>
      <p className="text-gray-700 mb-6">{startup.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Why This Matters</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Contributes to reducing carbon emissions</li>
        <li>Creates sustainable jobs in the green economy</li>
        <li>Promotes innovation in eco-friendly technologies</li>
        <li>Helps achieve UN Sustainable Development Goals</li>
      </ul>
    </div>
  );
};

export default StartupDetails;