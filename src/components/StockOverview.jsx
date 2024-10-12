import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sampleChartData = [
  { date: 'Jan 1, 2024', price: 390 },
  { date: 'Jan 15, 2024', price: 400 },
  { date: 'Feb 1, 2024', price: 420 },
  { date: 'Feb 15, 2024', price: 450 },
  { date: 'Mar 1, 2024', price: 470 },
  { date: 'Mar 15, 2024', price: 500 },
  { date: 'Apr 1, 2024', price: 480 },
  { date: 'Apr 15, 2024', price: 495 },
  { date: 'May 1, 2024', price: 510 },
  { date: 'May 15, 2024', price: 520 },
  { date: 'Jun 1, 2024', price: 530 },
  { date: 'Jun 15, 2024', price: 540 },
  { date: 'Jul 1, 2024', price: 525 },
  { date: 'Jul 8, 2024', price: 529.32 },
  { date: 'Jul 15, 2024', price: 545 },
  { date: 'Aug 1, 2024', price: 570 },
  { date: 'Aug 15, 2024', price: 580 },
  { date: 'Sep 1, 2024', price: 585 },
  { date: 'Sep 15, 2024', price: 590 },
  { date: 'Oct 1, 2024', price: 600 },
  { date: 'Oct 10, 2024', price: 589.95 },
];

const StockOverview = ({ selectedStock }) => {
  const defaultStock = {
    name: 'Meta Platforms Inc',
    ticker: 'META',
    price: 589.95,
    change: 243.66,
    changePercent: 70.36,
    open: 584.83,
    high: 591.21,
    low: 582.71,
    esgPoints: 78,
    marketCap: '1.49T',
    peRatio: 30.17,
    divYield: '0.34%',
    yearHigh: 602.95,
    yearLow: 279.40,
  };

  const stock = selectedStock || defaultStock;

  const {
    name, ticker, price, change, changePercent, open, high, low, esgPoints,
    marketCap, peRatio, divYield, yearHigh, yearLow,
  } = stock;

  const formatNumber = (value) => {
    return typeof value === 'number' ? value.toFixed(2) : 'N/A';
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-md shadow-md space-y-6">
      <h1 className="text-3xl font-semibold">{name} ({ticker})</h1>
      <p className="text-2xl">${formatNumber(price)} USD</p>
      <p className={`text-xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{formatNumber(change)} ({changePercent}%)
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-400">Open</p>
          <p>${formatNumber(open)}</p>
        </div>
        <div>
          <p className="text-gray-400">High</p>
          <p>${formatNumber(high)}</p>
        </div>
        <div>
          <p className="text-gray-400">Low</p>
          <p>${formatNumber(low)}</p>
        </div>
        <div>
          <p className="text-gray-400">ESG Points</p>
          <p>{esgPoints}</p>
        </div>
        <div>
          <p className="text-gray-400">Market Cap</p>
          <p>{marketCap}</p>
        </div>
        <div>
          <p className="text-gray-400">P/E Ratio</p>
          <p>{peRatio}</p>
        </div>
        <div>
          <p className="text-gray-400">Dividend Yield</p>
          <p>{divYield}</p>
        </div>
        <div>
          <p className="text-gray-400">52-wk High</p>
          <p>${formatNumber(yearHigh)}</p>
        </div>
        <div>
          <p className="text-gray-400">52-wk Low</p>
          <p>${formatNumber(yearLow)}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Stock Price Chart (YTD)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[300, 650]} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockOverview;