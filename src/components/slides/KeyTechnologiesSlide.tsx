import React, { useState, useEffect } from 'react';
import { SlideProps } from "../../types";
import { Zap, MessageSquare, TrendingUp, Eye, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const KeyTechnologiesSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [imagePath, setImagePath] = useState<string | null>(null);

  const technologies = [
    {
      name: "Machine Learning",
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      image: "/keytechnologies/machine_learning.jpg"
    },
    {
      name: "Natural Language Processing (NLP)",
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      image: "/keytechnologies/natural_language.jpg"
    },
    {
      name: "Predictive Analytics",
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      image: "/keytechnologies/predictive_analytics.jpg"
    },
    {
      name: "Computer Vision",
      icon: <Eye className="w-8 h-8 text-red-500" />,
      image: "/keytechnologies/computer_vision.jpg"
    },
    {
      name: "Robotic Process Automation (RPA)",
      icon: <Bot className="w-8 h-8 text-orange-500" />,
      image: "/keytechnologies/process_automation.jpg"
    }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, technologies.length));

  useEffect(() => {
    if (step > 0) {
      setActiveIndex(step - 1);
      setImagePath(technologies[step - 1].image);
    }
  }, [step]);

  const handleTechnologyClick = (index: number) => {
    if (index < step) {
      setActiveIndex(index);
      setImagePath(technologies[index].image);
    }
  };

  return (
    <div className="slide h-full flex flex-col" onClick={nextStep}>
      <AnimatePresence>
        {step >= 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl font-semibold mb-2"
          >
            {title}
          </motion.h2>
        )}
      </AnimatePresence>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {technologies.map((tech, index) => (
            <AnimatePresence key={index}>
              {step >= index + 1 && (
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
        <div className="bg-gray-100 p-4 rounded overflow-hidden">
          <AnimatePresence mode="wait">
            {step > 0 && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">{technologies[activeIndex].name}</h3>
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 mb-4">
                  {imagePath ? (
                    <>
                      <img 
                        src={imagePath}
                        alt={technologies[activeIndex].name}
                        className="w-full h-full object-cover"
                        onError={() => console.error(`Failed to load image: ${imagePath}`)}
                      />
                      <p className="absolute bottom-0 left-0 bg-black text-white p-1 text-xs">
                        Image path: {imagePath}
                      </p>
                    </>
                  ) : (
                    <p>[Image Placeholder for {technologies[activeIndex].name}]</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default KeyTechnologiesSlide;