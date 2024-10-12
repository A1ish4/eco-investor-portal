import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StockOverview from './StockOverview';

const StockListing = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Tesla', ticker: 'TSLA', price: 650.75, change: 2.5, esgPoints: 87 },
    { id: 2, name: 'NextEra Energy', ticker: 'NEE', price: 75.20, change: -0.8, esgPoints: 92 },
    { id: 3, name: 'Waste Management', ticker: 'WM', price: 140.30, change: 1.2, esgPoints: 85 },
    { id: 4, name: 'Beyond Meat', ticker: 'BYND', price: 120.50, change: -1.5, esgPoints: 80 },
    { id: 5, name: 'First Solar', ticker: 'FSLR', price: 85.60, change: 3.2, esgPoints: 89 },
    { id: 6, name: 'Apple Inc.', ticker: 'AAPL', price: 175.50, change: 1.8, esgPoints: 82 },
    { id: 7, name: 'Microsoft', ticker: 'MSFT', price: 320.25, change: 0.6, esgPoints: 90 },
    { id: 8, name: 'Johnson & Johnson', ticker: 'JNJ', price: 155.30, change: -0.3, esgPoints: 86 },
    { id: 9, name: 'Procter & Gamble', ticker: 'PG', price: 145.10, change: -1.2, esgPoints: 88 },
    { id: 10, name: 'Intel Corporation', ticker: 'INTC', price: 35.50, change: 2.1, esgPoints: 81 },
    { id: 11, name: 'Adobe Inc.', ticker: 'ADBE', price: 545.00, change: 0.9, esgPoints: 84 },
    { id: 12, name: 'Alphabet Inc.', ticker: 'GOOGL', price: 132.45, change: 2.3, esgPoints: 79 },
    { id: 13, name: 'Amazon.com', ticker: 'AMZN', price: 127.80, change: -0.5, esgPoints: 76 },
    { id: 14, name: 'Visa Inc.', ticker: 'V', price: 225.90, change: 1.4, esgPoints: 83 },
    { id: 15, name: 'NVIDIA Corporation', ticker: 'NVDA', price: 430.70, change: -0.7, esgPoints: 78 },
    { id: 16, name: 'PepsiCo, Inc.', ticker: 'PEP', price: 165.45, change: 1.1, esgPoints: 88 },
    { id: 17, name: 'Coca-Cola Company', ticker: 'KO', price: 58.70, change: -0.4, esgPoints: 82 },
    { id: 18, name: 'General Electric', ticker: 'GE', price: 112.25, change: 0.8, esgPoints: 86 },
    { id: 19, name: 'Iberdrola', ticker: 'IBE.MC', price: 12.75, change: 1.0, esgPoints: 93 },
    { id: 20, name: 'Siemens AG', ticker: 'SIEGY', price: 75.10, change: 0.5, esgPoints: 87 },
    { id: 21, name: 'Unilever', ticker: 'UL', price: 52.30, change: 1.3, esgPoints: 91 },
    { id: 22, name: 'Royal Dutch Shell', ticker: 'RDS.A', price: 55.20, change: -1.6, esgPoints: 74 },
    { id: 23, name: 'Facebook (Meta)', ticker: 'META', price: 312.40, change: 0.8, esgPoints: 78 },
    { id: 24, name: 'Pfizer', ticker: 'PFE', price: 41.50, change: -0.7, esgPoints: 86 },
    { id: 25, name: 'Toyota Motor Corp', ticker: 'TM', price: 180.10, change: 1.5, esgPoints: 84 },
    { id: 26, name: 'ExxonMobil', ticker: 'XOM', price: 109.75, change: 0.2, esgPoints: 73 },
    { id: 27, name: 'Boeing', ticker: 'BA', price: 205.90, change: -1.1, esgPoints: 77 },
    { id: 28, name: 'McDonald\'s', ticker: 'MCD', price: 270.60, change: 1.2, esgPoints: 82 },
    { id: 29, name: 'Walmart', ticker: 'WMT', price: 162.25, change: 0.7, esgPoints: 87 },
    { id: 30, name: 'Starbucks', ticker: 'SBUX', price: 99.50, change: -0.9, esgPoints: 88 }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedStock, setSelectedStock] = useState(null); // Track the selected stock

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    setStocks([...stocks].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    }));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Stock Listings</h2>
      <div className="flex space-x-2">
        <Input type="text" placeholder="Search stocks..." className="w-full" />
        <Button>Search</Button>
      </div>

      <div className="flex space-x-8">
        <div className="w-2/3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => sortBy('name')} className="cursor-pointer">Company</TableHead>
                <TableHead onClick={() => sortBy('ticker')} className="cursor-pointer">Ticker</TableHead>
                <TableHead onClick={() => sortBy('price')} className="cursor-pointer">Price</TableHead>
                <TableHead onClick={() => sortBy('change')} className="cursor-pointer">24h Change</TableHead>
                <TableHead onClick={() => sortBy('esgPoints')} className="cursor-pointer">ESG Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stocks.map((stock) => (
                <TableRow key={stock.id} onClick={() => setSelectedStock(stock)} className="cursor-pointer hover:bg-gray-100">
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>{stock.ticker}</TableCell>
                  <TableCell>${stock.price.toFixed(2)}</TableCell>
                  <TableCell className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {stock.change >= 0 ? '+' : ''}{stock.change}%
                  </TableCell>
                  <TableCell>{stock.esgPoints}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="w-1/3">
          <h3 className="text-xl font-semibold mb-4">Stock Overview</h3>
          <StockOverview selectedStock={selectedStock} />
        </div>
      </div>
    </div>
  );
};

export default StockListing;
