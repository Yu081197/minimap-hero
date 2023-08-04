import React, { useState, useEffect, useRef } from "react";
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
  p {
    color: white;
  }
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
    width: 70px;
    height: 70px;
    color: #0ac8b9;
    background-color: #091428;
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
  .skill-container {
    background-color: #091428;
    position: absolute;
    top: ${(props) => props.positionY}px;
    left: ${(props) => props.positionX}px;
  }
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
  const gameContainer = useRef(null);
  const [time, setTime] = useState(0);

  const [skill, setSkill] = useState([
    {
      id: 1,
      isGamePlay: "non-playing",
      targetSkill: null,
      isShown: false,
      positionX: null,
      positionY: null,
      showTime: null,
      noShowTime: null,
    },
    {
      id: 2,
      isGamePlay: "non-playing",
      targetSkill: null,
      isShown: false,
      positionX: null,
      positionY: null,
      showTime: null,
      noShowTime: null,
    },
    {
      id: 3,
      isGamePlay: "non-playing",
      targetSkill: null,
      isShown: false,
      positionX: null,
      positionY: null,
      showTime: null,
      noShowTime: null,
    },
  ]);

  function getRandomNumberTwoToSix() {
    return Math.floor(Math.random() * 5) + 2; // 2,3,4,5,6중 랜덤한 숫자 생성
  }
  function getRandomNumberTwoToFour() {
    return Math.floor(Math.random() * 4) + 2; // 2,3,4 중 랜덤한 숫자 생성
  }

  function getRandomSkill() {
    let previousSkills = [];
    if (previousSkills.length === skills.length) {
      // 모든 스킬이 한 번씩 반환되었으므로, 이전 배열을 초기화
      previousSkills = [];
    }
    let randomSkill;
    do {
      randomSkill = skills[Math.floor(Math.random() * skills.length)];
    } while (previousSkills.includes(randomSkill));
    // 이전 배열에 현재 스킬 추가
    previousSkills.push(randomSkill);
    return randomSkill;
  }

  function getRandomPositionX() {
    let previousXValues = [];
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

  function getRandomPositionY() {
    let previousYValues = [];
    const boxRect = gameContainer.current.getBoundingClientRect();
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousYValues.length === Math.floor(boxRect.width - 350)) {
      previousYValues = [];
    }
    let y;
    do {
      y = Math.random() * (boxRect.width - 350);
    } while (previousYValues.includes(y));
    // 이전 배열에 현재 x값 추가
    previousYValues.push(y);
    return y;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((props) => props + 1);
      console.log("------------------");
      console.log(skill[0].isShown);
      console.log("noshow", skill[0].noShowTime);
      console.log("show", skill[0].showTime);
      console.log(skill[0].targetSkill);
      console.log(skill[0].positionX);
      console.log(skill[0].positionY);
      // console.log(skill[0].image);
      // console.log(skill[0].eng);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (skill[0].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[0].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[0].showTime = getRandomNumberTwoToSix();
        updatedSkill[0].targetSkill = getRandomSkill();
        updatedSkill[0].positionX = getRandomPositionX();
        updatedSkill[0].positionY = getRandomPositionY();
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          updatedSkill[0].isShown = true;
          updatedSkill[0].isGamePlay = "playing";
          return updatedSkill;
        });
        setTimeout(() => {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[0].isShown = false;
            updatedSkill[0].isGamePlay = "non-playing";
            return updatedSkill;
          });
        }, skill[0].noShowTime * 700);
      }, skill[0].showTime * 700);
    }
  }, [skill[0].isGamePlay]);

  useEffect(() => {
    if (skill[1].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[1].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[1].showTime = getRandomNumberTwoToSix();
        updatedSkill[1].targetSkill = getRandomSkill();
        updatedSkill[1].positionX = getRandomPositionX();
        updatedSkill[1].positionY = getRandomPositionY();
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          updatedSkill[1].isShown = true;
          updatedSkill[1].isGamePlay = "playing";
          return updatedSkill;
        });
        setTimeout(() => {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[1].isShown = false;
            updatedSkill[1].isGamePlay = "non-playing";
            return updatedSkill;
          });
        }, skill[1].noShowTime * 700);
      }, skill[1].showTime * 700);
    }
  }, [skill[0].isGamePlay]);

  useEffect(() => {
    if (skill[2].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[2].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[2].showTime = getRandomNumberTwoToSix();
        updatedSkill[2].targetSkill = getRandomSkill();
        updatedSkill[2].positionX = getRandomPositionX();
        updatedSkill[2].positionY = getRandomPositionY();
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          updatedSkill[2].isShown = true;
          updatedSkill[2].isGamePlay = "playing";
          return updatedSkill;
        });
        setTimeout(() => {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[2].isGamePlay = "non-playing";
            updatedSkill[2].isShown = false;
            return updatedSkill;
          });
        }, skill[2].noShowTime * 700);
      }, skill[2].showTime * 700);
    }
  }, [skill[2].isGamePlay]);

  return (
    <StyledWrapper>
      <div className="game-container" ref={gameContainer}>
        <div
          className="skill-container"
          style={{ left: skill[0].positionX, top: skill[0].positionY }}
        >
          {skill[0].isShown ? (
            <img
              className="skill"
              src={skill[0].targetSkill.image}
              alt={skill[0].targetSkill.eng}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          className="skill-container"
          style={{ left: skill[1].positionX, top: skill[1].positionY }}
        >
          {skill[1].isShown ? (
            <img
              className="skill"
              src={skill[1].targetSkill.image}
              alt={skill[1].targetSkill.eng}
            />
          ) : (
            <></>
          )}
        </div>
        <div
          className="skill-container"
          style={{ left: skill[2].positionX, top: skill[2].positionY }}
        >
          {skill[2].isShown ? (
            <img
              className="skill"
              src={skill[2].targetSkill.image}
              alt={skill[2].targetSkill.eng}
            />
          ) : (
            <></>
          )}
        </div>
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
