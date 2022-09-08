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
  //Initialize student list as an empty array of objects
  const [studentNames, setStudentNames] = useState([
    "Mary Smith",
    "Joaquim Tochtermann",
    "Ahmed Mohammed",
    "Jules Reynolds",
    "Tuan Hong",
    "Bob Ray",
    "Liam Neeson",
    "Jose Gallo",
    "Nicole Herman",
    "Larry Smith",
    "Dora Jones",
    "Ahmed Mohamed",
    "Tuan Hong",
    "Sandra Cuervo",
  ]);

  //Set local storage items as student names
  useEffect(() => {
    const studentNames = JSON.parse(localStorage.getItem("studentNames"));
    if (studentNames) {
      setStudentNames(studentNames);
    } else {
      return "There are no student names yet.";
    }
    localStorage.setItem(studentNames, JSON.stringify(studentNames));
  }, [studentNames]);
  console.log("Here is the first test of student name array ", studentNames);

  //Initialize Add Student form variable
  const [formState, setFormState] = useState({
    newStudentName: "",
  });

  const { newStudentName } = formState;

  //When user enters a name into the text field, declare this as target for form state
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    console.log("handleFormChange is running");
    setFormState({
      ...formState,
      [name]: value,
    });
    handleAddName();
    try {
      setFormState((event) => ({
        ...formState,
        newStudentName: event.target.value,
      }));
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  //Add entered name to array
  const handleAddName = async (event) => {
    console.log("handleAddName is running");
    event.preventDefault();
    //Check formState
    console.log("FormState = " + formState);
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleFormChange: " + name, value);
    try {
      setFormState({
        studentName: "",
      });
      setStudentNames((studentNames) => [...studentNames, { [name]: value }]);
    } catch (err) {
      console.log(`Error: ${err}`);
    }

    console.log("The add name button is working!");

    // try {
    //   setStudentNames((studentNames) => studentNames.concat(newStudentName));
    // } catch (err) {
    //   console.log(`Error: ${err}`);
    // }
  };

  console.log(
    "Here are the student names by the end of the code: " + studentNames
  );

  //dummy list for student names for testing
  // let studentNames = [

  // ];

  //Initialize random student variable
  const [randomStudent, setRandomStudent] = useState();

  // TODO: Create function to map over student names after seeds are ready (?? DO I WANT A BACKEND SERVER??)

  //TODO: Permutate array .. Make sure each student can only be called on once per iteration

  //Generates a random name from given array
  const generateRandomName = () => {
    setRandomStudent(
      studentNames[Math.floor(Math.random() * studentNames.length)]
    );
  };
  //Calls above function onClick
  const handleGenerate = () => {
    generateRandomName();
    console.log("The generate random button is working!");
  };

  console.log(
    "Here is the random student name variable outside all functions: " +
      randomStudent
  );

  return (
    <Box>
      <FormControl>
        <p>Enter a student's name and click "ADD NAME TO LIST".</p>
        <TextField
          id="student-name-form"
          name="newStudentName"
          variant="outlined"
          label="Write a name"
          color="primary"
          value={newStudentName}
          onChange={handleFormChange}
          sx={fieldStyle}
          InputLabelProps={{ shrink: true }}
        ></TextField>

        <Button
          id="add-name-button"
          variant="contained"
          type="submit"
          sx={{ mt: 4, mb: 2 }}
          onClick={() => handleAddName()}
        >
          Add name to list
        </Button>
        <p>To select a random name, click "GENERATE A RANDOM NAME".</p>
        <Button
          id="generate-button"
          variant="contained"
          type="submit"
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
