import React, { useState, useEffect } from 'react';
import { SlideProps } from "../../types";
import { Zap, MessageSquare, TrendingUp, Eye, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly
import machineLearningImg from '../../images/keytechnologies/machine_learning.jpg';
import nlpImg from '../../images/keytechnologies/natural_language.jpg';
import predictiveAnalyticsImg from '../../images/keytechnologies/predictive_analytics.jpg';
import computerVisionImg from '../../images/keytechnologies/computer_vision.jpg';
import rpaImg from '../../images/keytechnologies/process_automation.jpg';

const KeyPatternsSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(0);

  const patterns = [
    {
      name: "Machine Learning",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      image: machineLearningImg
    },
    {
      name: "Natural Language Processing (NLP)",
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      image: nlpImg
    },
    {
      name: "Predictive Analytics",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      image: predictiveAnalyticsImg
    },
    {
      name: "Computer Vision",
      icon: <Eye className="w-8 h-8 text-red-500" />,
      image: computerVisionImg
    },
    {
      name: "Robotic Process Automation (RPA)",
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      image: rpaImg
    }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, patterns.length));

  useEffect(() => {
    if (step > 0) {
      setActiveIndex(step - 1);
    }
  }, [step]);

  const handleTechnologyClick = (index: number) => {
    if (index < step) {
      setActiveIndex(index);
    }
  };

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
      <div className="flex-grow flex gap-4 overflow-hidden">
        <div className="w-1/2 space-y-2 overflow-y-auto pr-2">
          {patterns.map((tech, index) => (
            <AnimatePresence key={index}>
              {step > index && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`p-2 rounded transition-colors duration-200 ${
                    index === activeIndex ? 'bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'
                  } ${index < step ? 'cursor-pointer' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTechnologyClick(index);
                  }}
                >
                  <div className="flex items-center">
                    {tech.icon}
                    <h3 className="text-lg font-medium ml-2">{tech.name}</h3>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <div className="w-1/2 bg-white-100 p-4 rounded flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {step > 0 && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full aspect-square relative"
              >
                <img 
                  src={patterns[activeIndex].image}
                  alt={patterns[activeIndex].name}
                  className="absolute inset-0 w-full h-full object-cover rounded"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default KeyPatternsSlide;