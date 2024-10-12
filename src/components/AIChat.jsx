import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIChat = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    if (query === 'I want to invest in low-risk renewable energy.') {
      setResponse(`
        Investment Recommendation Output

        1. NextEra Energy (NEE)
        • Overview: A leader in renewable energy focused on wind and solar power.
        • Current Price: $75.00
        • Growth Potential: Target price: $90.00 (+20%)
        • Why Invest? Consistent dividend payments. Strong commitment to sustainability.
        • Buying Strategy: Buy when the price dips below $73.00 (historically strong support level).
        • Selling Strategy: Sell if the price reaches $90.00 or if major regulatory changes impact the sector.
        • Historical Data: Stock has historically rallied during renewable energy policy announcements.
        • Recent News: Recently secured contracts for new solar projects expected to increase revenue.
        • Visuals: Line Chart: Showing price trend over the past year with key price points highlighted.

        2. Enphase Energy (ENPH)
        • Overview: Innovator in solar energy technology, particularly in solar microinverters.
        • Current Price: $120.00
        • Growth Potential: Target price: $160.00 (+33%)
        • Why Invest? High growth rate in the solar market. Increasing demand for innovative technologies.
        • Buying Strategy: Buy on any dip below $115.00 (predicted strong earnings growth).
        • Selling Strategy: Sell if price exceeds $160.00, especially if quarterly results underperform.
        • Historical Data: Significant price spikes followed favorable solar incentives in legislation.
        • Recent News: Partnered with a major utility company to expand market reach.

        3. Brookfield Renewable Partners (BEP)
        • Overview: Focuses on hydroelectric, wind, and solar energy.
        • Current Price: $40.00
        • Growth Potential: Target price: $52.00 (+30%)
        • Why Invest? Strong ESG performance. Stable dividend yield.
        • Buying Strategy: Buy when the price is below $38.00 (based on past trends).
        • Selling Strategy: Sell if the stock drops below $35.00 (indicating potential market concerns).
        • Historical Data: Price increased significantly after quarterly earnings exceeded estimates.
        • Recent News: Increased government support for renewable investments reported.
        • Visuals: Pie Chart: Showing energy portfolio breakdown by type (hydro, wind, solar).
      `);
    } else {
      // TODO: Implement actual API call to AI backend
      setResponse(`AI response to: "${query}"`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">AI Chat</h2>
      <form onSubmit={handleQuerySubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Ask about stocks, ESG, or investment strategies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
        />
        <Button type="submit">Send</Button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold">AI Response:</p>
          <pre className="whitespace-pre-wrap">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default AIChat;
