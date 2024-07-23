import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Database, Network, Cpu, Zap } from 'lucide-react';
import ComplexEnterpriseAnimation from '../ComplexEnterpriseAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const CurrentStateSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const traditionalChallenges = [
    { 
      icon: <Database className="w-8 h-8 text-pumpkin" />, 
      title: "Large-scale, complex ecosystems",
    },
    { 
      icon: <Network className="w-8 h-8 text-celestial-blue" />, 
      title: "Data silos and integration issues",
    },
  ];

  const machineLearning = [
    { 
      icon: <Cpu className="w-8 h-8 text-yellow-green" />, 
      title: "Supercharged data aggregation",
    },
    { 
      icon: <Zap className="w-8 h-8 text-jonquil" />, 
      title: "Rapid, meaningful insights",
    },
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 7));

  return (
    <div className="h-full flex flex-col p-4 bg-white" onClick={nextStep}>
      <AnimatePresence>
        {step >= 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-rich-black"
          >
            {title}
          </motion.h2>
        )}
      </AnimatePresence>
      
      <div className="mb-4 h-1/3">
        <ComplexEnterpriseAnimation />
      </div>
      
      <div className="flex-grow flex space-x-4">
        <div className="w-1/2">
          <AnimatePresence>
            {step >= 1 && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl font-medium mb-4 text-rich-black"
              >
                Traditional Challenges
              </motion.h3>
            )}
          </AnimatePresence>
          <div className="space-y-4">
            {traditionalChallenges.map((item, index) => (
              <AnimatePresence key={index}>
                {step >= index + 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <span className="font-medium text-gray-700">{item.title}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <AnimatePresence>
            {step >= 4 && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl font-medium mb-4 text-rich-black"
              >
                Machine Learning
              </motion.h3>
            )}
          </AnimatePresence>
          <div className="space-y-4">
            {machineLearning.map((item, index) => (
              <AnimatePresence key={index}>
                {step >= index + 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <span className="font-medium text-gray-700">{item.title}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStateSlide;