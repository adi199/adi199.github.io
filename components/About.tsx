import React from 'react';

const About: React.FC = () => (
  <section id="about" className="col-span-12 md:col-span-6 glass-module rounded-3xl p-8 relative scroll-mt-24">
    <div className="absolute top-0 right-0 p-4 opacity-5">
      <span className="material-symbols-outlined text-8xl">person</span>
    </div>
    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-purple-400 bg-purple-500/10 p-2 rounded-lg">person</span>
        About
      </div>
    </h3>
    <p className="text-gray-400 leading-relaxed mb-4">
      I bridge the gap between complex engineering and intuitive design. I take pride in building applications that are not only performant and scalable but also provide an exceptional digital experience.
    </p>
    <p className="text-gray-400 leading-relaxed">
      With a systems-thinking mindset, I optimize database queries and architect microservices meshes, focusing on long-term maintainability.
    </p>
  </section>
);

export default About;