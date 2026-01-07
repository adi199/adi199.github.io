import React from 'react';

const Certifications: React.FC = () => (
  <section className="col-span-12 md:col-span-6 glass-module rounded-3xl p-8">
    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
      <span className="gradient-text">06.</span> Certifications
    </h3>
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4 items-start">
      <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
        <span className="material-symbols-outlined">verified</span>
      </div>
      <div>
        <h4 className="font-bold">AWS Solutions Architect</h4>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Amazon Web Services</p>
      </div>
    </div>
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4 items-start">
      <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
        <span className="material-symbols-outlined">verified</span>
      </div>
      <div>
        <h4 className="font-bold">Google Cyber Security Professional</h4>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Google</p>
      </div>
    </div>
  </section>
);

export default Certifications;