import React from 'react';

const Education: React.FC = () => (
  <section className="col-span-12 md:col-span-6 glass-module rounded-3xl p-8">
    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <span className="gradient-text">05.</span> Education
    </h3>
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4 items-start">
      <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-400">
        <span className="material-symbols-outlined">school</span>
      </div>
      <div>
        <h4 className="font-bold">M.S. Computer Science</h4>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">University of Texas at Dallas</p>
        <p className="text-[10px] text-gray-500 font-mono mt-2">2021 - 2023</p>
      </div>
    </div>
  </section>
);

export default Education;