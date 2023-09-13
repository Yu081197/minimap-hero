import React, { useState } from "react";
import { styled } from "styled-components";
import firebase from "../../Firebase";

import { FaStar } from "react-icons/fa";

const StarSurveyModal = () => {
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
        size={25}
        style={{ cursor: "pointer" }}
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
      <div
        style={{
          border: "0.1px solid white",
          borderRadius: "20px",
          cursor: "pointer",
          backgroundColor: "#005a82",
        }}
        onClick={saveRatingFirebase}
        className="chat-survey"
      >
        제출하기
      </div>
      {stars}
    </>
  );
};

export default StarSurveyModal;
