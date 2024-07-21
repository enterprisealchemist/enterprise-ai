import React, { useState } from 'react';
import PresentationSkeleton from './components/PresentationSkeleton';
import IntroductionSlide from './components/slides/IntroductionSlide';
import CurrentStateSlide from './components/slides/CurrentStateSlide';
import KeyTechnologiesSlide from './components/slides/KeyTechnologiesSlide';
import TransformativeEraSlide from './components/slides/TransformativeEraSlide';
import CaseStudySlide from './components/slides/CaseStudySlide';
import AlchemicalApproachSlide from './components/slides/AlchemicalApproachSlide';
import EmergingTrendsSlide from './components/slides/EmergingTrendsSlide';
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
        title: "Enterprise Data Ecosystems" 
      } 
    },
    { 
      component: TransformativeEraSlide, 
      props: { 
        title: "Transformative Times"
      } 
    },
    { 
      component: KeyTechnologiesSlide, 
      props: { 
        title: "Key Technologies in AI"
      } 
    },
    { 
      component: CaseStudySlide, 
      props: { 
        title: "Case Study: Asset Management" 
      } 
    },
    { 
      component: EmergingTrendsSlide, 
      props: { 
        title: "Emerging Technologies"
      } 
    },
    { 
      component: AlchemicalApproachSlide, 
      props: { 
        title: "Enterprise Alchemy"
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