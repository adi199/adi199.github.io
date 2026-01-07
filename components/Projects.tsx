import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => (
  <section id="projects" className="col-span-12 lg:col-span-5 glass-module rounded-3xl p-8 scroll-mt-24">
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
      <span className="gradient-text">04.</span> Projects
    </h3>
    <div className="space-y-6">
      {PROJECTS.map((proj, idx) => (
        <div key={idx} className="bg-surface-dark/50 border border-white/5 rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all">
          <div className="h-32 overflow-hidden relative">
            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
          </div>
          <div className="p-5 -mt-8 relative z-10">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold">{proj.title}</h4>
              <div className="flex gap-2 text-gray-400">
                <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white transition-colors">code</span>
                <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white transition-colors">open_in_new</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">{proj.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {proj.tags.map(t => (
                <span key={t} className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 text-center">
      <button className="text-sm font-bold flex items-center gap-2 mx-auto hover:text-purple-400 transition-colors">
        View Archive <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </button>
    </div>
  </section>
);

export default Projects;