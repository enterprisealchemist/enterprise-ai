import React from 'react';
import { SlideProps } from "../../types";
import { Brain, Cpu, BarChart } from 'lucide-react';

const IntroductionSlide: React.FC<SlideProps> = ({ title }) => {
  const keyPoints = [
    { icon: <Brain className="w-8 h-8 text-blue-500" />, text: "AI is reshaping the landscape of enterprise software." },
    { icon: <Cpu className="w-8 h-8 text-green-500" />, text: "From automation to advanced analytics, AI is driving unprecedented change." },
    { icon: <BarChart className="w-8 h-8 text-purple-500" />, text: "AI is revolutionizing decision-making in enterprise systems." }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex flex-col justify-center">
        {keyPoints.map((point, index) => (
          <div key={index} className="flex items-center mb-6">
            {point.icon}
            <p className="ml-4 text-lg">{point.text}</p>
          </div>
        ))}
        <blockquote className="border-l-4 border-blue-500 pl-4 mt-8 italic text-gray-700">
          "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
          <footer className="text-sm mt-2 text-gray-600">– Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default IntroductionSlide;