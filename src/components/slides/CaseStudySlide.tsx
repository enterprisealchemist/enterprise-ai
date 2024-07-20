import React from 'react';
import { SlideProps } from "../../types";
import { Building, Zap, DollarSign, BarChart } from 'lucide-react';

const CaseStudySlide: React.FC<SlideProps> = ({ title }) => {
  const caseStudy = {
    company: "Global Utility Co. ***PLACEHOLDER***",
    challenge: "Optimizing maintenance schedules for a vast network of power distribution assets",
    solution: "Implementation of AI-driven predictive maintenance system",
    benefits: [
      { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "30% reduction in unexpected downtime" },
      { icon: <DollarSign className="w-6 h-6 text-green-500" />, text: "20% decrease in maintenance costs" },
      { icon: <BarChart className="w-6 h-6 text-blue-500" />, text: "15% improvement in asset lifespan" },
    ],
    roi: "The AI system paid for itself within 18 months and is projected to save $50 million over 5 years."
  };

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <Building className="w-8 h-8 text-blue-500 mr-2" />
          <h3 className="text-xl font-medium">{caseStudy.company}</h3>
        </div>
        <p className="mb-4"><strong>Challenge:</strong> {caseStudy.challenge}</p>
        <p className="mb-4"><strong>Solution:</strong> {caseStudy.solution}</p>
        <div className="mb-4">
          <strong>Benefits:</strong>
          <ul className="mt-2 space-y-2">
            {caseStudy.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                {benefit.icon}
                <span className="ml-2">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-auto"><strong>ROI:</strong> {caseStudy.roi}</p>
      </div>
    </div>
  );
};

export default CaseStudySlide;