import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Champ1 from "../../assets/img/champions/bdPiW70pfZb3EEqPIYRFFZtsakJSklTCEN-2f6DFuZAEClUD2g4aZzzf2m67NN2zAqvzMH4bevJD25S0Y3iC3w.jpg";
import Champ2 from "../../assets/img/champions/i1827421181.jpg";
import Champ3 from "../../assets/img/champions/i3573951229.jpg";
import Champ4 from "../../assets/img/champions/i4121612975.jpg";
import ASkill from "../../assets/img/skills/skill-a.png";
import SSkill from "../../assets/img/skills/skill-s.png";
import DSkill from "../../assets/img/skills/skill-d.png";
import FSkill from "../../assets/img/skills/skill-f.png";
import QSkill from "../../assets/img/skills/skill-q.png";
import WSkill from "../../assets/img/skills/skill-w.png";
import ESkill from "../../assets/img/skills/skill-e.png";
import RSkill from "../../assets/img/skills/skill-r.png";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg05 from "../../assets/img/how-to-play/how-to-play-05.png";
import HowToPlayImg06 from "../../assets/img/how-to-play/how-to-play-06.png";

const StyledWrapper = styled.div`
  .how-to-play-container {
    position: relative;
  }
  .explain {
    position: absolute;
    font-size: 40px;
    color: white;
    background-color: transparent;
  }
  .explain-describe {
    color: white;
    font-size: 40px;
    background-color: transparent;
  }
  .explain-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: transparent;
  }
  .explain-wrapper img {
    width: 50px;
  }
  .explain-container {
    background-color: transparent;
    gap: 50px;
  }
  .explain-box {
    background-color: transparent;
    display: flex;
    flex-direction: column;
  }

  .display {
    top: 8.125rem;
    left: 15.125rem;
  }
  .skill {
    top: 13.125rem;
  }
  .skill-ui {
    top: 40.125rem;
  }
  .score-time {
    top: 5.125rem;
    right: 15.125rem;
  }
  .minimap {
    top: 30.125rem;
    right: 10.125rem;
  }
  .button-container {
    position: absolute;
    top: 55.125rem;
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

const HowToPlay = () => {
  return (
    <>
      <StyledWrapper>
        <div className="how-to-play-container">
          <img src={HowToPlayImg01} alt="how-to-play"></img>
          <div className="explain-wrapper">
            <div className="explain-container">
              <div className="explain-box">
                <img src={Champ1} alt="ASkill" />
                <div className="explain-describe">1</div>
              </div>
              <div className="explain-box">
                <img src={Champ2} alt="ASkill" />
                <div className="explain-describe">2</div>
              </div>
              <div className="explain-box">
                <img src={Champ3} alt="ASkill" />
                <div className="explain-describe">3</div>
              </div>
              <div className="explain-box">
                <img src={Champ4} alt="ASkill" />
                <div className="explain-describe">4</div>
              </div>
            </div>
            <div className="explain-container">
              <div className="explain-box">
                <img src={QSkill} alt="ASkill" />
                <div className="explain-describe">Q</div>
              </div>
              <div className="explain-box">
                <img src={WSkill} alt="ASkill" />
                <div className="explain-describe">W</div>
              </div>
              <div className="explain-box">
                <img src={ESkill} alt="ASkill" />
                <div className="explain-describe">E</div>
              </div>
              <div className="explain-box">
                <img src={RSkill} alt="ASkill" />
                <div className="explain-describe">R</div>
              </div>
            </div>
            <div className="explain-container">
              <div className="explain-box">
                <img src={ASkill} alt="ASkill" />
                <div className="explain-describe">A</div>
              </div>
              <div className="explain-box">
                <img src={SSkill} alt="ASkill" />
                <div className="explain-describe">S</div>
              </div>
              <div className="explain-box">
                <img src={DSkill} alt="ASkill" />
                <div className="explain-describe">D</div>
              </div>
              <div className="explain-box">
                <img src={FSkill} alt="ASkill" />
                <div className="explain-describe">F</div>
              </div>
            </div>
          </div>
          <div className="explain display">화면</div>
          <div className="explain skill">키보드 스킬</div>
          <div className="explain skill-ui">스킬창</div>
          <div className="explain score-time">시간 및 점수</div>
          <div className="explain minimap">미니맵</div>
          <div className="button-container">
            <Link to="/how-to-play-01">
              <div class="button button-start">next</div>
            </Link>
          </div>
        </div>
      </StyledWrapper>
    </>
  );
};

export default HowToPlay;
