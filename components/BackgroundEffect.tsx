
import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 500 // Radius of interaction
    };

    const particles: Particle[] = [];
    const particleCount = Math.min(1500, (width * height) / 10000); // Dense but performant
    const connectionDistance = 185;

    // Color palette matching the theme
    const colors = [
      // { r: 0, g: 243, b: 255 },  // Cyan #000000ff
      // { r: 188, g: 19, b: 254 }, // Purple #4e3e55ff
      // { r: 244, g: 180, b: 0 },   // Yellow/Gold #403a28ff (Accent)
      { r: 15, g: 157, b: 88 }    // Green #0F9D58 (Code)
    ];

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      color: { r: number, g: number, b: number };
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;

        // Random velocity for "drifting"
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;

        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.density = (Math.random() * 300) + 1; // Mass/Inertia for physics
      }

      update() {
        // 1. Mouse Interaction (The "Mind Blowing" part)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Force direction calculation
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;

        const maxDistance = mouse.radius;
        const force = (maxDistance - distance) / maxDistance;

        // Direction to repel/attract (-1 = attract, 1 = repel)
        // Let's make it repel slightly to create a "clearing" effect + swirl
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          // Move away from mouse (Repulsion)
          this.x -= directionX;
          this.y -= directionY;
          // Add a bit of swirl/orbit
          // this.x += directionY * 0.5; 
          // this.y -= directionX * 0.5;
        } else {
          // Return to base position (Elasticity)
          if (this.x !== this.baseX) {
            const dx2 = this.x - this.baseX;
            this.x -= dx2 / 20; // Ease back speed
          }
          if (this.y !== this.baseY) {
            const dy2 = this.y - this.baseY;
            this.y -= dy2 / 20;
          }
        }

        // 2. Continuous idle movement
        // this.x += this.vx;
        // this.y += this.vy;

        // Boundaries check (wrap around not needed with basePos logic, but needed for drift)
        // Using basePos-centric logic instead for "Neuro-grid" feel
        // Let's add slight wave motion
        this.baseX += Math.sin(Date.now() * 0.001 + this.density) * 0.5;
        this.baseY += Math.cos(Date.now() * 0.001 + this.density) * 0.5;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Fade in/out slightly based on movement
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`;
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    init();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - distance / connectionDistance;

            // Dynamic Gradient Line
            const gradient = ctx.createLinearGradient(particle.x, particle.y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      // Draw Mouse "Glow"
      if (mouse.x !== -1000) {
        const radialGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 500);
        radialGradient.addColorStop(0, 'rgba(0, 243, 255, 0.15)');
        radialGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, width, height);
      }

      requestAnimationFrame(animate);
    };

    // Event Listeners
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Add scroll offset to Y
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    // Track mouse over entire window
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};

export default BackgroundEffect;