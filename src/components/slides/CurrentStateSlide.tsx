import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Database, Network, Cpu, Zap } from 'lucide-react';
import ComplexEnterpriseAnimation from '../ComplexEnterpriseAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const CurrentStateSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const traditionalChallenges = [
    { 
      icon: <Database className="w-8 h-8 text-blue-500" />, 
      title: "Large-scale, complex ecosystems",
    },
    { 
      icon: <Network className="w-8 h-8 text-yellow-500" />, 
      title: "Data silos and integration issues",
    },
  ];

  const mlPoweredSolutions = [
    { 
      icon: <Cpu className="w-8 h-8 text-green-500" />, 
      title: "Supercharged data aggregation",
    },
    { 
      icon: <Zap className="w-8 h-8 text-purple-500" />, 
      title: "Rapid, meaningful insights",
    },
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 7));

  return (
    <div className="h-full flex flex-col p-4" onClick={nextStep}>
      <AnimatePresence>
        {step >= 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl sm:text-3xl font-semibold mb-4"
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
                className="text-xl font-medium mb-4"
              >
                Traditional Data Ecosystem Challenges
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
                    <span className="font-medium">{item.title}</span>
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
                className="text-xl font-medium mb-4"
              >
                Machine Learning-Powered Solutions
              </motion.h3>
            )}
          </AnimatePresence>
          <div className="space-y-4">
            {mlPoweredSolutions.map((item, index) => (
              <AnimatePresence key={index}>
                {step >= index + 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center"
                  >
                    <div className="mr-4">{item.icon}</div>
                    <span className="font-medium">{item.title}</span>
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