import React from 'react';
import { SlideProps } from "../../types";
import { Database, Cpu, UserPen } from 'lucide-react';

const IntroductionSlide: React.FC<SlideProps> = ({ title }) => {
  const keyPoints = [
    { icon: <Database className="w-8 h-8 text-blue-500" />, text: "AI is poised to reshape the landscape of enterprise data solutions." },
    { icon: <Cpu className="w-8 h-8 text-green-500" />, text: "We are in a transformative time with emerging techonologies on the horizon." },
    { icon: <UserPen className="w-8 h-8 text-purple-500" />, text: "AI has massive potential as a tool for supercharging human productivity." }
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