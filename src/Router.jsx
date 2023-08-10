import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import StartPage from "./page/StartPage/StartPage";
import ScorePage from "./page/ScorePage/ScorePage";
import HowToPlay from "./page/HowToPlay/HowToPlay";
import Map from "./components/Map/Map";
import UI from "./components/UI/UI";
import InGamePlay from "./page/InGamePlay/InGamePlay";
import CountDownPage from "./page/CountDownPage/CountDownPage";
import HowToPlay01 from "./page/HowToPlay/HowToPlay01";
import HowToPlay02 from "./page/HowToPlay/HowToPlay02";
import HowToPlay03 from "./page/HowToPlay/HowToPlay03";

const StyledWrapper = styled.div`
  color: #cdfafa;
  font-size: 50px;
  white-space: pre-line;
`;

function isMobileDevice() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function MobileMessage() {
  return (
    <StyledWrapper>
      <p>Minimap-Hero는 PC로만 플레이 가능합니다</p>
    </StyledWrapper>
  );
}

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        {isMobileDevice() && <Route path="/" element={<MobileMessage />} />}
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/how-to-play-01" element={<HowToPlay01 />} />
        <Route path="/how-to-play-02" element={<HowToPlay02 />} />
        <Route path="/how-to-play-03" element={<HowToPlay03 />} />
        <Route path="/countdown" element={<CountDownPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/ingameplay" element={<InGamePlay />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ui" element={<UI />} />
        {!isMobileDevice() && <Route path="/" element={<StartPage />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
