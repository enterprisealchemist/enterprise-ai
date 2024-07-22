import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Beaker, ArrowRight, Brain, Lightbulb, Users, Rocket } from 'lucide-react';
import AlchemySymbolAnimation from '../AlchemySymbolAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const AlchemyAnalogySlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const alchemicalApproach = [
    {
      title: "Augmenting Human Intelligence",
      icon: <Brain className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Unlocking Creativity",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Empowering Collaboration",
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: "Accelerating Skill Acquisition",
      icon: <Rocket className="w-8 h-8 text-blue-500" />
    }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, alchemicalApproach.length + 2));

  return (
<div className="slide h-full flex flex-col relative overflow-hidden" onClick={nextStep}>
  <div className="absolute -top-11 right-11 scale-75 opacity-40 pointer-events-none overflow-hidden">
    <AlchemySymbolAnimation />
  </div>
  
  <div className="z-10 relative overflow-hidden">
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

    <div className="grid grid-cols-1 gap-6 mb-4 overflow-hidden">
      {alchemicalApproach.map((item, index) => (
        <AnimatePresence key={index}>
          {step >= index + 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-start overflow-hidden"
            >
              {item.icon}
              <h3 className="text-lg font-medium ml-4 overflow-hidden">{item.title}</h3>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>

    <AnimatePresence>
      {step > alchemicalApproach.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex justify-center items-center overflow-hidden"
        >
          <span className="text-lg font-medium overflow-hidden">Intention</span>
          <ArrowRight className="w-8 h-8 mx-4 text-blue-500 overflow-hidden" />
          <span className="text-lg font-medium overflow-hidden">Aggregation</span>
          <ArrowRight className="w-8 h-8 mx-4 text-blue-500 overflow-hidden" />
          <span className="text-lg font-medium overflow-hidden">Capability</span>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</div>
  );
};

export default AlchemyAnalogySlide;