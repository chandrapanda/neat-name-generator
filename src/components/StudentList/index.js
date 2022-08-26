import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
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

const fieldStyle = {
  background: "white",
};

// const [studentNames, setStudentNames] = useState({
//   studentNameInput: "",
// });

let studentNames = [
  "Mary Smith",
  "Joaquim Tochtermann",
  "Ahmed Mohammed",
  "Jules Reynolds",
  "Tuan Hong",
  "Bob Ray",
  "Liam Neeson",
  "Jose Gallo",
  "Nicole Herman",
];

// TODO: Create function to map over student names after seeds are ready
const handleGenerate = () => {
  console.log("The generate random button is working!");
  // studentNames.concat();
};

const handleAddName = () => {
  console.log("The add name button is working!");
};

console.log(studentNames);

const StudentList = () => {
  return (
    <Box>
      <FormControl>
        <TextField
          id="student-name-form"
          variant="outlined"
          label="Write a name"
          color="primary"
          sx={fieldStyle}
        ></TextField>
        <p>Enter a student's name and click "ADD NAME TO LIST".</p>
        <Button
          id="add-name-button"
          variant="contained"
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

        <Chip variant="outlined" color="primary" />
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
