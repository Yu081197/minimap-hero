import styled from "styled-components";

const StartPageStyled = styled.div`
  .start-container {
    display: flex;
    margin-top: 0px;
    flex-direction: column;
    gap: 30px;
  }
  .title {
    text-shadow: 0 0 5px #ffffff80;
    transition: 0.1s;
    font-family: "Roboto", sans-serif;
    color: rgb(218, 212, 212);
    font-size: 90px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px;
    box-shadow: inset 0 0 2px #000000;
    width: 700px;
    margin: 50px;
  }
  .select-modal {
    display: flex;
    position: absolute;
    top: 20%;
    width: 500px;
    height: 500px;
    border: 1px solid #c8aa6d;
    background-color: rgba(9, 20, 40, 0.8);
    z-index: 999;
  }
  .select-modal-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  .select-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 어두운 배경 색상 */
    z-index: 998;
    display: flex;
  }
  .button-noclick {
    font-family: "Marcellus SC", serif;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: 5px 15px;
    background: #000000;
    color: #cdbe91;
    box-shadow: inset 0 0 2px #000000;
    border: 3px solid;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
  }
  .button-noclick:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #000000, #000000);
    cursor: pointer;
    transition: 0.1s;
  }

  .explain-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  img {
    width: 100px;
  }
  .explain-container {
    gap: 100px;
    margin-bottom: 10px;
  }
  .explain-box {
    display: flex;
    flex-direction: column;
  }
  .explain {
    font-size: 40px;
    color: #cdfafa;
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
  .button-wrapper {
    display: flex;
    gap: 80px;
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

  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

  @font-face {
    font-family: GalanoGrosteque;
    src: url("/fonts/GalanoGrotesqueAltBold.otf");
  }
`;
export default StartPageStyled;
