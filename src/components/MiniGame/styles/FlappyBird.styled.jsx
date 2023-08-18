import { styled } from "styled-components";

const FlappyBirdStyled = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
    overflow: hidden;
  }

  .bird {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: blue;
    /* Add bird image styling here */
  }

  .score_val {
    font-size: 24px;
    margin-top: 20px;
  }

  .message {
    font-size: 24px;
    margin-top: 20px;
    text-align: center;
  }

  .messageStyle {
    /* Add your message styles here */
  }
`;

export default FlappyBirdStyled;
