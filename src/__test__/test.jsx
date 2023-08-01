import { useState, useEffect } from "react";

import MapImg from "../assets/img/minimap.png";

import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .map-container {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
const Box = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid #c8aa6e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  position: relative;
  background-color: #091428;
`;

const Character = styled.div`
  position: absolute;
  top: ${(props) => props.position.y}px;
  left: ${(props) => props.position.x}px;
  color: #0ac8b9;
  background-color: #091428;
`;

const characters = ["q", "w", "e", "r", "a", "s", "d", "f"];

const Map = () => {
  return (
    <>
      <StyledWrapper>
        <div className="map-container">
          <img src={MapImg} width="330px" height="330px" alt="testA" />
        </div>
      </StyledWrapper>
    </>
  );
};

export default Map;
