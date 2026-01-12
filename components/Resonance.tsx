
import React, { useState } from 'react';
import { Heart, Image as ImageIcon, Sparkles, TrendingUp } from 'lucide-react';

const Resonance: React.FC = () => {
  const [selection, setSelection] = useState<'image' | 'heart' | null>(null);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">La Résonance (R)</span>
        <h2 className="text-4xl font-bold italic">Le Grand Débat</h2>
        <p className="text-gray-400 max-w-xl mx-auto italic">
          "Si demain tout s'arrête, est-ce que ce qui te prend le plus de temps aujourd'hui (école, sport, jeux, look) aura encore de la valeur ?"
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <button 
          onClick={() => setSelection('image')}
          className={`relative group h-64 rounded-3xl border-2 transition-all overflow-hidden flex flex-col items-center justify-center gap-4 ${selection === 'image' ? 'border-red-500 bg-red-500/10 scale-105 ring-4 ring-red-500/20' : 'border-white/10 hover:border-red-500/50 bg-white/5'}`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp size={120} />
          </div>
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center text-red-500">
             <ImageIcon size={32} />
          </div>
          <div className="z-10 text-center">
            <h3 className="text-xl font-bold text-red-400">Tapis Rouge</h3>
            <p className="text-sm text-gray-400 italic">Travailler son image & sa réputation</p>
          </div>
        </button>

        <button 
          onClick={() => setSelection('heart')}
          className={`relative group h-64 rounded-3xl border-2 transition-all overflow-hidden flex flex-col items-center justify-center gap-4 ${selection === 'heart' ? 'border-green-500 bg-green-500/10 scale-105 ring-4 ring-green-500/20' : 'border-white/10 hover:border-green-500/50 bg-white/5'}`}
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles size={120} />
          </div>
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
             <Heart size={32} />
          </div>
          <div className="z-10 text-center">
            <h3 className="text-xl font-bold text-green-400">Tapis Vert</h3>
            <p className="text-sm text-gray-400 italic">Travailler son jardin secret (Conscience)</p>
          </div>
        </button>
      </div>

      {selection && (
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl animate-in zoom-in-95 duration-500">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            {selection === 'image' ? <ImageIcon className="text-red-400" /> : <Heart className="text-green-400" />}
            Ton Analyse :
          </h4>
          <p className="text-gray-300 italic leading-relaxed">
            {selection === 'image' 
              ? "C'est la tentation moderne. On vit pour le regard des autres. Mais Ibrahim (AS) nous rappelle que devant Dieu, les filtres Instagram et les likes ne comptent pas." 
              : "C'est le choix d'Ibrahim. Investir sur l'invisible. Le 'Cœur Sain' (Verset 89) est le seul passeport valide pour l'éternité."}
          </p>
        </div>
      )}

      <div className="bg-gray-900/50 p-6 rounded-2xl border border-white/5 text-sm text-gray-400 italic text-center">
        Note : Le verset suivant (89) mentionne que seul celui qui vient avec un "Cœur Sain" (Qalbin Salim) sera sauvé. C'est la suite logique du débat.
      </div>
    </div>
  );
};

export default Resonance;
