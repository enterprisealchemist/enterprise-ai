import React, { useState } from 'react';
import PresentationSkeleton from './components/PresentationSkeleton';
import IntroductionSlide from './components/slides/IntroductionSlide';
import CurrentStateSlide from './components/slides/CurrentStateSlide';
import TransformativeTimesSlide from './components/slides/TransformativeTimesSlide';
import KeyPatternsSlide from './components/slides/KeyPatternsSlide';
import RisksChallengesSlide from './components/slides/RisksChallengesSlide';
import CaseStudySlide from './components/slides/CaseStudySlide';
import EmergingTechSlide from './components/slides/EmergingTechSlide';
import AlchemyAnalogySlide from './components/slides/AlchemyAnalogySlide';
import ConclusionSlide from './components/slides/ConclusionSlide';
import DiscussionSlide from './components/slides/DiscussionSlide';

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
        title: "Data Ecosystems" 
      } 
    },
    { 
      component: TransformativeTimesSlide, 
      props: { 
        title: "Transformative Times"
      } 
    },
    { 
      component: KeyPatternsSlide, 
      props: { 
        title: "Key Patterns"
      } 
    },
    { 
      component: CaseStudySlide, 
      props: { 
        title: "Case Study: Asset Management" 
      } 
    },
    { 
      component: EmergingTechSlide, 
      props: { 
        title: "Emerging Technologies"
      } 
    },
    { 
      component: RisksChallengesSlide, 
      props: { 
        title: "Risks and Challenges"
      } 
    },
    { 
      component: AlchemyAnalogySlide, 
      props: { 
        title: "Alchemical Transformation"
      } 
    },
    { 
      component: ConclusionSlide, 
      props: { 
        title: "Conclusion"
      } 
    },
    { 
      component: DiscussionSlide, 
      props: { 
        title: "Discussion"
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