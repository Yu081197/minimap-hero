import styled from "styled-components";

const InGamePlayStyled = styled.div`
  p {
    color: white;
  }
  .game-container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 1604px;
    height: 904px;
    background-color: #091428;
    border: 2px solid #c8aa6e;
  }
  .canvas-container {
    position: absolute;
    width: 1600px;
    height: 900px;
    background-color: #091428;
  }
  .ui-cotainer {
    display: block;
    position: relative;
  }
  .ui {
    position: absolute;
    bottom: 0px;
  }
  .ui-skill {
    position: absolute;
    bottom: 0px;
  }
  .skill-d {
    bottom: 4.7rem;
    right: 41.6rem;
    width: 31px;
    height: 31px;
  }
  .skill-f {
    bottom: 4.7rem;
    right: 39.1rem;
    width: 31px;
    height: 31px;
  }
  .skill-q {
    bottom: 4rem;
    right: 39.1rem;
    right: 54.86rem;
    width: 42px;
  }
  .skill-w {
    bottom: 4rem;
    right: 51.55rem;
    width: 42px;
  }
  .skill-e {
    bottom: 4rem;
    right: 48.1rem;
    width: 42px;
  }
  .skill-r {
    bottom: 4rem;
    right: 44.8rem;
    width: 42px;
  }
  .ui {
    width: 1000px;
  }
  .skill-box {
    width: 110%;
    max-width: 100px;
    max-height: 100px;
    height: 110%;
    border-radius: 50%;
    display: flex;
    background-color: #091428;
    flex-direction: column-reverse;
    gap: 5px;
    z-index: 99;
  }
  .remain-time {
    color: #0ac8b9;
    font-size: 25px;
    background-color: #091428;
  }
  .skill {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid #c8aa6e;
    background-color: #091428;
  }
  .time-score-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    top: 30px;
    right: 50px;
    position: absolute;
    color: #cdfafa;
    background-color: #091428;
    font-size: 30px;
  }
  .time {
    background-color: #091428;
  }
  .score {
    background-color: #091428;
  }
  .score-plus {
    font-size: 50px;
    color: #00ff00;
  }
  .score-minus {
    font-size: 50px;
    color: #f70000;
  }
  .fail {
    color: #cdfafa;
    background-color: #091428;
  }
  .skill-ui {
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 23%;
  }
  .skill-container {
    background-color: transparent;
    position: absolute;
    top: ${(props) => props.positionY}px;
    left: ${(props) => props.positionX}px;
  }
`;

export default InGamePlayStyled;
