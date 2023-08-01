// to-do : 잘못 눌렀을 때 스코어 떨어지는 로직 추가 필요
//         빠르게 누르면 실패하는 로직 추가
//         test와 ingame 합치기
//
//         남은 시간 숫자로 보이게끔 우선적으로 구현
//         남은 시간이 0~1.5초 사이에 눌러야 스코어 오르게끔 구현
//
//         움직이는 이미지 추가
//
//         미니맵 안에서도 똑같이 구현하기
//         미니맵 안에서는 움직이는 이미지 추가할 필요 없음

import React, { useState, useEffect } from "react";

function getRandomNumber() {
  return Math.floor(Math.random() * 7) + 1; // 1, 2, 3, 4, 5, 6, 7 중 랜덤한 숫자 생성
}

function App() {
  const [number1, setNumber1] = useState(getRandomNumber());
  const [number2, setNumber2] = useState(getRandomNumber());
  const [number3, setNumber3] = useState(getRandomNumber());
  const [isNumber1Hidden, setIsNumber1Hidden] = useState(false);
  const [isNumber2Hidden, setIsNumber2Hidden] = useState(false);
  const [isNumber3Hidden, setIsNumber3Hidden] = useState(false);
  const [interval1, setInterval1] = useState(null);
  const [interval2, setInterval2] = useState(null);
  const [interval3, setInterval3] = useState(null);
  const [isNumber1Reset, setIsNumber1Reset] = useState(false);
  const [isNumber2Reset, setIsNumber2Reset] = useState(false);
  const [isNumber3Reset, setIsNumber3Reset] = useState(false);

  useEffect(() => {
    if (!isNumber1Hidden) {
      const newInterval1 = setInterval(() => {
        setNumber1((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval1(newInterval1);
    } else {
      clearInterval(interval1);
    }
    return () => clearInterval(interval1);
  }, [isNumber1Hidden]);

  useEffect(() => {
    if (!isNumber2Hidden) {
      const newInterval2 = setInterval(() => {
        setNumber2((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval2(newInterval2);
    } else {
      clearInterval(interval2);
    }
    return () => clearInterval(interval2);
  }, [isNumber2Hidden]);

  useEffect(() => {
    if (!isNumber3Hidden) {
      const newInterval3 = setInterval(() => {
        setNumber3((prevNumber) => prevNumber - 1);
      }, 700);
      setInterval3(newInterval3);
    } else {
      clearInterval(interval3);
    }
    return () => clearInterval(interval3);
  }, [isNumber3Hidden]);

  useEffect(() => {
    // 숫자가 0이 되면 각각 해당 숫자만 초기화
    if (number1 === 0 && !isNumber1Reset) {
      setIsNumber1Hidden(true);
      setIsNumber1Reset(true);
      setTimeout(() => {
        setNumber1(getRandomNumber());
        setIsNumber1Reset(false);
        setIsNumber1Hidden(false);
      }, 2000);
    }
    if (number2 === 0 && !isNumber2Reset) {
      setIsNumber2Hidden(true);
      setIsNumber2Reset(true);
      setTimeout(() => {
        setNumber2(getRandomNumber());
        setIsNumber2Reset(false);
        setIsNumber2Hidden(false);
      }, 2000);
    }
    if (number3 === 0 && !isNumber3Reset) {
      setIsNumber3Hidden(true);
      setIsNumber3Reset(true);
      setTimeout(() => {
        setNumber3(getRandomNumber());
        setIsNumber3Reset(false);
        setIsNumber3Hidden(false);
      }, 2000);
    }
  }, [
    number1,
    number2,
    number3,
    isNumber1Reset,
    isNumber2Reset,
    isNumber3Reset,
  ]);

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
