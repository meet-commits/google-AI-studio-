import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] border-t border-[#00F3FF]/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-white font-display tracking-widest">
            GOOGLE <span className="text-[#00F3FF]">AI STUDIO</span>
          </span>
        </div>
        <div className="flex space-x-8 text-xs font-mono text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-[#00F3FF] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#00F3FF] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#00F3FF] transition-colors">About</a>
        </div>
        <div className="mt-4 md:mt-0 text-xs text-gray-600 font-mono">
          © {new Date().getFullYear()} GOOGLE LLC // SYSTEM.READY
        </div>
      </div>
    </footer>
  );
};

export default Footer;