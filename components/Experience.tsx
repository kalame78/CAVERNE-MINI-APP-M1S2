
import React, { useEffect, useState } from 'react';
import { Hammer, Moon, Stars, ArrowDown } from 'lucide-react';

const Experience: React.FC = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative pb-24">
      {/* Intro */}
      <div className="text-center mb-16 space-y-4">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">L'Immersion Narrative (E)</span>
        <h2 className="text-4xl font-bold italic">Le Voyage d'Ibrahim</h2>
        <p className="text-gray-400">Scrolle pour vivre la transition entre le bruit du monde et le silence du cœur.</p>
        <div className="animate-bounce flex justify-center pt-8">
            <ArrowDown className="text-amber-500/40" />
        </div>
      </div>

      <div className="space-y-64">
        {/* Scene 1 */}
        <div className="relative h-96 bg-gray-900 rounded-3xl border border-white/5 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1200/800?grayscale&blur=5')] bg-cover"></div>
          <Hammer className="w-16 h-16 text-amber-500 mb-6" />
          <h3 className="text-3xl font-bold mb-4 relative z-10 italic">L'Atelier des Idoles</h3>
          <p className="max-w-md relative z-10 text-gray-300">
            Le père d'Ibrahim est fier. Son atelier regorge de richesses et de statues de pierre. L'ambiance est bruyante, matérielle, saturée.
          </p>
        </div>

        {/* Transition */}
        <div className="text-center py-20 italic text-gray-400 text-xl font-serif">
          "Puis, Ibrahim s'éloigne... vers l'essentiel."
        </div>

        {/* Scene 2 */}
        <div className="relative h-[500px] bg-[#020617] rounded-3xl border border-blue-500/20 overflow-hidden flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(30,58,138,0.2)]">
          <div className="absolute top-10 right-10">
            <Moon className="w-12 h-12 text-blue-100 fill-blue-100/20" />
          </div>
          <div className="absolute inset-0">
             <div className="stars-container opacity-40">
                {/* Simulated stars */}
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute bg-white rounded-full animate-pulse" 
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}
             </div>
          </div>
          
          <div className="space-y-6 relative z-10">
             <div className="w-20 h-20 bg-blue-500/10 rounded-full mx-auto flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Stars size={40} />
             </div>
             <h3 className="text-3xl font-bold italic text-blue-100">L'Invocation Étoilée</h3>
             <p className="max-w-lg text-blue-200/70 leading-relaxed text-lg italic">
                C'est ici, dans le silence total du désert, que le grand prophète Ibrahim lève les mains, tremblant d'humilité :
             </p>
             <div className="py-6 space-y-4">
                <p className="text-2xl md:text-3xl text-amber-400 font-serif animate-pulse">
                    "Et ne me couvre pas d'ignominie..."
                </p>
                <p className="text-2xl md:text-3xl text-amber-400 font-serif">
                    "...le jour où ni richesse, ni enfants ne serviront."
                </p>
             </div>
          </div>
        </div>

        {/* Conclusion scene */}
        <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
           <div className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent w-full"></div>
           <p className="text-gray-300 text-lg">
             Même un prophète surnommé <span className="text-amber-500 font-bold italic">l'Ami Intime de Dieu</span> craignait d'avoir honte ce jour-là.
           </p>
           <h4 className="text-2xl font-bold text-white italic">"Alors qui sommes-nous pour être arrogants ?"</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
