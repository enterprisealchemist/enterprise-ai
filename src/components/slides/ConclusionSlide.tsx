import React from 'react';
import { SlideProps } from "../../types";
import { Brain, Zap, Users, Lightbulb, Star } from 'lucide-react';

const ConclusionSlide: React.FC<SlideProps> = ({ title }) => {
  const keyPoints = [
    { icon: <Brain className="w-6 h-6 text-blue-500" />, text: "AI amplifies human intelligence, unlocking latent potential in organizations" },
    { icon: <Zap className="w-6 h-6 text-yellow-500" />, text: "AI-driven analytics enhance decision-making and strategic planning" },
    { icon: <Users className="w-6 h-6 text-green-500" />, text: "Ethical considerations and responsible AI use are crucial for long-term success" },
    { icon: <Lightbulb className="w-6 h-6 text-purple-500" />, text: "The future of enterprise software lies in the synergy of human creativity and AI capabilities" },
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow flex flex-col">
        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-800 italic">
            "Artificial intelligence is not a substitute for human intelligence; it is a tool to amplify human creativity and ingenuity."
          </p>
          <p className="text-xs text-gray-600 mt-2">
            – Fei-Fei Li, Co-Director of the Stanford Institute for Human-Centered Artificial Intelligence
          </p>
        </div>
        <h3 className="text-xl font-medium mb-4">Key Takeaways:</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {keyPoints.map((point, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
              {point.icon}
              <span className="ml-2 text-sm">{point.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <h3 className="text-xl font-medium mb-2 flex items-center">
            <Star className="w-6 h-6 text-yellow-500 mr-2" />
            Fun Fact
          </h3>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-sm text-gray-800">
              This entire presentation, including its content, structure, and visual elements, was created with AI assistance in just a few hours! As someone who had never built a presentation like this before or deployed it to a webpage, I was able to leverage AI to rapidly develop and implement this project. This meta-example showcases how AI can empower individuals to quickly acquire new skills and produce high-quality work in unfamiliar domains, amplifying human creativity and productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;