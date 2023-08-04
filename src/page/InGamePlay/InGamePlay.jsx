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
import { shallowEqual } from "react-redux";

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
  const [score, setScore] = useState(0);
  const [pressedKey, setPressedKey] = useState("");

  /* 
    isGamePlay: 게임 중 상태
    targetSkill: 스킬 상태
    isShown: 화면에 보이는지 상태
    positionX: 가로
    positionY: 세로
    showTime: 화면에 보여지는 시간 상태
    noShowTime: 화면에 보이지 않는 시간 상태
    keyPressedTime: 키가 눌렸을때의 전체 시간
    timePlusShowTime: 전체 시간과 화면에 보여지는 시간을 더한 상태

  */
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
      currentTime: null,
      keyPressedTime: 0,
      timePlusShowTime: 0,
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
      currentTime: null,
      keyPressedTime: 0,
      timePlusShowTime: 0,
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
      currentTime: null,
      keyPressedTime: 0,
      timePlusShowTime: 0,
    },
  ]);

  function getRandomNumberTwoToSix() {
    return Math.floor(Math.random() * 5) + 2; // 2,3,4,5,6중 랜덤한 숫자 생성
  }
  function getRandomNumberTwoToFour() {
    return Math.floor(Math.random() * 4) + 2; // 2,3,4 중 랜덤한 숫자 생성
  }

  function getRandomSkill() {
    let randomSkills = [];
    while (randomSkills.length < 3) {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      if (!randomSkills.includes(randomSkill)) {
        randomSkills.push(randomSkill);
      }
    }
    return randomSkills;
  }

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
    const interval = setInterval(() => {
      setTime((props) => props + 1);
      console.log("------------------");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (skill[0].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        const randomSkill = getRandomSkill()[0];
        updatedSkill[0].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[0].showTime = getRandomNumberTwoToSix();
        updatedSkill[0].targetSkill = randomSkill;
        updatedSkill[0].positionX = getRandomPositionX();
        updatedSkill[0].positionY = getRandomPositionY();
        updatedSkill[0].timePlusShowTime = time + skill[0].noShowTime;
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      if (skill[0].isGamePlay === "non-playing") {
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
          }, skill[0].showTime * 1000);
        }, skill[0].noShowTime * 1000);
      }
    }
  }, [skill[0].isGamePlay]);

  useEffect(() => {
    if (skill[1].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        const randomSkill = getRandomSkill()[1];
        updatedSkill[1].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[1].showTime = getRandomNumberTwoToSix();
        updatedSkill[1].targetSkill = randomSkill;
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
        }, skill[1].showTime * 1000);
      }, skill[1].noShowTime * 1000);
    }
  }, [skill[0].isGamePlay]);

  useEffect(() => {
    if (skill[2].isGamePlay === "non-playing") {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        const randomSkill = getRandomSkill()[2];
        updatedSkill[2].noShowTime = getRandomNumberTwoToFour();
        updatedSkill[2].showTime = getRandomNumberTwoToSix();
        updatedSkill[2].targetSkill = randomSkill;
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
        }, skill[2].showTime * 1000);
      }, skill[2].noShowTime * 1000);
    }
  }, [skill[2].isGamePlay]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  const handleKeyPress = (e) => {
    const pressedKey = e.key.toLowerCase();
    if (skill[0].isShown) {
      setPressedKey(pressedKey);
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[0].keyPressedTime = time;
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      if (
        skill[0].targetSkill.eng === pressedKey ||
        skill[0].targetSkill.kor === pressedKey
      ) {
        setScore((prevScore) => prevScore + 100);
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          updatedSkill[0].isShown = false;
          updatedSkill[0].isGamePlay = "non-playing";
          return updatedSkill;
        });
      }
    }
  };

  return (
    <StyledWrapper>
      <div className="game-container" ref={gameContainer}>
        <div
          className="skill-container"
          style={{ left: skill[0].positionX, top: skill[0].positionY }}
        >
          <div className="time">a:</div>
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
          <div className="time">score:{score}</div>
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
