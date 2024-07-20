import React from 'react';
import { SlideProps } from "../../types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle } from 'lucide-react';

const TransformativeImpactSlide: React.FC<SlideProps> = ({ title }) => {
  const impacts = [
    {
      title: "Improved Data Analysis",
      value: 85,
      description: "AI enables deeper, faster analysis of vast datasets."
    },
    {
      title: "Enhanced Decision-Making",
      value: 75,
      description: "AI-driven recommendations support more informed decisions."
    },
    {
      title: "Task Automation",
      value: 90,
      description: "AI can handle intricate, time-consuming tasks."
    },
    {
      title: "Personalization",
      value: 80,
      description: "AI enables tailored interactions and experiences."
    },
    {
      title: "Risk Management",
      value: 70,
      description: "Predictive AI models enhance risk assessment and forecasting."
    }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impacts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
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

export default TransformativeImpactSlide;