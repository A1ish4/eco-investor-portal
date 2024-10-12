import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [transactionVouchers, setTransactionVouchers] = useState(15);
  const [commissionVouchers, setCommissionVouchers] = useState(15);

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

  const impactData = [
    { month: 'Jan', co2Saved: 50, wasteReduction: 20, esgPoints: 100 },
    { month: 'Feb', co2Saved: 70, wasteReduction: 25, esgPoints: 150 },
    { month: 'Mar', co2Saved: 90, wasteReduction: 30, esgPoints: 200 },
    { month: 'Apr', co2Saved: 120, wasteReduction: 40, esgPoints: 280 },
    { month: 'May', co2Saved: 150, wasteReduction: 50, esgPoints: 350 },
    { month: 'Jun', co2Saved: 200, wasteReduction: 70, esgPoints: 450 },
  ];

  const totalESGPoints = 1250;
  const currentTier = 'Silver';
  const nextTier = 'Gold';
  const pointsToNextTier = 1001 - totalESGPoints;
  const tierProgress = (totalESGPoints / 1001) * 100;

  const totalCO2Saved = impactData.reduce((sum, data) => sum + data.co2Saved, 0);
  const totalWasteReduction = impactData.reduce((sum, data) => sum + data.wasteReduction, 0);

  const handleUseVoucher = (type) => {
    if (type === 'transaction' && transactionVouchers > 0) {
      setTransactionVouchers(transactionVouchers - 1);
    } else if (type === 'commission' && commissionVouchers > 0) {
      setCommissionVouchers(commissionVouchers - 1);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Personal Dashboard & Portfolio</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Tier Progress</h2>
        <p className="text-gray-600 mb-2">
          Current Tier: <span className="font-bold text-blue-600">{currentTier}</span>
        </p>
        <p className="text-gray-600 mb-4">
          {pointsToNextTier} points to {nextTier} tier
        </p>
        <Progress value={tierProgress} className="w-full" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Rewards</h2>
        <p className="text-gray-600 mb-4">
          As a {currentTier} tier member, you are eligible for the following rewards:
        </p>

        <div className="space-y-8">
          {/* Transaction Voucher Section */}
          <div className="space-y-4">
            <img
              src="/Get $5-2.png" style={{ height: '200px', width: '600px', marginBottom: '10px' }}
              alt="Transaction Voucher"
              className="w-32 h-32 object-cover mb-2"
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Transaction Fee Offset Voucher</p>
                <p className="text-gray-600">
                  Offsets transaction fees on your next 1 transaction.
                </p>
              </div>
              <Button
                onClick={() => handleUseVoucher('transaction')}
                disabled={transactionVouchers === 0}
              >
                Use Voucher ({transactionVouchers} left)
              </Button>
            </div>
          </div>

          {/* Green Voucher Section */}
          <div className="space-y-4">
            <img
              src="/Get $5.png" style={{ height: '200px', width: '600px', marginBottom: '10px' }}
              alt="Get $5 of Microsoft Stock Voucher"
              className="w-32 h-32 object-cover mb-2"
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">$5 of Microsoft Stock Voucher</p>
                <p className="text-gray-600">
                Congralutions! Get yourself $5 of Microsoft Stock Voucher now!
                </p>
              </div>
              <Button
                onClick={() => handleUseVoucher('commission')}
                disabled={commissionVouchers === 0}
              >
                Use Voucher ({commissionVouchers} left)
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            Total Value: <span className="font-bold text-green-600">$24,670</span>
          </p>
          <p className="text-gray-600">
            Total Return: <span className="font-bold text-green-600">+12.5%</span>
          </p>
          <p className="text-gray-600">
            CO2 Emissions Saved: <span className="font-bold text-green-600">{totalCO2Saved} kg</span>
          </p>
          <p className="text-gray-600">
            Waste Reduction: <span className="font-bold text-green-600">{totalWasteReduction} kg</span>
          </p>
          <p className="text-gray-600">
            Total ESG Points: <span className="font-bold text-blue-600">{totalESGPoints}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
