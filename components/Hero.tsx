import React from 'react';
import { Lightbulb, Code2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border mb-8 gap-2"
            style={{ borderColor: 'rgba(0, 243, 255, 0.3)', backgroundColor: 'rgba(0, 243, 255, 0.1)' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00F3FF', boxShadow: '0 0 10px #00F3FF' }}></span>
            <span style={{ color: '#00F3FF', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.1em' }}>System Online: Gemini 1.5 Pro</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            THE BRIDGE BETWEEN <br />
            <span style={{ backgroundImage: 'linear-gradient(to right, #00F3FF, #BC13FE)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' as any }}>
              RAW IDEA
            </span>
            {' '}AND{' '}
            <span style={{ backgroundImage: 'linear-gradient(to right, #00F3FF, #0F9D58)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' as any }}>
              EXECUTION
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Prototype with natural language. Deploy with production-ready code. <br />
            <span className="text-white font-medium">The fastest way to build with Gemini.</span>
          </p>
        </div>

        {/* The Bridge */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left: Idea */}
          <div className="w-full md:w-1/3 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6" style={{ backgroundColor: 'rgba(244, 180, 0, 0.1)', border: '1px solid rgba(244, 180, 0, 0.2)' }}>
              <Lightbulb className="w-10 h-10" style={{ color: '#F4B400' }} />
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>THE IDEA</h3>
            <p className="text-gray-400 text-center text-sm font-mono border-t border-white/10 pt-4" style={{ fontFamily: 'Roboto Mono, monospace' }}>
              &gt; "Identify rare plants from photos."<br />
              <span style={{ animation: 'blink 1s infinite' }}>_</span>
            </p>
          </div>

          {/* Middle: Bridge */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full" style={{ backgroundColor: '#030014', border: '1px solid #00F3FF', boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}>
              <ArrowRight className="w-8 h-8" style={{ color: '#00F3FF' }} />
            </div>
            <p className="text-xs font-bold" style={{ color: '#00F3FF', letterSpacing: '0.2em', backgroundColor: '#030014', padding: '8px', border: '1px solid rgba(0, 243, 255, 0.3)', borderRadius: '4px' }}>AI STUDIO</p>
          </div>

          {/* Right: Application */}
          <div className="w-full md:w-1/3 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6" style={{ backgroundColor: 'rgba(15, 157, 88, 0.1)', border: '1px solid rgba(15, 157, 88, 0.2)' }}>
              <Code2 className="w-10 h-10" style={{ color: '#0F9D58' }} />
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>THE APP</h3>
            <div className="text-gray-400 text-xs p-3 rounded border" style={{ fontFamily: 'Roboto Mono, monospace', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              <span style={{ color: '#BC13FE' }}>const</span> app = <span style={{ color: '#00F3FF' }}>new</span> <span style={{ color: '#F4B400' }}>Gemini</span>();<br />
              app.<span style={{ color: '#0F9D58' }}>deploy</span>();
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;