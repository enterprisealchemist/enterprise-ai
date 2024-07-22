import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Building, DollarSign, Server, Clock, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudySlide: React.FC<SlideProps> = ({ title }) => {
  const [step, setStep] = useState(0);

  const caseStudy = {
    company: "Baker Hughes",
    challenge: "Optimizing industrial asset management (IAM) for a large hydrocarbon producer",
    solution: "Implementation of AI-driven predictive maintenance system",
    keyResults: [
      { icon: <DollarSign className="w-8 h-8 text-green-500" />, text: "$10M+ USD", subtext: "annual economic value" },
      { icon: <Server className="w-8 h-8 text-blue-500" />, text: "2,500+", subtext: "assets modelled" },
      { icon: <Clock className="w-8 h-8 text-purple-500" />, text: "2 Years", subtext: "advance notice" },
    ],
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, caseStudy.keyResults.length + 1));

  return (
    <div className="slide h-full flex flex-col" onClick={nextStep}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          <Building className="w-8 h-8 text-blue-500 mr-2" />
          <h3 className="text-xl font-medium">{caseStudy.company}</h3>
        </div>
        <p className="mb-2"><strong>Challenge:</strong> {caseStudy.challenge}</p>
        <p className="mb-2"><strong>Solution:</strong> {caseStudy.solution}</p>        
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Key Results:</h4>
          <div className="grid grid-cols-3 gap-4">
            {caseStudy.keyResults.map((result, index) => (
              <AnimatePresence key={index}>
                {step > index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-100 p-4 rounded-lg"
                  >
                    <div className="flex items-center justify-center mb-2">
                      {result.icon}
                      <span className="ml-2 text-xl font-bold">{result.text}</span>
                    </div>
                    <p className="text-sm text-center">{result.subtext}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {step > caseStudy.keyResults.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4"
            >
              <h4 className="text-lg font-semibold mb-2">Source:</h4>
              <div className="flex items-center text-sm">
                <ExternalLink className="w-4 h-4 mr-2 text-blue-500" />
                <a 
                  href="https://www.bakerhughes.com/bhc3/case-study/enterprise-ai-predicting-asset-failures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Baker Hughes: Enterprise AI for Predicting Asset Failures
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudySlide;