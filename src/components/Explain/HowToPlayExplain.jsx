import Champ1 from "../../assets/img/champions/bdPiW70pfZb3EEqPIYRFFZtsakJSklTCEN-2f6DFuZAEClUD2g4aZzzf2m67NN2zAqvzMH4bevJD25S0Y3iC3w.jpg";
import Champ2 from "../../assets/img/champions/i1827421181.jpg";
import Champ3 from "../../assets/img/champions/i3573951229.jpg";
import Champ4 from "../../assets/img/champions/i4121612975.jpg";
import ASkill from "../../assets/img/skills/skill-mm.png";
import SSkill from "../../assets/img/skills/skill-cm.png";
import DSkill from "../../assets/img/skills/skill-d.png";
import FSkill from "../../assets/img/skills/skill-f.png";
import QSkill from "../../assets/img/skills/skill-q.png";
import WSkill from "../../assets/img/skills/skill-w.png";
import ESkill from "../../assets/img/skills/skill-e.png";
import RSkill from "../../assets/img/skills/skill-r.png";

import HowToPlayExplainStyled from "./styles/HowToPlayExplain.styled";

const HowToPlayExplain = () => {
  return (
    <>
      <div className="explain-wrapper">
        <div className="explain-container">
          <div className="explain-box">
            <img src={Champ1} alt="ASkill" />
            <div className="explain-describe">1</div>
          </div>
          <div className="explain-box">
            <img src={Champ2} alt="ASkill" />
            <div className="explain-describe">2</div>
          </div>
          <div className="explain-box">
            <img src={Champ3} alt="ASkill" />
            <div className="explain-describe">3</div>
          </div>
          <div className="explain-box">
            <img src={Champ4} alt="ASkill" />
            <div className="explain-describe">4</div>
          </div>
        </div>
        <div className="explain-container">
          <div className="explain-box">
            <img src={QSkill} alt="ASkill" />
            <div className="explain-describe">Q</div>
          </div>
          <div className="explain-box">
            <img src={WSkill} alt="ASkill" />
            <div className="explain-describe">W</div>
          </div>
          <div className="explain-box">
            <img src={ESkill} alt="ASkill" />
            <div className="explain-describe">E</div>
          </div>
          <div className="explain-box">
            <img src={RSkill} alt="ASkill" />
            <div className="explain-describe">R</div>
          </div>
        </div>
        <div className="explain-container">
          <div className="explain-box-a">
            <div className="explain-a">
              <img src={ASkill} alt="ASkill" />
              <img src={SSkill} alt="ASkill" />
            </div>
            <div className="explain-a">A</div>
          </div>
          <div className="explain-box">
            <img src={DSkill} alt="ASkill" />
            <div className="explain-describe">D</div>
          </div>
          <div className="explain-box">
            <img src={FSkill} alt="ASkill" />
            <div className="explain-describe">F</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowToPlayExplain;
