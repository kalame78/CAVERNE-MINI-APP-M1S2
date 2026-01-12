
import React from 'react';
import { Smartphone, Users, PowerOff, ShieldCheck } from 'lucide-react';

const Analysis: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Arrêt sur Versets (AV)</span>
        <h2 className="text-4xl font-bold italic">L'Analyse du "Game Over"</h2>
        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 max-w-2xl mx-auto">
          <p className="text-2xl font-serif italic text-amber-100 mb-2">
            "le jour où ni les biens, ni les enfants ne seront d'aucune utilité,"
          </p>
          <p className="text-amber-500/60 font-mono text-sm uppercase">Sourate Ash-Shu'ara • Verset 88</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 p-8 rounded-3xl space-y-4 relative overflow-hidden group">
          <PowerOff className="absolute -right-4 -top-4 w-24 h-24 text-red-500/5 group-hover:scale-110 transition-transform" />
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400">
            <Smartphone size={24} />
          </div>
          <h3 className="text-2xl font-bold text-red-400">LA YANFA'U</h3>
          <p className="text-gray-400 leading-relaxed italic">"Ça ne sert à rien / Inutile"</p>
          <p className="text-sm text-gray-300">
            C'est un <span className="text-red-400 font-bold">Game Over</span> pour le matériel. Au moment le plus important de ton existence, tes outils habituels (carte bleue, iPhone 15, contacts VIP) ne fonctionnent plus. Le serveur est déconnecté.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 p-8 rounded-3xl space-y-4 relative overflow-hidden group">
          <Users className="absolute -right-4 -top-4 w-24 h-24 text-amber-500/5 group-hover:scale-110 transition-transform" />
          <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-2xl font-bold text-amber-400">AL-BANOUN</h3>
          <p className="text-gray-400 leading-relaxed italic">"Les Enfants / Le Clan"</p>
          <p className="text-sm text-gray-300">
            À l'époque, avoir beaucoup de fils était la force suprême. Aujourd'hui, c'est ta <span className="text-amber-400 font-bold">"Team"</span>, ton nombre d'abonnés ou ton influence. Mais ce jour-là, aucune communauté ne pourra valider ton profil à ta place.
          </p>
        </div>
      </div>

      <div className="bg-amber-500/5 border border-amber-500/20 p-8 rounded-3xl text-center">
        <h4 className="text-xl font-bold mb-4">Le Message pour toi</h4>
        <p className="text-gray-400 italic">
          "On passe trop de temps à décorer notre 'Profil' extérieur, alors que le seul critère de succès dans l'au-delà sera la pureté de ce qu'il y a à l'intérieur."
        </p>
      </div>
    </div>
  );
};

export default Analysis;
