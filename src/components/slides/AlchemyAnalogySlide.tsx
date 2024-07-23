import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Beaker, Brain, Lightbulb, Users, Rocket } from 'lucide-react';
import AlchemySymbolAnimation from '../AlchemySymbolAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const AlchemyAnalogySlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const alchemyEnhancements = [
    {
      title: "Intelligence",
      icon: <Brain className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Creativity",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Collaboration",
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: "Learning",
      icon: <Rocket className="w-8 h-8 text-blue-500" />
    }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, alchemyEnhancements.length + 2));

  return (
    <div className="slide h-full flex flex-col relative overflow-hidden" onClick={nextStep}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="scale-100 opacity-40">
          <AlchemySymbolAnimation />
        </div>
      </div>
  
      <div className="z-10 relative overflow-hidden flex flex-col h-full">
        <AnimatePresence>
          {step >= 0 && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl font-semibold mb-4 overflow-hidden"
            >
              {title}
            </motion.h2>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-start mb-6 overflow-hidden"
            >
              <div className="flex items-start mb-6 overflow-hidden">
                <Beaker className="w-8 h-8 text-gray-400 mr-2 flex-shrink-0 mt-1" />
                <blockquote className="italic text-gray-600 overflow-hidden">
                  "Alchemy neither composes nor mixes: it increases and activates that which already exists in a latent state."
                  <footer className="text-sm mt-2 text-gray-500">
                    — Franz Hartmann, German medical doctor and one of the most important theosophical writers of the 19<sup>th</sup> century
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center mb-4"
              >
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl font-medium mb-4 whitespace-nowrap"
                >
                  With AI we can accelerate...
                </motion.h3>
                <div className="flex justify-center items-center space-x-8">
                  {alchemyEnhancements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex flex-col items-center"
                    >
                      <div className="mb-2">{item.icon}</div>
                      <h3 className="text-sm font-light text-center">{item.title}</h3>
                    </motion.div>
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

export default AlchemyAnalogySlide;