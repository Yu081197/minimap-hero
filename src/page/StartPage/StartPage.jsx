import React, { useState } from "react";

import StartPageStyled from "./styles/StartPage.styled";

import StartPageModal from "../../components/Modal/StartPageModal";
import Title from "../../components/Title/Title";
import StartPageExplain from "../../components/Explain/StartPageExplain";

import { Link } from "react-router-dom";

const StartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the overlay
  };

  return (
    <>
      <StartPageStyled>
        <div className="start-container">
          <StartPageModal
            isModalOpen={isModalOpen}
            handleModalContentClick={handleModalContentClick}
            toggleModal={toggleModal}
          />
          <Title />
          <StartPageExplain />
          <div className="button-wrapper">
            <div className="button-container">
              <div class="button button-start" onClick={toggleModal}>
                game start
              </div>
            </div>
            <div className="button-container">
              <Link to="/how-to-play">
                <div class="button button-start">how to play</div>
              </Link>
            </div>
          </div>
        </div>
      </StartPageStyled>
    </>
  );
};

export default StartPage;
