import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const News = () => {
  const [newsArticles, setNewsArticles] = useState([
    { id: 1, title: "Tesla's New Solar Roof Tiles Break Efficiency Records", content: "Tesla's latest solar roof tiles have achieved a record-breaking efficiency of 25%, marking a significant leap in residential solar technology." },
    { id: 2, title: "Wind Energy Surpasses Coal in Europe for the First Time", content: "In a historic milestone, wind energy generation in Europe has surpassed coal-powered electricity for the first time, signaling a major shift towards renewable energy." },
    { id: 3, title: "New Biodegradable Plastic Alternative Developed from Seaweed", content: "Scientists have created a fully biodegradable plastic alternative using seaweed, potentially revolutionizing the packaging industry and reducing ocean pollution." },
  ]);

  const [newArticle, setNewArticle] = useState({ title: '', content: '', image: '' });

  const handleInputChange = (e) => {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewsArticles([...newsArticles, { ...newArticle, id: newsArticles.length + 1 }]);
    setNewArticle({ title: '', content: '', image: '' });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">News and Updates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;