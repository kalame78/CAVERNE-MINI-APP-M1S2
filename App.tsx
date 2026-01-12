
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Shield, BookOpen, Star, MessageCircle, Zap, Home } from 'lucide-react';
import { Step } from './types';
import Challenge from './components/Challenge';
import Analysis from './components/Analysis';
import Experience from './components/Experience';
import Resonance from './components/Resonance';
import NewCommitment from './components/NewCommitment';

const STEPS = [
  { id: Step.CHALLENGE, label: 'C', title: 'Challenge', icon: Zap },
  { id: Step.ANALYSIS, label: 'AV', title: 'Arrêt sur Versets', icon: BookOpen },
  { id: Step.EXPERIENCE, label: 'E', title: 'Expérience', icon: Star },
  { id: Step.RESONANCE, label: 'R', title: 'Résonance', icon: MessageCircle },
  { id: Step.COMMITMENT, label: 'N', title: 'Engagement', icon: Shield },
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(Step.CHALLENGE);

  const currentIndex = STEPS.findIndex(s => s.id === currentStep);

  const goToNext = () => {
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case Step.CHALLENGE: return <Challenge onComplete={goToNext} />;
      case Step.ANALYSIS: return <Analysis />;
      case Step.EXPERIENCE: return <Experience />;
      case Step.RESONANCE: return <Resonance />;
      case Step.COMMITMENT: return <NewCommitment />;
      default: return <Challenge onComplete={goToNext} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <header className="py-6 flex justify-between items-center border-b border-white/10 sticky top-0 bg-gray-950/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-gray-950 text-xl">
            C
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">LA CAVERNE</h1>
            <p className="text-xs text-amber-500/80 uppercase tracking-widest font-semibold">Sourate Ash-Shu'ara (26:87-88)</p>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-4">
          {STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={`flex flex-col items-center transition-all ${currentStep === step.id ? 'text-amber-500 scale-110' : 'text-gray-500 hover:text-gray-300'}`}
            >
              <step.icon size={20} />
              <span className="text-[10px] mt-1 font-bold">{step.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {renderContent()}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="py-8 flex justify-between items-center border-t border-white/10 sticky bottom-0 bg-gray-950/90 backdrop-blur-md z-40 mt-10">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${currentIndex === 0 ? 'opacity-0' : 'bg-white/5 hover:bg-white/10 text-gray-300'}`}
        >
          <ChevronLeft size={20} />
          <span className="font-semibold">Précédent</span>
        </button>

        <div className="flex gap-1 md:hidden">
          {STEPS.map((s, idx) => (
            <div 
              key={s.id} 
              className={`h-1.5 w-6 rounded-full ${idx === currentIndex ? 'bg-amber-500' : 'bg-gray-800'}`} 
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className={`flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500 text-gray-950 font-bold hover:bg-amber-400 transition-all ${currentIndex === STEPS.length - 1 ? 'hidden' : ''}`}
        >
          <span>Suivant</span>
          <ChevronRight size={20} />
        </button>
        
        {currentIndex === STEPS.length - 1 && (
          <div className="flex items-center gap-2 text-amber-500 font-bold">
            <Shield size={20} />
            <span>Mission Terminée</span>
          </div>
        )}
      </footer>
    </div>
  );
};

export default App;
