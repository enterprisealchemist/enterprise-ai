import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { AlertTriangle, Shield, Lock, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RisksChallengesSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const risks = [
    { 
      icon: <AlertTriangle className="w-16 h-16 text-jonquil" />, 
      title: "Data Integrity & Model Accuracy",
      color: "bg-gray-600"
    },
    { 
      icon: <Shield className="w-16 h-16 text-avocado" />, 
      title: "Bias & Discrimination",
      color: "bg-gray-800"
    },
    { 
      icon: <Lock className="w-16 h-16 text-celestial-blue" />, 
      title: "Cybersecurity Risks",
      color: "bg-gray-600"
    }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, risks.length + 1));

  return (
    <div className="slide h-full flex flex-col overflow-hidden" onClick={nextStep}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-8 text-rich-black"
      >
        {title}
      </motion.h2>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex items-center justify-center flex-grow">
          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
            {risks.map((risk, index) => (
              <div key={index} className="relative overflow-hidden aspect-square">
                <AnimatePresence>
                  {step > index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 100, damping: 10 }}
                      className={`${risk.color} p-6 rounded-lg flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 absolute inset-0`}
                    >
                      <motion.div 
                        className="mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        {risk.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-medium text-white-off"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {risk.title}
                      </motion.h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {step >= risks.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 text-sm text-celestial-blue flex justify-center items-center"
            >
              <a 
                href="https://www.weforum.org/agenda/2023/06/cybersecurity-and-ai-challenges-opportunities/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-celestial-blue hover:underline ml-1 mr-2 flex items-center"
              >
                World Economic Forum <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <span className='text-rich-black'>|</span>
              <a 
                href="https://kpmg.com/us/en/articles/2023/artificial-intelligence-survey-23.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-celestial-blue hover:underline ml-2 flex items-center"
              >
                KPMG US AI Risk Survey Report 2023 <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RisksChallengesSlide;