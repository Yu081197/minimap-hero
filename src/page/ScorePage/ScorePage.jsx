import ScorePageStyled from "./styles/ScorePage.styled";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../../services/ScoreSlice";
import { Link } from "react-router-dom";

const ScorePage = () => {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  const handleResetScore = (e) => {
    dispatch(resetScore());
  };
  return (
    <>
      <ScorePageStyled>
        <div className="score-container">
          <div className="score">점수 : {score}</div>
          <Link to="/">
            <div
              class="button button-start restart-button"
              onClick={handleResetScore}
            >
              restart
            </div>
          </Link>
        </div>
      </ScorePageStyled>
    </>
  );
};

export default ScorePage;
