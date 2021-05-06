import React from "react";
import { useState, useEffect } from "react";
import Pro from "./Project";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Cookies } from "react-cookie";
import axios from "axios";
import pic from "./Images/profilepic.png";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import {useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

require("dotenv").config();
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
  const URL = process.env.REACT_APP_BACKEND_URL;
  // const URL = "http://localhost:9999";
  const [Proj_Org, setProj_Org] = useState([]);
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

  const history = useHistory();
  const Signout = () =>{
     history.push("/login");
   };
  useEffect(() => {
    axios
      .get(`${URL}/GetProject`) // here url to be added
      .then((res) => {
        // res will be json of name ,email,status
        console.log("yes in project forum");

        console.log(res);
        setProjects(res.data);
        setProj_Org(res.data);
        console.log(Projects);
      })
      .catch((err) => {
        console.log(err);
        alert("Some err in loading projects");
        return;
      });
  }, []);

  const [flt, setFlt] = useState("");
  
  const filter_search = (fltt) => {
    if (fltt === "") {
      setProjects(Proj_Org);
      return;
    }
    // console.log("fliter",fltt);
    const temp = Proj_Org.filter((i) => i.Title === fltt || i.Author === fltt);
    setProjects(temp);
    // console.log("filter kare",temp);
    // console.log("filter kare",Discussions);
  };

  const addProject = () => {
    const nwP = {
      Title: Topic,
      Description: Disc,
      Author: Cookie.name,
    };
    console.log(nwP);
    // setProjects([...Projects, nwP]); // aa line jo database ma add thy tyare .then vala ma karvani
    // insert new project in database

    axios
      .post(`${URL}/AddProject`, nwP)
      .then((res) => {
        console.log("successfully added project");
        toast.success("successfully added project");
        
        console.log("succ", res);
      })
      .catch((err) => {
        console.log(err);
        alert("there is some err in adding a project");
        return;
      });
    setProjects([nwP,...Projects]);
    setProj_Org(Projects);

  };

  return (
    <div style={{ width: "100%" }} className="ProjOutBox">
      <div>
        <div>
          <TextField
            style={{ width: "93%"}}
            id="outlined-search"
            label="Search"
            type="search"
            //  variant="outlined"
            value={flt}
            onChange={(e) => setFlt(e.target.value)}
          ></TextField>
          <IconButton
            aria-label="Thumbsup"
            color="primary"
            onClick={() => filter_search(flt)}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {Projects.map((Project) => (
          <Pro
            Project={Project}
            style={{ width: "50%", display: "block" }}
          ></Pro>
        ))}
      </div>
      <div style={{ display: "inline-block" }}>
          <div className="profile-icon">
            <div style={{ display: "inline-flex", float: "right" }}></div>
            <img src={pic} style={{height:'50px',width:'50px'}}/>
            <sup>&nbsp;&nbsp;&nbsp;{Cookie.name}</sup>
            <Button onClick={Signout}>Sign Out</Button>
          </div>
      <div>
        {Cookie.Status && (
          <div className="AddAProject">
            <div className="AddProjTitle">
              <h3 style={{ paddingTop: "15px" }}>Add Project</h3>
            </div>

            <div className="addProject">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Project Topic"
                variant="outlined"
                style={{ padding: "10px" }}
                value={Topic}
                onChange={(e) => setTopic(e.target.value)}
              />

              <TextField
                fullWidth
                style={{ padding: "10px" }}
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
              <ToastContainer/>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProjectForum;
