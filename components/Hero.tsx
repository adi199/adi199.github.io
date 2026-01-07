import React from 'react';

export const HeroMain: React.FC = () => (
  <section className="col-span-12 lg:col-span-8 glass-module rounded-3xl p-8 md:p-12 relative overflow-hidden">
    <div className="relative z-10 flex flex-col justify-between h-full min-h-[400px]">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-light/50 px-4 py-1.5 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Available for work</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-black leading-tight tracking-tight">
            Building <br/>
            <span className="gradient-text">Scalable Systems</span>
          </h1>
          <h2 className="text-xl font-mono text-text-secondary">&gt; Senior Backend Engineer</h2>
        </div>

        <p className="max-w-xl text-lg text-gray-400 leading-relaxed border-l-2 border-white/10 pl-6">
          I architect efficient, scalable, and maintainable software solutions. Specialized in high-performance backend systems and complex cloud infrastructure.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all">View Work</a>
          <a href="#contact" className="px-8 py-3 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">Contact Me</a>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 pt-12 mt-12 border-t border-white/5">
        <div><p className="text-3xl font-black gradient-text">4+</p><p className="text-[10px] uppercase font-bold text-gray-500">Years Exp.</p></div>
        <div className="w-px h-8 bg-white/10 self-center"></div>
        <div><p className="text-3xl font-black gradient-text">20+</p><p className="text-[10px] uppercase font-bold text-gray-500">Projects</p></div>
        <div className="w-px h-8 bg-white/10 self-center"></div>
        <div><p className="text-3xl font-black gradient-text">99.9%</p><p className="text-[10px] uppercase font-bold text-gray-500">Uptime</p></div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>
  </section>
);

export const HeroImage: React.FC = () => (
  <section className="col-span-12 lg:col-span-4 glass-module rounded-3xl overflow-hidden group relative">
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-pink-500/20 z-10"></div>
    <img 
      src="https://picsum.photos/seed/tech/600/800" 
      alt="Profile/Art" 
      className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-1000" 
    />
    <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 z-20">
      <div className="flex gap-1.5 mb-3">
        <div className="size-2.5 rounded-full bg-red-500"></div>
        <div className="size-2.5 rounded-full bg-yellow-500"></div>
        <div className="size-2.5 rounded-full bg-green-500"></div>
      </div>
      <div className="font-mono text-xs text-blue-200/80 space-y-1">
        <p><span className="text-purple-400">const</span> <span className="text-yellow-200">portfolio</span> = {'{'}</p>
        <p className="pl-4">name: <span className="text-green-400">'Aditya Singh'</span>,</p>
        <p className="pl-4">role: <span className="text-green-400">'Software Engineer'</span>,</p>
        <p className="pl-4">passion: <span className="text-green-400">'Generative Systems'</span>,</p>
        <p className="pl-4">status: <span className="text-green-400">'Online'</span></p>
        <p>{'}'}</p>
      </div>
    </div>
  </section>
);