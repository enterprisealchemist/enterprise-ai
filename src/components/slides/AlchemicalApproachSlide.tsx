import React from 'react';
import { SlideProps } from "../../types";
import { Beaker, ArrowRight, Brain, Lightbulb, Users, Sparkles } from 'lucide-react';

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
      title: "Revealing Hidden Insights",
      description: "AI helps uncover patterns and opportunities in data that humans might overlook, sparking new ideas.",
      icon: <Sparkles className="w-8 h-8 text-blue-500" />
    }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex items-start mb-6">
        <Beaker className="w-8 h-8 text-gray-400 mr-2 flex-shrink-0 mt-1" />
        <blockquote className="italic text-gray-600">
          "Alchemy neither composes nor mixes: it increases and activates that which already exists in a latent state."
          <footer className="text-sm mt-2 text-gray-500">
            — Franz Hartmann, German medical doctor and "one of the most important theosophical writers of his time"
          </footer>
        </blockquote>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Just as alchemy sought to transform base metals into gold, AI in enterprise software aims to unlock the latent potential within human workers, enhancing their capabilities rather than replacing them.
      </p>
      <div className="flex-grow grid grid-cols-2 gap-6">
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
      <div className="mt-6 flex justify-center items-center">
        <span className="text-lg font-medium">Human Potential</span>
        <ArrowRight className="w-8 h-8 mx-4 text-blue-500" />
        <span className="text-lg font-medium">AI as Catalyst</span>
        <ArrowRight className="w-8 h-8 mx-4 text-blue-500" />
        <span className="text-lg font-medium">Unlocked Capabilities</span>
      </div>
    </div>
  );
};

export default AlchemicalApproachSlide;