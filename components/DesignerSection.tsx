import React from 'react';
import { Image, UserCircle, Wand2 } from 'lucide-react';

const DesignerSection: React.FC = () => {
  const features = [
    {
      icon: <Image className="h-8 w-8 text-[#00F3FF]" />,
      title: "Multimodal Inputs",
      description: "Don't just tell, show. Drag and drop images and videos directly into the prompt to build context-aware AI experiences.",
      borderColor: "group-hover:border-[#00F3FF]",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
    },
    {
      icon: <UserCircle className="h-8 w-8 text-[#BC13FE]" />,
      title: "Persona Design",
      description: "Craft specific system instructions to define the tone, style, and behavior of your AI. Create an expert, a creative writing partner, or a data analyst.",
      borderColor: "group-hover:border-[#BC13FE]",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]"
    },
    {
      icon: <Wand2 className="h-8 w-8 text-[#F4B400]" />,
      title: "No-Code Logic",
      description: "Test logic flows and edge cases instantly without writing a single line of code. Iterate on your product experience in real-time.",
      borderColor: "group-hover:border-[#F4B400]",
      shadowColor: "group-hover:shadow-[0_0_30px_rgba(244,180,0,0.2)]"
    }
  ];

  return (
    <section id="designers" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F3FF]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#00F3FF] uppercase tracking-[0.3em] mb-2 font-display">Interface</h2>
          <h3 className="text-5xl md:text-6xl font-black text-white font-display mb-6">THE DESIGNER'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F3FF] to-white">PLAYGROUND</span></h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Focus on the experience, not the infrastructure. <br/>Shape model behavior intuitively in a high-fidelity environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`group glass-panel rounded-xl p-8 transition-all duration-300 border border-white/5 ${feature.borderColor} ${feature.shadowColor}`}>
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-display">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;