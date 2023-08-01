import React, { useState, useEffect } from 'react';
import randomstring from 'randomstring';
import styled from 'styled-components';

const characters = 'qwer';
const rhythmInterval = 3000; // 리듬 비주기 (3초)

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 20px;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  border: 1px solid #ccc;
`;

const GameContainer = styled.div`
  background-color: black;
  width: 700px;
  height: 700px;
  color: white;
`;

const App = () => {
  const [currentCharacters, setCurrentCharacters] = useState(Array(4).fill(''));
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // 첫 문자 출력 및 리듬 시작
    setTimeout(() => {
      displayCharacters();
      setInterval(displayCharacters, rhythmInterval);
    }, rhythmInterval);
  }, []);

  const displayCharacters = () => {
    const newCharacters = currentCharacters.map(() => {
      return randomstring.generate({ length: 1, charset: characters });
    });
    setCurrentCharacters(newCharacters);
  };

  const handleKeyPress = (event, index) => {
    const pressedCharacter = event.key.toLowerCase();
    if (characters.includes(pressedCharacter) && pressedCharacter === currentCharacters[index]) {
      setFeedback('Correct! +1');
      setScore(score => score + 1);
    } else {
      setFeedback('Wrong! -1');
      setScore(score => score - 1);
    }
  };

  return (
    <GameContainer>
      <h1>Typing Game</h1>
      <p>Press the correct key when the character appears! You have 3 seconds for each character.</p>
      <Container>
        {currentCharacters.map((character, index) => (
          <Cell key={index} onKeyDown={(e) => handleKeyPress(e, index)} tabIndex={index}>
            {character}
          </Cell>
        ))}
      </Container>
      <p>Score: {score}</p>
      <p>{feedback}</p>
      <p>Press the keys: {characters}</p>
      <input type="text" onKeyPress={handleKeyPress} />
    </GameContainer>
  );
};

export default App;
