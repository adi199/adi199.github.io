import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => (
  <section id="experience" className="col-span-12 lg:col-span-7 glass-module rounded-3xl p-8 scroll-mt-24">
    <h3 className="text-2xl font-bold mb-12 flex items-center gap-2">
      <span className="gradient-text">03.</span> Experience
    </h3>
    <div className="relative space-y-16 pl-8 md:pl-64">
      <div className="absolute left-8 md:left-64 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/20 to-transparent"></div>
      
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="relative group">
          <div className={`absolute -left-1.5 top-1.5 size-3 rounded-full border-2 bg-surface-dark transition-all z-10 ${exp.isCurrent ? 'bg-purple-500 border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'border-white/20 group-hover:border-white/40'}`}></div>
          
          <div className="md:absolute md:left-0 md:-translate-x-full md:w-64 md:top-1 md:text-right md:pr-12 mb-3 md:mb-0">
            <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md border whitespace-nowrap ${exp.isCurrent ? 'text-purple-400 border-purple-500/30 bg-purple-500/5' : 'text-gray-500 border-white/5 bg-white/5'}`}>
              {exp.year}
            </span>
          </div>
          
          <div className="flex-1 md:pl-12">
            <h4 className="text-xl font-bold group-hover:text-purple-400 transition-colors leading-tight">{exp.role}</h4>
            <p className="text-sm text-gray-500 mb-6 font-medium tracking-wide">{exp.company} • {exp.location}</p>
            <ul className="space-y-4">
              {exp.achievements.map((a, i) => (
                <li key={i} className="text-sm text-gray-400 pl-6 relative leading-relaxed before:content-['>'] before:absolute before:left-0 before:text-purple-500/70 before:font-mono before:font-bold">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;