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

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25%;
  width: 1920px;
  height: 1080px;
  border: 1px solid black;
  background-color: #091428;
  border: 2px solid #c8aa6e;
`;
