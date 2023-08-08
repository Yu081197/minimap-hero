import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg05 from "../../assets/img/how-to-play/how-to-play-05.png";
import HowToPlayImg06 from "../../assets/img/how-to-play/how-to-play-06.png";
import HowToPlayImg07 from "../../assets/img/how-to-play/how-to-play-07.png";

const StyledWrapper = styled.div`
  .explain {
    color: white;
    position: absolute;
    font-size: 40px;
    background: #091429;
  }
  .display {
    top: 150px;
  }
  .skill-ui {
    top: 730px;
  }
  .score-time {
    top: 140px;
    right: 1050px;
  }
  .minimap {
    right: 950px;
    top: 550px;
  }
  .explain-01 {
    top: 300px;
    font-size: 30px;
  }
  .explain-02 {
    left: 1250px;
  }
  .explain-03 {
    left: 1650px;
  }
  .explain-04 {
    top: 700px;
    font-size: 30px;
  }

  .button-container {
    position: absolute;
    top: 950px;
  }
  .button {
    font-family: "Marcellus SC", serif;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px;
    background: #1e2328;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border: 3px solid;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
  }
  .button:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
    transition: 0.1s;
  }

  .button:active {
    text-shadow: none;
    box-shadow: none;
    color: #cdbe9130;
  }
  /* latin-ext */
  @font-face {
    font-family: "Marcellus SC";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_iNacOqu0hYYt.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Marcellus SC";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_htacOqu0hQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

const HowToPlay02 = () => {
  return (
    <>
      <StyledWrapper>
        <div className="how-to-play-container">
          <img src={HowToPlayImg01} alt="how-to-play"></img>
          <div className="button-container">
            <Link to="/how-to-play-03">
              <div class="button button-start">next</div>
            </Link>
          </div>
          <div className="explain explain-01">
            미니맵에 나오는 무작위 챔피언을 확인
          </div>
          <img
            src={HowToPlayImg06}
            className="explain explain-02"
            alt="how-to-play"
          ></img>
          <img
            src={HowToPlayImg07}
            className="explain explain-03"
            alt="how-to-play"
          ></img>

          <div className="explain explain-04">
            화면에 챔피언이 나타나면 해당 키를 클릭!
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default HowToPlay02;
