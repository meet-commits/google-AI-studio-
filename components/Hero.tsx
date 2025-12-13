import React from 'react';
import { Lightbulb, Code2, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F3FF] rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BC13FE] rounded-full filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#00F3FF]/30 bg-[#00F3FF]/10 text-[#00F3FF] text-sm font-bold tracking-widest mb-8 uppercase backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#00F3FF] mr-3 shadow-[0_0_10px_#00F3FF]"></span>
            System Online: Gemini 1.5 Pro
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-none font-display">
            THE BRIDGE BETWEEN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F3FF] to-[#BC13FE] drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              RAW IDEA
            </span>{' '}
            AND{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F3FF] to-[#0F9D58] drop-shadow-[0_0_10px_rgba(15,157,88,0.3)]">
              EXECUTION
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Prototype with natural language. Deploy with production-ready code. <br/>
            <span className="text-white font-medium">The fastest way to build with Gemini.</span>
          </p>
        </div>

        {/* The Bridge Visualization - Cyberpunk Style */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 relative">
            
            {/* Left: Idea */}
            <div className="group glass-panel rounded-2xl p-8 w-full md:w-1/3 hover:border-[#F4B400]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,180,0,0.2)]">
              <div className="p-4 bg-[#F4B400]/10 border border-[#F4B400]/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Lightbulb className="h-10 w-10 text-[#F4B400] drop-shadow-[0_0_10px_#F4B400]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center font-display">THE IDEA</h3>
              <p className="text-gray-400 text-center font-mono text-sm border-t border-white/10 pt-4 mt-4">
                > "Identify rare plants from photos."<br/>
                <span className="animate-pulse">_</span>
              </p>
            </div>

            {/* Middle: Bridge */}
            <div className="flex flex-col items-center justify-center relative px-4 md:px-12 z-20">
               {/* Animated Data Stream */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 transform -translate-y-1/2 -z-10 overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#00F3FF] to-transparent animate-[shimmer_2s_infinite]"></div>
               </div>
               
               <div className="p-4 bg-[#030014] rounded-full border border-[#00F3FF] shadow-[0_0_20px_rgba(0,243,255,0.4)] z-10 hover:rotate-180 transition-transform duration-700 cursor-none">
                 <ArrowRight className="h-8 w-8 text-[#00F3FF]" />
               </div>
               <p className="mt-4 text-xs font-bold text-[#00F3FF] uppercase tracking-[0.2em] bg-[#030014] px-2 border border-[#00F3FF]/30 rounded">AI Studio</p>
            </div>

            {/* Right: Application */}
            <div className="group glass-panel rounded-2xl p-8 w-full md:w-1/3 hover:border-[#0F9D58]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(15,157,88,0.2)]">
              <div className="p-4 bg-[#0F9D58]/10 border border-[#0F9D58]/20 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Code2 className="h-10 w-10 text-[#0F9D58] drop-shadow-[0_0_10px_#0F9D58]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-center font-display">THE APP</h3>
              <div className="text-gray-400 text-xs font-mono bg-black/50 p-3 rounded border border-white/10 mt-4">
                <span className="text-[#BC13FE]">const</span> app = <span className="text-[#00F3FF]">new</span> <span className="text-[#F4B400]">Gemini</span>();<br/>
                app.<span className="text-[#0F9D58]">deploy</span>();
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;