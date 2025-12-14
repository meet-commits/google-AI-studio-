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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(3, 0, 20, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 243, 255, 0.2)' : 'none',
        padding: isScrolled ? '16px' : '24px',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-50">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div style={{
              padding: '8px',
              border: '1px solid #00F3FF',
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 243, 255, 0.1)',
              transition: 'all 0.3s ease'
            }}>
              <Sparkles className="h-6 w-6" style={{color: '#00F3FF'}} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white" style={{fontFamily: 'Orbitron, sans-serif'}}>
              GOOGLE <span style={{color: '#00F3FF'}}>AI STUDIO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#9CA3AF',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#00F3FF';
                  target.style.textShadow = '0 0 20px rgba(0, 243, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#9CA3AF';
                  target.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                color: '#00F3FF',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#0a0a0a',
          borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
          backdropFilter: 'blur(16px)',
          zIndex: 40,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#D1D5DB',
                  border: '1px solid transparent',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Orbitron, sans-serif'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#00F3FF';
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  target.style.borderColor = 'rgba(0, 243, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = '#D1D5DB';
                  target.style.backgroundColor = 'transparent';
                  target.style.borderColor = 'transparent';
                }}
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