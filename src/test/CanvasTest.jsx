import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useCircleAnimation from "./useCircleAnimation";

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
  const [drawingActive, setDrawingActive] = useState(false);
  const canvasRef = useCircleAnimation(drawingActive); // 커스텀 훅 사용
  const gameContainer = useRef(null);

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

  const handleDrawButtonClick = () => {
    setDrawingActive((prevState) => !prevState); // 이전 상태를 반전시켜 토글
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
            <img className="skill" src={SSkill} />
          </div>
        </div>
        <div className="game-container" ref={gameContainer}></div>
        <button
          style={{ backgroundColor: "white" }}
          onClick={() => {
            handleDrawButtonClick();
            console.log(drawingActive);
          }}
        >
          Draw
        </button>
      </StyledWrapper>
    </>
  );
};

export default Canvas;
