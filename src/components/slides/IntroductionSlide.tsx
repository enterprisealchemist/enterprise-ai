import React from 'react';
import { SlideProps } from "../../types";

const IntroductionSlide: React.FC<SlideProps> = ({ title }) => {
  return (
    <div className="slide h-full flex flex-col items-center justify-center p-8">
      <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-700 max-w-3xl text-xl">
        "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
        <footer className="text-base mt-4 text-gray-600 non-italic">
          – Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence
        </footer>
      </blockquote>
    </div>
  );
};

export default IntroductionSlide;