import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
}

const ParticleText = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear and set up text
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    const fontSize = Math.min(rect.width / 8, 72);
    ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
    ctx.letterSpacing = "-3px";
    
    const text1 = "Nauči";
    const text2 = " digitalnu";
    const text3 = " ekonomiju.";
    
    const text1Width = ctx.measureText(text1).width;
    const text2Width = ctx.measureText(text2).width;
    const fullText = text1 + text2 + text3;
    const totalWidth = ctx.measureText(fullText).width;
    
    const startX = (rect.width - totalWidth) / 2;
    const lineHeight = fontSize * 1.1;
    const startY = rect.height / 2;

    // Draw text to get pixel data
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text1, startX, startY);
    
    ctx.fillStyle = "#38bdf8";
    ctx.fillText(text2, startX + text1Width, startY);
    ctx.fillText(text3, startX + text1Width + text2Width, startY);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Create particles from pixels
    const particles: Particle[] = [];
    const gap = 2; // Smaller gap = denser particles

    for (let y = 0; y < canvas.height; y += gap * dpr) {
      for (let x = 0; x < canvas.width; x += gap * dpr) {
        const index = (y * canvas.width + x) * 4;
        const alpha = data[index + 3];
        
        if (alpha > 128) {
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          
          particles.push({
            x: x / dpr,
            y: y / dpr,
            originX: x / dpr,
            originY: y / dpr,
            color: `rgb(${r}, ${g}, ${b})`,
            size: 2,
            vx: 0,
            vy: 0,
          });
        }
      }
    }

    particlesRef.current = particles;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const mouse = mouseRef.current;
    const particles = particlesRef.current;
    const radius = 100;
    const force = 8;
    const returnSpeed = 0.05;
    const friction = 0.85;

    for (const particle of particles) {
      // Calculate distance from mouse
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Repel particles from mouse
      if (distance < radius && distance > 0) {
        const angle = Math.atan2(dy, dx);
        const strength = (radius - distance) / radius;
        particle.vx -= Math.cos(angle) * strength * force;
        particle.vy -= Math.sin(angle) * strength * force;
      }

      // Apply velocity
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Return to origin
      const originDx = particle.originX - particle.x;
      const originDy = particle.originY - particle.y;
      particle.vx += originDx * returnSpeed;
      particle.vy += originDy * returnSpeed;

      // Apply friction
      particle.vx *= friction;
      particle.vy *= friction;

      // Draw particle
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    createParticles();
    animate();

    const handleResize = () => {
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticles, animate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-32 md:h-40 lg:h-48 cursor-default"
      style={{ touchAction: "none" }}
    />
  );
};

export default ParticleText;
