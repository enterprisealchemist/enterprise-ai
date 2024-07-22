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

  const CurrentSlide = slides[currentSlide].component;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pearl p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl aspect-video flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-space-cadet">Artificial Intelligence: Beyond an Upgrade</h1>
        <div className="flex-grow overflow-auto mb-4">
          <CurrentSlide {...slides[currentSlide].props} />
        </div>
        <div className="flex justify-between items-center mt-auto">
          <button onClick={prevSlide} className="bg-dark-purple text-pearl p-2 rounded-full hover:bg-paynes-gray transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="text-lg text-space-cadet">{currentSlide + 1} / {slides.length}</span>
          <button onClick={nextSlide} className="bg-dark-purple text-pearl p-2 rounded-full hover:bg-paynes-gray transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationSkeleton;