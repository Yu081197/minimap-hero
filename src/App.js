import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <Router />
    </StyledWrapper>
  );
}

export default App;

const StyledWrapper = styled.div``;
