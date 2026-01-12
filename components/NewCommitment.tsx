
import React, { useState } from 'react';
import { Book, Heart, Smartphone, CheckCircle, Gift, Zap } from 'lucide-react';

const NewCommitment: React.FC = () => {
  const [completed, setCompleted] = useState<number[]>([]);

  const missions = [
    {
      id: 1,
      type: "Spirituelle",
      title: "Apprendre l'invocation",
      description: "Apprends et récite la Dua d'Ibrahim (versets 87-88) à la fin de chaque prière pendant les 2 prochains jours.",
      icon: Book,
      color: "bg-blue-500/20 text-blue-400"
    },
    {
      id: 2,
      type: "Sociale",
      title: "Donner ce qu'on aime",
      description: "Fais le tri dans ta chambre. Donne un objet/vêtement que tu aimes bien (pas un truc cassé) pour prouver que tu ne dépends pas de tes biens.",
      icon: Gift,
      color: "bg-amber-500/20 text-amber-400"
    },
    {
      id: 3,
      type: "Personnelle",
      title: "Déconnexion Tech",
      description: "Passe 1 heure sans aucun écran. Réfléchis ou discute avec ta famille pour ne pas être distrait par 'Al-Mal' (la technologie).",
      icon: Smartphone,
      color: "bg-purple-500/20 text-purple-400"
    }
  ];

  const toggleMission = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(mid => mid !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Nouvel Engagement (N)</span>
        <h2 className="text-4xl font-bold italic">Mise en Action</h2>
        <p className="text-gray-400">Il est temps d'investir sur ton <span className="text-amber-500 font-bold">Cœur Sain</span>.</p>
      </section>

      <div className="grid gap-6">
        {missions.map((m) => (
          <button
            key={m.id}
            onClick={() => toggleMission(m.id)}
            className={`flex items-start gap-6 p-6 rounded-3xl border-2 text-left transition-all ${completed.includes(m.id) ? 'bg-green-500/5 border-green-500/30' : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${completed.includes(m.id) ? 'bg-green-500/20 text-green-500' : m.color}`}>
              {completed.includes(m.id) ? <CheckCircle size={28} /> : <m.icon size={28} />}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                 <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${completed.includes(m.id) ? 'bg-green-500/20 text-green-400' : m.color}`}>
                    {m.type}
                 </span>
                 {completed.includes(m.id) && <span className="text-xs text-green-500 font-bold">Complété</span>}
              </div>
              <h3 className={`text-xl font-bold ${completed.includes(m.id) ? 'text-green-200' : 'text-white'}`}>{m.title}</h3>
              <p className={`text-sm ${completed.includes(m.id) ? 'text-gray-500' : 'text-gray-400'} leading-relaxed`}>
                {m.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-amber-500/10 border-2 border-dashed border-amber-500/30 p-8 rounded-3xl text-center space-y-4">
        <Zap className="mx-auto text-amber-500" size={32} />
        <h4 className="text-xl font-bold italic">Prêt à relever le défi ?</h4>
        <p className="text-gray-400 italic">
          "Celui qui se détache de ses biens sur terre s'attache à la paix de l'au-delà."
        </p>
      </div>

      <div className="text-center pb-10">
         <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">La Caverne - Programme Pédagogique Ibrahim (AS)</p>
      </div>
    </div>
  );
};

export default NewCommitment;
