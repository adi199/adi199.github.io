import React from 'react';

const CoreFocus: React.FC = () => (
  <section className="col-span-12 md:col-span-6 glass-module rounded-3xl p-8">
    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
      <span className="material-symbols-outlined text-purple-400">bolt</span> Core Focus
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {["System Architecture", "API Integration", "Cloud Infrastructure", "Performance Optimization"].map((f) => (
        <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-transparent hover:border-white/10 transition-all">
          <span className="material-symbols-outlined text-green-400">check_circle</span>
          <span className="text-sm font-medium">{f}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CoreFocus;