import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ComplexEnterpriseAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes: { x: number; y: number; vx: number; vy: number; color: string; size: number }[] = [];
    const numNodes = 300;  // Increased number of nodes
    const colors = ['#32213A', '#383B53', '#66717E', '#D4D6B9', '#D1CAA1',];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 2 + 1  // Slightly smaller nodes
      });
    }

    const drawScene = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.lineWidth = 0.3;  // Thinner lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 80) {  // Shorter connection distance
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 100, 100, ${1 - distance / 80})`;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      requestAnimationFrame(drawScene);
    };

    drawScene();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.div
      className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </motion.div>
  );
};

export default ComplexEnterpriseAnimation;