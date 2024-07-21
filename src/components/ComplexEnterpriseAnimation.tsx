import React, { useEffect, useRef } from 'react';

const ComplexEnterpriseAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const nodes: { x: number; y: number; vx: number; vy: number; color: string }[] = [];
    const numNodes = 30;
    const colors = ['#4299E1', '#48BB78', '#ED8936', '#9F7AEA', '#ED64A6'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const drawScene = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(100, 100, 100, ${1 - distance / 100})`;
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      requestAnimationFrame(drawScene);
    };

    drawScene();
  }, []);

  return (
    <div className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-4 relative overflow-hidden">
      <canvas ref={canvasRef} width={600} height={200} className="w-full h-full" />
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
    </div>
  );
};

export default ComplexEnterpriseAnimation;