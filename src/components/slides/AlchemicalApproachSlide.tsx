import React from 'react';
import { SlideProps } from "../../types";
import { Beaker, ArrowRight, Brain, Lightbulb, Users, Rocket } from 'lucide-react';
import AlchemySymbolAnimation from '../AlchemySymbolAnimation';

const AlchemicalApproachSlide: React.FC<SlideProps> = ({ title }) => {
  const alchemicalApproach = [
    {
      title: "Augmenting Human Intelligence",
      description: "AI enhances human decision-making capabilities, allowing for more informed and strategic choices.",
      icon: <Brain className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Unlocking Creativity",
      description: "By handling routine tasks, AI frees human workers to focus on creative problem-solving and innovation.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Empowering Collaboration",
      description: "AI tools facilitate better teamwork and knowledge sharing across the organization.",
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: "Accelerating Skill Acquisition",
      description: "AI tools enable people to accomplish complex tasks that would traditionally require countless hours of learning and practice.",
      icon: <Rocket className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="slide h-full flex flex-col relative">
      {/* Animation positioned absolutely in the top right corner */}
      <div className="absolute -top-11 right-11 scale-75 opacity-40 pointer-events-none">
        <AlchemySymbolAnimation />
      </div>
      
      {/* Main content */}
      <div className="z-10 relative">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="flex items-start mb-6">
          <Beaker className="w-8 h-8 text-gray-400 mr-2 flex-shrink-0 mt-1" />
          <blockquote className="italic text-gray-600">
            "Alchemy neither composes nor mixes: it increases and activates that which already exists in a latent state."
            <footer className="text-sm mt-2 text-gray-500">
              — Franz Hartmann, German medical doctor and one of the most important theosophical writers of the 19<sup>th</sup> century
            </footer>
          </blockquote>
        </div>
        <p className="text-sm text-black-700 mb-4">
          Just as alchemy sought to transform base metals into gold, AI in enterprise software is capable of unlocking the latent potential within the people who use it, enhancing their capabilities rather than replacing them.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-4">
          {alchemicalApproach.map((item, index) => (
            <div key={index} className="flex items-start">
              {item.icon}
              <div className="ml-4">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <span className="text-lg font-medium">Human Intention</span>
          <ArrowRight className="w-8 h-8 mx-4 text-blue-500" />
          <span className="text-lg font-medium">AI Aggregation</span>
          <ArrowRight className="w-8 h-8 mx-4 text-blue-500" />
          <span className="text-lg font-medium">Unlocked Capabilities</span>
        </div>
      </div>
    </div>
  );
};

export default AlchemicalApproachSlide;