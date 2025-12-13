import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if device supports hover (mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsVisible(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => setIsVisible(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (!mediaQuery.matches) return;
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"], select, input, textarea { 
            cursor: none !important; 
          }
        }
      `}</style>
      
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`
          relative flex items-center justify-center rounded-full border border-[#00F3FF] transition-all duration-150 ease-out
          ${isPointer ? 'w-12 h-12 bg-[#00F3FF]/10' : 'w-6 h-6 bg-transparent'}
        `}>
          <div className="w-1 h-1 bg-[#00F3FF] rounded-full shadow-[0_0_10px_#00F3FF]"></div>
        </div>
      </div>

      {/* Trailing Glow */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%)`,
        }}
      >
         <div className="w-32 h-32 bg-[#BC13FE] rounded-full blur-3xl opacity-10"></div>
      </div>
    </>
  );
};

export default CursorEffect;