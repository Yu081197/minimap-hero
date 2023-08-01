import { useState, useEffect } from "react";

import MapImg from "../../assets/img/minimap.png";

import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .map-container {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

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
