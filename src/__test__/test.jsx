import React, { useState, useEffect } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1; // 1, 2, 3 중 랜덤한 숫자 생성
}

function App() {
  const [number1, setNumber1] = useState(getRandomNumber());
  const [number2, setNumber2] = useState(getRandomNumber());
  const [number3, setNumber3] = useState(getRandomNumber());

  useEffect(() => {
    const interval1 = setInterval(() => {
      setNumber1((prevNumber) => prevNumber - 1);
    }, 1000);

    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setNumber2((prevNumber) => prevNumber - 1);
    }, 1000);

    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setNumber3((prevNumber) => prevNumber - 1);
    }, 1000);

    return () => clearInterval(interval3);
  }, []);

  useEffect(() => {
    // 숫자가 0이 되면 각각 해당 숫자만 초기화
    if (number1 === -1) {
      setNumber1(getRandomNumber());
    }
    if (number2 === -1) {
      setNumber2(getRandomNumber());
    }
    if (number3 === -1) {
      setNumber3(getRandomNumber());
    }
  }, [number1, number2, number3]);

  return (
    <div>
      <p style={{ color: "white" }}>{number1}</p>
      <p style={{ color: "white" }}>{number2}</p>
      <p style={{ color: "white" }}>{number3}</p>
    </div>
  );
}

export default App;
