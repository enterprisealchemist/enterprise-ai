import React from 'react';
import { SlideProps } from '../types';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface SlideData {
  component: React.FC<SlideProps>;
  props: SlideProps;
}

interface PresentationSkeletonProps {
  slides: Array<SlideData>;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

const PresentationSkeleton: React.FC<PresentationSkeletonProps> = ({ slides, currentSlide, setCurrentSlide }) => {
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const exportToText = () => {
    let output = "The Role of AI in Enhancing Enterprise Software Solutions\n\n";
    slides.forEach((slide, index) => {
      output += `${index + 1}. ${slide.props.title}\n`;
    });
    
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'presentation_outline.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const CurrentSlide = slides[currentSlide].component;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl h-full flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">The Role of AI in Enhancing Enterprise Software Solutions</h1>
        <div className="flex-grow overflow-auto mb-4">
          <CurrentSlide {...slides[currentSlide].props} />
        </div>
        <div className="flex justify-between items-center mt-auto">
          <button onClick={prevSlide} className="bg-blue-500 text-white p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
          <span className="text-lg">{currentSlide + 1} / {slides.length}</span>
          <button onClick={nextSlide} className="bg-blue-500 text-white p-2 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>
        <button onClick={exportToText} className="mt-4 bg-green-500 text-white p-2 rounded flex items-center justify-center">
          <Download size={18} className="mr-2" />
          Export Outline
        </button>
      </div>
    </div>
  );
};

export default PresentationSkeleton;