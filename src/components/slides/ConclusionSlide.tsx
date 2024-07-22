import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Brain, Zap, Users, Lightbulb, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConclusionSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const keyPoints = [
    { icon: <Brain className="w-6 h-6 text-blue-500" />, text: "AI amplifies human intelligence" },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "AI-driven analytics enhance decision-making" },
    { icon: <Users className="w-6 h-6 text-green-500" />, text: "Ethical considerations are crucial" },
    { icon: <Lightbulb className="w-6 h-6 text-purple-500" />, text: "Synergy of human creativity and AI capabilities" },
  ];

  const totalSteps = keyPoints.length + 2;
  
  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));

  return (
    <div className="slide h-full flex flex-col" onClick={nextStep}>
      <div className="flex-grow flex flex-col overflow-hidden">
        <AnimatePresence>
          {step >= 0 && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl font-medium mb-4"
            >
              Key Takeaways:
            </motion.h3>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {keyPoints.map((point, index) => (
            <AnimatePresence key={index}>
              {step >= index + 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center bg-gray-100 p-3 rounded-lg"
                >
                  {point.icon}
                  <span className="ml-2 text-md">{point.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <AnimatePresence>
          {step >= totalSteps - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white-100 p-4 rounded-lg mb-6 flex items-center justify-center"
            >
              <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 max-w-3xl text-xl text-center">
                "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
                <footer className="text-base mt-4 text-gray-600 non-italic">
                  – Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence
                </footer>
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step === totalSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-auto"
            >
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Meta-Example
              </h3>
              <div className="bg-space-cadet bg-opacity-20 p-4 rounded-lg">
                <p className="text-md text-space-cadet">
                  This very presentation was created using multi-modal AI assistance to generate content, code, sources, and more.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ConclusionSlide;