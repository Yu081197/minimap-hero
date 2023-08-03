import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Map from "../../components/Map/Map";

import skillUI from "../../assets/img/skillUI.png";
import ASkill from "../../assets/img/skills/skill-a.png";
import SSkill from "../../assets/img/skills/skill-s.png";
import DSkill from "../../assets/img/skills/skill-d.png";
import FSkill from "../../assets/img/skills/skill-f.png";
import QSkill from "../../assets/img/skills/skill-q.png";
import WSkill from "../../assets/img/skills/skill-w.png";
import ESkill from "../../assets/img/skills/skill-e.png";
import RSkill from "../../assets/img/skills/skill-r.png";

const StyledWrapper = styled.div`
  .game-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 15%;
    width: 1964px;
    height: 1084px;
    border: 1px solid black;
    background-color: #091428;
    border: 2px solid #c8aa6e;
  }
  .ui-container {
    position: absolute;
    bottom: 0;
    left: 400px;
  }
  .ui {
    width: 1000px;
  }
  .time {
    color: white;
  }
  .skill {
    border-radius: 50%;
    border: 2px solid #c8aa6e;
  }
  .score-container {
    display: block;
  }
  .score {
    top: 50px;
    right: 50px;
    position: absolute;
    color: #cdfafa;
    background-color: #091428;
  }
  .fail {
    color: #cdfafa;
    background-color: #091428;
  }
  .skill-ui {
    width: 800px;
    position: absolute;
    bottom: 0;
    left: 500px;
  }
`;

const Box = styled.div`
  width: 1960px;
  height: 1060px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: relative;
  background-color: #091428;
`;

const SkillStyle = styled.div`
  position: absolute;
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
  color: #0ac8b9;
  background-color: #091428;
`;

const skills = [
  { id: 1, eng: "q", kor: "ㅂ", image: QSkill },
  { id: 2, eng: "w", kor: "ㅈ", image: WSkill },
  { id: 3, eng: "e", kor: "ㄷ", image: ESkill },
  { id: 4, eng: "r", kor: "ㄱ", image: RSkill },
  { id: 5, eng: "a", kor: "ㅁ", image: ASkill },
  { id: 6, eng: "s", kor: "ㄴ", image: SSkill },
  { id: 7, eng: "d", kor: "ㅇ", image: DSkill },
  { id: 8, eng: "f", kor: "ㄹ", image: FSkill },
];

const InGamePlay = () => {
  const [time, setTime] = useState(0);
  const [skill, setSkill] = useState([
    {
      id: 1,
      targetSkill: "",
      isShown: false,
      positionXY: { x: 0, y: 0 },
      showTime: null,
      noShowTime: null,
    },
    {
      id: 2,
      targetSkill: "",
      isShown: false,
      positionXY: { x: 0, y: 0 },
      showTime: null,
      noShowTime: null,
    },
    {
      id: 3,
      targetSkill: "",
      isShown: false,
      positionXY: { x: 0, y: 0 },
      showTime: null,
      noShowTime: null,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((props) => props + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <StyledWrapper>
      <div className="game-container">
        <div className="time">{time}</div>
        <div className="map-container">
          <Map />
        </div>
        <div className="ui-container">
          <img className="ui" src={skillUI}></img>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default InGamePlay;
