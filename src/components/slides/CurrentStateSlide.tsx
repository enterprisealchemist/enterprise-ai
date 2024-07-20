import React from 'react';
import { SlideProps } from "../../types";
import { Database, AlertTriangle, TrendingUp } from 'lucide-react';

const CurrentStateSlide: React.FC<SlideProps> = ({ title }) => {
  const traditionalSoftware = [
    { icon: <Database className="w-6 h-6 text-blue-500" />, text: "Large-scale, complex applications" },
    { icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />, text: "Inflexibility to rapid market changes" },
  ];

  const needForIntelligence = [
    { icon: <TrendingUp className="w-6 h-6 text-green-500" />, text: "Advanced analytics and automation" },
    { icon: <Database className="w-6 h-6 text-purple-500" />, text: "Insights and decision-making at our fingertips" },
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex">
        <div className="w-1/2 pr-4">
          <h3 className="text-xl font-medium mb-4">Traditional Enterprise Software</h3>
          <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto">
            {traditionalSoftware.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                {item.icon}
                <span className="ml-2 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-medium mb-4">Need for Intelligent Solutions</h3>
          <div className="bg-blue-100 p-4 rounded-lg h-64 overflow-y-auto">
            {needForIntelligence.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                {item.icon}
                <span className="ml-2 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-medium">The gap between traditional software and intelligent solutions represents the opportunity for AI-driven transformation</p>
      </div>
    </div>
  );
};

export default CurrentStateSlide;