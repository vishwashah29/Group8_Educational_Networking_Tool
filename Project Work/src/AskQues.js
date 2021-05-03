import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";
import Question1 from "@material-ui/icons/QuestionAnswer";

import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Icon from "@material-ui/core/Icon";

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
  const handleChange = (event) => {
    setTopic(event.target.value);
    console.log(Topic);
  };

  return (
    <div>
      <div className="discussionBox">
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
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={Topic}
                  fullWidth
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  label="Topic"
                >
                  <MenuItem value={"DSA"}>DSA</MenuItem>
                  <MenuItem value={"Development"}>Development</MenuItem>
                  <MenuItem value={"Academic"}>Academic</MenuItem>
                  <MenuItem value={"Cultural"}>Cultural</MenuItem>
                  <MenuItem value={"Genral"}>Genral</MenuItem>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQues;
