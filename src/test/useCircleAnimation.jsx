import { useCallback, useEffect, useRef } from "react";

const useCircleAnimation = (drawingActive) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1600;
    canvas.height = 900;

    const circles = [
      { x: 300, y: 200, radius: 76.15 }, // 1초
      { x: 500, y: 200, radius: 116.26 }, // 2초
      { x: 700, y: 200, radius: 140.29 }, // 3초
      { x: 900, y: 200, radius: 156.2 }, // 4초
      { x: 300, y: 500, radius: 169.45 }, // 5초
      { x: 500, y: 500, radius: 180.89 }, // 6초
      { x: 700, y: 500, radius: 191.06 }, // 7초
    ];

    function drawCircle(x, y, radius) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#C89B3C";
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => {
        if (circle.radius > 38.75) {
          drawCircle(circle.x, circle.y, circle.radius);
          circle.radius -= 1;
        }
      });

      if (circles.some((circle) => circle.radius > 38.75)) {
        requestAnimationFrame(draw);
      }
    }

    if (drawingActive) {
      animationRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [drawingActive]);

  return canvasRef;
};

export default useCircleAnimation;
