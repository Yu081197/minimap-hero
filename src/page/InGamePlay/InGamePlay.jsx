import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increaseScore, decreaseScore } from "../../services/ScoreSlice";

import styled from "styled-components";

import Map from "../../components/Map/Map";

import NormalCursor from "../../assets/Summoner/normal.cur";
import AttackCursor from "../../assets/Summoner/alt.cur";

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
    width: 1604px;
    height: 904px;
    background-color: #091428;
    border: 2px solid #c8aa6e;
  }
  .canvas-container {
    position: absolute;
    width: 1600px;
    height: 900px;
    background-color: #091428;
  }
  .ui-cotainer {
    display: block;
    position: relative;
  }
  .ui {
    position: absolute;
    bottom: 0px;
  }
  .ui-skill {
    position: absolute;
    bottom: 0px;
  }
  .skill-d {
    bottom: 4.7rem;
    right: 41.6rem;
    width: 31px;
    height: 31px;
  }
  .skill-f {
    bottom: 4.7rem;
    right: 39.1rem;
    width: 31px;
    height: 31px;
  }
  .skill-q {
    bottom: 4rem;
    right: 39.1rem;
    right: 54.86rem;
    width: 42px;
  }
  .skill-w {
    bottom: 4rem;
    right: 51.55rem;
    width: 42px;
  }
  .skill-e {
    bottom: 4rem;
    right: 48.1rem;
    width: 42px;
  }
  .skill-r {
    bottom: 4rem;
    right: 44.8rem;
    width: 42px;
  }
  .ui {
    width: 1000px;
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
  .remain-time {
    color: #0ac8b9;
    font-size: 25px;
    background-color: #091428;
  }
  .skill {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #c8aa6e;
    background-color: #091428;
  }
  .time-score-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 30px;
    right: 50px;
    position: absolute;
    color: #cdfafa;
    background-color: #091428;
    font-size: 30px;
  }
  .time {
    background-color: #091428;
  }
  .score {
    background-color: #091428;
  }
  .score-plus {
    font-size: 50px;
    color: #00ff00;
  }
  .score-minus {
    font-size: 50px;
    color: #f70000;
  }
  .fail {
    color: #cdfafa;
    background-color: #091428;
  }
  .skill-ui {
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 23%;
  }
  .skill-container {
    background-color: transparent;
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
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const gameContainer = useRef(null);
  const prevTimeoutRef = useRef();
  const [time, setTime] = useState(100);
  const dispatch = useDispatch();
  const score = useSelector((state) => {
    return state.score;
  });
  const [plus100Score, setPlus100Score] = useState(false);
  const [minus50Score, setMinus50Score] = useState(false);

  const [pressedKey, setPressedKey] = useState("");
  const [isKeyQPressed, setIsKeyQPressed] = useState(false);
  const [isKeyWPressed, setIsKeyWPressed] = useState(false);
  const [isKeyEPressed, setIsKeyEPressed] = useState(false);
  const [isKeyRPressed, setIsKeyRPressed] = useState(false);
  const [isKeyDPressed, setIsKeyDPressed] = useState(false);
  const [isKeyFPressed, setIsKeyFPressed] = useState(false);

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
      shownTime: null,
      noShowTime: null,
      currentTime: null,
      keyPressedTime: 0,
      isHovered: false,
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
      shownTime: null,
      currentTime: null,
      keyPressedTime: 0,
      isHovered: false,
    },
    {
      id: 3,
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

  const incrementScore = (amount) => {
    dispatch(increaseScore(amount));
  };

  const decrementScore = (amount) => {
    dispatch(decreaseScore(amount));
  };

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomSkillFromRange(startIndex, endIndex) {
    const randomIndex = getRandomNumber(startIndex, endIndex);
    return skills[randomIndex];
  }

  function getRandomNumberThreeToSix() {
    return Math.floor(Math.random() * 5) + 3; // 3,4,5,6중 랜덤한 숫자 생성
  }
  function getRandomNumberTwoToFour() {
    return Math.floor(Math.random() * 4) + 2; // 2,3,4 중 랜덤한 숫자 생성
  }

  function getRandomNumberZeroToTwo() {
    return getRandomSkillFromRange(0, 2);
  }

  function getRandomNumberThreeToFive() {
    return getRandomSkillFromRange(3, 5);
  }

  function getRandomNumberSixToSeven() {
    return getRandomSkillFromRange(6, 7);
  }

  function getRandomNumberZeroToTwo() {
    const randomIndex = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2 (inclusive)
    return skills[randomIndex];
  }
  function getRandomNumberThreeToFive() {
    const randomIndex = Math.floor(Math.random() * 3) + 3; // Generates a random number between 3 and 5 (inclusive)
    return skills[randomIndex];
  }
  function getRandomNumberSixToSeven() {
    const randomIndex = Math.floor(Math.random() * 2) + 6; // Generates a random number between 6 and 7 (inclusive)
    return skills[randomIndex];
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
      setTime((props) => props - 1);
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[0].shownTime -= 1;
        updatedSkill[1].shownTime -= 1;
        updatedSkill[2].shownTime -= 1;
        if (updatedSkill[0].shownTime <= 0) {
          updatedSkill[0].shownTime = null;
        }
        if (updatedSkill[1].shownTime <= 0) {
          updatedSkill[1].shownTime = null;
        }
        if (updatedSkill[2].shownTime <= 0) {
          updatedSkill[2].shownTime = null;
        }
        return updatedSkill;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (skill[0].isGamePlay === "non-playing") {
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          const randomSkill = getRandomNumberZeroToTwo();
          updatedSkill[0].noShowTime = getRandomNumberTwoToFour();
          updatedSkill[0].showTime = getRandomNumberThreeToSix();
          updatedSkill[0].targetSkill = randomSkill;
          updatedSkill[0].positionX = getRandomPositionX();
          updatedSkill[0].positionY = getRandomPositionY();
          updatedSkill[0].isShown = true;
          updatedSkill[0].isGamePlay = "playing";
          updatedSkill[0].shownTime = skill[0].showTime;
          return updatedSkill; // 변경된 배열을 반환합니다.
        });
        setTimeout(() => {
          if (skill[0].isGamePlay === "playing") {
            setSkill((prevState) => {
              const updatedSkill = [...prevState];
              updatedSkill[0].isShown = false;
              updatedSkill[0].isGamePlay = "non-playing";
              return updatedSkill;
            });
          }
        }, skill[0].showTime * 700);
      }, skill[0].noShowTime * 700);
    }
    if (prevTimeoutRef.current) {
      clearTimeout(prevTimeoutRef.current);
    }
    prevTimeoutRef.current = setTimeout(() => {}, skill[0].noShowTime * 700);
  }, [skill[0].isGamePlay]);

  useEffect(() => {
    if (skill[1].isGamePlay === "non-playing") {
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          const randomSkill = getRandomNumberThreeToFive();
          updatedSkill[1].noShowTime = getRandomNumberTwoToFour();
          updatedSkill[1].showTime = getRandomNumberThreeToSix();
          updatedSkill[1].targetSkill = randomSkill;
          updatedSkill[1].positionX = getRandomPositionX();
          updatedSkill[1].positionY = getRandomPositionY();
          updatedSkill[1].isShown = true;
          updatedSkill[1].isGamePlay = "playing";
          updatedSkill[1].shownTime = skill[1].showTime;
          return updatedSkill; // 변경된 배열을 반환합니다.
        });
        setTimeout(() => {
          if (skill[1].isGamePlay === "playing") {
            setSkill((prevState) => {
              const updatedSkill = [...prevState];
              updatedSkill[1].isShown = false;
              updatedSkill[1].isGamePlay = "non-playing";
              return updatedSkill;
            });
          }
        }, skill[1].showTime * 700);
      }, skill[1].noShowTime * 700);
    }
    if (prevTimeoutRef.current) {
      clearTimeout(prevTimeoutRef.current);
    }
    prevTimeoutRef.current = setTimeout(() => {}, skill[1].noShowTime * 700);
  }, [skill[1].isGamePlay]);

  useEffect(() => {
    if (skill[2].isGamePlay === "non-playing") {
      setTimeout(() => {
        setSkill((prevState) => {
          const updatedSkill = [...prevState];
          const randomSkill = getRandomNumberSixToSeven();
          updatedSkill[2].noShowTime = getRandomNumberTwoToFour();
          updatedSkill[2].showTime = getRandomNumberThreeToSix();
          updatedSkill[2].targetSkill = randomSkill;
          updatedSkill[2].positionX = getRandomPositionX();
          updatedSkill[2].positionY = getRandomPositionY();
          updatedSkill[2].isShown = true;
          updatedSkill[2].isGamePlay = "playing";
          updatedSkill[2].shownTime = skill[2].showTime;
          return updatedSkill; // 변경된 배열을 반환합니다.
        });
        setTimeout(() => {
          if (skill[2].isGamePlay === "playing") {
            setSkill((prevState) => {
              const updatedSkill = [...prevState];
              updatedSkill[2].isShown = false;
              updatedSkill[2].isGamePlay = "non-playing";
              return updatedSkill;
            });
          }
        }, skill[2].showTime * 700);
      }, skill[2].noShowTime * 700);
    }
    if (prevTimeoutRef.current) {
      clearTimeout(prevTimeoutRef.current);
    }
    prevTimeoutRef.current = setTimeout(() => {}, skill[2].noShowTime * 700);
  }, [skill[2].isGamePlay]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "q" || e.key === "ㅂ") {
      setIsKeyQPressed(true);
    }
    if (e.key === "w" || e.key === "ㅈ") {
      setIsKeyWPressed(true);
    }
    if (e.key === "e" || e.key === "ㄷ") {
      setIsKeyEPressed(true);
    }
    if (e.key === "r" || e.key === "ㄱ") {
      setIsKeyRPressed(true);
    }
    if (e.key === "d" || e.key === "ㅇ") {
      setIsKeyDPressed(true);
    }
    if (e.key === "f" || e.key === "ㄹ") {
      setIsKeyFPressed(true);
    }
    const pressedKey = e.key.toLowerCase();
    if (skill[0].isShown || skill[1].isShown || skill[2].isShown) {
      setSkill((prevState) => {
        const updatedSkill = [...prevState];
        updatedSkill[0].keyPressedTime = time;
        updatedSkill[1].keyPressedTime = time;
        updatedSkill[2].keyPressedTime = time;
        return updatedSkill; // 변경된 배열을 반환합니다.
      });
      if (
        skill[0].targetSkill.eng === pressedKey ||
        skill[0].targetSkill.kor === pressedKey
      ) {
        if (skill[0].shownTime <= 1 && skill[0].isHovered === true) {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[0].isShown = false;
            updatedSkill[0].isHovered = false;
            return updatedSkill;
          });
          incrementScore(100);
          setPlus100Score(true);
          setTimeout(() => {
            setPlus100Score(false);
          }, 2000);
        } else if (skill[0].shownTime > 1) {
          decrementScore(50);
          setMinus50Score(true);
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[0].isShown = false;
            updatedSkill[0].isHovered = false;
            return updatedSkill;
          });
          setTimeout(() => {
            setMinus50Score(false);
          }, 2000);
        }
      } else if (
        skill[1].targetSkill.eng === pressedKey ||
        skill[1].targetSkill.kor === pressedKey
      ) {
        if (skill[1].shownTime <= 1 && skill[1].isHovered === true) {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[1].isShown = false;
            updatedSkill[1].isHovered = false;
            return updatedSkill;
          });
          incrementScore(100);
          setPlus100Score(true);
          setTimeout(() => {
            setPlus100Score(false);
          }, 2000);
        } else if (skill[1].shownTime > 1) {
          decrementScore(50);
          setMinus50Score(true);
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[1].isShown = false;
            updatedSkill[1].isHovered = false;
            return updatedSkill;
          });
          setTimeout(() => {
            setMinus50Score(false);
          }, 2000);
        }
      } else if (
        skill[2].targetSkill.eng === pressedKey ||
        skill[2].targetSkill.kor === pressedKey
      ) {
        if (skill[2].shownTime <= 1 && skill[2].isHovered === true) {
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[2].isShown = false;
            updatedSkill[2].isHovered = false;
            return updatedSkill;
          });
          incrementScore(100);
          setPlus100Score(true);
          setTimeout(() => {
            setPlus100Score(false);
          }, 2000);
        } else if (skill[2].shownTime > 1) {
          decrementScore(50);
          setMinus50Score(true);
          setSkill((prevState) => {
            const updatedSkill = [...prevState];
            updatedSkill[2].isShown = false;
            updatedSkill[2].isHovered = false;
            return updatedSkill;
          });
          setTimeout(() => {
            setMinus50Score(false);
          }, 2000);
        }
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "q" || e.key === "ㅂ") {
      setIsKeyQPressed(false);
    }
    if (e.key === "w" || e.key === "ㅈ") {
      setIsKeyWPressed(false);
    }
    if (e.key === "e" || e.key === "ㄷ") {
      setIsKeyEPressed(false);
    }
    if (e.key === "r" || e.key === "ㄱ") {
      setIsKeyRPressed(false);
    }
    if (e.key === "d" || e.key === "ㅇ") {
      setIsKeyDPressed(false);
    }
    if (e.key === "f" || e.key === "ㄹ") {
      setIsKeyFPressed(false);
    }
  };

  useEffect(() => {
    if (time === 0) {
      navigate("/score");
    }
  });

  const handleMouseEnter = () => {
    setSkill((prevState) => {
      const updatedSkill = [...prevState];
      updatedSkill[0].isHovered = true;
      updatedSkill[1].isHovered = true;
      updatedSkill[2].isHovered = true;
      return updatedSkill; // 변경된 배열을 반환합니다.
    });
  };

  const handleMouseLeave = () => {
    setSkill((prevState) => {
      const updatedSkill = [...prevState];
      updatedSkill[0].isHovered = false;
      updatedSkill[1].isHovered = false;
      updatedSkill[2].isHovered = false;
      return updatedSkill; // 변경된 배열을 반환합니다.
    });
  };

  return (
    <StyledWrapper>
      <div className="game-container" ref={gameContainer}>
        <canvas className="canvas-container" ref={canvasRef}></canvas>

        <div
          className="skill-container"
          style={{ left: skill[0].positionX, top: skill[0].positionY }}
        >
          {skill[0].isShown ? (
            <div className="skill-box">
              <div className="remain-time">{skill[0].shownTime}</div>
              <img
                className="skill"
                src={skill[0].targetSkill.image}
                alt={skill[0].targetSkill.eng}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  cursor: skill[0].isHovered
                    ? `url(${AttackCursor}), auto`
                    : "default",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="skill-container"
          style={{ left: skill[1].positionX, top: skill[1].positionY }}
        >
          {skill[1].isShown ? (
            <div className="skill-box">
              <div className="remain-time">{skill[1].shownTime}</div>
              <img
                className="skill"
                src={skill[1].targetSkill.image}
                alt={skill[1].targetSkill.eng}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  cursor: skill[1].isHovered
                    ? `url(${AttackCursor}), auto`
                    : "default",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="skill-container"
          style={{ left: skill[2].positionX, top: skill[2].positionY }}
        >
          {skill[2].isShown ? (
            <div className="skill-box">
              <div className="remain-time">{skill[2].shownTime}</div>
              <img
                className="skill"
                src={skill[2].targetSkill.image}
                alt={skill[2].targetSkill.eng}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  cursor: skill[2].isHovered
                    ? `url(${AttackCursor}), auto`
                    : "default",
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="map-container">
          <div className="time-score-container">
            <div className="time">시간 : {time}</div>
            <div className="score">점수 : {score}</div>
            {plus100Score ? (
              <div className="score score-plus">+ 100</div>
            ) : (
              <></>
            )}
            {minus50Score ? (
              <div className="score score-minus">- 50</div>
            ) : (
              <></>
            )}
          </div>
          <Map />
        </div>
        <div className="ui-container">
          <img className="skill-ui" src={skillUI} alt="skill-ui" />
          <img
            className="ui-skill skill-d"
            src={DSkill}
            style={{
              border: isKeyDPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
          <img
            className="ui-skill skill-f"
            src={FSkill}
            style={{
              border: isKeyFPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
          <img
            className="ui-skill skill-q"
            src={QSkill}
            style={{
              border: isKeyQPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
          <img
            className="ui-skill skill-w"
            src={WSkill}
            style={{
              border: isKeyWPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
          <img
            className="ui-skill skill-e"
            src={ESkill}
            style={{
              border: isKeyEPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
          <img
            className="ui-skill skill-r"
            src={RSkill}
            style={{
              border: isKeyRPressed ? "3px solid red" : "none",
            }}
            alt="skill"
          />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default InGamePlay;
