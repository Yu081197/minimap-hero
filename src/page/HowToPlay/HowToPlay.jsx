import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HowToPlayExplain from "../../components/Explain/HowToPlayExplain";

import HowToPlayStyled from "./styles/HowToPlay.styled";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg05 from "../../assets/img/how-to-play/how-to-play-05.png";
import HowToPlayImg06 from "../../assets/img/how-to-play/how-to-play-06.png";

const HowToPlay = () => {
  return (
    <>
      <HowToPlayStyled>
        <div className="how-to-play-container">
          <img src={HowToPlayImg01} alt="how-to-play"></img>
          <HowToPlayExplain />
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
      </HowToPlayStyled>
    </>
  );
};

export default HowToPlay;
