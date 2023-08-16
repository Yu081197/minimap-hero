import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HowToPlayExplain from "../../components/Explain/HowToPlayExplain";

import HowToPlay02Styled from "./styles/HowToPlay02.styled";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg05 from "../../assets/img/how-to-play/how-to-play-05.png";
import HowToPlayImg06 from "../../assets/img/how-to-play/how-to-play-06.png";
import HowToPlayImg07 from "../../assets/img/how-to-play/how-to-play-07.png";

const HowToPlay02 = () => {
  return (
    <>
      <HowToPlay02Styled>
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
          <HowToPlayExplain />
        </div>
      </HowToPlay02Styled>
    </>
  );
};

export default HowToPlay02;
