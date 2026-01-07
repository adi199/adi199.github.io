import React from 'react';
import { SKILLS } from '../constants';

const TechStack: React.FC = () => (
  <section id="skills" className="col-span-12 glass-module rounded-3xl p-8 scroll-mt-24">
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
      <span className="gradient-text">02.</span> Tech Stack
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {SKILLS.map((cat) => (
        <div key={cat.title} className="p-6 rounded-2xl bg-surface-light/50 border border-white/5 hover:border-purple-500/20 group">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.colorClass}`}>
              <span className="material-symbols-outlined">{cat.icon}</span>
            </div>
            <h4 className="font-bold">{cat.title}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span key={s} className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest bg-white/5 rounded-md border border-white/5 hover:border-purple-500/50 transition-all cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;