import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./page/StartPage/StartPage";
import ScorePage from "./page/ScorePage/ScorePage";
import Map from "./components/Map/Map";
import UI from "./components/UI/UI";
import InGamePlay from "./page/InGamePlay/InGamePlay";
import CountDownPage from "./page/CountDownPage/CountDownPage";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
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
