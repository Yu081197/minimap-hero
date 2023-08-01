import React, { useState, useEffect } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1; // 1, 2, 3 중 랜덤한 숫자 생성
}

function App() {
  const [number1, setNumber1] = useState(getRandomNumber());
  const [number2, setNumber2] = useState(getRandomNumber());
  const [number3, setNumber3] = useState(getRandomNumber());
  const [isNumber1Hidden, setIsNumber1Hidden] = useState(false);
  const [isNumber2Hidden, setIsNumber2Hidden] = useState(false);
  const [isNumber3Hidden, setIsNumber3Hidden] = useState(false);

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
    if (number1 <= -1) {
      setIsNumber1Hidden(true);
      setTimeout(() => {
        setNumber1(getRandomNumber());
        setIsNumber1Hidden(false);
      }, 5000);
    }
    if (number2 <= -1) {
      setIsNumber2Hidden(true);
      setTimeout(() => {
        setNumber2(getRandomNumber());
        setIsNumber2Hidden(false);
      }, 5000);
    }
    if (number3 <= -1) {
      setIsNumber3Hidden(true);
      setTimeout(() => {
        setNumber3(getRandomNumber());
        setIsNumber3Hidden(false);
      }, 5000);
    }
  }, [number1, number2, number3]);

  return (
    <div>
      <div style={{ color: "white", width: "50px" }}>a</div>
      {isNumber1Hidden ? null : <p style={{ color: "white" }}>{number1}</p>}
      <div style={{ color: "white", width: "50px" }}>b</div>
      {isNumber2Hidden ? null : <p style={{ color: "white" }}>{number2}</p>}
      <div style={{ color: "white", width: "50px" }}>c</div>
      {isNumber3Hidden ? null : <p style={{ color: "white" }}>{number3}</p>}
    </div>
  );
}

export default App;
