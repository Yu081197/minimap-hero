import { styled } from "styled-components";

const StyledWrapper = styled.div`
  .lol-btn {
    &-container {
      display: inline-flex;
      margin: 2rem 5rem;
      text-align: center;
    }
    &-link {
      display: inline-flex;
      margin: 5rem;
      padding: 0.2rem 0.3rem;
      border: 1px solid rgba(174, 152, 92, 0.45);
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      text-align: center;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
      &-circle {
        width: 40px;
        height: 40px;
        margin-top: 0.2rem;
        margin-right: 0.3rem;
        border: 2px solid #ae985c;
        border-radius: 50%;
        background: #2d3a46;
        color: #fff;

        p {
          font-size: 1.4rem;
        }
      }
      &-rectangle {
        height: 45px;
        margin-top: 0.1rem;
        padding: 0.5rem 4rem;
        border: 3px solid rgba(125, 140, 154, 0.82);
        background: #2d3a46;
        color: rgba(125, 140, 154, 0.82);
        font-weight: 500;
        text-transform: uppercase;
      }
    }
    .lol-btn:hover {
      text-shadow: 0 0 5px #ffffff80;
      box-shadow: 0 0 8px 0 #ffffff50;
      background: linear-gradient(to bottom, #1e2328, #433d2b);
      cursor: pointer;
      transition: 0.1s;
    }

    .lol-btn:active {
      text-shadow: none;
      box-shadow: none;
      color: #cdbe9130;
    }
  }
`;

const Button = () => {
  return (
    <StyledWrapper>
      <div class="lol-btn-container">
        <a class="lol-btn-link">
          <div class="lol-btn-link-circle">
            <p>x</p>
          </div>
          <div class="lol-btn-link-rectangle">In Queue</div>
        </a>
      </div>
    </StyledWrapper>
  );
};

export default Button;
