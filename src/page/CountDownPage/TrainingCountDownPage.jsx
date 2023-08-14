import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetScore } from "../../services/ScoreSlice";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .count-down {
    color: #0ac8b9;
    font-size: 50px;
    background: #030910;
  }
`;

const GameCountDownPage = () => {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(3);
  const dispatch = useDispatch();

  const handleResetScore = (e) => {
    dispatch(resetScore());
  };

  useEffect(() => {
    // 1초마다 countDown을 1씩 감소시키는 interval 설정
    const interval = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);
    handleResetScore();
    // 컴포넌트가 언마운트되면 interval 클리어
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countDown === 0) {
      navigate("/training-mode");
    }
  }, [countDown]);
  return (
    <>
      <StyledWrapper>
        <div className="count-down">{countDown}</div>
      </StyledWrapper>
    </>
  );
};

export default GameCountDownPage;
