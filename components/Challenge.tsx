
import React, { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ChallengeProps {
  onComplete: () => void;
}

const Challenge: React.FC<ChallengeProps> = ({ onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      id: 1,
      title: "1. Texte à trous",
      question: "« Et ne me couvre pas d'ignominie, le jour où l'on sera _______ . »",
      hint: "C'est l'action de revenir à la vie après la mort.",
      answer: "ressuscité"
    },
    {
      id: 2,
      title: "2. L'Intrus",
      question: "Parmi ces objets, lequel pourra t'aider le Jour Dernier ?",
      options: ["A) Ton argent", "B) Tes amis", "C) Ton iPhone", "D) Aucune de ces réponses"],
      hint: "Pense au verset 88 : ni richesses, ni enfants.",
      answer: "D"
    },
    {
      id: 3,
      title: "3. Traduction codée",
      question: "Que signifie le mot « AL-MAL » en arabe ?",
      hint: "Indice : C'est ce que tout le monde cherche à accumuler sur Terre.",
      answer: "argent"
    },
    {
      id: 4,
      title: "4. Qui parle ?",
      question: "« Je suis un grand Prophète, surnommé l'Ami intime de Dieu (Khalil). »",
      hint: "Il est le père des prophètes.",
      answer: "ibrahim"
    }
  ];

  const handleInputChange = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const toggleHint = (id: number) => {
    setShowHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checkResults = () => {
    const isCorrect = questions.every(q => {
      const userAns = answers[q.id]?.toLowerCase().trim() || "";
      if (q.id === 2) return userAns.includes("d");
      if (q.id === 3) return userAns.includes("argent") || userAns.includes("biens");
      return userAns === q.answer.toLowerCase();
    });

    if (isCorrect) {
      setIsFinished(true);
      setTimeout(onComplete, 2000);
    } else {
      alert("Certaines réponses sont incorrectes. Réessaie !");
    }
  };

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-bold gradient-text italic">LE CODE SACRÉ</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Reconstitue l'invocation du Prophète Ibrahim (AS) concernant le Jour du Jugement pour débloquer la suite.
        </p>
      </section>

      <div className="grid gap-6">
        {questions.map((q) => (
          <div key={q.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-amber-500">{q.title}</h3>
              <button 
                onClick={() => toggleHint(q.id)}
                className="text-xs flex items-center gap-1 text-gray-500 hover:text-amber-500 transition-colors"
              >
                <Search size={14} /> {showHints[q.id] ? 'Cacher l\'indice' : 'Besoin d\'un indice ?'}
              </button>
            </div>
            
            <p className="mb-4 text-lg leading-relaxed">{q.question}</p>

            {q.options ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleInputChange(q.id, opt[0])}
                    className={`text-left p-3 rounded-xl border transition-all ${answers[q.id] === opt[0] ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'border-white/10 bg-black/20 hover:border-white/30'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={answers[q.id] || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                placeholder="Ta réponse..."
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
              />
            )}

            {showHints[q.id] && (
              <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-sm text-amber-200/80 italic flex items-start gap-2">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                {q.hint}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 pt-6">
        <button
          onClick={checkResults}
          disabled={isFinished}
          className={`px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/10 transition-all flex items-center gap-2 ${isFinished ? 'bg-green-500 text-white' : 'bg-amber-500 text-gray-950 hover:bg-amber-400 scale-105 active:scale-95'}`}
        >
          {isFinished ? (
            <> <CheckCircle2 size={24} /> Code Débloqué ! </>
          ) : (
            <> <Sparkles size={24} /> Valider mes réponses </>
          )}
        </button>
        <p className="text-sm text-gray-500 italic">Trouve le code : "Ni Richesse Ni Enfants"</p>
      </div>
    </div>
  );
};

export default Challenge;
