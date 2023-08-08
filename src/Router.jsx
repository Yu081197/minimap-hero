import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/how-to-play-01" element={<HowToPlay01 />} />
        <Route path="/how-to-play-02" element={<HowToPlay02 />} />
        <Route path="/how-to-play-03" element={<HowToPlay03 />} />
        <Route path="countdown" element={<CountDownPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/ingameplay" element={<InGamePlay />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ui" element={<UI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
