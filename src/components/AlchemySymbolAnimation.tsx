import React, { useRef, useEffect } from 'react';

const AlchemySymbolAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const layers = [
      { radius: 60, speed: 0.003, lineWidth: 2 },
      { radius: 80, speed: -0.005, lineWidth: 2 },
      { radius: 100, speed: 0.007, lineWidth: 2 },
      { radius: 120, speed: -0.011, lineWidth: 2 },
    ];

    let angle = 0;

    const drawLayer = (layer: { radius: number; speed: number; lineWidth: number }, angle: number) => {
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, layer.radius, 0, Math.PI * 2);
      ctx.lineWidth = layer.lineWidth;
      ctx.strokeStyle = 'black';
      ctx.stroke();
      ctx.closePath();

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(angle * layer.speed);
      ctx.beginPath();
      ctx.moveTo(0, -layer.radius);
      ctx.lineTo(layer.radius * Math.cos(Math.PI / 3), layer.radius * Math.sin(Math.PI / 3));
      ctx.lineTo(layer.radius * Math.cos((2 * Math.PI) / 3), layer.radius * Math.sin((2 * Math.PI) / 3));
      ctx.closePath();
      ctx.lineWidth = layer.lineWidth;
      ctx.strokeStyle = 'gold';
      ctx.stroke();
      ctx.restore();
    };

    const drawRotatingLayers = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      layers.forEach((layer, index) => {
        drawLayer(layer, angle + index * 20);
      });

      angle += 2;
      requestAnimationFrame(drawRotatingLayers);
    };

    drawRotatingLayers();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{ backgroundColor: '#ffffff'}}
    />
  );
};

export default AlchemySymbolAnimation;
