import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const EditDetailsForm = ({ person, setPerson, page, setPage }) => {
  const [FullName, setFullName] = useState(null);
  const [InstituteName, setInstituteName] = useState(null);
  const [BatchStart, setBetchStart] = useState(null);
  const [BatchEnd, setBatchEnd] = useState(null);
  const [RollNum, setRollNum] = useState(null);
  const [Email, setEmail] = useState(null);

  // console.log(props)

  const handleEdit = () => {
    const temp = {
      ...person,
      fullName: FullName,
      instituteName: InstituteName,
      batchStart: BatchStart,
      batchEnd: BatchEnd,
      rollNum: RollNum,
      email: Email,
    };
    setPerson(temp);

    setPage("PROFILE");
  };

  return (
    <div>
      <form onSubmit={() => handleEdit()}>
        <div>
          {/* Full Name:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            required
          /> */}
        </div>

        <div>
          InstituteName:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type="text"
            onChange={(e) => setInstituteName(e.target.value)}
            required
          />
        </div>

        <div>
          Betch Start:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type="numeric"
            onChange={(e) => setBetchStart(e.target.value)}
            required
          />
        </div>

        <div>
          Betch End:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type="numeric"
            onChange={(e) => setBatchEnd(e.target.value)}
            required
          />
        </div>

        <div>
          Enrollment Number:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type=""
            onChange={(e) => setRollNum(e.target.value)}
            required
          />
        </div>

        {/* <div>
          Email:
          <TextField
            style={{ paddingLeft: "0px" }}
            fullWidth
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div> */}

        <Button type="submit" color="primary" variant="contained" >Submit</Button>
      </form>
    </div>
  );
};

export default EditDetailsForm;
