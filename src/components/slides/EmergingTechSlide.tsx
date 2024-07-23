import React, { useState, useEffect } from 'react';
import { SlideProps } from "../../types";
import { Atom, Search, Cpu, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '../OptimizedImage';

// Import images
import quantumAIImg from '../../images/emergingtech/quantum_ai.jpg';
import explainableAIImg from '../../images/emergingtech/explainable_ai.jpg';
import edgeAIImg from '../../images/emergingtech/edge_ai.jpg';

type TrendCategory = 'quantum' | 'explainable' | 'edge';

interface TrendInfo {
  icon: JSX.Element;
  title: string;
  image: string;
  links: { href: string; text: string; target?: string; rel?: string }[];
}

type TrendsData = {
  [key in TrendCategory]: TrendInfo;
};

const EmergingTechSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeCategory, setActiveCategory] = useState<TrendCategory>('quantum');
  const [nextCategory, setNextCategory] = useState<TrendCategory>('explainable');
  const [step, setStep] = useState(0);

  const trends: TrendsData = {
    quantum: {
      icon: <Atom className="w-12 h-12 text-celestial-blue" />,
      title: "Quantum AI",
      image: quantumAIImg,
      links: [
        {
          href: "https://postquantum.com/post-quantum/quantum-artificial-intelligence-qai/",
          text: "Learn more at Post Quantum",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    explainable: {
      icon: <Search className="w-12 h-12 text-red-violet" />,
      title: "Explainable AI (XAI)",
      image: explainableAIImg,
      links: [
        {
          href: "https://link.springer.com/article/10.1007/s44230-023-00038-y",
          text: "Learn more at Springer",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    },
    edge: {
      icon: <Cpu className="w-12 h-12 text-yellow-green" />,
      title: "Edge AI",
      image: edgeAIImg,
      links: [
        {
          href: "https://www.wevolver.com/article/2023-edge-ai-technology-report",
          text: "Learn more at Wevolver",
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, Object.keys(trends).length));

  useEffect(() => {
    const categories = Object.keys(trends) as TrendCategory[];
    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    setNextCategory(categories[nextIndex]);
  }, [activeCategory]);

  return (
    <div className="slide h-full flex flex-col overflow-hidden" onClick={nextStep}>
      <AnimatePresence>
        {step >= 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl font-semibold mb-4"
          >
            {title}
          </motion.h2>
        )}
      </AnimatePresence>
      <div className="flex-grow flex overflow-hidden">
        <div className="w-1/3 pr-4 overflow-hidden">
          {(Object.keys(trends) as TrendCategory[]).map((key, index) => (
            <AnimatePresence key={key}>
              {step >= index && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`cursor-pointer p-4 rounded-lg mb-4 flex items-center ${
                    activeCategory === key ? 'bg-gray-200' : 'bg-white-cream hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(key)}
                  onAnimationComplete={() => step >= index && setActiveCategory(key)}
                >
                  {trends[key].icon}
                  <span className="ml-2 font-medium">{trends[key].title}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <div className="w-2/3 pl-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {step >= 0 && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg h-full flex flex-col overflow-hidden"
              >
                <div className="flex-grow relative overflow-hidden">
                  <OptimizedImage 
                    src={trends[activeCategory].image}
                    alt={trends[activeCategory].title}
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                  {/* Preload next image */}
                  <OptimizedImage 
                    src={trends[nextCategory].image}
                    alt={trends[nextCategory].title}
                    className="hidden"
                  />
                </div>
                <div className="mt-4 overflow-hidden">
                  {trends[activeCategory].links.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block mt-2 text-celestial-blue overflow-hidden">
                      <ExternalLink className="w-5 h-5 text-celestial-blue inline-block mr-2" />
                      {link.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EmergingTechSlide;