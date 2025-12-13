import React from 'react';
import { Code, Settings, FileJson, ChevronRight } from 'lucide-react';

const DeveloperSection: React.FC = () => {
  return (
    <section id="developers" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#00F3FF 1px, transparent 1px), linear-gradient(90deg, #00F3FF 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold text-[#0F9D58] uppercase tracking-[0.3em] mb-2 font-display">Back-End</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white font-display mb-6">DEVELOPER'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#00F3FF]">LAUNCHPAD</span></h3>
            <p className="text-xl text-gray-400 mb-10 border-l-2 border-[#0F9D58] pl-6">
              From playground to production in one click. <br/>AI Studio writes the boilerplate so you can focus on integration.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-[#0F9D58]/20 text-[#0F9D58] border border-[#0F9D58]/50 group-hover:bg-[#0F9D58] group-hover:text-black transition-all">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white font-display group-hover:text-[#0F9D58] transition-colors">"&lt; &gt; Get Code" Feature</h4>
                  <p className="mt-2 text-gray-400">
                    Instantly generate snippets for Python, JS, cURL, and Swift based on your current prompt state.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-[#0F9D58]/20 text-[#0F9D58] border border-[#0F9D58]/50 group-hover:bg-[#0F9D58] group-hover:text-black transition-all">
                    <FileJson className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white font-display group-hover:text-[#0F9D58] transition-colors">JSON Mode</h4>
                  <p className="mt-2 text-gray-400">
                    Enforce deterministic, structured output. Ensure the model returns valid JSON for direct API consumption.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-[#0F9D58]/20 text-[#0F9D58] border border-[#0F9D58]/50 group-hover:bg-[#0F9D58] group-hover:text-black transition-all">
                    <Settings className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white font-display group-hover:text-[#0F9D58] transition-colors">Parameter Tuning</h4>
                  <p className="mt-2 text-gray-400">
                    Fine-tune response entropy. Control Temperature, Top-K, and Top-P for the perfect balance of creativity and logic.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="#api-docs" 
                className="inline-flex items-center px-8 py-4 border border-[#0F9D58] text-base font-bold rounded shadow-[0_0_15px_rgba(15,157,88,0.4)] text-white bg-[#0F9D58]/20 hover:bg-[#0F9D58] hover:text-black transition-all duration-300 font-display"
              >
                &lt; &gt; INITIALIZE CODE
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Code Visual */}
          <div className="order-1 lg:order-2 relative">
             <div className="absolute inset-0 bg-[#0F9D58] blur-[100px] opacity-20"></div>
             <div className="bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed relative group transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">gemini-service.js</div>
              </div>
              <div className="p-8 text-gray-300 overflow-x-auto relative z-10">
                <span className="text-[#BC13FE]">const</span> <span className="text-[#E5C07B]">run</span> <span className="text-[#00F3FF]">=</span> <span className="text-[#BC13FE]">async</span> () <span className="text-[#BC13FE]">=&#62;</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-gray-500">// Initialize Model</span><br/>
                &nbsp;&nbsp;<span className="text-[#BC13FE]">const</span> model <span className="text-[#00F3FF]">=</span> genAI.<span className="text-[#61AFEF]">getGenerativeModel</span>({'{'} <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#D19A66]">model</span>: <span className="text-[#98C379]">"gemini-1.5-pro"</span> <br/>
                &nbsp;&nbsp;{'}'});<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-[#BC13FE]">const</span> prompt <span className="text-[#00F3FF]">=</span> <span className="text-[#98C379]">"Analyze this quantum dataset."</span>;<br/>
                <br/>
                &nbsp;&nbsp;<span className="text-[#BC13FE]">const</span> result <span className="text-[#00F3FF]">=</span> <span className="text-[#BC13FE]">await</span> model.<span className="text-[#61AFEF]">generateContent</span>(prompt);<br/>
                &nbsp;&nbsp;<span className="text-[#BC13FE]">const</span> response <span className="text-[#00F3FF]">=</span> <span className="text-[#BC13FE]">await</span> result.response;<br/>
                &nbsp;&nbsp;<span className="text-[#BC13FE]">const</span> text <span className="text-[#00F3FF]">=</span> response.<span className="text-[#61AFEF]">text</span>();<br/>
                &nbsp;&nbsp;console.<span className="text-[#61AFEF]">log</span>(text);<br/>
                {'}'};
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;