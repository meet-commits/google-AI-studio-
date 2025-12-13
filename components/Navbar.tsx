import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'THE BRIDGE', href: '#hero' },
    { name: 'FOR DESIGNERS', href: '#designers' },
    { name: 'FOR DEVELOPERS', href: '#developers' },
    { name: 'WORKFLOW', href: '#demo' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030014]/80 backdrop-blur-lg border-b border-[#00F3FF]/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-50">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="p-2 border border-[#00F3FF] rounded bg-[#00F3FF]/10 group-hover:bg-[#00F3FF]/20 transition-all shadow-[0_0_10px_rgba(0,243,255,0.2)]">
              <Sparkles className="h-6 w-6 text-[#00F3FF]" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-display text-white">
              GOOGLE <span className="text-[#00F3FF]">AI STUDIO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-[#00F3FF] font-medium tracking-widest text-sm transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#00F3FF] hover:text-white focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#00F3FF]/20 backdrop-blur-xl z-40 shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-[#00F3FF] hover:bg-white/5 font-display border border-transparent hover:border-[#00F3FF]/30 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;