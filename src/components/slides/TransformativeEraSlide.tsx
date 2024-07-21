import React from 'react';
import { SlideProps } from "../../types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, ExternalLink } from 'lucide-react';

const TransformativeEraSlide: React.FC<SlideProps> = ({ title }) => {
  const aiAdoptionData = [
    { year: 2017, adoption: 20, generativeAI: null },
    { year: 2018, adoption: 47, generativeAI: null },
    { year: 2019, adoption: 58, generativeAI: null },
    { year: 2020, adoption: 50, generativeAI: null },
    { year: 2021, adoption: 56, generativeAI: null },
    { year: 2022, adoption: 50, generativeAI: null },
    { year: 2023, adoption: 55, generativeAI: 33 },
    { year: 2024, adoption: 72, generativeAI: 65 }
  ];

  const impacts = [
    {
      title: "Rapid AI Adoption",
      description: "Organizations are increasingly adopting AI, with a significant spike in recent years."
    },
    {
      title: "Generative AI Growth",
      description: "Generative AI has seen explosive growth, nearly doubling in adoption from 2023 to 2024."
    },
    {
      title: "Widespread Integration",
      description: "By 2024, 72% of organizations have adopted AI in at least one business function."
    },
    {
      title: "Transformative Potential",
      description: "The rapid adoption indicates AI's transformative impact across various industries."
    }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aiAdoptionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="adoption" stroke="#8884d8" name="AI Adoption" />
              <Line type="monotone" dataKey="generativeAI" stroke="#82ca9d" name="Generative AI" />
            </LineChart>
          </ResponsiveContainer>
          <div className="text-xs text-gray-500 mt-2 flex items-center">
            <span>Source: </span>
            <a 
              href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline flex items-center ml-1"
            >
              McKinsey & Company
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-4">Key Impacts</h3>
          {impacts.map((impact, index) => (
            <div key={index} className="mb-4 flex items-start">
              <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-1" />
              <div>
                <h4 className="font-medium">{impact.title}</h4>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformativeEraSlide;