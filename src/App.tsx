import React, { useState } from 'react';
import PresentationSkeleton from './components/PresentationSkeleton';
import IntroductionSlide from './components/IntroductionSlide';
import CurrentStateSlide from './components/CurrentStateSlide';
import KeyTechnologiesSlide from './components/KeyTechnologiesSlide';
import TransformativeImpactSlide from './components/TransformativeImpactSlide';
import CaseStudySlide from './components/CaseStudySlide';
import AlchemicalApproachSlide from './components/AlchemicalApproachSlide';
import FutureTrendsSlide from './components/FutureTrendsSlide';
import ConclusionSlide from './components/ConclusionSlide';
import QASlide from './components/QASlide';

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