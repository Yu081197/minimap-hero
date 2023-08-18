import { Link } from "react-router-dom";

const StartPageModal = ({
  isModalOpen,
  handleModalContentClick,
  toggleModal,
}) => {
  return (
    <>
      {isModalOpen ? (
        <div className="select-modal-overlay" onClick={toggleModal}>
          <div className="select-modal" onClick={handleModalContentClick}>
            <div className="select-modal-button-wrapper">
              <div className="button-container">
                <Link to="/countdown-game">
                  <div class="button button-start">easy</div>
                </Link>
              </div>
              <div className="button-container">
                <div class="button-start button-noclick">hard</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StartPageModal;
