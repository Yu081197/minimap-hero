import { useState, useEffect, useRef } from "react";

import MapImg from "../../assets/img/minimap.png";

import Champ1 from "../../assets/img/champions/i0128364288.jpg";
import Champ2 from "../../assets/img/champions/i1827421181.jpg";
import Champ3 from "../../assets/img/champions/i3573951229.jpg";
import Champ4 from "../../assets/img/champions/i3596591190.jpg";
import Champ5 from "../../assets/img/champions/i3783144528.png";
import Champ6 from "../../assets/img/champions/i4121612975.jpg";
import Champ7 from "../../assets/img/champions/i4825916414.jpg";
import Champ8 from "../../assets/img/champions/145.png";
import Champ9 from "../../assets/img/champions/bdPiW70pfZb3EEqPIYRFFZtsakJSklTCEN-2f6DFuZAEClUD2g4aZzzf2m67NN2zAqvzMH4bevJD25S0Y3iC3w.jpg";
import Champ10 from "../../assets/img/champions/Z8HrEpVrkSExFS1so60ppGC0SosF3RDzWtq0y7CZ5Qn7YjDLMPgLnq6q7WwJzVUs0Yy-qan0tVHeEEXb7tn5Sw.jpg";

import { styled } from "styled-components";

const Champions = [
  { id: 1, eng: "f1", image: Champ1 },
  { id: 2, eng: "f2", image: Champ2 },
  { id: 3, eng: "f3", image: Champ3 },
  { id: 4, eng: "f4", image: Champ4 },
  { id: 5, eng: "f5", image: Champ5 },
  { id: 6, eng: "f1", image: Champ6 },
  { id: 7, eng: "f2", image: Champ7 },
  { id: 8, eng: "f3", image: Champ8 },
  { id: 9, eng: "f4", image: Champ9 },
  { id: 10, eng: "f5", image: Champ10 },
];

const StyledWrapper = styled.div`
  .map-container {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .map {
    width: 330px;
    height: 330px;
  }
  .champion-container {
    position: absolute;
  }
  .champion-box {
    border-radius: 50%;
  }

  .champion {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const Map = () => {
  const mapContainer = useRef(null);
  const [pressedKey, setPressedKey] = useState("");
  const [champion, setChampion] = useState([
    {
      id: 1,
      isGamePlay: "non-playing",
      targetChampion: null,
      isShown: false,
      positionX: null,
      positionY: null,
      showTime: null,
      shownTime: null,
      noShowTime: null,
      currentTime: null,
      keyPressedTime: 0,
      timePlusShowTime: 0,
    },
  ]);

  function getRandomNumberZeroToTen() {
    const randomIndex = Math.floor(Math.random() * 10); // Generates a random number between 0 and 2 (inclusive)
    return Champions[randomIndex];
  }

  let previousXValues = [];
  function getRandomPositionX() {
    const boxRect = mapContainer.current.getBoundingClientRect();
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousXValues.length === Math.floor(boxRect.width - 20)) {
      previousXValues = [];
    }
    let x;
    do {
      x = Math.random() * boxRect.width;
    } while (previousXValues.includes(x));
    // 이전 배열에 현재 x값 추가
    previousXValues.push(x);
    return x;
  }

  let previousYValues = [];
  function getRandomPositionY() {
    const boxRect = mapContainer.current.getBoundingClientRect();
    // 모든 값이 한 번씩 반환되었으면 이전 배열 초기화
    if (previousYValues.length === Math.floor(boxRect.height - 20)) {
      previousYValues = [];
    }
    let y;
    do {
      y = Math.random() * boxRect.height;
    } while (previousYValues.includes(y));
    // 이전 배열에 현재 x값 추가
    previousYValues.push(y);
    return y;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChampion((prevState) => {
        const updatedChampion = [...prevState];
        updatedChampion[0].shownTime -= 0.5;
        if (updatedChampion[0].shownTime <= 0) {
          updatedChampion[0].shownTime = null;
        }
        return updatedChampion;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (champion[0].isGamePlay === "non-playing") {
      setChampion((prevState) => {
        const updatedChampion = [...prevState];
        const randomChampion = getRandomNumberZeroToTen();
        updatedChampion[0].targetChampion = randomChampion;
        updatedChampion[0].positionX = getRandomPositionX();
        updatedChampion[0].positionY = getRandomPositionY();
        return updatedChampion; // 변경된 배열을 반환합니다.
      });
      if (champion[0].isGamePlay === "non-playing") {
        setTimeout(() => {
          setChampion((prevState) => {
            const updatedChampion = [...prevState];
            updatedChampion[0].isShown = true;
            updatedChampion[0].isGamePlay = "playing";
            return updatedChampion;
          });
          setTimeout(() => {
            setChampion((prevState) => {
              const updatedChampion = [...prevState];
              updatedChampion[0].isShown = false;
              updatedChampion[0].isGamePlay = "non-playing";
              return updatedChampion;
            });
          }, 2000);
        }, 3000);
      }
    }
  }, [champion[0].isGamePlay]);

  return (
    <>
      <StyledWrapper>
        <div className="map-container" ref={mapContainer}>
          <img className="map" src={MapImg} />
          <div
            className="champion-container"
            style={{
              left: champion[0].positionX,
              top: champion[0].positionY,
            }}
          >
            {champion[0].isShown ? (
              <div className="champion-box">
                <div className="remain-time">{champion[0].shownTime}</div>
                <img
                  className="champion"
                  src={champion[0].targetChampion.image}
                  alt={champion[0].targetChampion.eng}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default Map;
