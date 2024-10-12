// StockOverview.jsx
import React from 'react';

const StockOverview = ({ selectedStock }) => {
  // Dummy Meta data if no stock is selected
  const metaData = {
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

  // Use either selected stock data or Meta dummy data
  const stock = selectedStock || metaData;

  const {
    name, price, change, changePercent, ticker, esgPoints, open, high, low,
    marketCap, peRatio, divYield, yearHigh, yearLow
  } = stock;

  return (
    <div className="p-6 bg-gray-900 text-white rounded-md shadow-md space-y-4">
      <h1 className="text-3xl font-semibold">{name} ({ticker})</h1>
      <p className="text-2xl">${price.toFixed(2)} USD</p>
      <p className={`text-xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change.toFixed(2)} ({changePercent}%)
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-400">Open</p>
          <p>${open.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400">High</p>
          <p>${high.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400">Low</p>
          <p>${low.toFixed(2)}</p>
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
          <p>${yearHigh.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400">52-wk Low</p>
          <p>${yearLow.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default StockOverview;
