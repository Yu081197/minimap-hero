import { useRef } from "react";

const useRandomPosition = () => {
  const previousXValues = useRef([]);
  const previousYValues = useRef([]);

  const getRandomPositionX = (containerWidth) => {
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousXValues.current.length === Math.floor(containerWidth - 450)) {
      previousXValues.current = [];
    }

    let x;
    do {
      x = Math.random() * (containerWidth - 450);
    } while (previousXValues.current.includes(x));

    // 이전 배열에 현재 x값 추가
    previousXValues.current.push(x);
    return x;
  };

  const getRandomPositionY = (containerHeight) => {
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousYValues.current.length === Math.floor(containerHeight - 350)) {
      previousYValues.current = [];
    }

    let y;
    do {
      y = Math.random() * (containerHeight - 350);
    } while (previousYValues.current.includes(y));

    // 이전 배열에 현재 y값 추가
    previousYValues.current.push(y);
    return y;
  };

  return {
    getRandomPositionX,
    getRandomPositionY,
  };
};

export default useRandomPosition;
