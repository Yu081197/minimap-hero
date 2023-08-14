import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ASkill from "../assets/img/skills/skill-a.png";
import SSkill from "../assets/img/skills/skill-s.png";

const StyledWrapper = styled.div`
  .game-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 1604px;
    height: 904px;
    background-color: #091428;
    border: 2px solid #c8aa6e;
    z-index: 0;
  }
  .canvas-container {
    width: 1600px;
    height: 900px;
    position: absolute;
    background-color: transparent;
    z-index: 2;
  }
  .skill-container {
    background-color: transparent;
    position: absolute;
    top: ${(props) => props.positionY}px;
    left: ${(props) => props.positionX}px;
    z-index: 1;
  }
  .skill-box {
    width: 110%;
    max-width: 100px;
    max-height: 100px;
    height: 110%;
    border-radius: 50%;
    display: flex;
    background-color: #091428;
    flex-direction: column-reverse;
    gap: 5px;
  }
  .skill {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #c8aa6e;
    background-color: #091428;
  }
`;

const Canvas = () => {
  const canvasRef = useRef(null);
  const gameContainer = useRef(null);
  const [drawingActive, setDrawingActive] = useState(false);
  const [skill, setSkill] = useState([
    {
      id: 1,
      isGamePlay: "non-playing",
      targetSkill: null,
      isShown: false,
      positionX: null,
      positionY: null,
      showTime: null,
      shownTime: null,
      noShowTime: null,
      currentTime: null,
      keyPressedTime: 0,
      isHovered: false,
    },
  ]);
  let previousXValues = [];
  function getRandomPositionX() {
    const boxRect = gameContainer.current.getBoundingClientRect();
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousXValues.length === Math.floor(boxRect.width - 450)) {
      previousXValues = [];
    }
    let x;
    do {
      x = Math.random() * (boxRect.width - 450);
    } while (previousXValues.includes(x));
    // 이전 배열에 현재 x값 추가
    previousXValues.push(x);
    return x;
  }

  let previousYValues = [];
  function getRandomPositionY() {
    const boxRect = gameContainer.current.getBoundingClientRect();
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousYValues.length === Math.floor(boxRect.height - 350)) {
      previousYValues = [];
    }
    let y;
    do {
      y = Math.random() * (boxRect.height - 350);
    } while (previousYValues.includes(y));
    // 이전 배열에 현재 x값 추가
    previousYValues.push(y);
    return y;
  }

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

    requestAnimationFrame(draw); // Start the animation loop
  }, []);

  const handleDrawButtonClick = () => {
    setDrawingActive(true); // 버튼을 클릭하면 원 그리기를 활성화
  };

  return (
    <>
      <StyledWrapper>
        <canvas className="canvas-container" ref={canvasRef}></canvas>
        <div className="skill-container" style={{ left: 854, top: 222 }}>
          <div className="skill-box">
            <img className="skill" src={ASkill} />
          </div>
        </div>
        <div
          className="skill-container"
          style={{ left: skill[0].positionX, top: skill[0].positionY }}
        >
          <div className="skill-box">
            <img
              className="skill"
              src={SSkill}
              onClick={handleDrawButtonClick}
            />
          </div>
        </div>
        <div className="game-container" ref={gameContainer}></div>
        <button onClick={handleDrawButtonClick}>Draw</button>
      </StyledWrapper>
    </>
  );
};

export default Canvas;
