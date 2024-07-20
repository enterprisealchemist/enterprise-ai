import React, { useState } from 'react';
import { SlideProps } from "../types";
import { HelpCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const QASlide: React.FC<SlideProps> = ({ title }) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const sampleQuestions = [
    {
      question: "How can small businesses start implementing AI in their enterprise software?",
      answer: "Start with identifying specific pain points or inefficiencies in your current processes. Look for AI-powered solutions that address these issues. Begin with small, manageable projects to gain experience and demonstrate value before scaling up."
    },
    {
      question: "What are the biggest challenges in adopting AI for enterprise software?",
      answer: "Common challenges include data quality and integration issues, lack of AI expertise, resistance to change from employees, and concerns about privacy and security. Overcoming these often requires a combination of staff training, change management strategies, and partnering with experienced AI solution providers."
    },
    {
      question: "How does AI impact data privacy and security in enterprise systems?",
      answer: "AI can enhance data security through advanced threat detection and automated responses to potential breaches. However, it also introduces new privacy concerns, especially around data collection and use. It's crucial to implement robust data governance practices and ensure AI systems comply with relevant privacy regulations."
    },
    {
      question: "Can you provide examples of AI improving customer experience through enterprise software?",
      answer: "AI can power chatbots for 24/7 customer support, personalize product recommendations, predict customer needs for proactive service, and analyze customer feedback at scale to identify improvement areas. These applications can significantly enhance customer satisfaction and loyalty."
    },
    {
      question: "What skills should IT professionals develop to work with AI-enhanced enterprise software?",
      answer: "Key skills include data analysis and interpretation, machine learning basics, AI ethics and governance, cloud computing, and domain-specific knowledge. Soft skills like critical thinking, problem-solving, and cross-functional collaboration are also crucial."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="slide h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex-grow overflow-auto">
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-800 flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
            We welcome your questions about AI in enterprise software. 
            Here are some topics we could explore:
          </p>
        </div>
        {sampleQuestions.map((q, index) => (
          <div key={index} className="mb-2 border rounded-lg overflow-hidden">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default QASlide;