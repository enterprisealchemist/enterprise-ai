import React from 'react';
import { SlideProps } from "../types";
import { CheckCircle, TrendingUp, Zap, Users, Cpu } from 'lucide-react';

const ConclusionSlide: React.FC<SlideProps> = ({ title }) => {
  const keyPoints = [
    { icon: <Cpu className="w-6 h-6 text-blue-500" />, text: "AI is revolutionizing enterprise software" },
    { icon: <TrendingUp className="w-6 h-6 text-green-500" />, text: "Improved decision-making through advanced analytics" },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "Automation of complex tasks" },
    { icon: <Users className="w-6 h-6 text-purple-500" />, text: "Enhanced personalization and user experience" },
    { icon: <CheckCircle className="w-6 h-6 text-red-500" />, text: "The 'Alchemical' approach transforms entire organizations" }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-medium mb-4">Key Takeaways:</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
              {point.icon}
              <span className="ml-2 text-sm">{point.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <h3 className="text-xl font-medium mb-2">The Imperative for Businesses:</h3>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-sm text-gray-800">
              Embracing AI in enterprise software is no longer optional. 
              It's a critical step for staying competitive, driving innovation, 
              and unlocking new value in today's rapidly evolving business landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;