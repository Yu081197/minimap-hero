import { useEffect, useState } from "react";

const useGetRandom = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomNumberThreeToSix = () => {
    return getRandomNumber(3, 6); // 3, 4, 5, 6 중 랜덤한 숫자 생성
  };

  const getRandomNumberTwoToFour = () => {
    return getRandomNumber(2, 4); // 2, 3, 4 중 랜덤한 숫자 생성
  };

  const getRandomNumberZeroToTwo = () => {
    return getRandomNumber(0, 2); // 0, 1, 2 중 랜덤한 숫자 생성
  };

  const getRandomNumberThreeToFive = () => {
    return getRandomNumber(3, 5); // 3, 4, 5 중 랜덤한 숫자 생성
  };

  const getRandomNumberSixToSeven = () => {
    return getRandomNumber(6, 7); // 6, 7 중 랜덤한 숫자 생성
  };

  return {
    getRandomNumber,
    getRandomNumberThreeToSix,
    getRandomNumberTwoToFour,
    getRandomNumberZeroToTwo,
    getRandomNumberThreeToFive,
    getRandomNumberSixToSeven,
  };
};

export default useGetRandom;
