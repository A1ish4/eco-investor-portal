import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AIChat = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement actual API call to AI backend
    setResponse(`AI response to: "${query}"`);
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
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIChat;