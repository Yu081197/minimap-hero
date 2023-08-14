import { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increaseScore, decreaseScore } from "../../services/ScoreSlice";

import MapImg from "../../assets/img/minimap.png";

import Champ1 from "../../assets/img/champions/bdPiW70pfZb3EEqPIYRFFZtsakJSklTCEN-2f6DFuZAEClUD2g4aZzzf2m67NN2zAqvzMH4bevJD25S0Y3iC3w.jpg";
import Champ2 from "../../assets/img/champions/i1827421181.jpg";
import Champ3 from "../../assets/img/champions/i3573951229.jpg";
import Champ4 from "../../assets/img/champions/i4121612975.jpg";
import Champ5 from "../../assets/img/champions/i3783144528.png";
import Champ6 from "../../assets/img/champions/i4121612975.jpg";
import Champ7 from "../../assets/img/champions/i4825916414.jpg";
import Champ8 from "../../assets/img/champions/145.png";
import Champ9 from "../../assets/img/champions/bdPiW70pfZb3EEqPIYRFFZtsakJSklTCEN-2f6DFuZAEClUD2g4aZzzf2m67NN2zAqvzMH4bevJD25S0Y3iC3w.jpg";
import Champ10 from "../../assets/img/champions/Z8HrEpVrkSExFS1so60ppGC0SosF3RDzWtq0y7CZ5Qn7YjDLMPgLnq6q7WwJzVUs0Yy-qan0tVHeEEXb7tn5Sw.jpg";

import { styled } from "styled-components";

const Champions = [
  { id: 1, key: "1", image: Champ1 },
  { id: 2, key: "2", image: Champ2 },
  { id: 3, key: "3", image: Champ3 },
  { id: 4, key: "4", image: Champ4 },
  { id: 5, key: "5", image: Champ5 },
  { id: 6, key: "1", image: Champ6 },
  { id: 7, key: "2", image: Champ7 },
  { id: 8, key: "3", image: Champ8 },
  { id: 9, key: "4", image: Champ9 },
  { id: 10, key: "5", image: Champ10 },
];

const StyledWrapper = styled.div`
  .map-box {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    flex-direction: column;
  }
  .portrait-container {
    gap: 10px;
  }
  .portrait {
    width: 70px;
    border: 3px solid ${(props) => (props.isBorderRed ? "red" : "none")};
  }
  .map-container {
    width: 100%;
    height: 100%;
  }
  .map {
    width: 100%;
    height: 100%;
  }
  .champion-container {
    position: absolute;
  }
  .champion-box {
    border-radius: 50%;
  }

  .champion {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .score {
    top: -100px;
    right: 70px;
    position: absolute;
    color: #00ff00;
    background-color: #091428;
    font-size: 70px;
  }
`;

const TrainingMap = () => {
  const mapContainer = useRef(null);
  const prevTimeoutRef = useRef();
  const dispatch = useDispatch();

  const [plus200Score, setPlus200Score] = useState(false);

  const [isKeyOnePressed, setIsKeyOnePressed] = useState(false);
  const [isKeyTwoPressed, setIsKeyTwoPressed] = useState(false);
  const [isKeyThreePressed, setIsKeyThreePressed] = useState(false);
  const [isKeyFourPressed, setIsKeyFourPressed] = useState(false);

  const [champion, setChampion] = useState({
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
  });

  const incrementScore = (amount) => {
    dispatch(increaseScore(amount));
  };

  function getRandomNumberZeroToTen() {
    const randomIndex = Math.floor(Math.random() * 4);
    return Champions[randomIndex];
  }

  function getRandomPositionX() {
    return Math.floor(Math.random() * 241) + 10;
  }

  function getRandomPositionY() {
    return Math.floor(Math.random() * 221) + 85;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setChampion((prevState) => {
        const updatedChampion = { ...prevState };
        updatedChampion.shownTime -= 0.5;
        if (updatedChampion.shownTime <= 0) {
          updatedChampion.shownTime = null;
        }
        return updatedChampion;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (champion.isGamePlay === "non-playing") {
      setChampion((prevState) => {
        const updatedChampion = { ...prevState };
        const randomChampion = getRandomNumberZeroToTen();
        updatedChampion.targetChampion = randomChampion;
        updatedChampion.positionX = getRandomPositionX();
        updatedChampion.positionY = getRandomPositionY();
        return updatedChampion; // 변경된 배열을 반환합니다.
      });
      if (champion.isGamePlay === "non-playing") {
        setTimeout(() => {
          setChampion((prevState) => {
            const updatedChampion = { ...prevState };
            updatedChampion.isShown = true;
            updatedChampion.isGamePlay = "playing";
            return updatedChampion;
          });
          setTimeout(() => {
            setChampion((prevState) => {
              const updatedChampion = { ...prevState };
              updatedChampion.isShown = false;
              updatedChampion.isGamePlay = "non-playing";
              return updatedChampion;
            });
          }, 2000);
        }, 3000);
      }
      if (prevTimeoutRef.current) {
        clearTimeout(prevTimeoutRef.current);
      }
      prevTimeoutRef.current = setTimeout(() => {}, champion.noShowTime * 700);
    }
  }, [champion.isGamePlay]);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  const handleKeyPress = (e) => {
    if (e.key === "1") {
      setIsKeyOnePressed(true);
    }
    if (e.key === "2") {
      setIsKeyTwoPressed(true);
    }
    if (e.key === "3") {
      setIsKeyThreePressed(true);
    }
    if (e.key === "4") {
      setIsKeyFourPressed(true);
    }
    const pressedKey = e.key.toLowerCase();
    if (champion.isShown) {
      if (champion.targetChampion.key === pressedKey) {
        incrementScore(200);
        setPlus200Score(true);
        setChampion((prevState) => {
          const updatedChampion = { ...prevState };
          updatedChampion.isShown = false;
          return updatedChampion;
        });
        setTimeout(() => setPlus200Score(false), 2000);
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "1") {
      setIsKeyOnePressed(false);
    }
    if (e.key === "2") {
      setIsKeyTwoPressed(false);
    }
    if (e.key === "3") {
      setIsKeyThreePressed(false);
    }
    if (e.key === "4") {
      setIsKeyFourPressed(false);
    }
  };

  return (
    <>
      <StyledWrapper>
        <div className="map-box">
          <div className="portrait-container">
            <img
              className="portrait"
              src={Champ1}
              alt={1}
              style={{
                border: `5px solid ${isKeyOnePressed ? "red" : ""}`,
              }}
            />
            <img
              className="portrait"
              src={Champ2}
              alt={2}
              style={{
                border: `5px solid ${isKeyTwoPressed ? "red" : ""}`,
              }}
            />
            <img
              className="portrait"
              src={Champ3}
              alt={3}
              style={{
                border: `5px solid ${isKeyThreePressed ? "red" : ""}`,
              }}
            />
            <img
              className="portrait"
              src={Champ4}
              alt={4}
              style={{
                border: `5px solid ${isKeyFourPressed ? "red" : ""}`,
              }}
            />
          </div>
          <div className="map-container" ref={mapContainer}>
            {plus200Score ? (
              <div className="score score-state">+ 200</div>
            ) : (
              <></>
            )}
            <img className="map" src={MapImg} alt={"map"} />
            <div
              className="champion-container"
              style={{
                left: champion.positionX,
                top: champion.positionY,
              }}
            >
              {champion.isShown ? (
                <div className="champion-box">
                  <img
                    className="champion"
                    src={champion.targetChampion.image}
                    alt={champion.targetChampion.key}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default TrainingMap;
