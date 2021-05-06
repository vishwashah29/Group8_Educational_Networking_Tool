import logo from "./Images/logo.png";
import NavBar from "./menuPages/NavBar";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import { FaFilter } from "react-icons/fa";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import "./firstPage.css";
const Home = () => {
  return (
    <>
      <div className="upper-container">
        <div >
          <NavBar />
        </div>
        <div className="logo">
          <img
            id="Ednet"
            style={{ opacity: "1" }}
            src={logo}
            alt="Logo of website"
          />
          <div className="title">
            MEETUP PLATFORM FOR <br />
            LEARNERS AND EXPERTS
          </div>
        </div>
      </div>

      <div className="lower-container">
        <div id="why-synargy">WHY SYNERGY ?</div>
        <div className="icons-grid">
          <div>
            <div className="icon">
              <PeopleAltRoundedIcon></PeopleAltRoundedIcon>
            </div>
            <br />
            <div className="bold-text">KNOW YOUR PEERS</div>
            <div className="normal-text">
              GET TO MEET THE FELLOW LEARNERS AND GROW TOGETHER
            </div>
          </div>

          <div>
            <div className="icon">
              <FaFilter className="icon"></FaFilter>
            </div>
            <br />
            <div className="bold-text">FILTER TOPICS</div>
            <div className="normal-text">
              SELECT THE TOPICS OF YOUR INTEREST
            </div>
          </div>

          <div>
            <div className="icon">
              <CheckCircleOutlineOutlinedIcon className="icon"></CheckCircleOutlineOutlinedIcon>
            </div>
            <br />
            <div className="bold-text">VERIFIED ANSWERS</div>
            <div className="normal-text">
              GET YOUR QUERIES SOLVED BY VERIFIED EXPERTS
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
