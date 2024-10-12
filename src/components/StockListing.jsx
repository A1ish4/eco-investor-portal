import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const StockListing = () => {
  const [stocks, setStocks] = useState([
    { id: 1, name: 'Tesla', ticker: 'TSLA', price: 650.75, change: 2.5, esgPoints: 87 },
    { id: 2, name: 'NextEra Energy', ticker: 'NEE', price: 75.20, change: -0.8, esgPoints: 92 },
    { id: 3, name: 'Waste Management', ticker: 'WM', price: 140.30, change: 1.2, esgPoints: 85 },
    { id: 4, name: 'Beyond Meat', ticker: 'BYND', price: 120.50, change: -1.5, esgPoints: 80 },
    { id: 5, name: 'First Solar', ticker: 'FSLR', price: 85.60, change: 3.2, esgPoints: 89 },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortBy = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    setStocks(stocks.sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Stock Listings</h2>
      <div className="flex space-x-2">
        <Input type="text" placeholder="Search stocks..." className="w-full" />
        <Button>Search</Button>
      </div>
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
            <TableRow key={stock.id}>
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
  );
};

export default StockListing;