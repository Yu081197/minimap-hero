import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InGame from "./page/InGame/InGame";
import StartPage from "./page/StartPage/StartPage";
import Map from "./components/Map/Map";
import Test from "./__test__/test";

import { styled } from "styled-components";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/ingame" element={<InGame />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
