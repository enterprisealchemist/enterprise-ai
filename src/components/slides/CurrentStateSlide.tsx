import React from 'react';
import { SlideProps } from "../../types";
import { Database, Network, Cpu, Zap } from 'lucide-react';
import ComplexEnterpriseAnimation from '../ComplexEnterpriseAnimation';

const CurrentStateSlide: React.FC<SlideProps> = ({ title }) => {
  const traditionalChallenges = [
    { 
      icon: <Database className="w-6 h-6 text-blue-500" />, 
      title: "Large-scale, complex ecosystems",
      description: "Enterprise data ecosystems are often vast and intricate, making it challenging to extract meaningful insights efficiently."
    },
    { 
      icon: <Network className="w-6 h-6 text-yellow-500" />, 
      title: "Data silos and integration issues",
      description: "Traditional systems often struggle with data silos, hindering the ability to aggregate and analyze information across the entire ecosystem."
    },
  ];

  const mlPoweredSolutions = [
    { 
      icon: <Cpu className="w-6 h-6 text-green-500" />, 
      title: "Supercharged data aggregation",
      description: "Machine Learning enables us to aggregate information more effectively than ever before, breaking down data silos and creating a unified view of the enterprise ecosystem."
    },
    { 
      icon: <Zap className="w-6 h-6 text-purple-500" />, 
      title: "Rapid, meaningful insights",
      description: "With ML-powered analytics, we can extract incredibly meaningful details in a fraction of the time it took previously, enabling faster and more informed decision-making."
    },
  ];

  return (
    <div className="h-full flex flex-col p-4">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
      <div className="mb-4 h-1/3">
        <ComplexEnterpriseAnimation />
      </div>
      <div className="flex-grow flex space-x-4">
        <div className="w-1/2">
          <h3 className="text-xl font-medium mb-2">Traditional Data Ecosystem Challenges</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            {traditionalChallenges.map((item, index) => (
              <div key={index} className="mb-2 flex items-start">
                <div className="mr-2 mt-1">{item.icon}</div>
                <div>
                  <span className="font-medium text-sm">{item.title}</span>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-medium mb-2">Machine Learning-Powered Solutions</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            {mlPoweredSolutions.map((item, index) => (
              <div key={index} className="mb-2 flex items-start">
                <div className="mr-2 mt-1">{item.icon}</div>
                <div>
                  <span className="font-medium text-sm">{item.title}</span>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStateSlide;