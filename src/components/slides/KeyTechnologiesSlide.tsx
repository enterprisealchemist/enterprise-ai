import React, { useState } from 'react';
import { SlideProps } from "../../types";
import { Zap, MessageSquare, TrendingUp, Eye, Bot, ExternalLink } from 'lucide-react';

const KeyTechnologiesSlide: React.FC<SlideProps> = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const technologies = [
    {
      name: "Machine Learning",
      description: `Utilizes advanced statistical techniques to enable systems to acquire and refine knowledge through data without explicit programming instructions.`,
      example: `Netflix`,
      exampleDescription: `Netflix uses machine learning to analyze viewing habits and provide personalized recommendations to its users. 
                    The system predicts which shows and movies a user might enjoy based on their previous viewing behavior, significantly 
                    enhancing user experience and engagement.`,
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      name: "Natural Language Processing (NLP)",
      description: `Enables computer systems to understand and generate human language, allowing them to extract valuable insights from text data and generate meaningful responses. 
                    This technology is particularly powerful when used in multi-modal models to turn natural language queries into a wide range of outputs, such as text, images, or even code.`,
      example: `Salesforce`,
      exampleDescription: `Salesforce's Einstein AI technology helps businesses analyze customer interactions and derive insights. 
                    This helps in automating customer support with chatbots, which can understand and respond to customer queries 
                    efficiently, freeing up human agents for more complex issues`,
      icon: <MessageSquare className="w-8 h-8 text-green-500" />
    },
    {
      name: "Predictive Analytics",
      description: `Forecasting future events or outcomes based on historical data. Enables companies to predict demand, manage risk, 
                    and optimize marketing strategies, leading to more strategic and proactive business decisions.`,
      example: `Uber`,
      exampleDescription: `Uber uses predictive analytics to forecast demand and dynamically allocate drivers. By analyzing historical 
                    data and external factors like weather and local events, Uber can predict when and where there will be a high demand 
                    for rides, optimizing driver deployment and improving service efficiency.`,
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />
    },
    {
      name: "Computer Vision",
      description: `Computer vision enables computers to interpret and understand visual information from images and videos. In industries 
                    like retail and manufacturing, computer vision is used for quality control, object detection, and facial recognition. 
                    It's also a crucial component of multi-modal systems, allowing computers to process visual information and convert it 
                    into actionable insights.`,
      example: `Tesla`,
      exampleDescription: `Tesla incorporates computer vision in its self-driving cars to recognize and interpret visual information from the car's 
                    surroundings. This technology is crucial for tasks such as lane keeping, detecting obstacles, and recognizing traffic signals, 
                    enabling autonomous driving.`,
      icon: <Eye className="w-8 h-8 text-red-500" />
    },
    {
      name: "Robotic Process Automation (RPA)",
      description: `Automates repetitive tasks, leveraging AI to handle complex decision-making processes. This increases efficiency, reduces costs, 
                    and enables employees to focus on higher-value work that drives business growth and innovation.`,
      example: `Capital One`,
      exampleDescription: `Capital One utilizes RPA to automate various routine processes such as transaction monitoring and fraud detection. 
                    RPA bots handle repetitive tasks, which enhances operational efficiency and allows human employees to focus on more strategic 
                    activities.`,
      icon: <Bot className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="flex-grow grid grid-cols-2 gap-4">
        <div className="space-y-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`cursor-pointer p-2 rounded transition-colors duration-200 ${
                index === activeIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center">
                {tech.icon}
                <h3 className="text-lg font-medium ml-2">{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded overflow-auto">
          <h3 className="text-xl font-semibold mb-2">{technologies[activeIndex].name}</h3>
          <p className="text-sm text-gray-700">{technologies[activeIndex].description}</p>
          <h4 className="text-md font-semibold mt-4">Example: {technologies[activeIndex].example}</h4>
          <p className="text-sm text-gray-700">{technologies[activeIndex].exampleDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyTechnologiesSlide;
