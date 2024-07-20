import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Atom, Shield, Cpu } from 'lucide-react';

type TrendCategory = 'emerging' | 'ethical' | 'strategic';

interface TrendInfo {
  icon: JSX.Element;
  title: string;
  items: string[];
}

type TrendsData = {
  [key in TrendCategory]: TrendInfo;
};

const FutureTrendsSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState<TrendCategory>('emerging');

  const trends: TrendsData = {
    emerging: {
      icon: <Atom className="w-12 h-12 text-purple-500" />,
      title: "Emerging AI Technologies",
      items: [
        "Quantum AI: Leveraging quantum computing for exponential AI capabilities",
        "Explainable AI (XAI): Making AI decision-making processes more transparent",
        "Edge AI: Bringing AI capabilities closer to data sources for faster processing"
      ]
    },
    ethical: {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Ethical Considerations",
      items: [
        "AI bias mitigation: Ensuring fairness and reducing discrimination in AI systems",
        "Privacy preservation: Balancing data utilization with individual privacy rights",
        "Accountability: Establishing frameworks for AI decision responsibility"
      ]
    },
    strategic: {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Evolving Role in Strategic Decision-Making",
      items: [
        "AI-augmented strategy: Integrating AI insights into high-level planning",
        "Real-time adaptability: Enabling rapid strategy shifts based on AI-driven market analysis",
        "Cross-functional integration: Breaking silos with AI-powered holistic decision support"
      ]
    }
  };

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex">
        <div className="w-1/3 pr-4">
          {(Object.keys(trends) as TrendCategory[]).map((key) => (
            <div
              key={key}
              className={`cursor-pointer p-4 rounded-lg mb-4 flex items-center ${
                activeCategory === key ? 'bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              {trends[key].icon}
              <span className="ml-2 font-medium">{trends[key].title}</span>
            </div>
          ))}
        </div>
        <div className="w-2/3 pl-4">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h3 className="text-xl font-semibold mb-4">{trends[activeCategory].title}</h3>
            <ul className="list-disc list-inside space-y-2">
              {trends[activeCategory].items.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTrendsSlide;