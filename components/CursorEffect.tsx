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
        <div 
          className="relative flex items-center justify-center rounded-full transition-all duration-150 ease-out"
          style={{
            width: isPointer ? '48px' : '24px',
            height: isPointer ? '48px' : '24px',
            border: '1px solid #00F3FF',
            backgroundColor: isPointer ? 'rgba(0, 243, 255, 0.1)' : 'transparent'
          }}
        >
          <div style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#00F3FF',
            borderRadius: '50%',
            boxShadow: '0 0 10px #00F3FF'
          }}></div>
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
         <div style={{
           width: '128px',
           height: '128px',
           backgroundColor: '#BC13FE',
           borderRadius: '50%',
           filter: 'blur(48px)',
           opacity: '0.1'
         }}></div>
      </div>
    </>
  );
};

export default CursorEffect;