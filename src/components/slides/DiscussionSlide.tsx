import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DiscussionSlide: React.FC<SlideProps> = ({ title }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const sampleQuestions = [
    {
      question: "How can small businesses start implementing AI in their enterprise software?",
      answer: "Start with identifying specific pain points, look for AI-powered solutions, and begin with small, manageable projects."
    },
    {
      question: "What are the biggest challenges in adopting AI for enterprise software?",
      answer: "Common challenges include data quality issues, lack of AI expertise, resistance to change, and privacy concerns."
    },
    {
      question: "How does AI impact data privacy and security in enterprise systems?",
      answer: "AI can enhance security but also introduces new privacy concerns. Robust data governance and compliance are crucial."
    },
    {
      question: "Can you provide examples of AI improving customer experience through enterprise software?",
      answer: "AI can power chatbots, personalize recommendations, predict customer needs, and analyze feedback at scale."
    },
    {
      question: "What skills should IT professionals develop to work with AI-enhanced enterprise software?",
      answer: "Key skills include data analysis, machine learning basics, AI ethics, cloud computing, and domain-specific knowledge."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, sampleQuestions.length + 1));

  return (
    <div className="slide h-full flex flex-col" onClick={nextStep}>
      <div className="flex-grow overflow-auto">
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-blue-100 p-4 rounded-lg mb-4"
            >
              <p className="text-sm text-gray-800 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-500" /> 
                Topics we might explore with discussion:
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {sampleQuestions.map((q, index) => (
          <AnimatePresence key={index}>
            {step >= index + 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-2 border rounded-lg overflow-hidden"
              >
                <div 
                  className="flex justify-between items-center p-3 bg-gray-100 cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-sm flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 text-gray-600" />
                    {q.question}
                  </span>
                  {openQuestion === index ? 
                    <ChevronUp className="w-4 h-4 text-gray-600" /> : 
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  }
                </div>
                {openQuestion === index && (
                  <div className="p-3 bg-white">
                    <p className="text-sm text-gray-700">{q.answer}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default DiscussionSlide;