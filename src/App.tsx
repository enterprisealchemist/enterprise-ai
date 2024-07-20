import React, { useState } from 'react';
import PresentationSkeleton from './components/PresentationSkeleton';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { title: "Introduction", duration: "3 minutes" },
    { title: "Current State of Enterprise Software", duration: "5 minutes" },
    { title: "Key AI Technologies in Enterprise Software", duration: "7 minutes" },
    { title: "Transformative Impact of AI", duration: "7 minutes" },
    { title: "Case Study: AI in Asset Management", duration: "5 minutes" },
    { title: "The \"Alchemical\" Approach to AI Integration", duration: "3 minutes" },
    { title: "Future Trends and Challenges", duration: "3 minutes" },
    { title: "Conclusion", duration: "2 minutes" },
    { title: "Q&A Session", duration: "5 minutes" }
  ];

  return (
    <PresentationSkeleton
      slides={slides}
      currentSlide={currentSlide}
      setCurrentSlide={setCurrentSlide}
    />
  );
};

export default App;