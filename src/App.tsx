import React, { useState } from 'react';
import PresentationSkeleton from './components/slides/PresentationSkeleton';
import IntroductionSlide from './components/slides/IntroductionSlide';
import CurrentStateSlide from './components/slides/CurrentStateSlide';
import KeyTechnologiesSlide from './components/slides/KeyTechnologiesSlide';
import TransformativeImpactSlide from './components/slides/TransformativeImpactSlide';
import CaseStudySlide from './components/slides/CaseStudySlide';
import AlchemicalApproachSlide from './components/slides/AlchemicalApproachSlide';
import FutureTrendsSlide from './components/slides/FutureTrendsSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';
import QASlide from './components/slides/QASlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { 
      component: IntroductionSlide, 
      props: { 
        title: "Introduction"
      } 
    },
    { 
      component: CurrentStateSlide, 
      props: { 
        title: "Current State of Enterprise Software" 
      } 
    },
    { 
      component: KeyTechnologiesSlide, 
      props: { 
        title: "Key Technologies"
      } 
    },
    { 
      component: TransformativeImpactSlide, 
      props: { 
        title: "Transformative Impact"
      } 
    },
    { 
      component: CaseStudySlide, 
      props: { 
        title: "Case Study" 
      } 
    },
    { 
      component: AlchemicalApproachSlide, 
      props: { 
        title: "Alchemical Approach"
      } 
    },
    { 
      component: FutureTrendsSlide, 
      props: { 
        title: "Future Trends"
      } 
    },
    { 
      component: ConclusionSlide, 
      props: { 
        title: "Conclusion"
      } 
    },
    { 
      component: QASlide, 
      props: { 
        title: "Q&A"
      } 
    }
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