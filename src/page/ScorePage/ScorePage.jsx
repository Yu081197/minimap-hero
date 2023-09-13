import ScorePageStyled from "./styles/ScorePage.styled";
import { useSelector, useDispatch } from "react-redux";
import { resetScore } from "../../services/ScoreSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import StarSurveyModal from "../../components/Modal/StarSurveyModal";

const ScorePage = () => {
  const [isStarSurveyModal, setIsStarSurveyModal] = useState(false);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);

  const handleSurveyModal = (e) => {
    setIsStarSurveyModal(true);
  };

  const handleResetScore = (e) => {
    dispatch(resetScore());
  };
  return (
    <>
      <ScorePageStyled>
        <div className="score-container">
          <div className="score">점수 : {score}</div>
          <div
            class="button button-start restart-button"
            onClick={handleSurveyModal}
          >
            restart
          </div>
          {isStarSurveyModal ? (
            <>
              <div>
                <StarSurveyModal setIsStarSurveyModal={setIsStarSurveyModal} />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </ScorePageStyled>
    </>
  );
};

export default ScorePage;
