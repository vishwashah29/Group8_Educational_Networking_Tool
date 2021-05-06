import React from "react";
import Button from "@material-ui/core/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import background1 from "./Images/logo.png";
import Pic from "./Images/profilepic.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "25ch",
  },

  button: {
    margin: theme.spacing(2),
  },
}));

const Project = ({ Project }) => {
  let cnt = 0;
  const addParticipant = () => {
    if (cnt + 1 < 2) {
      let prof = Project.Author;

      let str = "You have enrolled in " + prof + "'s Project";
      toast(str);
      cnt = cnt + 1;
    } else {
      toast("You are already enrolled");
    }
  };
  const classes = useStyles();
  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        className="toast-container"
        // toastClassName="dark-toast"
      />
      <div className="ProjectBox ForShadow">
        <div style={{ display: "inline-flex" }} className="ProjectHeader">
          <div>
            <img className="ImgProj" src={background1} alt="Logo of website" />
          </div>
          <div>
            <div style={{ display: "inline-flex" }}>
              <h2 className="projhd">{Project.Title}</h2>

              <Button className="ApplyBtn" onClick={addParticipant}>
                Apply
                <PersonAddIcon fontSize="small" />
              </Button>
            </div>
          </div>
        </div>

        <div className="ProfessorProject">
          <div className="Profile">
            <div style={{ paddingRight: "10px" }}>
              <img className="DiscussIMG" src={Pic} alt="Logo of website" />
            </div>

            <h3 style={{ fontSize: "15px" }}>
              {Project.Author}{" "}
              <h5 style={{ fontSize: "10px", color: "gray" }}>Professor</h5>
            </h3>
          </div>
        </div>

        <div>
          <p className="ProjectDiscrp" style={{ display: "inline-block" }}>
            {Project.Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
