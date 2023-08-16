import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

import HowToPlay03Styled from "./styles/HowToPlay03.styled";

import HowToPlayImg01 from "../../assets/img/how-to-play/how-to-play-01.png";
import HowToPlayImg02 from "../../assets/img/how-to-play/how-to-play-02.png";
import HowToPlayImg03 from "../../assets/img/how-to-play/how-to-play-03.png";
import HowToPlayImg04 from "../../assets/img/how-to-play/how-to-play-04.png";
import HowToPlayImg05 from "../../assets/img/how-to-play/how-to-play-05.png";
import HowToPlayImg06 from "../../assets/img/how-to-play/how-to-play-06.png";
import HowToPlayImg07 from "../../assets/img/how-to-play/how-to-play-07.png";

const HowToPlay03 = () => {
  return (
    <>
      <HowToPlay03Styled>
        <div className="how-to-play-container">
          <img src={HowToPlayImg01} alt="how-to-play"></img>
          <div className="button-container">
            <Link to="/">
              <div class="button button-start">play game</div>
            </Link>
          </div>
          <div className="explain explain-01">0초가 되면 게임이 끝납니다</div>
        </div>
      </HowToPlay03Styled>
    </>
  );
};

export default HowToPlay03;
