import React from "react";
import { TextField, Button, FormControl } from "@mui/material";
import { useState } from "react";

//Styling
const fieldStyle = {
  backgroundColor: "white",
  width: "500px",
  alignSelf: "center",
  mt: 4,
  mb: 2,
};

const RandomStudent = (props) => {
  const { studentData } = props;
  //Initialize random student variable
  const [randomStudent, setRandomStudent] = useState();

  //Generates a random name from given array
  const generateRandomName = () => {
    const filteredStudents = studentData.filter((student) => !student.selected);
    const selectedStudent =
      filteredStudents[Math.floor(Math.random() * filteredStudents.length)];
    props.selectStudent(selectedStudent);
    setRandomStudent(selectedStudent);
  };

  //Calls above function onClick
  const handleGenerate = () => {
    generateRandomName();
    console.log("The generate random button is working!");
  };

  return (
    <FormControl>
      <p>To select a random name, click "GENERATE A RANDOM NAME".</p>
      <Button
        id="generate-button"
        size="large"
        variant="contained"
        type="submit"
        sx={{ width: "fit-content", alignSelf: "center" }}
        onClick={() => handleGenerate()}
      >
        Generate a random name
      </Button>

      <TextField
        id="random-name"
        name="randomName"
        variant="outlined"
        color="primary"
        value={
          randomStudent === undefined
            ? "Click the button above"
            : randomStudent.name
        }
        sx={fieldStyle}
        InputLabelProps={{ shrink: true }}
      ></TextField>
    </FormControl>
  );
};

export default RandomStudent;
