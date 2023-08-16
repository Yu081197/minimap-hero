import styled from "styled-components";

const ScorePageStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .score-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .score {
    color: #0ac8b9;
    font-size: 50px;
    background-color: #010a13;
  }

  .button-start {
    width: 300px;
    height: 100px;
    background: #030910;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    font-family: "Marcellus SC", serif;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px;
    background: #1e2328;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border: 3px solid;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
  }

  .button:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
    transition: 0.1s;
  }

  .button:active {
    text-shadow: none;
    box-shadow: none;
    color: #cdbe9130;
  }
  /* latin-ext */
  @font-face {
    font-family: "Marcellus SC";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_iNacOqu0hYYt.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Marcellus SC";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_htacOqu0hQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export default ScorePageStyled;
