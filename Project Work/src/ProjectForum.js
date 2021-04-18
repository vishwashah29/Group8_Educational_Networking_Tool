
import React from "react";
import { useState, useEffect } from "react";
import Pro from "./Project";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Cookies } from "react-cookie";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    button: {
      margin: theme.spacing(2),
    },
  },
}));

const ProjectForum = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const Cookie = cookies.get("userCookie");

  const [Projects, setProjects] = useState([
    {
      id: 1,
      Author: "Saurabh Tiwari",
      Title: "FingerPrint Based ATM System",
      description:
        "here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description",
      participants: ["abc", "pqr"],
    },
    {
      id: 1,
      Author: "Saurabh Tiwari",
      Title: "FingerPrint Based ATM System",
      description:
        "here goes respective description here goes respective description here goes respective description here goes respective description here goes respective description",
    },
  ]);
  const [Topic, setTopic] = useState("");
  const [Disc, setDisc] = useState("");

  // aya Projects local useState chhe saruaat ma khali hase ane jevu aa page load thase pela badha project
  // back end mathi fetch kari ne show karvana ane pachhi j rite search thay e rite show karvana
  // ena mate serch box ma bhi implement karvanu chhe

  useEffect(() => {
    axios
      .get("http://localhost:4000/GetProject") // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        console.log("yes in project forum");

        console.log(res);
        setProjects(res.data);
        console.log(Projects);
      })
      .catch((err) => {
        console.log(err);
        alert("Some err in loading projects");
        return;
      });
  }, []);

  const addProject = () => {
    const nwP = {
      Title: Topic,
      Description: Disc,
      Author: "me",
    };
    console.log(nwP);
    // setProjects([...Projects, nwP]); // aa line jo database ma add thy tyare .then vala ma karvani
    // insert new project in database

    axios
      .post("http://localhost:4000/AddProject", nwP)
      .then((res) => {
        console.log("successfully added project");
        console.log("succ", res);
      })
      .catch((err) => {
        console.log(err);
        alert("there is some err in adding a project");
        return;
      });
    setProjects([...Projects, nwP]);

    // fetch("http://localhost:4000/AddProject", {
    //   method: "POST", // or 'PUT'

    //   body: nwP,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };
  
  return (
    <div style={{ display: "inline-flex" }} className="ProjOutBox">
      <div>
        {Projects.map((Project) => (
          <Pro Project={Project} className="ProjOutBox"></Pro>
        ))}
      </div>
      <div>
        {Cookie.Status && (
          <div className="AddAProject">
            <div>
              <p className="AddProjTitle">Add Project</p>
              <TextField
                id="outlined-basic"
                label="Project Topic"
                variant="outlined"
                value={Topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Discription"
                multiline
                rows={4}
                variant="outlined"
                value={Disc}
                onChange={(e) => setDisc(e.target.value)}
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={addProject}
              >
                Add
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectForum;

