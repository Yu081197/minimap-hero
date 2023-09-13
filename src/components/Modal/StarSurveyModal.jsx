import React, { useState } from "react";
import { styled } from "styled-components";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const StarSurveyModal = ({ setIsStarSurveyModal }) => {
  const firestore = firebase.firestore();
  const bucket = firestore.collection("surbey-bucket");
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0); // 마우스 호버 시 표시되는 별점
  const [rating, setRating] = useState(4);
  const [tempRating, setTempRating] = useState(4);

  const handleMouseover = (rating) => {
    setRating(tempRating);
    setTempRating(rating);
  };

  const handleMouseout = () => {
    setRating(tempRating);
  };

  const rate = (rating) => {
    setRating(rating);
    setTempRating(rating);
  };
  const stars = [];
  const defaultStars = 5;
  for (let i = 0; i < defaultStars; i++) {
    const star = "ion-ios-star";
    stars.push(
      <FaStar
        key={i}
        className={star}
        onMouseOver={() => handleMouseover(i)}
        onClick={() => {
          rate(i);
        }}
        onMouseOut={handleMouseout}
        color={(hoverRating || rating) >= i ? "gold" : "#e4e5e9"}
        size={40}
        style={{ cursor: "pointer", backgroundColor: "transparent" }}
      />
    );
  }

  const saveRatingFirebase = () => {
    if (rating !== null) {
      bucket
        .add({ rating }) // Rating을 Firebase에 저장
        .then(() => {
          setSurveySubmitted(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <StarSurveyModalStyled>
        <QuestionStyled>MINIMAP-HERO는 어떠셨나요?</QuestionStyled>
        <StarStyled>{stars}</StarStyled>
        <Link to="/">
          <SubmitStyled onClick={saveRatingFirebase} className="chat-survey">
            submit
          </SubmitStyled>
        </Link>
      </StarSurveyModalStyled>
    </>
  );
};

export default StarSurveyModal;

const StarSurveyModalStyled = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 25%;
  width: 500px;
  height: 350px;
  border: 1px solid #c8aa6d;
  background-color: rgba(9, 20, 40, 0.8);
  z-index: 999;
  gap: 50px;
`;

const QuestionStyled = styled.div`
  text-shadow: 0 0 5px #ffffff80;
  transition: 0.1s;
  font-family: "Roboto", sans-serif;
  color: rgb(218, 212, 212);
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: transparent;
`;

const SubmitStyled = styled.div`
  font-family: "Marcellus SC", serif;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px 15px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border: 3px solid;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  cursor: pointer;
`;

const StarStyled = styled.div`
  background-color: transparent;
`;
