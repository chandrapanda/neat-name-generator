import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  Button,
  Chip,
} from "@mui/material";

//Styling
const fieldStyle = {
  backgroundColor: "white",
};

//Declare export here
const StudentList = () => {
  //Initialize student list as an empty array
  const [studentNames, setStudentNames] = useState([
    "Larry Smith",
    "Dora Jones",
    "Ahmed Mohamed",
    "Tuan Hong",
  ]);
  //set local storage items as student names
  useEffect(() => {
    localStorage.setItem("studentNames", JSON.stringify(studentNames));
  });
  console.log("Here is the first test", studentNames);

  //dummy list for student names for testing
  // let studentNames = [
  //   "Mary Smith",
  //   "Joaquim Tochtermann",
  //   "Ahmed Mohammed",
  //   "Jules Reynolds",
  //   "Tuan Hong",
  //   "Bob Ray",
  //   "Liam Neeson",
  //   "Jose Gallo",
  //   "Nicole Herman",
  // ];

  //initialize random student variable
  const [randomStudent, setRandomStudent] = useState();

  // TODO: Create function to map over student names after seeds are ready

  //TODO: Make sure each student can only be called on once per iteration

  const generateRandomName = () => {
    setRandomStudent(
      studentNames[Math.floor(Math.random() * studentNames.length)]
    );
  };
  //Generates a random name from given array
  const handleGenerate = () => {
    generateRandomName();
    console.log("The generate random button is working!");
    let newRandomStudent =
      studentNames[Math.floor(Math.random() * studentNames.length)];
    console.log("GENERATE BUTTON " + newRandomStudent);
    return newRandomStudent;
  };

  console.log("Here is the random student name variable: " + randomStudent);

  const [formState, setFormState] = useState({
    newStudentName: "",
  });

  //When user enters a name into the text field, declare this as target for form state
  const handleFormChange = (event) => {
    event.persist();

    try {
      setFormState({
        ...formState,
        newStudentName: event.target.value,
      });
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  //Add entered name to array
  const handleAddName = (newStudentName) => {
    //Check formState
    console.log(formState);

    console.log("The add name button is working!");

    try {
      setStudentNames((studentNames) => studentNames.concat(newStudentName));
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  console.log("Here are the student names: " + studentNames);

  return (
    <Box>
      <FormControl>
        <p>Enter a student's name and click "ADD NAME TO LIST".</p>
        <TextField
          id="student-name-form"
          variant="outlined"
          label="Write a name"
          color="primary"
          value={formState.newStudentName}
          onChange={handleFormChange}
          sx={fieldStyle}
        ></TextField>

        <Button
          id="add-name-button"
          variant="contained"
          sx={{ mt: 4, mb: 2 }}
          onClick={() => handleAddName()}
        >
          Add name to list
        </Button>
        <p>To select a random name, click "GENERATE A RANDOM NAME".</p>
        <Button
          id="generate-button"
          variant="contained"
          onClick={() => handleGenerate()}
        >
          Generate a random name
        </Button>
        <Chip
          variant="outlined"
          label={randomStudent}
          sx={{ backgroundColor: "white", mt: 4, mb: 2 }}
          // color="primary"
        />
      </FormControl>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            <List id="student-name-list">
              {studentNames.map((student) => {
                return <ListItem key={student}>{student} </ListItem>;
              })}
            </List>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default StudentList;
