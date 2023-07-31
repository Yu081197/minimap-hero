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

const Game = () => {
  const [targetCharacter, setTargetCharacter] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [gameStatus, setGameStatus] = useState("playing");
  const [failTimeout, setFailTimeout] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    setTargetCharacter(randomCharacter);
    setRandomPosition();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const pressedKey = event.key.toLowerCase();
      if (showCharacter) {
        if (targetCharacter === pressedKey) {
          clearTimeout(failTimeout);
          setScore(score + 1);
          resetGame();
        } else {
          setGameStatus("failed");
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [showCharacter, targetCharacter, failTimeout]);

  useEffect(() => {
    if (gameStatus === "playing" && targetCharacter) {
      const timeout = setTimeout(() => {
        setShowCharacter(true);
        setFailTimeout(
          setTimeout(() => {
            setGameStatus("failed");
            resetGame();
          }, 3000)
        );
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [gameStatus, targetCharacter]);

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

  const setRandomPosition = () => {
    const box = document.getElementById("box");
    if (box) {
      const boxRect = box.getBoundingClientRect();
      const x = Math.random() * (boxRect.width - 50);
      const y = Math.random() * (boxRect.height - 30);
      setPosition({ x, y });
    }
  };

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

export default Game;
