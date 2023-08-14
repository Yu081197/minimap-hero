import React, { useState, useEffect } from "react";

import skillUI from "../../assets/img/skillUI.png";
import DSkill from "../../assets/img/skills/skill-d.png";
import FSkill from "../../assets/img/skills/skill-f.png";
import QSkill from "../../assets/img/skills/skill-q.png";
import WSkill from "../../assets/img/skills/skill-w.png";
import ESkill from "../../assets/img/skills/skill-e.png";
import RSkill from "../../assets/img/skills/skill-r.png";

import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .ui-cotainer {
    display: block;
    position: relative;
  }
  .ui-skill {
    position: absolute;
  }
  .skill-d {
    top: 25px;
    right: 294px;
    width: 40px;
  }
  .skill-f {
    top: 25px;
    right: 242px;
    width: 40px;
  }
  .skill-q {
    top: 25px;
    right: 558px;
    width: 54px;
  }
  .skill-w {
    top: 25px;
    right: 491px;
    width: 54px;
  }
  .skill-e {
    top: 25px;
    right: 422px;
    width: 54px;
  }
  .skill-r {
    top: 25px;
    right: 355px;
    width: 54px;
  }
`;
const UI = () => {
  const [isKeyQPressed, setIsKeyQPressed] = useState(false);
  const [isKeyWPressed, setIsKeyWPressed] = useState(false);
  const [isKeyEPressed, setIsKeyEPressed] = useState(false);
  const [isKeyRPressed, setIsKeyRPressed] = useState(false);
  const [isKeyDPressed, setIsKeyDPressed] = useState(false);
  const [isKeyFPressed, setIsKeyFPressed] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  const handleKeyPress = (e) => {
    if (e.key === "q") {
      setIsKeyQPressed(true);
    }
    if (e.key === "w") {
      setIsKeyWPressed(true);
    }
    if (e.key === "e") {
      setIsKeyEPressed(true);
    }
    if (e.key === "r") {
      setIsKeyRPressed(true);
    }
    if (e.key === "d") {
      setIsKeyDPressed(true);
    }
    if (e.key === "f") {
      setIsKeyFPressed(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "q") {
      setIsKeyQPressed(false);
    }
    if (e.key === "w") {
      setIsKeyWPressed(false);
    }
    if (e.key === "e") {
      setIsKeyEPressed(false);
    }
    if (e.key === "r") {
      setIsKeyRPressed(false);
    }
    if (e.key === "d") {
      setIsKeyDPressed(false);
    }
    if (e.key === "f") {
      setIsKeyFPressed(false);
    }
  };
  return <StyledWrapper></StyledWrapper>;
};

export default UI;
