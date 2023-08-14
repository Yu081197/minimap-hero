import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import HowToPlay01Styled from "./styles/HowToPlay01.styled ";

import HowToPlayExplain from "../../components/Explain/HowToPlayExplain";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg08 from "../../assets/img/how-to-play/how-to-play-08.png";

const HowToPlay01 = () => {
  return (
    <>
      <HowToPlay01Styled>
        <div className="how-to-play-container">
          <img src={HowToPlayImg01} alt="how-to-play"></img>
          <div className="button-container">
            <Link to="/how-to-play-02">
              <div class="button button-start">next</div>
            </Link>
          </div>
          <div className="explain explain-05">
            화면에 나오는 무작위 스킬을 확인
          </div>
          <img
            src={HowToPlayImg08}
            className="explain explain-08"
            alt="how-to-play"
          ></img>
          <div className="explain explain-06">마우스를 올리고</div>
          <img
            src={HowToPlayImg02}
            className="explain explain-02"
            alt="how-to-play"
          ></img>
          <img
            src={HowToPlayImg03}
            className="explain explain-03"
            alt="how-to-play"
          ></img>
          <img
            src={HowToPlayImg04}
            className="explain explain-04"
            alt="how-to-play"
          ></img>
          <div className="explain explain-07">
            1이 될 때 해당 스킬의 키를 클릭!
          </div>
          <HowToPlayExplain />
        </div>
      </HowToPlay01Styled>
    </>
  );
};

export default HowToPlay01;
