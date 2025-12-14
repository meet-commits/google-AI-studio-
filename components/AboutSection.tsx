
import React from 'react';
import { Sparkles, Image as ImageIcon, Video, Mic, Code, MessageSquare, LayoutGrid, ArrowRight, Play } from 'lucide-react';

const AboutSection: React.FC = () => {
  // 1. New Features Data (from Screenshot)
  const newFeatures = [
    {
      icon: <Sparkles className="h-5 w-5 text-[#00F3FF]" />,
      title: "Try Gemini 3",
      description: "Our most intelligent model to date.",
      borderColor: "border-[#00F3FF]"
    },
    {
      icon: <ImageIcon className="h-5 w-5 text-[#F4B400]" />,
      title: "Try Nano Banana Pro (Imagen 3)",
      description: "State-of-the-art Image generation and editing.",
      borderColor: "border-[#F4B400]"
    },
    {
      icon: <Video className="h-5 w-5 text-[#BC13FE]" />,
      title: "Veo 3.1",
      description: "Our best video generation model, now with sound effects.",
      borderColor: "border-[#BC13FE]"
    },
    {
      icon: <Mic className="h-5 w-5 text-[#0F9D58]" />,
      title: "Text to speech",
      description: "Generate high quality text to speech with Gemini.",
      borderColor: "border-[#0F9D58]"
    }
  ];

  // 2. Quick Actions (from Screenshot)
  const quickActions = [
    { label: "Vibe code GenAI apps", icon: <Code className="w-4 h-4" /> },
    { label: "Chat with models", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Monitor usage and projects", icon: <LayoutGrid className="w-4 h-4" /> }
  ];

  // 3. Examples of Apps you can build (User Request)
  const appExamples = [
    {
      title: "Smart Travel Planner",
      description: "Build an agent that plans multi-city trips, books flights, and suggests restaurants based on dietary restrictions.",
      tags: ["Reasoning", "Tools"],
      color: "from-[#00F3FF] to-[#0066FF]"
    },
    {
      title: "Financial Analyst Bot",
      description: "Upload PDFs of annual reports and get instant summaries, trend analysis, and investment risk assessments.",
      tags: ["Long Context", "Data Extraction"],
      color: "from-[#0F9D58] to-[#00FF94]"
    },
    {
      title: "Creative Story Engine",
      description: "A collaborative writing tool that remembers character backstories and generates plot twists on demand.",
      tags: ["Creativity", "Memory"],
      color: "from-[#BC13FE] to-[#FF00FF]"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#00F3FF] rounded-full mix-blend-screen filter blur-[120px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Phase */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-white font-display mb-6">
            Google AI Studio
          </h2>
          <p className="text-xl text-gray-400">
            The fastest way from prompt to production with Gemini
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {quickActions.map((action, idx) => (
              <button key={idx} className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:scale-105 hover:border-white/20">
                {action.icon}
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* WHAT'S NEW GRID (Screenshot Features) */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-white" />
            <h3 className="text-xl font-bold text-white">What's new</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newFeatures.map((feature, idx) => (
              <div key={idx} className={`group p-6 rounded-2xl border bg-[#050505] hover:bg-white/[0.02] transition-colors relative overflow-hidden ${feature.borderColor.replace('border-', 'border-white/10 hover:border-')}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GET STARTED (Code Snippet from Screenshot) */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Get started with Gemini</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Integrate state-of-the-art generative AI into your applications with just a few lines of code.
              AI Studio provides the boilerplate so you can focus on building what matters.
            </p>
            <div className="flex gap-4 text-sm font-medium text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">View API keys</span>
              <span className="hover:text-white cursor-pointer transition-colors">Explore docs</span>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#252526]">
              <span className="text-xs text-gray-400">Python</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm text-gray-300 overflow-x-auto">
              <div className="mb-4">
                <span className="text-[#C678DD]">from</span> google <span className="text-[#C678DD]">import</span> genai
              </div>
              <div className="mb-4">
                client = genai.Client()
              </div>
              <div className="mb-4">
                <div className="text-gray-500"># Create the model</div>
                <span className="text-[#61AFEF]">response</span> = client.models.generate_content(<br />
                &nbsp;&nbsp;model=<span className="text-[#98C379]">"gemini-3-pro-preview"</span>,<br />
                &nbsp;&nbsp;contents=<span className="text-[#98C379]">"Explain how AI works in a few words"</span>,<br />
                )
              </div>
              <div>
                <span className="text-[#E5C07B]">print</span>(response.text)
              </div>
            </div>
          </div>
        </div>

        {/* WHAT YOU CAN BUILD (User Request: App Examples) */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white font-display mb-4">
              WHAT YOU CAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BC13FE] to-[#00F3FF]">BUILD</span>
            </h2>
            <p className="text-gray-400">From prototypes to production-grade applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appExamples.map((app, idx) => (
              <div key={idx} className="group relative rounded-2xl bg-[#080808] border border-white/10 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                {/* Gradient Top Bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${app.color}`}></div>

                <div className="p-8">
                  <h4 className="text-xl font-bold text-white mb-3">{app.title}</h4>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center text-[#00F3FF] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Blueprint <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
