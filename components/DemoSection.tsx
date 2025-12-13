import React, { useState } from 'react';
import { MessageSquare, ArrowDown, Code2, Sliders } from 'lucide-react';

const DemoSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <Sliders className="w-6 h-6" />,
      title: "Define Rules",
      content: "System Instruction: 'You are a cyberpunk narrative engine. Output strict JSON.'",
      color: "text-[#00F3FF]",
      bg: "bg-[#00F3FF]/10",
      border: "border-[#00F3FF]"
    },
    {
      id: 2,
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Input Prompt",
      content: "User: 'Generate a weapon description for a plasma rifle.'",
      color: "text-[#BC13FE]",
      bg: "bg-[#BC13FE]/10",
      border: "border-[#BC13FE]"
    },
    {
      id: 3,
      icon: <Code2 className="w-6 h-6" />,
      title: "Get Working Code",
      content: `const response = await model.generateContent("Generate weapon...");`,
      color: "text-[#0F9D58]",
      bg: "bg-[#0F9D58]/10",
      border: "border-[#0F9D58]",
      isCode: true
    }
  ];

  return (
    <section id="demo" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-sm font-bold text-[#F4B400] uppercase tracking-[0.3em] font-display">Protocol</h2>
           <h3 className="mt-2 text-5xl font-black text-white font-display">FROM PROMPT TO <span className="text-[#F4B400]">PRODUCT</span></h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#333] to-transparent transform md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => setActiveStep(step.id)}
                >
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-[#030014] shadow-[0_0_10px_currentColor] transform -translate-x-1/2 flex items-center justify-center z-10 transition-all duration-300 ${activeStep === step.id ? `${step.color} scale-150 bg-white` : 'text-gray-700 bg-gray-900'}`}>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 p-4 md:p-8 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <div 
                      className={`glass-panel p-6 rounded-none clip-path-polygon border-l-2 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                        activeStep === step.id 
                          ? `${step.border} bg-white/5` 
                          : 'border-transparent hover:border-gray-700'
                      }`}
                    >
                      {/* Hover Flash */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r from-transparent via-white to-transparent`}></div>

                      <div className={`flex items-center mb-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                         <div className={`p-2 rounded ${step.bg} ${step.color} mr-3 ${index % 2 !== 0 ? 'md:mr-0 md:ml-3' : ''}`}>
                           {step.icon}
                         </div>
                         <h4 className="text-xl font-bold text-white font-display">{step.title}</h4>
                      </div>
                      
                      {step.isCode ? (
                        <div className="bg-black/80 rounded p-4 text-left border border-white/5 shadow-inner">
                          <code className="text-xs text-[#0F9D58] font-mono break-all">
                            {step.content}
                          </code>
                        </div>
                      ) : (
                        <p className="text-gray-300 italic font-mono text-sm border-l-2 border-gray-700 pl-3">
                          "{step.content}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>

            {/* End Arrow */}
            <div className="absolute bottom-0 left-8 md:left-1/2 transform -translate-x-1/2 translate-y-full pt-8">
               <ArrowDown className="text-[#00F3FF] animate-bounce w-8 h-8" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;