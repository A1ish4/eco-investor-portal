import React from 'react';
import { useParams } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: 'Introduction to Sustainable Investing',
    content: `
      <h2>What is Sustainable Investing?</h2>
      <p>Sustainable investing, also known as socially responsible investing or ESG investing, is an investment strategy that considers both financial returns and social/environmental good. It aims to promote positive change while generating long-term competitive financial returns.</p>
      
      <h2>Key Principles of Sustainable Investing</h2>
      <ul>
        <li>Environmental stewardship</li>
        <li>Social responsibility</li>
        <li>Good governance practices</li>
      </ul>

      <h2>Benefits of Sustainable Investing</h2>
      <ol>
        <li>Potential for competitive financial returns</li>
        <li>Positive impact on society and the environment</li>
        <li>Alignment with personal values</li>
        <li>Risk mitigation through ESG considerations</li>
      </ol>
    `
  },
  {
    id: 2,
    title: 'Understanding ESG Metrics',
    content: `
      <h2>What are ESG Metrics?</h2>
      <p>ESG metrics are a set of standards used by socially conscious investors to screen potential investments. ESG stands for Environmental, Social, and Governance.</p>

      <h2>Environmental Factors</h2>
      <ul>
        <li>Carbon emissions</li>
        <li>Water usage</li>
        <li>Waste management</li>
        <li>Renewable energy adoption</li>
      </ul>

      <h2>Social Factors</h2>
      <ul>
        <li>Employee diversity and inclusion</li>
        <li>Human rights in the supply chain</li>
        <li>Customer satisfaction</li>
        <li>Data protection and privacy</li>
      </ul>

      <h2>Governance Factors</h2>
      <ul>
        <li>Board diversity</li>
        <li>Executive compensation</li>
        <li>Shareholder rights</li>
        <li>Business ethics</li>
      </ul>
    `
  },
  // Add content for modules 3 and 4 here
];

const LearningModule = () => {
  const { moduleId } = useParams();
  const module = modules.find(m => m.id === parseInt(moduleId));

  if (!module) {
    return <div>Module not found</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{module.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: module.content }}></div>
    </div>
  );
};

export default LearningModule;