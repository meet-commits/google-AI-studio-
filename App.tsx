import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignerSection from './components/DesignerSection';
import DeveloperSection from './components/DeveloperSection';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';
import CursorEffect from './components/CursorEffect';
import BackgroundEffect from './components/BackgroundEffect';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black text-white overflow-x-hidden">
      <CursorEffect />
      <BackgroundEffect />
      <Navbar />
      <div className="relative z-10 flex flex-col flex-grow">
        <main className="flex-grow">
          <Hero />
          <DesignerSection />
          <DeveloperSection />
          <DemoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;