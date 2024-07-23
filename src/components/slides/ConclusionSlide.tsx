import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Activity, Blend,  Users, Lightbulb, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConclusionSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const keyPoints = [
    { icon: <Activity className="w-6 h-6 text-red-violet" />, text: "The time for AI adoption is now" },
    { icon: <Blend className="w-6 h-6 text-lapis-lazuli" />, text: "AI is most powerful when multi-modal" },
    { icon: <Users className="w-6 h-6 text-avocado" />, text: "Ethics, integrity, & security are crucial" },
    { icon: <Lightbulb className="w-6 h-6 text-jonquil" />, text: "AI can unlock latent potential" },
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
                  className="flex items-center bg-white-off p-3 rounded-lg"
                >
                  {point.icon}
                  <span className="ml-2 text-md">{point.text}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <AnimatePresence>
          {step >= totalSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center"
            >
              <blockquote className="border-l-4 border-lapis-lazuli pl-6 py-2 italic text-paynes-gray max-w-3xl text-xl text-center">
                "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
                <footer className="text-base mt-4 text-celestial-blue non-italic">
                  – Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence
                </footer>
              </blockquote>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {step >= totalSteps - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-auto"
            >
              <h3 className="text-xl font-medium mb-2 flex items-center">
                <Star className="w-6 h-6 text-orange-peel mr-2" />
                Meta-Example
              </h3>
              <div className="bg-gray-200 bg-opacity-20 p-4 rounded-lg">
                <p className="text-md text-rich-black">
                  This very presentation was created using multi-modal AI assistance to generate content, code, and more.
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