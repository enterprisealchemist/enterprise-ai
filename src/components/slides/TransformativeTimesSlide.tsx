import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TransformativeTimesSlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const aiAdoptionData = [
    { year: 2017, adoption: 20, generativeAI: null },
    { year: 2018, adoption: 47, generativeAI: null },
    { year: 2019, adoption: 58, generativeAI: null },
    { year: 2020, adoption: 50, generativeAI: null },
    { year: 2021, adoption: 56, generativeAI: null },
    { year: 2022, adoption: 50, generativeAI: null },
    { year: 2023, adoption: 55, generativeAI: 33 },
    { year: 2024, adoption: 72, generativeAI: 65 }
  ];

  const impacts = [
    { title: "Rapid AI Adoption" },
    { title: "Generative AI Growth" },
    { title: "Widespread Integration" }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 7));

  return (
    <div className="slide h-full flex flex-col overflow-hidden" onClick={nextStep}>
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
      <div className="flex-grow flex overflow-hidden">
        <div className="w-1/2 pr-4 overflow-hidden">
          <AnimatePresence>
            {step >= 0 && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-md font-semibold mb-2"
              >
                Organizations that have adopted AI in at least 1 business function (%)
              </motion.h3>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="overflow-hidden"
              >
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={aiAdoptionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="adoption" stroke="#8884d8" name="AI Adoption" />
                    <Line type="monotone" dataKey="generativeAI" stroke="#82ca9d" name="Generative AI" />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xs text-gray-500 mt-2 flex items-center overflow-hidden"
              >
                <span>Source: </span>
                <a 
                  href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center ml-1"
                >
                  McKinsey & Company
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-1/2 pl-4 overflow-hidden">
          <AnimatePresence>
            {step >= 1 && (
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl font-semibold mb-4"
              >
                Observations
              </motion.h3>
            )}
          </AnimatePresence>
          {impacts.map((impact, index) => (
            <AnimatePresence key={index}>
              {step >= index + 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="mb-4 flex items-start overflow-hidden"
                >
                  <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-1" />
                  <h4 className="font-medium">{impact.title}</h4>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformativeTimesSlide;