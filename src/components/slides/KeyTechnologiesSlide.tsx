import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Zap, MessageSquare, TrendingUp, Eye, Bot } from 'lucide-react';

const KeyTechnologiesSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const technologies = [
    {
      name: "Machine Learning",
      description: "Algorithms that improve through experience and data",
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      name: "Natural Language Processing",
      description: "Enabling computers to understand and generate human language",
      icon: <MessageSquare className="w-8 h-8 text-green-500" />
    },
    {
      name: "Predictive Analytics",
      description: "Using historical data to forecast future trends",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />
    },
    {
      name: "Computer Vision",
      description: "Machines interpreting and acting on visual information",
      icon: <Eye className="w-8 h-8 text-red-500" />
    },
    {
      name: "Robotic Process Automation (RPA)",
      description: "Software bots automating repetitive tasks",
      icon: <Bot className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 rounded transition-colors duration-200 ${
                index === activeIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center">
                {tech.icon}
                <h3 className="text-lg font-medium ml-2">{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">{technologies[activeIndex].name}</h3>
          <p className="text-gray-700">{technologies[activeIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyTechnologiesSlide;