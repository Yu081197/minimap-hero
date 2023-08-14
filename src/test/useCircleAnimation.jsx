import { useEffect, useRef } from "react";

const useCircleAnimation = (circleDrawingStates) => {
  const canvasRef = useRef(null);
  const animationRefs = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 1600;
    canvas.height = 900;

    const circles = [
      { id: 1, x: 300, y: 200, radius: 77.5, active: false },
      { id: 2, x: 500, y: 200, radius: 116.25, active: false },
      { id: 3, x: 700, y: 200, radius: 155, active: false },
      { id: 4, x: 900, y: 200, radius: 193.75, active: false },
      { id: 5, x: 300, y: 500, radius: 232.5, active: false },
      { id: 6, x: 500, y: 500, radius: 271.25, active: false },
      { id: 7, x: 700, y: 500, radius: 271.25, active: false },
    ];

    function drawCircle(x, y, radius) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "#C89B3C";
      ctx.lineWidth = 3;
      ctx.stroke();
    }

    function drawAnimations() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle, index) => {
        if (circleDrawingStates[index]) {
          if (circle.radius >= 38.75) {
            drawCircle(circle.x, circle.y, circle.radius);
            circle.radius -= 0.5;
          }
        }
      });

      if (circleDrawingStates.some((isActive) => isActive)) {
        animationRefs.current[0] = requestAnimationFrame(drawAnimations);
      }
    }

    drawAnimations();

    return () => {
      animationRefs.current.forEach((animationId) => {
        cancelAnimationFrame(animationId);
      });
    };
  }, [circleDrawingStates]);

  return canvasRef;
};

export default useCircleAnimation;
