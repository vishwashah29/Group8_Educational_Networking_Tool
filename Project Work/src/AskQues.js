import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Question1 from "@material-ui/icons/QuestionAnswer";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AskQues = ({ addQue }) => {
  const [Ques, setQue] = useState("");
  const classes = useStyles();
  const [Tog, setTog] = useState(false);
  const [Topic, setTopic] = useState("None");
  const [flg, setFlg] = useState(false);
  const handleChange = (event) => {
    setTopic(event.target.value);
    console.log(Topic);
  };

  const notify = () => toast.success("Your question is added");

  return (
    <div>
      <div className="discussionBox1">
        <div className="AskBox">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<Question1 fontSize="small"> </Question1>}
            onClick={() => setTog(!Tog)}
          >
            Ask Question
          </Button>
        </div>
        {Tog && (
          <div>
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Topic
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Topic}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  label="Topic"
                >
                  <MenuItem value={"General"}>General</MenuItem>
                  <MenuItem value={"DSA"}>DSA</MenuItem>
                  <MenuItem value={"Web Development"}>Web Development</MenuItem>
                  <MenuItem value={"Academic"}>Academic</MenuItem>
                  <MenuItem value={"Cultural"}>Cultural</MenuItem>
                  <MenuItem value={"Micro Controller"}>
                    Micro Controller
                  </MenuItem>
                  <MenuItem value={"Maths"}>Maths</MenuItem>
                  <MenuItem value={"Physics"}>Physics</MenuItem>
                  <MenuItem value={"Machine Learning"}>
                    Machine Learning
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              id="standard-textare"
              label="Your Question"
              placeholder="Ask your Question"
              multiline
              value={Ques}
              onChange={(e) => setQue(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Send fontSize="small" />}
              onClick={() => addQue({ Ques, Topic })}
            >
              Ask
            </Button>

            <ToastContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQues;
