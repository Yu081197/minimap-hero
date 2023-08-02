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
  display: flex;
  justify-content: center;
  align-items: center;
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
  .game-container {
    display: flex;
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
  { key: "q", kor: "ㅂ", image: QSkill },
  { key: "w", kor: "ㅈ", image: WSkill },
  { key: "e", kor: "ㄷ", image: ESkill },
  { key: "r", kor: "ㄱ", image: RSkill },
  { key: "a", kor: "ㅁ", image: ASkill },
  { key: "s", kor: "ㄴ", image: SSkill },
  { key: "d", kor: "ㅇ", image: DSkill },
  { key: "f", kor: "ㄹ", image: FSkill },
];

function getRandomNumber7() {
  return Math.floor(Math.random() * 7) + 3; // 1, 2, 3, 4, 5, 6, 7 중 랜덤한 숫자 생성
}

const InGame = () => {
  const [targetSkill1, setTargetSkill1] = useState(""); // 사용자가 입력해야할 대상 문자를 저장
  const [targetSkill2, setTargetSkill2] = useState(""); // 사용자가 입력해야할 대상 문자를 저장
  const [targetSkill3, setTargetSkill3] = useState(""); // 사용자가 입력해야할 대상 문자를 저장

  const [randomTime1, setrandomTime1] = useState(getRandomNumber7());
  const [randomTime2, setrandomTime2] = useState(getRandomNumber7());
  const [randomTime3, setrandomTime3] = useState(getRandomNumber7());

  const [showSkill1, setShowSkill1] = useState(false); // 해당 상태가 'true'이면 사용자에게 현재 대상 문자를 보여줌
  const [showSkill2, setShowSkill2] = useState(false); // 해당 상태가 'true'이면 사용자에게 현재 대상 문자를 보여줌
  const [showSkill3, setShowSkill3] = useState(false); // 해당 상태가 'true'이면 사용자에게 현재 대상 문자를 보여줌

  const [position1, setPosition1] = useState({ x: 0, y: 0 }); // 현재 대상 문자가 나타날 위치를 저장하는 상태
  const [position2, setPosition2] = useState({ x: 0, y: 0 }); // 현재 대상 문자가 나타날 위치를 저장하는 상태
  const [position3, setPosition3] = useState({ x: 0, y: 0 }); // 현재 대상 문자가 나타날 위치를 저장하는 상태

  const [gameStatus1, setGameStatus1] = useState("playing"); // 게임 상태를 나타내는 상태
  const [gameStatus2, setGameStatus2] = useState("playing"); // 게임 상태를 나타내는 상태
  const [gameStatus3, setGameStatus3] = useState("playing"); // 게임 상태를 나타내는 상태

  const [failTimeout1, setFailTimeout1] = useState(null); // 게임 실패 시 사용되는 setTimeout 핸들러 저장하는 상태
  const [failTimeout2, setFailTimeout2] = useState(null); // 게임 실패 시 사용되는 setTimeout 핸들러 저장하는 상태
  const [failTimeout3, setFailTimeout3] = useState(null); // 게임 실패 시 사용되는 setTimeout 핸들러 저장하는 상태

  const [score, setScore] = useState(0); // 점수 저장하는 상태

  const [number1, setNumber1] = useState(getRandomNumber7());
  const [number2, setNumber2] = useState(getRandomNumber7());
  const [number3, setNumber3] = useState(getRandomNumber7());

  const [interval1, setInterval1] = useState(null);
  const [interval2, setInterval2] = useState(null);
  const [interval3, setInterval3] = useState(null);

  const [isNumber1Reset, setIsNumber1Reset] = useState(false);
  const [isNumber2Reset, setIsNumber2Reset] = useState(false);
  const [isNumber3Reset, setIsNumber3Reset] = useState(false);

  const [isSkill1Hidden, setIsSkill1Hidden] = useState(false);
  const [isSkill2Hidden, setIsSkill2Hidden] = useState(false);
  const [isSkill3Hidden, setIsSkill3Hidden] = useState(false);

  const [isNumber1Hidden, setIsNumber1Hidden] = useState(false);
  const [isNumber2Hidden, setIsNumber2Hidden] = useState(false);
  const [isNumber3Hidden, setIsNumber3Hidden] = useState(false);

  // gameStatus, targetSkill1가 변경 될 때마다 실행 됨. 게임 상태 체크 및 대상 문자가 화면에 보여지는 로직 구현
  // 이 로직에서 문제가 있을것으로 예상 됨
  useEffect(() => {
    if (gameStatus1 === "playing" && targetSkill1) {
      // 만약 게임이 실행중이고 대상 문자가 저장됐다면
      const timeout = setTimeout(() => {
        // 3초의 지연 시간 이후에
        setShowSkill1(true); // 대상 문자를 화면에 보여줌
        setFailTimeout1(
          // 대상 문자를 보여준 후
          setTimeout(() => {
            // 3초 후에
            setGameStatus1("failed"); // 실패 상태를 처리
            resetGame1(); // 새로운 대상 문자와 위치를 설정
          }, randomTime1 * 1000)
        );
      }, randomTime1 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [gameStatus1, targetSkill1]);

  useEffect(() => {
    if (gameStatus2 === "playing" && targetSkill2) {
      // 만약 게임이 실행중이고 대상 문자가 저장됐다면
      const timeout = setTimeout(() => {
        // 3초의 지연 시간 이후에
        setShowSkill2(true); // 대상 문자를 화면에 보여줌
        setFailTimeout2(
          // 대상 문자를 보여준 후
          setTimeout(() => {
            // 3초 후에
            setGameStatus2("failed"); // 실패 상태를 처리
            resetGame2(); // 새로운 대상 문자와 위치를 설정
          }, randomTime2 * 1000)
        );
      }, randomTime2 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [gameStatus2, targetSkill2]);

  useEffect(() => {
    if (gameStatus3 === "playing" && targetSkill3) {
      // 만약 게임이 실행중이고 대상 문자가 저장됐다면
      const timeout = setTimeout(() => {
        // 3초의 지연 시간 이후에
        setShowSkill3(true); // 대상 문자를 화면에 보여줌
        setFailTimeout3(
          // 대상 문자를 보여준 후
          setTimeout(() => {
            // 3초 후에
            setGameStatus3("failed"); // 실패 상태를 처리
            resetGame3(); // 새로운 대상 문자와 위치를 설정
          }, randomTime3 * 1000)
        );
      }, randomTime3 * 1000);
      return () => clearTimeout(timeout);
    }
  }, [gameStatus3, targetSkill3]);

  useEffect(() => {
    const randomSkill = skills[Math.floor(Math.random() * skills.length)]; // skills배열에서 랜덤한 인덱스를 구하고 randomSkill 변수에 저장
    setTargetSkill1(randomSkill); // 대상 문자를 랜덤한 문자로 설정
    setRandomPosition1(); // 랜덤한 위치를 계산하여 position 상태에 저장,  박스 내부의 랜덤한 위치로 문자를 배치하는 역할을 수행
  }, []);

  useEffect(() => {
    const randomSkill = skills[Math.floor(Math.random() * skills.length)]; // skills배열에서 랜덤한 인덱스를 구하고 randomSkill 변수에 저장
    setTargetSkill2(randomSkill); // 대상 문자를 랜덤한 문자로 설정
    setRandomPosition2(); // 랜덤한 위치를 계산하여 position 상태에 저장,  박스 내부의 랜덤한 위치로 문자를 배치하는 역할을 수행
  }, []);

  useEffect(() => {
    const randomSkill = skills[Math.floor(Math.random() * skills.length)]; // skills배열에서 랜덤한 인덱스를 구하고 randomSkill 변수에 저장
    setTargetSkill3(randomSkill); // 대상 문자를 랜덤한 문자로 설정
    setRandomPosition3(); // 랜덤한 위치를 계산하여 position 상태에 저장,  박스 내부의 랜덤한 위치로 문자를 배치하는 역할을 수행
  }, []);

  useEffect(() => {
    // 숫자가 0이 되면 각각 해당 숫자만 초기화
    if (number1 === 0 && !isNumber1Reset) {
      setIsNumber1Hidden(true);
      setIsSkill1Hidden(true);
      setIsNumber1Reset(true);
      setTimeout(() => {
        setNumber1(getRandomNumber7());
        setIsNumber1Reset(false);
        setIsNumber1Hidden(false);
        setIsSkill1Hidden(false);
      }, 2000);
    }
  }, [number1, isNumber1Reset]);

  useEffect(() => {
    if (number2 === 0 && !isNumber2Reset) {
      setIsNumber2Hidden(true);
      setIsSkill2Hidden(true);
      setIsNumber2Reset(true);
      setTimeout(() => {
        setNumber2(getRandomNumber7());
        setIsNumber2Reset(false);
        setIsNumber2Hidden(false);
        setIsSkill2Hidden(false);
      }, 2000);
    }
  }, [number2, isNumber2Reset]);

  useEffect(() => {
    if (number3 === 0 && !isNumber3Reset) {
      setIsNumber3Hidden(true);
      setIsSkill3Hidden(true);
      setIsNumber3Reset(true);
      setTimeout(() => {
        setNumber3(getRandomNumber7());
        setIsNumber3Reset(false);
        setIsNumber3Hidden(false);
        setIsSkill3Hidden(false);
      }, 2000);
    }
  }, [number3, isNumber3Reset]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPressGame1);
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame1);
    };
  }, [showSkill1, targetSkill1, failTimeout1]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPressGame2);
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame2);
    };
  }, [showSkill2, targetSkill2, failTimeout2]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPressGame3);
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame3);
    };
  }, [showSkill3, targetSkill3, failTimeout3]);

  useEffect(() => {
    if (!isNumber1Hidden && !isSkill1Hidden) {
      const newInterval1 = setInterval(() => {
        setNumber1((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval1(newInterval1);
    } else {
      clearInterval(interval1);
    }
    return () => clearInterval(interval1);
  }, [isNumber1Hidden, isSkill1Hidden]);

  useEffect(() => {
    if (!isNumber2Hidden && !isSkill2Hidden) {
      const newInterval2 = setInterval(() => {
        setNumber2((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval2(newInterval2);
    } else {
      clearInterval(interval2);
    }
    return () => clearInterval(interval2);
  }, [isNumber2Hidden, isSkill2Hidden]);

  useEffect(() => {
    if (!isNumber3Hidden && !isSkill3Hidden) {
      const newInterval3 = setInterval(() => {
        setNumber3((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval3(newInterval3);
    } else {
      clearInterval(interval3);
    }
    return () => clearInterval(interval3);
  }, [isNumber3Hidden, isSkill3Hidden]);

  useEffect(() => {
    // 실패 상태를 처리하는 함수를 정의합니다.
    const handleFailure = () => {
      if (showSkill1) {
        // 1.5초 이내에 올바른 키를 누르지 못한 경우 실패 상태를 알려줍니다.
        setScore((prevScore) => prevScore - 10);
      }
    };
    // 1.5초 후에 실패 상태 처리 함수를 호출하는 타이머를 설정합니다.
    const failTimeout = setTimeout(handleFailure, 1500);
    setFailTimeout1(failTimeout);
    // 키 입력 이벤트 리스너를 등록합니다.
    document.addEventListener("keypress", handleKeyPressGame1);
    // 컴포넌트가 언마운트될 때 등록한 이벤트 리스너와 타이머를 정리합니다.
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame1);
      clearTimeout(failTimeout);
    };
  }, [showSkill1, targetSkill1]);

  useEffect(() => {
    // 실패 상태를 처리하는 함수를 정의합니다.
    const handleFailure = () => {
      if (showSkill2) {
        // 1.5초 이내에 올바른 키를 누르지 못한 경우 실패 상태를 알려줍니다.
        setScore((prevScore) => prevScore - 10);
      }
    };
    // 1.5초 후에 실패 상태 처리 함수를 호출하는 타이머를 설정합니다.
    const failTimeout = setTimeout(handleFailure, 1500);
    setFailTimeout2(failTimeout);
    // 키 입력 이벤트 리스너를 등록합니다.
    document.addEventListener("keypress", handleKeyPressGame2);
    // 컴포넌트가 언마운트될 때 등록한 이벤트 리스너와 타이머를 정리합니다.
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame2);
      clearTimeout(failTimeout);
    };
  }, [showSkill2, targetSkill2]);

  useEffect(() => {
    // 실패 상태를 처리하는 함수를 정의합니다.
    const handleFailure = () => {
      if (showSkill3) {
        // 1.5초 이내에 올바른 키를 누르지 못한 경우 실패 상태를 알려줍니다.
        setScore((prevScore) => prevScore - 10);
      }
    };
    // 1.5초 후에 실패 상태 처리 함수를 호출하는 타이머를 설정합니다.
    const failTimeout = setTimeout(handleFailure, 1500);
    setFailTimeout3(failTimeout);
    // 키 입력 이벤트 리스너를 등록합니다.
    document.addEventListener("keypress", handleKeyPressGame3);
    // 컴포넌트가 언마운트될 때 등록한 이벤트 리스너와 타이머를 정리합니다.
    return () => {
      document.removeEventListener("keypress", handleKeyPressGame3);
      clearTimeout(failTimeout);
    };
  }, [showSkill3, targetSkill3]);

  // 박스 내부의 랜덤한 위치로 배치하기 위한 함수
  const setRandomPosition1 = () => {
    const box = document.getElementById("box"); // box라는 id값을 dom으로 가져온다
    if (box) {
      // 만약 box가 존재하는 경우
      const boxRect = box.getBoundingClientRect(); // box의 현재 위치와 크기 정보를 가져옴
      const x = Math.random() * (boxRect.width - 450); // 난수 생성 후 box의 너비에서 문자의 너비를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      const y = Math.random() * (boxRect.height - 350); // 난수 생성 후 box의 너비에서 문자의 높이를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      setPosition1({ x, y }); // position의 상태를 랜덤한 값으로 업데이트
    }
  };

  // 박스 내부의 랜덤한 위치로 배치하기 위한 함수
  const setRandomPosition2 = () => {
    const box = document.getElementById("box"); // box라는 id값을 dom으로 가져온다
    if (box) {
      // 만약 box가 존재하는 경우
      const boxRect = box.getBoundingClientRect(); // box의 현재 위치와 크기 정보를 가져옴
      const x = Math.random() * (boxRect.width - 450); // 난수 생성 후 box의 너비에서 문자의 너비를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      const y = Math.random() * (boxRect.height - 350); // 난수 생성 후 box의 너비에서 문자의 높이를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      setPosition2({ x, y }); // position의 상태를 랜덤한 값으로 업데이트
    }
  };

  // 박스 내부의 랜덤한 위치로 배치하기 위한 함수
  const setRandomPosition3 = () => {
    const box = document.getElementById("box"); // box라는 id값을 dom으로 가져온다
    if (box) {
      // 만약 box가 존재하는 경우
      const boxRect = box.getBoundingClientRect(); // box의 현재 위치와 크기 정보를 가져옴
      const x = Math.random() * (boxRect.width - 450); // 난수 생성 후 box의 너비에서 문자의 너비를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      const y = Math.random() * (boxRect.height - 350); // 난수 생성 후 box의 너비에서 문자의 높이를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      setPosition3({ x, y }); // position의 상태를 랜덤한 값으로 업데이트
    }
  };
  // 게임을 리셋하는 함수
  const resetGame1 = () => {
    setShowSkill1(false);
    clearTimeout(failTimeout1);
    setGameStatus1("playing");
    setRandomPosition1();
    setTimeout(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      setTargetSkill1(randomSkill);
    }, randomTime1 * 1000);
  };

  const resetGame2 = () => {
    setShowSkill2(false);
    clearTimeout(failTimeout2);
    setGameStatus2("playing");
    setRandomPosition2();
    setTimeout(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      setTargetSkill2(randomSkill);
    }, randomTime2 * 1000);
  };

  const resetGame3 = () => {
    setShowSkill3(false);
    clearTimeout(failTimeout3);
    setGameStatus3("playing");
    setRandomPosition3();
    setTimeout(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)];
      setTargetSkill3(randomSkill);
    }, randomTime3 * 1000);
  };

  // 게임이 시작되면 사용자에게 랜덤한 문자가 박스 내부의 랜덤한 위치에 보여진다.

  // showSkill, targetSkill1, failTimeout 중 하나라도 상태가 변경 될 때 사용자의 키 입력을 처리
  // 게임 1의 이벤트 핸들러
  const handleKeyPressGame1 = (event) => {
    const pressedKey = event.key.toLowerCase();
    if (showSkill1) {
      if (targetSkill1.key === pressedKey || targetSkill1.kor === pressedKey) {
        clearTimeout(failTimeout1);
        setScore((prevScore) => prevScore + 100);
        setGameStatus1("playing");
        setIsSkill1Hidden(true);
        setNumber1(getRandomNumber7());
        setRandomPosition1();
        setTimeout(() => {
          const randomSkill = skills[Math.floor(Math.random() * skills.length)];
          setTargetSkill1(randomSkill);
          setIsSkill1Hidden(false);
        }, randomTime1 * 1000);
      }
    }
  };

  // 게임 2의 이벤트 핸들러
  const handleKeyPressGame2 = (event) => {
    const pressedKey = event.key.toLowerCase();
    if (showSkill2) {
      if (targetSkill2.key === pressedKey || targetSkill2.kor === pressedKey) {
        clearTimeout(failTimeout2);
        setScore((prevScore) => prevScore + 100);
        setGameStatus2("playing");
        setIsSkill2Hidden(true);
        setNumber2(getRandomNumber7());
        setRandomPosition2();
        setTimeout(() => {
          const randomSkill = skills[Math.floor(Math.random() * skills.length)];
          setTargetSkill2(randomSkill);
          setIsSkill2Hidden(false);
        }, randomTime3 * 1000);
      }
    }
  };

  // 게임 3의 이벤트 핸들러
  const handleKeyPressGame3 = (event) => {
    const pressedKey = event.key.toLowerCase();
    if (showSkill3) {
      if (targetSkill3.key === pressedKey || targetSkill3.kor === pressedKey) {
        clearTimeout(failTimeout3);
        setScore((prevScore) => prevScore + 100);
        setGameStatus3("playing");
        setIsSkill3Hidden(true);
        setNumber3(getRandomNumber7());
        setRandomPosition3();
        setTimeout(() => {
          const randomSkill = skills[Math.floor(Math.random() * skills.length)];
          setTargetSkill3(randomSkill);
          setIsSkill3Hidden(false);
        }, randomTime3 * 1000);
      }
    }
  };

  return (
    <StyledWrapper>
      <div className="game-container">
        <Box id="box">
          {gameStatus1 === "playing" && showSkill1 && !isSkill1Hidden && (
            <SkillStyle position={position1}>
              {isNumber1Hidden ? null : (
                <p style={{ fontSize: "20px", color: "white" }}>A: {number1}</p>
              )}
              <img
                className="skill"
                src={targetSkill1.image}
                alt={targetSkill1.key}
              />
            </SkillStyle>
          )}
          {gameStatus2 === "playing" && showSkill2 && !isSkill2Hidden && (
            <SkillStyle position={position2}>
              {isNumber2Hidden ? null : (
                <p style={{ fontSize: "20px", color: "white" }}>B: {number2}</p>
              )}
              <img
                className="skill"
                src={targetSkill2.image}
                alt={targetSkill2.key}
              />
            </SkillStyle>
          )}
          {gameStatus3 === "playing" && showSkill3 && !isSkill3Hidden && (
            <SkillStyle position={position3}>
              {isNumber3Hidden ? null : (
                <p style={{ fontSize: "20px", color: "white" }}>C: {number3}</p>
              )}
              <img
                className="skill"
                src={targetSkill3.image}
                alt={targetSkill3.key}
              />
            </SkillStyle>
          )}
          {gameStatus1 === "failed" && <div className="fail">실패</div>}
          {gameStatus2 === "failed" && <div className="fail">실패</div>}
          {gameStatus3 === "failed" && <div className="fail">실패</div>}
          <div className="score-container">
            <div className="score">점수 : {score}</div>
          </div>
          <Map />
          <img className="skill-ui" src={skillUI} />
        </Box>
      </div>
    </StyledWrapper>
  );
};

export default InGame;
