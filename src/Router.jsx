import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./page/StartPage/StartPage";
import ScorePage from "./page/ScorePage/ScorePage";
import Map from "./components/Map/Map";
import InGamePlay from "./page/InGamePlay/InGamePlay";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/score" element={<ScorePage />} />
        <Route path="/ingameplay" element={<InGamePlay />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
