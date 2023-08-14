import { useState } from "react";

function useGetRandom() {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomSkillFromRange = (startIndex, endIndex, skills) => {
    const randomIndex = getRandomNumber(startIndex, endIndex);
    return skills[randomIndex];
  };

  const getRandomNumberThreeToSix = () => {
    return getRandomNumber(3, 6);
  };

  const getRandomNumberTwoToFour = () => {
    return getRandomNumber(2, 4);
  };

  const getRandomNumberZeroToTwo = (skills) => {
    const randomIndex = getRandomNumber(0, 2);
    return skills[randomIndex];
  };

  const getRandomNumberThreeToFive = (skills) => {
    const randomIndex = getRandomNumber(3, 5);
    return skills[randomIndex];
  };

  const getRandomNumberSixToSeven = (skills) => {
    const randomIndex = getRandomNumber(6, 7);
    return skills[randomIndex];
  };

  return {
    getRandomNumber,
    getRandomSkillFromRange,
    getRandomNumberThreeToSix,
    getRandomNumberTwoToFour,
    getRandomNumberZeroToTwo,
    getRandomNumberThreeToFive,
    getRandomNumberSixToSeven,
  };
}

export default useGetRandom;
