import React from 'react';

const SOCIALS = [
  { name: 'GitHub', slug: 'github', url: '#', brandColor: '#ffffff' },
  { name: 'LinkedIn', slug: 'linkedin', url: '#', brandColor: '#0A66C2' }
];

const Contact: React.FC = () => (
  <section id="contact" className="col-span-12 glass-module rounded-3xl p-12 text-center relative overflow-hidden">
    <div className="relative z-10 space-y-6">
      <span className="text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase">What's Next?</span>
      <h2 className="text-4xl md:text-6xl font-black">Get In Touch</h2>
      <p className="max-w-lg mx-auto text-gray-400 leading-relaxed">
        Have a question, a project idea, or just want to say hi? My inbox is always open. 
        Whether it's about system architecture or just a friendly hello, I'll get back to you!
      </p>
      
      <div className="pt-8 flex flex-col items-center gap-10">
        <a 
          href="mailto:hello@example.com" 
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10">Say Hello</span>
          <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">mail</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>

        <div className="flex items-center gap-8">
          {SOCIALS.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300"
              title={social.name}
            >
              <img 
                src={`https://cdn.simpleicons.org/${social.slug}/9CA3AF`} 
                className="size-6 transition-all duration-300 group-hover:scale-110 group-hover:brightness-200" 
                alt={social.name} 
                style={{ 
                  filter: 'grayscale(100%) brightness(0.8)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.src = `https://cdn.simpleicons.org/${social.slug}/${social.brandColor.replace('#', '')}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.8)';
                  e.currentTarget.src = `https://cdn.simpleicons.org/${social.slug}/9CA3AF`;
                }}
              />
              <div 
                className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none"
                style={{ backgroundColor: social.brandColor }}
              ></div>
            </a>
          ))}
        </div>
      </div>

      <div className="pt-16 border-t border-white/5 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
        <p>© 2024 Aditya Singh</p>
        <p>Built with Precision & Passion</p>
        <p>DEV SYSTEM v2.1</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none"></div>
  </section>
);

export default Contact;