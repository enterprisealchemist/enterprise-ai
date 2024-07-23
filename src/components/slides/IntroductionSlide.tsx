import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { motion, AnimatePresence } from 'framer-motion';

const IntroductionSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);
  const nextStep = () => setStep(prev => prev + 1);
  return (
    <div className="slide h-full flex flex-col items-center justify-center p-8 bg-white" onClick={nextStep}>
      <AnimatePresence>
        {step >= 1 && (
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-l-4 border-lapis-lazuli pl-6 py-2 italic text-gray-700 max-w-3xl text-xl"
          >
            "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
            <footer className="text-base mt-4 text-celestial-blue non-italic">
              – Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence
            </footer>
          </motion.blockquote>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroductionSlide;