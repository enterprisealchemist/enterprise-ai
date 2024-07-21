import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AlchemySymbolAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const layers = [
      { radius: 60, speed: 0.3, lineWidth: 2 },
      { radius: 80, speed: -0.5, lineWidth: 2 },
      { radius: 100, speed: 0.7, lineWidth: 2 },
      { radius: 120, speed: -1.1, lineWidth: 2 },
    ];

    let angle = 0;
    let glowIntensity = 0;
    let glowDirection = 1;

    const drawTriangle = (ctx: CanvasRenderingContext2D, radius: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -radius);
      ctx.lineTo(radius * Math.cos(Math.PI / 6), radius * Math.sin(Math.PI / 6));
      ctx.lineTo(-radius * Math.cos(Math.PI / 6), radius * Math.sin(Math.PI / 6));
      ctx.closePath();
    };

    const drawLayer = (layer: { radius: number; speed: number; lineWidth: number;}, angle: number) => {
      // Draw black circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, layer.radius, 0, Math.PI * 2);
      ctx.lineWidth = layer.lineWidth;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';  // Black with slight transparency
      ctx.stroke();
      ctx.closePath();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle * layer.speed);

      drawTriangle(ctx, layer.radius * 0.8);
      ctx.lineWidth = layer.lineWidth;
      
      const gradient = ctx.createLinearGradient(-layer.radius, -layer.radius, layer.radius, layer.radius);
      gradient.addColorStop(0, `hsla(${(angle * 2) % 360}, 70%, 50%, ${0.7 + glowIntensity * 0.3})`);
      gradient.addColorStop(1, `hsla(${(angle * 2 + 60) % 360}, 70%, 50%, ${0.7 + glowIntensity * 0.3})`);
      
      ctx.strokeStyle = gradient;
      ctx.stroke();

      ctx.shadowBlur = 10 + glowIntensity * 5;
      ctx.shadowColor = `hsla(${(angle * 2) % 360}, 70%, 50%, 0.5)`;
      ctx.stroke();

      ctx.restore();
    };

    const drawRotatingLayers = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // drawParticles();

      layers.forEach((layer, index) => {
        drawLayer(layer, angle);
      });

      angle += 0.02;  // Increased overall rotation speed
      glowIntensity += 0.01 * glowDirection;
      if (glowIntensity > 1 || glowIntensity < 0) {
        glowDirection *= -1;
      }

      requestAnimationFrame(drawRotatingLayers);
    };

    drawRotatingLayers();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        style={{ backgroundColor: '#ffffff' }}
      />
    </motion.div>
  );
};

export default AlchemySymbolAnimation;