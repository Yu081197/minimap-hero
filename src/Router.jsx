import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InGame from "./InGame/InGame";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ingame" element={<InGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
