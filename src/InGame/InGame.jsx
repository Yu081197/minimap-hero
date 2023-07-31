import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: relative;
`;

const Character = styled.div`
  position: absolute;
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
`;

const characters = ["q", "w", "e", "r", "a", "s", "d", "f"];

const InGame = () => {
  const [targetCharacter, setTargetCharacter] = useState(""); // 사용자가 입력해야할 대상 문자를 저장
  const [showCharacter, setShowCharacter] = useState(false); // 해당 상태가 'true'이면 사용자에게 현재 대상 문자를 보여줌
  const [position, setPosition] = useState({ x: 0, y: 0 }); // 현재 대상 문자가 나타날 위치를 저장하는 상태
  const [gameStatus, setGameStatus] = useState("playing"); // 게임 상태를 나타내는 상태
  const [failTimeout, setFailTimeout] = useState(null); // 게임 실패 시 사용되는 setTimeout 핸들러 저장하는 상태
  const [score, setScore] = useState(0); // 점수 저장하는 상태

  // 박스 내부의 랜덤한 위치로 배치하기 위한 함수
  const setRandomPosition = () => {
    const box = document.getElementById("box"); // box라는 id값을 dom으로 가져온다
    if (box) {
      // 만약 box가 존재하는 경우
      const boxRect = box.getBoundingClientRect(); // box의 현재 위치와 크기 정보를 가져옴
      const x = Math.random() * (boxRect.width - 50); // 난수 생성 후 box의 너비에서 문자의 너비를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      const y = Math.random() * (boxRect.height - 30); // 난수 생성 후 box의 너비에서 문자의 높이를 뺌으로써 문자가 box 밖으로 나가지 않게 함
      setPosition({ x, y }); // position의 상태를 랜덤한 값으로 업데이트
    }
  };
  // 게임을 리셋하는 함수
  const resetGame = () => {
    setShowCharacter(false);
    clearTimeout(failTimeout);
    setGameStatus("playing");
    setRandomPosition();
    setTimeout(() => {
      const randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      setTargetCharacter(randomCharacter);
    }, 1000);
  };

  // 게임이 시작되면 사용자에게 랜덤한 문자가 박스 내부의 랜덤한 위치에 보여진다.
  useEffect(() => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)]; // characters배열에서 랜덤한 인덱스를 구하고 randomCharacter 변수에 저장
    setTargetCharacter(randomCharacter); // 대상 문자를 랜덤한 문자로 설정
    setRandomPosition(); // 랜덤한 위치를 계산하여 position 상태에 저장,  박스 내부의 랜덤한 위치로 문자를 배치하는 역할을 수행
  }, []);

  // showCharacter, targetCharacter, failTimeout 중 하나라도 상태가 변경 될 때 사용자의 키 입력을 처리
  useEffect(() => {
    const handleKeyPress = (event) => {
      // 사용자가 키보드 누를 때 실행되는 함수
      const pressedKey = event.key.toLowerCase(); // 입력 된 키는 소문자로 변환하여 저장
      if (showCharacter) {
        // 대상 문자가 화면에 보여질 때
        if (targetCharacter === pressedKey) {
          // 만약 입력해야할 대상의 문자가 실제로 눌린 키와 같다면 즉, 사용자가 올바른 키를 입력해 성공한 경우
          clearTimeout(failTimeout); // failTimeout 변수에 저장된 실패 핸들러(setTimeout으로 설정된)를 취소 이렇게 함으로써 사용자가 성공적으로 입력을 완료하면 실패 핸들러가 동작하지 않는다.
          setScore(score + 1); // 스코어를 1 올림
          resetGame(); // 새로운 대상 문자와 위치를 설정
        } else {
          // 사용자가 잘못된 키를 입력한 경우
          setGameStatus("failed"); // gameStatus 상태를 "failed"로 설정하여 게임 상태를 실패 상태로 변경
        }
      } else {
        // 대상 문자가 화면에 보여지지 않을 때
      }
    };

    // clean-up code
    // 이벤트 리스너가 여러 번 등록 되는 문제를 막기 위함
    // 컴포넌트가 여러 번 마운트되고 언마운트되면, 이벤트 리스너는 계속 누적되며 메모리 사용량이 계속 증가
    // to-do : clean-up code에 대해서 추가로 공부하기
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      // 컴포넌트가 언마운트 될 때
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [showCharacter, targetCharacter, failTimeout]);

  // gameStatus, targetCharacter가 변경 될 때마다 실행 됨. 게임 상태 체크 및 대상 문자가 화면에 보여지는 로직 구현
  // 이 로직에서 문제가 있을것으로 예상 됨
  useEffect(() => {
    if (gameStatus === "playing" && targetCharacter) {
      // 만약 게임이 실행중이고 대상 문자가 저장됐다면
      const timeout = setTimeout(() => {
        // 3초의 지연 시간 이후에
        setShowCharacter(true); // 대상 문자를 화면에 보여줌
        setFailTimeout(
          // 대상 문자를 보여준 후
          setTimeout(() => {
            // 3초 후에
            setGameStatus("failed"); // 실패 상태를 처리
            resetGame(); // 새로운 대상 문자와 위치를 설정
          }, 3000)
        );
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [gameStatus, targetCharacter]);

  return (
    <GameContainer>
      <Box id="box">
        {gameStatus === "playing" && showCharacter && (
          <Character position={position}>{targetCharacter}</Character>
        )}
      </Box>
      {gameStatus === "failed" && <div>실패</div>}
      score : {score}
    </GameContainer>
  );
};

export default InGame;
