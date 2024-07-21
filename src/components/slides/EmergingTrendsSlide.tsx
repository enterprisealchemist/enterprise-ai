import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Atom, Search, Cpu, ExternalLink } from 'lucide-react';

type TrendCategory = 'quantum' | 'explainable' | 'edge';

interface TrendInfo {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
}

type TrendsData = {
  [key in TrendCategory]: TrendInfo;
};

const EmergingTrendsSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState<TrendCategory>('quantum');

  const trends: TrendsData = {
    quantum: {
      icon: <Atom className="w-12 h-12 text-purple-500" />,
      title: "Quantum AI",
      description: (
        <div>
          <p>
            Quantum AI leverages quantum computing to enhance AI performance significantly. Quantum computers use qubits,
            which can exist in multiple states simultaneously, enabling faster processing of complex tasks and more efficient 
            training of AI models. This capability can accelerate AI algorithms, making them more powerful and effective in 
            solving complex problems.
          </p>
          <a href="https://postquantum.com/post-quantum/quantum-artificial-intelligence-qai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            Learn more at Post Quantum <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      )
    },
    explainable: {
      icon: <Search className="w-12 h-12 text-green-500" />,
      title: "Explainable AI (XAI)",
      description: (
        <div>
          <p>
            Explainable AI (XAI) aims to make AI decision-making processes transparent and understandable. By providing clear
            insights into how AI models arrive at their decisions, XAI helps build trust and accountability in AI systems. 
            Techniques such as visualization, symbolic explanations, and both ante-hoc and post-hoc methods are used to make AI 
            more interpretable and reliable.
          </p>
          <a href="https://link.springer.com/article/10.1007/s44230-023-00038-y" target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            Learn more at Springer <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      )
    },
    edge: {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Edge AI",
      description: (
        <div>
          <p>
            Edge AI processes data locally on devices rather than relying on centralized cloud systems. This approach reduces
            latency and bandwidth usage, enabling real-time decision-making and improved data privacy. Edge AI is particularly 
            beneficial for applications like autonomous vehicles, healthcare monitoring, and industrial automation, where 
            immediate data processing is crucial.
          </p>
          <a href="https://www.wevolver.com/article/2023-edge-ai-technology-report" target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
            Learn more at Wevolver <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      )
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
            <div> {trends[activeCategory].description} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergingTrendsSlide;
