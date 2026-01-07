
import React, { useState } from 'react';
import { RESUME_URL } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/60 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center size-9 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-white border border-white/10 shadow-lg">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </span>
            <h2 className="text-lg font-bold tracking-tight text-white">&lt; Aditya Singh / &gt;</h2>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-text-secondary hover:text-white transition-all" href="#about">About</a>
            <a className="text-sm font-medium text-text-secondary hover:text-white transition-all" href="#skills">Skills</a>
            <a className="text-sm font-medium text-text-secondary hover:text-white transition-all" href="#experience">Experience</a>
            <a className="text-sm font-medium text-text-secondary hover:text-white transition-all" href="#projects">Projects</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={RESUME_URL}
              download="Aditya_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-5 text-sm font-bold text-white shadow-lg hover:scale-105 hover:shadow-purple-500/20 transition-all active:scale-95"
            >
              Resume
            </a>
            <button 
              className="md:hidden p-2 text-text-secondary hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-surface-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            <a className="text-lg font-medium text-text-secondary hover:text-white py-2" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a className="text-lg font-medium text-text-secondary hover:text-white py-2" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a className="text-lg font-medium text-text-secondary hover:text-white py-2" href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a className="text-lg font-medium text-text-secondary hover:text-white py-2" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </nav>
          <a 
            href={RESUME_URL}
            download="Aditya_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold text-center text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
